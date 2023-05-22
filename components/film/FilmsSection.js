/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaPlay } from "react-icons/fa";
import lozad from "lozad";
import Filter from "../filter/Filter";

const FilmsSection = ({ slice, bgNone }) => {
  // console.log(slice);

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
      tempSources.push(item?.video_link?.url);
    });
    setSources(tempSources);
    return () => {
      setSources([]);
    };
  }, [slice]);
  // =========== END FSLIGHTBOX =========

  const [active, setActive] = useState("All");

  const filterData = [
    "All",
    "Maternity",
    "Baby Shower",
    "Newborn",
    "Baby Theme Shoot & Portfolio",
    "Rice Ceremony",
    "Birthday Party",
    "Family Shoot",
  ];

  return (
    <section className={`wrapper ${bgNone ? "" : "light-wrapper"}`}>
      <div className="container-fluid inner">
        {slice?.primary?.show_filter && (
          <Filter
            filterData={filterData}
            active={active}
            setActive={setActive}
          />
        )}

        <div className="tiles text-center">
          <div className="items row">
            {slice?.items?.map(
              (item, index) =>
                (active == "All" || item?.category == active) && (
                  <PortfolioItem
                    key={index}
                    data={item}
                    index={index}
                    openLightboxOnSlide={openLightboxOnSlide}
                  />
                )
            )}
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
    </section>
  );
};

const PortfolioItem = ({ data, index, openLightboxOnSlide }) => {
  const { image } = data;

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
    <div className="item col-md-6 col-lg-4">
      <figure
        className="overlay overlay1 rounded pointer"
        onClick={() => openLightboxOnSlide(index + 1)}>
        <img data-src={image.url} alt={image.alt} className="lozad" />
        <button className="play-btn position-absolute">
          <i className="text-white">
            <FaPlay />
          </i>
        </button>
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
        }
        .play-btn:hover {
          background: rgb(245 196 99);
        }
        .pointer {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FilmsSection;
