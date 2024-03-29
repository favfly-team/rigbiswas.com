import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

/* eslint-disable @next/next/no-img-element */
const ReviewsSection = ({ slice }) => {
  // console.log(slice);

  return (
    <div className="wrapper light-wrapper">
      <div className="container inner">
        <div className="row">
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
        className={`cbp-item rounded overflow-hidden ${
          isOpen ? "" : "review"
        }`}>
        <div className="bg-white shadow">
          <img
            key={image.url}
            data-src={image.url}
            alt={image.alt}
            className="w-100 lozad"
          />
          <div className="mt-20 p-4">
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
