import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  };

  const scrollHandler = () => {
    setInView(isInView())
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  },[]);

  return (
    <img
      src={ inView ? secondaryImage : primaryImage }
      ref={ imageRef }
      alt=""
    />
  );
};

export default ImageToggleOnScroll;