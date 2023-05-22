/* eslint-disable @next/next/no-img-element */
import FsLightbox from "fslightbox-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const MasonryGallerySection = ({ slice }) => {
  const galleryItems = [...slice.items].reverse();

  const router = useRouter();

  useEffect(() => {
    const Masonry = require("masonry-layout");
    const imagesLoaded = require("imagesloaded");

    const grid = document.querySelector(".grid");
    const masonry = new Masonry(grid, {
      itemSelector: ".grid-item",
      percentPosition: true,
    });

    imagesLoaded(grid).on("progress", function () {
      // layout Masonry after each image loads
      masonry.layout();
    });
  });

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

  return (
    <>
      <div className={router.pathname == "/moments" ? "bg-black" : ""}>
        <div className="grid">
          {galleryItems?.map((item, index) => (
            <ImageItem
              key={index}
              data={item}
              index={index}
              openLightboxOnSlide={openLightboxOnSlide}
            />
          ))}
        </div>
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
  const { image } = data;

  return (
    <>
      <div
        className="grid-item"
        key={index}
        onClick={() => openLightboxOnSlide(index + 1)}>
        <img src={image?.url} alt={image?.alt} />
      </div>
      <style jsx>{`
        img {
          cursor: zoom-in;
        }
      `}</style>
    </>
  );
};

export default MasonryGallerySection;
