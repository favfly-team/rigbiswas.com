/* eslint-disable @next/next/no-img-element */
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";
import { useState, useEffect } from "react";
import lozad from "lozad";
import { useRouter } from "next/router";

const MasonryGallerySection = ({ slice }) => {
  const galleryItems = [...slice.items].reverse();

  const [sources, setSources] = useState([]);

  // const [active, setActive] = useState("All");

  // const [filterArr, setFilterArr] = useState(galleryItems);

  // ===== SLIDE STATE =====
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  // ===== HANDLE SLIDE NUMBER =====
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  // ===== GET STRUCTURED SOURCES =====
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();

    let tempSources = [];
    galleryItems.map((item) => {
      item.video_link?.link_type == "Web"
        ? tempSources.push(item?.video_link?.url)
        : tempSources.push(item?.image?.large?.url);
    });

    setSources(tempSources);
    return () => {
      setSources([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slice]);

  const router = useRouter();

  return (
    <>
      <div className={router.pathname == "/moments" ? "bg-black" : ""}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {galleryItems?.map((item, index) => (
              <ImageItem
                key={item?.image?.url}
                data={item}
                index={index}
                openLightboxOnSlide={openLightboxOnSlide}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
      <style jsx>{`
        .bg-black {
          background: #000;
        }
      `}</style>
    </>
  );
};

const ImageItem = ({ data, openLightboxOnSlide, index }) => {
  // ===== GET STRUCTURED SOURCES =====
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
  }, []);

  const { image } = data;

  return (
    <>
      <img
        key={image?.url}
        data-src={image?.url}
        className="lozad"
        alt={image?.alt}
        onClick={() => openLightboxOnSlide(index + 1)}
      />
      <style jsx>{`
        img {
          margin: 1px;
          //border-radius: 5px;
          cursor: zoom-in;
        }
      `}</style>
    </>
  );
};

export default MasonryGallerySection;
