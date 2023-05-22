/* eslint-disable @next/next/no-img-element */
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";
import FsLightbox from "fslightbox-react";
import { useState, useEffect } from "react";

const ReviewsGallerySection = ({ slice }) => {
  // console.log(slice);
  const { heading, description1 } = slice.primary;

  const [sources, setSources] = useState([]);

  // const [active, setActive] = useState("All");

  // const [filterArr, setFilterArr] = useState(galleryItems);

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
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();

    let tempSources = [];
    slice?.items.map((item) => {
      item.video_link?.link_type == "Web"
        ? tempSources.push(item?.video_link?.url)
        : tempSources.push(item?.image?.url);
    });

    setSources(tempSources);
    return () => {
      setSources([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slice]);

  return (
    <>
      <section className="wrapper light-wrapper">
        <div className="container-fluid">
          {heading[0]?.text && (
            <div className="mx-auto mb-40" style={{ maxWidth: "900px" }}>
              <h2 className="section-title section-title-upper larger text-center">
                {heading[0]?.text}
              </h2>
              <div className="lead text-center">
                <RichText render={description1} linkResolver={linkResolver} />
              </div>
            </div>
          )}

          {/* <Carousel
					emulateTouch
					autoPlay
					interval={3500}
					infiniteLoop
					showArrows
					showIndicators
					showThumbs={false}>
					{slice?.items.map((item, index) => (
						<FeaturedReview key={index} data={item} />
					))}
				</Carousel> */}

          <div className="row">
            {slice?.items.map((item, index) => (
              <ReviewsGalleryItem
                key={index}
                data={item}
                index={index}
                openLightboxOnSlide={openLightboxOnSlide}
              />
            ))}
          </div>
        </div>
      </section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
    </>
  );
};

const ReviewsGalleryItem = ({ data, openLightboxOnSlide, index }) => {
  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [data]);
  // ========== END ==========

  return (
    <div className="col-sm-6 col-md-4 col-lg-2 p-0 mb-0">
      <figure>
        <img
          className="lozad w-100"
          key={index}
          data-src={data?.image?.url}
          alt={data?.image?.alt}
          onClick={() => openLightboxOnSlide(index + 1)}
        />
      </figure>
      <style jsx>{`
        figure {
          cursor: zoom-in;
        }
      `}</style>
    </div>
  );
};

export default ReviewsGallerySection;
