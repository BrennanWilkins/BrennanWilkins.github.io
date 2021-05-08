import React, { useState, Suspense, useRef, useEffect, useMemo } from 'react';
import Project from './Project/Project';
import projInfo from './projectInfo';
import Fallback from './LoadingFallback/LoadingFallback';
const SlideShowModal = React.lazy(() => import('./SlideShowModal/SlideShowModal'));

const Projects = React.forwardRef((props, containerRef) => {
  const [slideShowProject, setSlideShowProject] = useState(null);
  const [startAnims, setStartAnims] = useState({});
  const projRefs = useRef([]);

  useEffect(() => {
    const scrollHandler = () => {
      setStartAnims(anims => {
        let newAnims = anims;
        for (let i = 0; i < projRefs.current.length; i++) {
          const projRect = projRefs.current[i].getBoundingClientRect();
          // if project starting to be shown in viewport for first time then start animation
          if (projRect.top + projRect.height / 8 <= window.innerHeight && !newAnims[i]) {
            newAnims = { ...anims, [i]: true };
            // if all projects animated then remove scroll listener
            if (Object.keys(newAnims).length === projRefs.current.length) {
              document.removeEventListener('scroll', scrollHandler);
            }
          }
        }
        return newAnims;
      });
    };

    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const projects = useMemo(() => (
    projInfo.map((info, i) => (
      <Project
        key={info.alt}
        ref={el => projRefs.current[i] = el}
        {...info}
        startAnim={!!startAnims[i]}
        toggleSlideShow={() => setSlideShowProject({
          index: i,
          title: info.alt,
          titleComp: info.title
        })}
      />
    ))
  ), [startAnims]);

  const switchHandler = showNext => {
    const currIndex = slideShowProject.index;
    const maxIndex = projRefs.current.length - 1;
    const index = (
      showNext ?
      (currIndex === maxIndex ? 0 : currIndex + 1) :
      (!currIndex ? maxIndex : currIndex - 1)
    );
    setSlideShowProject({
      index,
      title: projInfo[index].alt,
      titleComp: projInfo[index].title
    });
  };

  return (
    <>
      <div ref={containerRef} className="Container">
        <h1>Projects</h1>
        {projects}
      </div>
      {slideShowProject &&
        <Suspense fallback={<Fallback />}>
          <SlideShowModal
            project={slideShowProject}
            close={() => setSlideShowProject(null)}
            switchProj={switchHandler}
          />
        </Suspense>
      }
    </>
  );
});

export default Projects;
