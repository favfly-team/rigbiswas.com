/* eslint-disable @next/next/no-html-link-for-pages */
const VideoHeroSection = ({ slice, data }) => {
  const { heading, description1, video_link } = slice?.primary || {};

  return (
    <>
      <div className="video-section">
        <video
          id="video"
          preload="metadata"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          className="video">
          <source src={video_link?.url || data?.video} type="video/mp4" />
        </video>
        {(heading?.[0]?.text || data?.title) && (
          <div className="container inner pt-140">
            <div className="row">
              <div className="col-md-10 mx-auto px-2 text-center">
                <div className="heading">
                  <h1>{heading?.[0]?.text || data?.title}</h1>
                </div>
                <div className="space10"></div>
                <div className="sub-heading2">
                  <p>{description1?.[0]?.text || data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .img {
          min-width: 100%;
          min-height: 100%;
        }
        .video-section {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 50vh;
          overflow: hidden;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        video {
          position: absolute;
          left: 50%;
          width: auto;
          height: auto;
          min-width: 100%;
          min-height: 50vh;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .video-section:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .video-section .heading h1,
        .video-section .sub-heading2 {
          color: #fff;
          position: relative;
          z-index: 9;
        }

        .heading h1 {
          font-size: 34px;
        }
        .sub-heading2 {
          font-size: 24px;
          line-height: 34px;
        }
        @media only screen and (max-width: 576px) {
          .heading h1 {
            font-size: 30px;
          }
          .sub-heading2 {
            font-size: 20px;
            line-height: 1.4;
          }
        }
      `}</style>
    </>
  );
};

export default VideoHeroSection;
