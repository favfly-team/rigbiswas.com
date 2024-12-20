/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Heading from "../heading/Heading";

const PortfolioSection = ({ slice }) => {
  return (
    <section className="wrapper light-wrapper">
      <div className="container inner">
        <Heading data={slice} />
        <div className="tiles text-center">
          <div className="items row justify-content-center">
            {slice?.items?.map((item, index) => (
              <PortfolioItem
                key={index}
                data={item}
                portfolioType={slice?.primary?.type}
              />
            ))}
          </div>
          {slice?.items?.length < 7 && (
            <Link
              href={
                slice?.primary?.type === "Kids"
                  ? "/kids-portfolio"
                  : "/wedding-portfolio"
              }
            >
              <a className="btn shadow">View More</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ data, portfolioType }) => {
  const { image, location, title, type, link } = data;

  const linkType =
    portfolioType === "Kids" ? "kids-portfolio" : "wedding-portfolio";

  return (
    <div className="item col-md-6 col-lg-4">
      <figure className="overlay overlay1 rounded mb-20">
        <Link href={`/${linkType}/${link?.uid}`}>
          <a>
            <img
              key={image.url}
              // data-src={image.url}
              src={image.url}
              alt={image.alt}
              // className="lozad"
            />
          </a>
        </Link>
      </figure>
      <h4 className="mb-0">{title?.[0]?.text}</h4>
      <div className="meta">
        <span className="count">{location?.[0]?.text}</span>
        <span className="category">{type?.[0]?.text}</span>
      </div>
      <style jsx>{`
        .rounded {
          border-radius: 20px !important;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PortfolioSection;
