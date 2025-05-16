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
  const { title, details } = data;

  return (
    <div className="item grid-sizer col-lg-6">
      <div className="bg-white rounded feature-card h-100">
        <div className="feature-content">
          <h3 className="mb-10 font-weight-normal">
            <strong className="font-weight-normal">{title?.[0]?.text}</strong>
          </h3>

          <RichText render={details} linkResolver={linkResolver} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
