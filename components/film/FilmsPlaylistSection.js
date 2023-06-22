import lozad from "lozad";
import Link from "next/link";
import { useEffect } from "react";
import { RiPlayListAddFill } from "react-icons/ri";

const FilmsPlaylistSection = ({ edges }) => {
  return (
    <section className="wrapper light-wrapper">
      <div className="container inner">
        <div className="tiles text-center">
          <div className="items row">
            {edges?.map((item, index) => (
              <PortfolioItem
                key={index}
                data={item}
                uid={item?.node?._meta?.uid}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ data, uid }) => {
  const { portfolio_name, thumbnail, body } = data?.node;

  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);
  // ========== END ==========

  const link = `/films/${uid}`;

  return (
    <div className="item col-md-6 col-lg-4">
      <figure className="overlay overlay1 rounded mb-20">
        <Link href={link}>
          <a className="position-relative">
            <img
              key={thumbnail.url}
              data-src={thumbnail.url}
              alt={thumbnail.alt}
              className="lozad"
            />
            <div className="bg">
              <div className="d-flex flex-column">
                {body?.[0]?.fields?.length}
                <RiPlayListAddFill />
              </div>
            </div>
          </a>
        </Link>
      </figure>
      <Link href={link}>
        <a>
          <h4 className="mb-0">{portfolio_name?.[0]?.text}</h4>
        </a>
      </Link>
      <style jsx>{`
        .rounded {
          border-radius: 20px !important;
          overflow: hidden;
        }
        .bg {
          background: rgba(0, 0, 0, 0.8);
          position: absolute;
          top: 0;
          right: 0;
          width: 30%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg div {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default FilmsPlaylistSection;
