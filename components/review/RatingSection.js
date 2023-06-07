/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingSection = ({ slice }) => {
  // console.log(slice);

  return (
    <div className="wrapper light-wrapper">
      <div className="container inner">
        <div className="row justify-content-center">
          {slice?.items?.map((item, index) => (
            <RatingItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RatingItem = ({ data }) => {
  const { image, rating } = data;

  return (
    <div className="col-sm-6 col-lg-3 mb-20">
      <div className="cbp-item d-block rounded overflow-hidden m-0 shadow">
        <div className="bg-white shadow box">
          <div className="logo">
            <img
              key={image.url}
              data-src={image.url}
              alt={image.alt}
              className="lozad"
            />
          </div>
          <div className="rating">
            {[...Array(parseInt(rating?.[0]?.text))].map((_, index) => (
              <FaStar key={index} />
            ))}
            {rating?.[0]?.text - parseInt(rating?.[0]?.text) > 0 && (
              <FaStarHalfAlt />
            )}
          </div>
          <div className="text justify-content-center">
            {rating?.[0]?.text} <span>ratings</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo {
          width: auto;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          padding: 3px 0;
        }
        .logo img {
          max-width: 200px;
        }
        .text {
          font-size: 24px;
          font-weight: 600;
          display: flex;
          align-items: center;
        }
        .text span {
          font-size: 20px;
          font-weight: 400;
          margin-left: 5px;
        }
        .rating {
          display: flex;
          justify-content: center;
          color: #ffcd3c;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default RatingSection;
