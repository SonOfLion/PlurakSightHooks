import React from 'react';
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
        {
            [1124, 187, 1269, 1530].map((speakerId) => {
                return (
                  <div key={ speakerId }>
                      <ImageToggleOnScroll
                        primaryImage={`/speakers/bw/Speaker-${ speakerId }.jpg`}
                        secondaryImage={`/speakers/Speaker-${ speakerId }.jpg`}
                        alt=""
                      />
                  </div>
                )
            })
        }
    </div>
  );
};

export default ImageChangeOnScroll;