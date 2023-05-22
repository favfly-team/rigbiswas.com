/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const PortfolioDetailsSection = ({ slice }) => {
  // console.log(slice);
  const { image, heading, details, video_id } = slice.primary;
  const opts = {
    playerVars: {
      autoplay: 0,
      enablejsapi: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      // controls: 0,
    },
  };

  // =========== FOR FSLIGHTBOX =========
  const [sources, setSources] = useState([]);
  // ===== SLIDE STATE =====
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  // ===== HANDLE SLIDE NUMBER =====
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };
  // ===== GET STRUCTURED SOURCES =====
  useEffect(() => {
    let tempSources = [];
    slice.items.map((item) => {
      item.video_link.link_type == "Web"
        ? tempSources.push(item?.video_link?.url)
        : tempSources.push(item?.image?.large?.url);
    });
    setSources(tempSources);
    return () => {
      setSources([]);
    };
  }, [slice]);
  // =========== END FSLIGHTBOX =========

  return (
    <section className="wrapper light-wrapper">
      <div className="inner">
        <div className="container-fluid p-0">
          {video_id?.[0]?.text ? (
            <div className="video-wrapper bg-pastel-yellow">
              <YouTube
                className="bg-pastel-yellow"
                videoId={video_id?.[0]?.text}
                opts={opts}
              />
            </div>
          ) : (
            <img src={image?.thumbnail?.url} className="img-fluid" alt="" />
          )}
        </div>
        <div className="container">
          <div className="gray-wrapper mt-60 px-5 py-4">
            <h1 className="text-center">{heading[0]?.text}</h1>
            <div>
              <RichText render={details} linkResolver={linkResolver} />
            </div>
          </div>

          <div className="mt-60">
            <div className="row">
              {slice?.items?.map((item, index) => (
                <GalleryItem
                  key={index}
                  data={item}
                  index={index}
                  openLightboxOnSlide={openLightboxOnSlide}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-fluid {
          width: 100%;
          height: 70vh;
          object-fit: cover;
          object-position: center;
        }
      `}</style>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
    </section>
  );
};

const GalleryItem = ({ data, index, openLightboxOnSlide }) => {
  const { image, video_link } = data;
  return (
    <div
      onClick={() => openLightboxOnSlide(index + 1)}
      className="item col-md-6 col-lg-4">
      <figure className="overlay overlay1 rounded mb-md-4 gallery-item">
        {video_link.url && (
          <button className="play-btn position-absolute">
            <i className="text-white">
              <FaPlay />
            </i>
          </button>
        )}
        <img data-src={image?.url} alt={image?.alt} className="lozad" />
      </figure>

      <style jsx>{`
        .play-btn {
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          background: rgb(245 196 99 / 65%);
          border: 0;
          padding: 22px 50px;
          font-size: 2rem;
          z-index: 1;
        }
        .rounded {
          border-radius: 4px !important;
        }
        .play-btn:hover {
          background: rgb(245 196 99);
        }
        figure {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PortfolioDetailsSection;
