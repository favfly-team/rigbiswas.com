import { AiOutlineRight } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { DocLink } from "../../utils/prismicHelpers";
import lozad from "lozad";
import { useEffect, useState } from "react";

const AlbumSliderSection = ({ slice }) => {
  const { button_link, button_text, heading, subheading, image } =
    slice?.primary;

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
              <div className="sliding-background"></div>
            </div>
          </a>
        </DocLink>
      </div>

      <style jsx>{`
        .image-container {
          max-width: 100vw;
          overflow: hidden;
        }
        .sliding-background {
          min-height: 35vh;
          width: 20304px;
          animation: slide 120s linear infinite;
          background: url(${image?.url}) repeat-x;
          background-size: contain;
        }

        @keyframes slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-6000px, 0, 0);
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
          border-bottom: 2px solid #ffffff00;
        }
        .btn-secondary:hover span span {
          border-bottom: 2px solid #0072ff;
        }
        .btn-secondary i {
          position: relative;
          top: -3px;
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
            font-size: 18px;
            line-height: 28px;
          }
        }

        @media (max-width: 591px) {
          .heading h2 {
            font-size: 32px;
            line-height: 42px;
          }
          .sub-heading h4 {
            font-size: 18px;
            line-height: 28px;
          }
          .btn-secondary {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
};

export default AlbumSliderSection;
