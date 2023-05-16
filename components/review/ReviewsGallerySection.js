/* eslint-disable @next/next/no-img-element */
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";
import { useEffect } from "react";

const ReviewsGallerySection = ({ slice }) => {
  // console.log(slice);
  const { heading, description1 } = slice.primary;
  return (
    <section className="wrapper light-wrapper">
      <div className="container-fluid inner pb-0">
        <div className="mx-auto mb-40" style={{ maxWidth: "900px" }}>
          <h2 className="section-title section-title-upper larger text-center">
            {heading[0]?.text}
          </h2>
          <div className="lead text-center">
            <RichText render={description1} linkResolver={linkResolver} />
          </div>
        </div>

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
            <ReviewsGalleryItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewsGalleryItem = ({ data }) => {
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
          data-src={data?.image?.url}
          alt={data?.image?.alt}
        />
      </figure>
    </div>
  );
};

export default ReviewsGallerySection;
