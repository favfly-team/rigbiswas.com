import { AiOutlineRight } from "react-icons/ai";
import { DocLink } from "../../utils/prismicHelpers";

const GradientHeadingSection = ({ slice }) => {
  const { button_link, button_text, heading, subheading } = slice?.primary;

  return (
    <div className="wrapper image-wrapper bg-image inverse-text">
      <div className="container inner">
        <div className="row">
          <div className="col-md-12">
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
          border-bottom: 2px solid #ffffff00;
        }
        .btn-secondary:hover span span {
          border-bottom: 2px solid #0072ff;
        }
        .btn-secondary i {
          position: relative;
          top: -3px;
        }
        .image-wrapper:before {
          background: none;
        }
        .sub-heading h4 {
          color: #343434 !important;
          font-size: 34px;
          line-height: 38px;
          font-weight: 500;
          font-family: "SfProDisplayMedium";
        }
        .heading h2 {
          font-size: 60px;
          line-height: 66px;
          font-weight: 600;
          font-family: "SfProDisplayBold";
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            rgba(99, 41, 125, 1) 0%,
            rgba(32, 46, 181, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 991px) {
          .heading h2 {
            font-size: 36px;
            line-height: 48px;
          }

          .sub-heading h4 {
            font-size: 24px;
            line-height: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default GradientHeadingSection;
