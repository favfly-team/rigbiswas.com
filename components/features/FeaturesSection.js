import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const FeaturesSection = ({ slice }) => {
  const { heading, description } = slice.primary;

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
            {slice?.items?.map((item, index) => (
              <FeatureItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ data }) => {
  const { title, details, image, icon } = data;

  return (
    <div className="item grid-sizer col-lg-4">
      <div className="bg-white rounded feature-card h-100 ">
        <div className="p-3">
          <img
            loading="lazy"
            src={image?.url || icon?.url}
            alt={image?.alt || icon?.alt}
            className={`w-100 ${icon?.url ? "icon-image" : ""}`}
          />
          <h3 className="mb-5 font-weight-normal">
            <strong className="font-weight-normal">{title?.[0]?.text}</strong>
          </h3>

          <RichText render={details} linkResolver={linkResolver} />
        </div>
      </div>
      <style jsx>{`
        img {
          border-radius: 10px;
          object-fit: cover;
          aspect-ratio: 3/2;
          margin-bottom: 16px;
        }
        .icon-image {
          width: auto !important;
          height: 80px !important;
          aspect-ratio: 1/1;
          border-radius: 0% !important;
        }
        h3 {
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;
