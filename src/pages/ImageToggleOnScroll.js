import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const [inView, setInView] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef(null);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  };

  const scrollHandler = () => {
    setInView(isInView())
  };

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  },[isLoading]);

  return (
    <img
      src={ inView ? secondaryImage : primaryImage }
      ref={ imageRef }
      alt=""
      width="400"
      height="400"
    />
  );
};

export default ImageToggleOnScroll;