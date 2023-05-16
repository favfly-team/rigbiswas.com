/* eslint-disable @next/next/no-html-link-for-pages */
import { FaPlay } from "react-icons/fa";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const VideoFilmsSection = ({ slice }) => {
  const [toggler, setToggler] = useState(false);

  const { heading, button_text, background_video_link, video_link } =
    slice?.primary;

  return (
    <>
      <div className="video-films-section">
        <video
          id="video"
          preload="metadata"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          className="video">
          <source src={background_video_link?.url} type="video/mp4" />
        </video>

        <div className="content">
          <RichText render={heading} linkResolver={linkResolver} />
          {button_text?.[0]?.text && (
            <a
              onClick={() => setToggler(!toggler)}
              className="play-btn-primary mt-20">
              <span className="d-flex align-items-center">
                {button_text?.[0]?.text}
                <i>
                  <FaPlay />
                </i>
              </span>
            </a>
          )}
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={[video_link?.url]} />
      <style jsx>{`
        .img {
          min-width: 100%;
          min-height: 100%;
        }
        .video-films-section {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100vh;
          overflow: hidden;
          z-index: 1;
        }
        video {
          position: absolute;
          left: 50%;
          width: auto;
          height: auto;
          min-width: 100%;
          min-height: 100%;
          top: 0;
          transform: translateX(-50%);
        }
        .video-films-section:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7) 30%,
            rgba(0, 0, 0, 0) 70%
          );
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default VideoFilmsSection;
