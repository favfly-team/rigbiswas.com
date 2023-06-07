/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";
import { useEffect } from "react";

const AwardsSection = ({ slice }) => {
  // console.log(slice);
  const { heading, description } = slice.primary;
  return (
    <section className="wrapper light-wrapper">
      <div className="container inner">
        <h2 className="section-title section-title-upper larger text-center">
          {heading[0]?.text}
        </h2>
        <div className="lead text-center">
          <RichText render={description} linkResolver={linkResolver} />
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

        <div className="row justify-content-center">
          {slice?.items.map((item, index) => (
            <FeaturedReview key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedReview = ({ data }) => {
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
    <div className="col-6 col-md-4 col-lg-3 text-center mb-20">
      <figure>
        <img
          className="lozad w-100"
          key={data?.image?.url}
          data-src={data?.image?.url}
          alt={data?.image?.alt}
        />
      </figure>
    </div>
  );
};

export default AwardsSection;
