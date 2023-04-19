import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="my-10 slider">
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img2.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img3.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img4.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img5.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img6.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img7.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img8.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img9.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img10.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img11.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img12.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img13.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img14.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-2 border-[#14c2a3] bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={`/img/nft/v4-slider-img15.png`}
              className="w-90"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default CollectionSlider;
