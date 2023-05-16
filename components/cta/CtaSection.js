/* eslint-disable react/no-unescaped-entities */
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { AiOutlineRight } from "react-icons/ai";
import { DocLink } from "../../utils/prismicHelpers";

const CtaSection = ({ slice }) => {
  const {
    background_image,
    heading,
    button_link,
    button_text,
    description1,
    subheading,
  } = slice.primary;

  return (
    <>
      <div
        className="wrapper image-wrapper bg-image inverse-text"
        style={{
          backgroundImage: `url(${background_image?.url})`,
        }}>
        <div className="container inner pt-100 pb-100 cta-bg">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {subheading?.[0]?.text && (
                <div className="sub-heading text-center mb-0">
                  <h4>{subheading?.[0]?.text}</h4>
                </div>
              )}
              {heading?.[0]?.text && (
                <div className="heading text-center mb-0">
                  <h2 className="gradient-text">{heading?.[0]?.text}</h2>
                </div>
              )}
              <div className="description text-center">
                <RichText render={description1} linkResolver={linkResolver} />
              </div>
              {button_text?.[0]?.text && (
                <div className="text-center">
                  <DocLink link={button_link}>
                    <a className="btn-secondary">
                      <span className="d-flex align-items-center">
                        <span>{button_text?.[0]?.text}</span>
                        <i>
                          <AiOutlineRight />
                        </i>
                      </span>
                    </a>
                  </DocLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-secondary {
          color: #0072ff;
          font-size: 28px;
          line-height: 38px;
          font-family: "SfProDisplayRegular";
          font-weight: 500;
          display: inline-block;
          background: none;
        }
        .btn-secondary span span {
          border-bottom: 2px solid #0072ff;
        }
        .image-wrapper:before {
          background: none;
        }
        .gradient-text {
          background: linear-gradient(
            to right,
            rgba(98, 155, 225, 1) 25%,
            rgba(148, 106, 221, 1) 50%,
            rgba(179, 107, 213, 1) 75%,
            rgba(226, 44, 80, 1) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          background-size: 500% auto;
          animation: textShine 3s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  );
};

export default CtaSection;
