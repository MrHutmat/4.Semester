import React, { useState } from "react";

// transform -translate-y-1/2 left-5 right-5 top-1/2

const Carousel = () => {
  const carouselImages = [
    {
      url: "https://www.skanlux.dk/app/uploads/2021/03/skanlux_classic-87-77m2_facelift_Low-2.jpg",
    },
    {
      url: "https://www.skanlux.dk/app/uploads/2022/09/skanlux_hummervej_012_facelift_Medium-1536x1024.jpg",
    },
    {
      url: "https://www.skanlux.dk/app/uploads/2022/09/skanlux_hummervej_018_facelift_Medium-1-1536x1024.jpg",
    },
    {
      url: "https://www.skanlux.dk/app/uploads/2021/03/skanlux_hummervej_011_FA_facelift-2.jpg",
    },
  ];
  const [imageShowing, setImageShowing] = useState(0);

  const nextImage = () => {
    const isFirstImage = imageShowing === 0;
    const newImage = isFirstImage
      ? carouselImages.length - 1
      : imageShowing - 1;
    setImageShowing(newImage);
  };
  const prevImage = () => {
    const isLastImage = imageShowing === carouselImages.length - 1;
    const newImage = isLastImage ? 0 : imageShowing + 1;
    setImageShowing(newImage);
  };

  const goToImage = (imageIndex) => {
    setImageShowing(imageIndex);
  };

  return (
    <div className="carousel w-full group">
      <div
        className="carousel-item relative w-full"
        // style={{ transform: `translateX(-${imageShowing * 100}%)` }}
      >
        {/* {carouselImages.map(({ url }) => (
          <img src={url} />
        ))} */}

        <img src={carouselImages[imageShowing].url} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={nextImage}
            className="hidden group-hover:block btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={prevImage}
            className="hidden group-hover:block btn btn-circle"
          >
            ❯
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {carouselImages.map((image, imageIndex) => (
              <div
                key={imageIndex}
                onClick={() => goToImage(imageIndex)}
                className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${
                  imageShowing === imageIndex ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
