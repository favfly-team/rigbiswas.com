import { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import FsLightbox from "fslightbox-react";

const TestimonialSection = ({ slice }) => {
  const { heading } = slice.primary;
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
    slice?.items.map((item) => {
      item.video_link?.link_type == "Web"
        ? tempSources.push(item?.video_link?.url)
        : tempSources.push(item?.image?.large?.url);
    });

    setSources(tempSources);
    return () => {
      setSources([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slice]);

  return (
    <>
      <div className="wrapper">
        <div className="container inner">
          <h2 className="section-title section-title-upper larger text-center">
            {heading?.[0]?.text}
          </h2>

          <div
            className="row justify-content-center"
            style={{ rowGap: "30px" }}>
            {slice?.items?.map((item, index) => (
              <TestimonialItem
                key={index}
                data={item}
                index={index}
                openLightboxOnSlide={openLightboxOnSlide}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
    </>
  );
};

const TestimonialItem = ({ data, openLightboxOnSlide, index }) => {
  const { image, video_link } = data;

  return (
    <>
      <div className="col-md-6 mb-0">
        <div
          className="relative pointer"
          onClick={() => openLightboxOnSlide(index + 1)}>
          <img className="w-100" src={image?.url} alt={image?.alt} />
          {video_link && (
            <i className="icon-play">
              <BsPlayCircle />
            </i>
          )}
        </div>
      </div>

      <style jsx>{`
        .pointer {
          cursor: pointer;
        }
        img {
          border-radius: 14px;
        }
        .icon-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 44px;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default TestimonialSection;
