import { min } from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "../components/Countdown";
import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";
import { ethers } from "ethers";

import MINTCONTRACT_ABI from "../../public/abis/MINTCONTACT_ABI.json";
import GFLRTOKENCONTRACT_ABI from "../../public/abis/GFLRTOKENCONTRACT_ABI.json";
import {
  MINTCONTRACT_ADDR,
  PUBLICMINTPRICE,
  TOKENCONTRACT_ADDR,
  WHITELISTMINTPRICE,
} from "../config";
import { useWeb3React } from "@web3-react/core";
import { successAlert } from "../components/toastGroup";

export default function Mint() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 300,
    fade: true,
  };

  const { account } = useWeb3React();
  const [mintCount, setMintCount] = useState<number>(1);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [whtieListMintState, setWhiteListMintState] = useState<boolean>(false);
  const [endWhiteListState, setEndWhiteListState] = useState<boolean>(false);
  const [maxMintCount, setMaxMintCount] = useState(5);

  const provider =
    typeof window !== "undefined" && (window as WindowWithEthereum).ethereum
      ? new ethers.providers.Web3Provider(
          (window as WindowWithEthereum).ethereum
        )
      : null;
  const Signer = provider?.getSigner();

  const MINTCONTRACT = new ethers.Contract(
    MINTCONTRACT_ADDR,
    MINTCONTRACT_ABI,
    Signer
  );

  const handleMintFunc = async () => {
    if (whtieListMintState && !endWhiteListState) {
      console.log("whitelsit mint");
      setLoadingState(true);
      await MINTCONTRACT.mintWhiteList(mintCount, {
        value: ethers.utils.parseEther(
          (WHITELISTMINTPRICE * mintCount).toString()
        ),
        gasLimit: 300000 * mintCount,
      })
        .then((tx: any) => {
          tx.wait()
            .then(() => {
              successAlert("Mint Successful!");
              getMintData();
              setLoadingState(false);
            })
            .catch(() => {
              setLoadingState(false);
              getMintData();
            });
        })
        .catch(() => {
          setLoadingState(false);
          getMintData();
        });
    } else {
      setLoadingState(true);
      await MINTCONTRACT.mint(mintCount, {
        value: ethers.utils.parseEther(
          (PUBLICMINTPRICE * mintCount).toString()
        ),
        gasLimit: 300000 * mintCount,
      })
        .then((tx: any) => {
          tx.wait()
            .then(() => {
              successAlert("Mint Successful!");
              getMintData();
              setLoadingState(false);
            })
            .catch(() => {
              setLoadingState(false);
              getMintData();
            });
        })
        .catch(() => {
          setLoadingState(false);
          getMintData();
        });
    }
  };

  const getMintData = async () => {
    setLoadingState(true);
    const counts = await MINTCONTRACT.totalSupply();
    setTotalSupply(Number(counts));
    const state = await MINTCONTRACT.isWhiteListActive();
    setWhiteListMintState(state);
    console.log("setWhiteListMintState", state);
    setLoadingState(false);
  };

  useEffect(() => {
    getMintData();
    const interval = setInterval(() => {
      getMintData();
    }, 60000); // 1 minute
    return () => clearInterval(interval);
  }, [account]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
    >
      <section className="relative flex flex-col w-full">
        <img
          src="/img/home.jpg"
          className="fixed top-0 bottom-0 object-cover w-full h-full -z-10"
        />
        <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 mt-[100px] lg:mt-[100px] w-full gap-5 pb-10">
          <Link href={"/"} passHref>
            <div className="w-full my-5 text-right transition-all duration-300 hover:translate-x-2">
              <h1 className="font-bold text-right text-white cursor-pointer">{`<- Back to Home`}</h1>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="xl:w-[500px] lg:w-[400px] w-[350px] md:w-[500px] p-2">
              <div className="p-2 border-[1px] border-gray-400 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
                <Slider
                  {...settings}
                  className="mx-3 my-2"
                  cssEase="ease-in-out"
                >
                  {nftArray.map((data, index) => (
                    <img
                      src={data.imgurl}
                      key={index}
                      className="object-cover w-full rounded-lg"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center w-full">
                <Countdown
                  endDateTime={1684389600000} // 1684389600000 is the timestamp of start public mint
                  onCanBreed={() => {
                    setEndWhiteListState(true);
                    setMaxMintCount(7);
                  }}
                />
              </div>
              <div className="flex items-center justify-center w-full mt-10">
                <h1 className="text-xl font-normal text-center text-white">
                  The FlareGod NFTs
                  <br />
                  FlareGod Minting Cost = 999 FLR
                </h1>
              </div>
              <div className="flex items-center justify-between w-full mt-5">
                <div
                  className={`px-6 py-4 text-xl font-bold text-center text-black transition-all duration-300 rounded-md ${
                    mintCount <= 1
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-400 cursor-pointer "
                  }`}
                  onClick={() =>
                    mintCount <= 1
                      ? setMintCount(1)
                      : setMintCount(mintCount - 1)
                  }
                >
                  {`-`}
                </div>{" "}
                <h1 className="text-xl font-bold text-white">{mintCount}</h1>
                <div
                  className={`px-6 py-4 text-xl font-bold text-center text-black transition-all duration-300 rounded-md ${
                    mintCount >= maxMintCount
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-400 cursor-pointer "
                  }`}
                  onClick={() =>
                    mintCount >= maxMintCount
                      ? setMintCount(maxMintCount)
                      : setMintCount(mintCount + 1)
                  }
                >
                  {`+`}
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-5">
                <h1 className="text-2xl font-bold text-center text-white">
                  {totalSupply} / 5000
                </h1>
              </div>
              {totalSupply !== 5000 ? (
                <>
                  <div
                    className="w-full px-10 py-4 mt-10 font-bold text-center text-black transition-all duration-300 bg-white rounded-md cursor-pointer lg:w-auto hover:bg-gray-400"
                    onClick={() => handleMintFunc()}
                  >
                    Mint Now
                  </div>
                  <div className="flex items-center justify-center w-full mt-2">
                    <h1 className="text-sm font-bold text-center text-white">
                      {maxMintCount} Mint per TX allowed
                    </h1>
                  </div>
                </>
              ) : (
                <h1 className="text-red-500 text-3xl text-center font-bold">
                  Sold Out!
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
        {loadingState && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 flex-col text-white">
            <ScaleLoader color="white" />
            Minting ...
          </div>
        )}
      </section>
    </motion.section>
  );
}

type NFTIMG = {
  id: number;
  imgurl: string;
};

const nftArray: NFTIMG[] = [
  {
    id: 1,
    imgurl: "/img/nft/v4-slider-img.png",
  },
  {
    id: 9,
    imgurl: "/img/nft/v4-slider-img2.png",
  },
  {
    id: 2,
    imgurl: "/img/nft/v4-slider-img3.png",
  },
  {
    id: 3,
    imgurl: "/img/nft/v4-slider-img4.png",
  },
  {
    id: 4,
    imgurl: "/img/nft/v4-slider-img5.png",
  },
  {
    id: 5,
    imgurl: "/img/nft/v4-slider-img6.png",
  },
  {
    id: 6,
    imgurl: "/img/nft/v4-slider-img7.png",
  },
  {
    id: 7,
    imgurl: "/img/nft/v4-slider-img8.png",
  },
  {
    id: 8,
    imgurl: "/img/nft/v4-slider-img9.png",
  },
  {
    id: 16,
    imgurl: "/img/nft/v4-slider-img10.png",
  },
  {
    id: 10,
    imgurl: "/img/nft/v4-slider-img11.png",
  },
  {
    id: 11,
    imgurl: "/img/nft/v4-slider-img12.png",
  },
  {
    id: 12,
    imgurl: "/img/nft/v4-slider-img13.png",
  },
  {
    id: 13,
    imgurl: "/img/nft/v4-slider-img14.png",
  },
  {
    id: 14,
    imgurl: "/img/nft/v4-slider-img15.png",
  },
  {
    id: 15,
    imgurl: "/img/nft/v4-slider-img16.png",
  },
];
