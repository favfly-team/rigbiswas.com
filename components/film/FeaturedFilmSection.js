/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const FeaturedFilmSection = ({ slice }) => {
  // console.log(slice);
  const {
    image,
    heading,
    description,
    video_link,
    button_text,
    button_link,
    background_image,
  } = slice?.primary;

  const [sources, setSources] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    let tempSources = [video_link?.url];

    setSources(tempSources);
    return () => {
      setSources([]);
    };
  }, [video_link]);

  return (
    <section>
      <div
        className="wrapper"
        style={{ backgroundImage: `url(${background_image?.url})` }}>
        <div className="container inner">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 pr-35 pr-sm-15 position-relative">
              <img
                key={image.url}
                data-src={image.url}
                alt={image.alt}
                className="img-fluid rounded w-100 lozad"
              />
              {video_link?.url && (
                <button
                  onClick={() => setToggler(!toggler)}
                  className=" play-btn position-absolute">
                  <i className="text-white">
                    <FaPlay />
                  </i>
                </button>
              )}
            </div>

            <div className="space30 d-none d-md-block d-lg-none"></div>
            <div className="col-lg-5">
              <h2 className="section-title section-title-upper larger">
                {heading?.[0]?.text}
              </h2>
              <div className="description">
                <RichText render={description} linkResolver={linkResolver} />
              </div>
              <div className="space10"></div>
              <Link href={button_link?.[0]?.text}>
                <a className="play-btn-primary">
                  <span className="d-flex align-items-center">
                    {button_text?.[0]?.text}
                    <i>
                      <FaPlay />
                    </i>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rounded {
          border-radius: 20px !important;
        }
        .play-btn {
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          border: 0 !important;
          font-size: 2.5rem;
        }

        .wrapper {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .section-title {
          color: #fbdbff;
          font-size: 35px;
          line-height: 40px;
        }
        .description {
          color: #c3a4ff;
          font-size: 20px;
          line-height: 26px;
        }

        @media (max-width: 591px) {
          .section-title {
            font-size: 36px;
            line-height: 38px;
          }
          .description {
            font-size: 18px;
            line-height: 26px;
          }
        }
      `}</style>

      <FsLightbox
        toggler={toggler}
        sources={sources}
        disableLocalStorage={true}
        // slide={lightboxController.slide}
      />
    </section>
  );
};

export default FeaturedFilmSection;
