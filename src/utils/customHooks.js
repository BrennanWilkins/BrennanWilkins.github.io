import { useState, useEffect } from 'react';

export const useAnimIntoView = (ref, isShown) => {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const remove = () => {
      document.removeEventListener('scroll', scrollHandler);
    };
    const scrollHandler = () => {
      const rect = ref.current.getBoundingClientRect();
      if (isShown(rect)) {
        setStartAnim(true);
        remove();
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return () => remove();
  }, []);

  return startAnim;
};

export const useOutsideClick = (shown, ref, close) => {
  useEffect(() => {
    const clickHandler = e => {
      if (!ref.current.contains(e.target)) {
        close();
      }
    };

    if (shown) {
      document.addEventListener('mouseup', clickHandler);
    }
    return () => document.removeEventListener('mouseup', clickHandler);
  }, [shown]);
}
