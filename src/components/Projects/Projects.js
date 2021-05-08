import React, { useState, Suspense, useMemo } from 'react';
import Project from './Project/Project';
import projInfo from './projectInfo';
import Fallback from './LoadingFallback/LoadingFallback';
const SlideShowModal = React.lazy(() => import('./SlideShowModal/SlideShowModal'));

const Projects = React.forwardRef((_, ref) => {
  const [slideShowProj, setSlideShowProj] = useState(null);

  const projects = useMemo(() => (
    projInfo.map((info, i) => (
      <Project
        key={info.alt}
        {...info}
        toggleSlideShow={() => setSlideShowProj({
          index: i,
          title: info.alt,
          titleComp: info.title
        })}
      />
    ))
  ), []);

  const switchHandler = showNext => {
    const currIndex = slideShowProj.index;
    const maxIndex = projects.length - 1;
    const index = (
      showNext ?
      (currIndex === maxIndex ? 0 : currIndex + 1) :
      (!currIndex ? maxIndex : currIndex - 1)
    );
    setSlideShowProj({
      index,
      title: projInfo[index].alt,
      titleComp: projInfo[index].title
    });
  };

  return (
    <>
      <div ref={ref} className="Container">
        <h1>Projects</h1>
        {projects}
      </div>
      {slideShowProj &&
        <Suspense fallback={<Fallback />}>
          <SlideShowModal
            project={slideShowProj}
            close={() => setSlideShowProj(null)}
            switchProj={switchHandler}
          />
        </Suspense>
      }
    </>
  );
});

export default Projects;
