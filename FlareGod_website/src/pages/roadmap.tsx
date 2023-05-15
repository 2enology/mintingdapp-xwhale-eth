import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
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
      className="border-b-[1px] border-gray-800 border-dashed bg-[#141a31] bg-opacity-70 backdrop-blur-sm pb-10"
    >
      <div className="w-full min-h-[70vh] 2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 pb-5">
        <Fade direction="down">
          <h1 className="text-[50px] md:text-[75px] text-white text-center font-extrabold py-20 uppercase z-20">
            {" "}
            RoadMap
          </h1>
          <p className="text-2xl text-center text-green-500 -mt-[130px] md:-mt-[150px] font-bold uppercase z-10">
            ROADMAP OF COMPANY
          </p>
        </Fade>

        <div className="flex flex-col gap-5 mt-10">
          <h1 className="text-xl text-center text-gray-400 uppercase md:text-3xl">
            Our mission is provide best art on Flare network & provide the best
            NFTs utilities.
          </h1>
        </div>
        <div className="z-50 mt-10">
          <Slider {...settings} className="z-50">
            <div className="px-3">
              <div className="w-full border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] flex min-h-[30vh] lg:flex-row flex-col rounded-md">
                <div className="border-r-[1px] border-[#14c2a3]">
                  <h1 className="flex items-center justify-center h-full p-3 text-3xl font-bold text-white lg:justify-start lg:-rotate-90 lg:transform">
                    Idea
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
                    Concept development & Team assembly:
                  </h3>
                  <h4 className="text-[#14c2a3]">Q2 2023</h4>
                  <p className="text-lg text-gray-400">
                    - Identify the project's purpose and vision.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Research existing NFT projects to gather ideas and
                    inspiration.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Define your target audience.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Recruit team members with the necessary skills, including
                    artists, developers.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="w-full border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] flex min-h-[30vh] lg:flex-row flex-col">
                <div className="border-r-[1px] border-[#14c2a3]">
                  <h1 className="flex items-center justify-center h-full p-3 text-3xl font-bold text-white lg:justify-start lg:-rotate-90 lg:transform">
                    Design
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
                  <h3 className="text-white md:text-[30px] text-[20px] font-bold">
                    Tokenomics design & Project marketing
                  </h3>
                  <h4 className="text-[#14c2a3]">Q2 2023</h4>
                  <p className="text-lg text-gray-400">
                    - NFT Marketing on Twitter/Discord.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Determine the total supply of NFTs.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Plan for future updates, expansions, or improvements to
                    the NFT ecosystem.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Develop the overall aesthetic and visual style of the
                    NFTs.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="w-full border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] flex min-h-[30vh] lg:flex-row flex-col">
                <div className="border-r-[1px] border-[#14c2a3]">
                  <h1 className="flex items-center justify-center h-full p-3 text-3xl font-bold text-white lg:justify-start lg:-rotate-90 lg:transform">
                    Mint
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
                    Community building & NFT Minting
                  </h3>
                  <h4 className="text-[#14c2a3]">Q2 2023</h4>
                  <p className="text-lg text-gray-400">
                    - NFT Marketing on Twitter/Discord & Engage with potential
                    users and influencers in the NFT space
                  </p>
                  <p className="text-lg text-gray-400">
                    - Develop smart contracts for minting, claiming, and
                    managing the NFTs.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Minting dApp frontEnd development & testing.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Launch our first FlareGods collection.
                  </p>
                  <p className="text-lg text-gray-400">
                    - Support & Community building.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 md:min-h-screen lg:min-h-[120vh] xl:min-h-[60vh] min-h-[120vh] area z-10">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
