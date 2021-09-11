import React, { useState, useEffect } from 'react';
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEvent, setMouseEvent] = useState(0);

  useEffect(() => {
    window.document.title = `SpeakerId: ${ currentSpeakerId }`;
    console.log(`useEffect: setting title to ${ currentSpeakerId }`)
  }, [currentSpeakerId]);

  return (
    <div>
        <span> mouseEvent: { mouseEvent }</span>
        {
            [1124, 187, 1269, 1530].map((speakerId) => {
                return (
                  <div
                    key={ speakerId }
                    onMouseOver={ () => {
                      setCurrentSpeakerId(speakerId);
                      setMouseEvent(mouseEvent + 1)
                      console.log(`onMouseOver: ${speakerId}`)
                    } }
                  >
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