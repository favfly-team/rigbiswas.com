import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { FaGoogle } from "react-icons/fa";

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
  const { image, name, review, link } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="col-lg-4">
      <div
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
              <div className="paragraph" onClick={() => setIsOpen(!isOpen)}>
                <RichText render={review} linkResolver={linkResolver} />
              </div>
              <footer className="blockquote-footer mt-20">
                <a href={link?.url} target="_blank">
                  {name?.[0]?.text}
                  {link?.url && (
                    <i
                      style={{
                        position: "relative",
                        top: "-1px",
                        marginLeft: "5px",
                      }}
                    >
                      <FaGoogle />
                    </i>
                  )}
                </a>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
