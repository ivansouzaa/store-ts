import { useState } from "react";

function CarouselBanner() {
  const images = [
    "https://i.postimg.cc/7LV2b6Gs/banner-home-plane.png",
    "https://i.postimg.cc/5ymGR865/banner-home-2.jpg",
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    if (carouselIndex === images.length - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const prevSlide = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(images.length - 1);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <>
      <div class="carousel-banner">
        <div class="carousel-container">
          {images.map((item, index) => {
            return (
              <div
                class={
                  carouselIndex === index
                    ? "carousel-item-active"
                    : "carousel-item"
                }
                key={index}
              >
                <img src={item} />
              </div>
            );
          })}
        </div>

        <div>
          <button class="button-prev" onClick={prevSlide}></button>
          <button class="button-next" onClick={nextSlide}></button>
        </div>
      </div>
    </>
  );
}

export default CarouselBanner;
