import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const FaqSection = ({ slice }) => {
  const { heading, description } = slice.primary;

  const [index, setIndex] = useState(0);

  return (
    <div className="wrapper light-wrapper">
      <div className="container inner">
        <h2 className="section-title section-title-upper larger text-center">
          {heading?.[0]?.text}
        </h2>
        <div className="lead larger text-center">
          <RichText render={description} linkResolver={linkResolver} />
        </div>
        <div className="space30"></div>
        <div className="tiles">
          <div className="row isotope grid boxed list-view justify-content-center">
            {slice?.items?.map((item, i) => (
              <FaqItem
                key={i}
                data={item}
                isOpen={index === i}
                setIsOpen={setIndex}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ data, isOpen, setIsOpen, index }) => {
  const { title, details } = data;

  return (
    <div className="item grid-sizer col-12">
      <div
        className="rounded feature-card overflow-hidden"
        style={{
          height: isOpen ? "100%" : "auto",
        }}
      >
        <div className="feature-content p-0 h-100">
          <div
            className="d-flex justify-content-between p-3"
            style={{
              backgroundColor: "#281451",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(index)}
          >
            <h3
              className="font-weight-normal text-white mb-0"
              style={{
                fontSize: "18px",
                lineHeight: "1.4",
              }}
            >
              <strong className="font-weight-normal">{title?.[0]?.text}</strong>
            </h3>

            <i className="text-white">
              <FaChevronDown
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </i>
          </div>
          <div
            className="p-3 bg-white"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            <RichText render={details} linkResolver={linkResolver} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
