import React from 'react';
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImage="/speakers/bw/Speaker-187.jpg"
        secondaryImage="/speakers/Speaker-187.jpg"
        alt="ronald tusk"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage="/speakers/bw/Speaker-1124.jpg"
        secondaryImage="/speakers/Speaker-1124.jpg"
        alt="jeffrey colt"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage="/speakers/bw/Speaker-1269.jpg"
        secondaryImage="/speakers/Speaker-1269.jpg"
        alt="jeffrey colt"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage="/speakers/bw/Speaker-1530.jpg"
        secondaryImage="/speakers/Speaker-1530.jpg"
        alt="jeffrey colt"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage="/speakers/bw/Speaker-1725.jpg"
        secondaryImage="/speakers/Speaker-1725.jpg"
        alt="jeffrey colt"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage="/speakers/bw/Speaker-5996.jpg"
        secondaryImage="/speakers/Speaker-5996.jpg"
        alt="jeffrey colt"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;