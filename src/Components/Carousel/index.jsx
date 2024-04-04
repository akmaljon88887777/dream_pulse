import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const arrOfImages = [
  "https://templatemo.com/templates/templatemo_536_dream_pulse/img/gallery/large/01.jpg",
  "https://templatemo.com/templates/templatemo_536_dream_pulse/img/gallery/large/02.jpg",
  "https://templatemo.com/templates/templatemo_536_dream_pulse/img/gallery/large/03.jpg",
];
function Carousel() {
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModalAndSetIndex = (index) => {
    setIndexOfImages(index);
    setShowModal(true);
    return;
  };
  return (
    <div id="carousel" className="flex xl:justify-end lg:justify-end">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:w-[77.3%] lg:w-[76.6%] w-full justify-items-center cursor-pointer z-0 p-2 pb-10 justify-center bg-[#fff] ">
        {arrOfImages.map((image, index) => (
          <img
            key={image}
            style={{
              height: "300px",
              width: "300px",
              margin: "20px",
            }}
            src={image}
            alt={image}
            onClick={() => openModalAndSetIndex(index)}
          />
        ))}
        {showModal && (
          <Lightbox
            mainSrc={arrOfImages[indexOfImages]}
            nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
            prevSrc={
              arrOfImages[
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              ]
            }
            onCloseRequest={() => setShowModal(false)}
            onMovePrevRequest={() =>
              setIndexOfImages(
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              )
            }
            onMoveNextRequest={() =>
              setIndexOfImages(
                (indexOfImages + arrOfImages.length + 1) % arrOfImages.length
              )
            }
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;
