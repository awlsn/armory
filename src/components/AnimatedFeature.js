import React from 'react';

const AnimatedFeature = (props) => {
  const { url, caption } = props;
  return '';
  return (
        <>
            <style jsx>{`
            /*https://davidwalsh.name/responsive-iframes*/
            .iframe-container {
                position: relative;
                overflow: hidden;
                padding-top: 75%;
            }

            .iframe-container iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
            }

            `}
            </style>

            <div className="iframe-container">
                <iframe src={url} frameBorder="0" scrolling="no" />
            </div>
            <span className="caption">{caption}</span>
        </>
  );
};

export default AnimatedFeature;
