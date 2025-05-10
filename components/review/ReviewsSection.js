import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

/* eslint-disable @next/next/no-img-element */
const ReviewsSection = ({ slice }) => {
  const { heading, description1 } = slice?.primary;

  return (
    <div className="wrapper light-wrapper">
      <div className="container inner">
        {heading?.[0]?.text && (
          <>
            <h2 className="section-title section-title-upper larger text-center">
              {heading?.[0]?.text}
            </h2>
            <div className="lead larger text-center">
              <RichText render={description1} linkResolver={linkResolver} />
            </div>
            <div className="space30"></div>
          </>
        )}

        <div
          className="row justify-content-center"
          style={{
            rowGap: "30px",
          }}
        >
          {slice?.items?.map((item, index) => (
            <ReviewItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ReviewItem = ({ data }) => {
  const { image, name, review } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="col-lg-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cbp-item m-0 h-100 rounded overflow-hidden ${
          isOpen ? "" : "review"
        }`}
      >
        <div className="bg-white shadow h-100">
          {image.url && (
            <img
              key={image.url}
              data-src={image.url}
              alt={image.alt}
              className="w-100 lozad mb-20 "
            />
          )}

          <div className="p-4">
            <blockquote className="icon icon-left">
              <RichText render={review} linkResolver={linkResolver} />
              <footer className="blockquote-footer">{name?.[0]?.text}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
