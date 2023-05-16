import { AiOutlineRight } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { DocLink } from "../../utils/prismicHelpers";
import lozad from "lozad";
import { useEffect, useState } from "react";

const AlbumSliderSection = ({ slice }) => {
  const { button_link, button_text, heading, subheading } = slice?.primary;

  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);
  // ========== END ==========

  return (
    <>
      <div className="wrapper image-wrapper bg-image inverse-text">
        <div className="container inner">
          <div className="row">
            <div className="col-md-12">
              {subheading?.[0]?.text && (
                <div className="sub-heading text-center mb-0">
                  <h4>{subheading?.[0]?.text}</h4>
                </div>
              )}
              {heading?.[0]?.text && (
                <div className="heading text-center mb-0">
                  <h2 className="gradient-text">{heading?.[0]?.text}</h2>
                </div>
              )}

              {button_text?.[0]?.text && (
                <div className="text-center">
                  <DocLink link={button_link}>
                    <a className="btn-secondary">
                      <span className="d-flex align-items-center">
                        <span>{button_text?.[0]?.text}</span>
                        <i>
                          <AiOutlineRight />
                        </i>
                      </span>
                    </a>
                  </DocLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <DocLink link={button_link}>
          <a>
            <div className="image-container">
              <div className="image-content">
                {slice?.items?.map((item, index) => (
                  <ImageItem
                    key={index + "a"}
                    data={item}
                    index={index + "a"}
                  />
                ))}
                {slice?.items?.map((item, index) => (
                  <ImageItem
                    key={index + "b"}
                    data={item}
                    index={index + "b"}
                  />
                ))}
                {slice?.items?.map((item, index) => (
                  <ImageItem
                    key={index + "c"}
                    data={item}
                    index={index + "c"}
                  />
                ))}
              </div>
            </div>
          </a>
        </DocLink>
      </div>

      <style jsx>{`
        .image-container {
          width: 100%;
          overflow: hidden;
        }

        .image-content {
          display: flex; /* Use flexbox to align items horizontally */
          animation: scroll 60s linear infinite; /* Use the scroll animation with a duration of 10 seconds and linear timing */
        }

        @media (max-width: 1500px) {
          .image-content {
            animation: scroll 45s linear infinite; /* Use the scroll animation with a duration of 10 seconds and linear timing */
          }
        }
        @media (max-width: 768px) {
          .image-content {
            animation: scroll 40s linear infinite; /* Use the scroll animation with a duration of 10 seconds and linear timing */
          }
        }
        @media (max-width: 591px) {
          .image-content {
            animation: scroll 20s linear infinite; /* Use the scroll animation with a duration of 10 seconds and linear timing */
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0); /* Start at 0 */
          }
          100% {
            transform: translateX(
              -150%
            ); /* Move to the left by the width of the container */
          }
        }

        .btn-secondary {
          color: #0072ff;
          font-size: 28px;
          line-height: 38px;
          font-family: "SfProDisplayRegular";
          font-weight: 500;
          display: inline-block;
          background: none;
        }
        .btn-secondary span span {
          border-bottom: 2px solid #0072ff;
        }
        .image-wrapper:before {
          background: none;
        }
        .sub-heading h4 {
          color: #343434 !important;
          font-size: 34px;
          line-height: 38px;
          font-weight: 500;
          font-family: "SfProDisplayMedium";
        }
        .heading h2 {
          font-size: 60px;
          line-height: 66px;
          font-weight: 600;
          font-family: "SfProDisplayBold";
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            rgba(99, 41, 125, 1) 0%,
            rgba(32, 46, 181, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 991px) {
          .heading h2 {
            font-size: 36px;
            line-height: 48px;
          }

          .sub-heading h4 {
            font-size: 24px;
            line-height: 28px;
          }
        }
      `}</style>
    </>
  );
};

const ImageItem = ({ data, index }) => {
  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [index]);
  // ========== END ==========

  return (
    <>
      <img
        className="image lozad"
        key={index}
        data-src={data?.image?.url}
        alt={data?.image?.alt}
      />

      <style jsx>{`
        .image {
          width: 600px;
          margin: 0 2px;
        }

        @media (max-width: 991px) {
          .image {
            width: 400px;
          }
        }
        @media (max-width: 768px) {
          .image {
            width: 400px;
          }
        }
        @media (max-width: 591px) {
          .image {
            width: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default AlbumSliderSection;
