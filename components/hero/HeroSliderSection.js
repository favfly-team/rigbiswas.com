import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const HeroSliderSection = ({ slice }) => {
  return (
    <>
      <div className="hero-section bg">
        <Splide
          options={{
            type: "fade",
            autoplay: true,
            perPage: 1,
            perMove: 1,
            interval: 2000,
            speed: 1000,
            rewind: true,
          }}>
          {slice?.items?.map((item, index) => (
            <SplideSlide key={index}>
              <Link href={item?.link?.url || "#"}>
                <a target="_blank">
                  <img
                    className="w-100"
                    src={item?.image?.url}
                    alt={item?.image?.alt}
                  />
                </a>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
        {slice?.primary?.heading?.[0]?.text && (
          <div className="heading mb-0">
            <RichText render={slice?.primary?.heading} />
          </div>
        )}
      </div>
      <style jsx>{`
        .bg {
          background: #fbf8ff;
        }
        .hero-section {
          padding-top: 60px;
        }
      `}</style>
    </>
  );
};

export default HeroSliderSection;
