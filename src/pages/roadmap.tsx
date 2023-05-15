import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function RoadMap() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
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
    <section
      id="roadmap"
      className="border-b-[1px] border-gray-800 border-dashed"
    >
      <div className="w-full min-h-[70vh] 2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 pb-5">
        <h1 className="text-[50px] md:text-[75px] text-gray-800 text-center font-extrabold mt-10 uppercase">
          {" "}
          RoadMap
        </h1>
        <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
          ROADMAP OF COMPANY
        </p>

        <div className="flex flex-col gap-5 mt-10">
          <h1 className="text-xl text-center text-gray-400 uppercase md:text-3xl">
            Our mission is simple: We want to be first Doodle NFTs creators on
            Flare network & provide with the best NFTs utilities - NFT breeding,
            NFT staking & Bunny token farming .
          </h1>
        </div>
        <div className="mt-10">
          <Slider {...settings} className="">
            <div className="px-3">
              <div className="w-full border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] flex min-h-[30vh] lg:flex-row flex-col">
                <div className="border-r-[1px] border-[#14c2a3]">
                  <h1 className="flex items-center justify-center h-full p-3 text-3xl font-bold text-white lg:justify-start lg:-rotate-90 lg:transform">
                    phase 1
                  </h1>
                </div>
                <div className="flex items-center justify-center p-5">
                  <img
                    src={`/img/nft/v4-slider-img2.png`}
                    className="w-[300px]"
                    alt="nftCollectionSlider"
                  />
                </div>
                <div className="flex flex-col items-start justify-start h-full gap-5 p-10">
                  <h3 className="text-white text-[30px] font-bold">
                    Project Marketing & NFT Minting
                  </h3>
                  <h4 className="text-[#14c2a3]">Q1 2023</h4>
                  <p className="text-lg text-gray-400">
                    - NFT Marketing on Twitter/Discord.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Development of ERC-721 smart contract & Audit.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Minting dApp frontEnd development & testing.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Launch our first Doodle Bunny NFT collection.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="w-full border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] flex min-h-[30vh] lg:flex-row flex-col">
                <div className="border-r-[1px] border-[#14c2a3]">
                  <h1 className="flex items-center justify-center h-full p-3 text-3xl font-bold text-white lg:justify-start lg:-rotate-90 lg:transform">
                    phase 1
                  </h1>
                </div>
                <div className="flex items-center justify-center p-5">
                  <img
                    src={`/img/nft/v4-slider-img2.png`}
                    className="w-[300px]"
                    alt="nftCollectionSlider"
                  />
                </div>
                <div className="flex flex-col items-start justify-start h-full gap-5 p-10">
                  <h3 className="text-white text-[30px] font-bold">
                    Project Marketing & NFT Minting
                  </h3>
                  <h4 className="text-[#14c2a3]">Q1 2023</h4>
                  <p className="text-lg text-gray-400">
                    - NFT Marketing on Twitter/Discord.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Development of ERC-721 smart contract & Audit.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Minting dApp frontEnd development & testing.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Launch our first Doodle Bunny NFT collection.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="w-full border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] flex min-h-[30vh] lg:flex-row flex-col">
                <div className="border-r-[1px] border-[#14c2a3]">
                  <h1 className="flex items-center justify-center h-full p-3 text-3xl font-bold text-white lg:justify-start lg:-rotate-90 lg:transform">
                    phase 1
                  </h1>
                </div>
                <div className="flex items-center justify-center p-5">
                  <img
                    src={`/img/nft/v4-slider-img2.png`}
                    className="w-[300px]"
                    alt="nftCollectionSlider"
                  />
                </div>
                <div className="flex flex-col items-start justify-start h-full gap-5 p-10">
                  <h3 className="text-white text-[30px] font-bold">
                    Project Marketing & NFT Minting
                  </h3>
                  <h4 className="text-[#14c2a3]">Q1 2023</h4>
                  <p className="text-lg text-gray-400">
                    - NFT Marketing on Twitter/Discord.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Development of ERC-721 smart contract & Audit.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Minting dApp frontEnd development & testing.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Launch our first Doodle Bunny NFT collection.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
