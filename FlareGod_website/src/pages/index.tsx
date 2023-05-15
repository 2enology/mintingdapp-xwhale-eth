/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./about";
import Collection from "./collection";
import RoadMap from "./roadmap";
import Team from "./team";
import { Bounce } from "react-awesome-reveal";
import Link from "next/link";
import { motion } from "framer-motion";

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

const Home: NextPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
    >
      <section className="relative flex flex-col w-full" id="#home">
        <img
          src="/img/home.jpg"
          className="fixed top-0 bottom-0 object-cover w-full h-full rounded-lg -z-10"
        />
        <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 mt-[100px] lg:mt-[200px] flex lg:flex-row flex-col-reverse w-full gap-5 pb-10">
          <Bounce>
            <div>
              <h1 className="2xl:text-[65px] xl:text-[55px] lg:text-[50px] md:text-[40px] text-[30px] font-extrabold text-white text-center lg:text-left">
                FlareGod NFTs FOR EVERYONE
              </h1>
              <p className="text-center text-gray-400 lg:text-left">
                Welcome to Flaregods, 5000 unique and intricately designed
                Flaregods warriors.
              </p>
              <div className="flex flex-col items-center justify-center gap-2 md:justify-start md:flex-row">
                <Link href="/mint" passHref>
                  <button className="w-full px-10 py-4 mt-5 font-bold text-black transition-all duration-300 bg-white rounded-md lg:w-auto hover:bg-gray-400">
                    Mint
                  </button>
                </Link>
                <Link href="/claim" passHref>
                  <button className="w-full px-10 py-4 mt-5 font-bold text-black transition-all duration-300 bg-white rounded-md lg:w-auto hover:bg-gray-400">
                    Claim
                  </button>
                </Link>
                <Link href="/discord" passHref>
                  <button className="w-full px-10 py-4 mt-5 font-bold text-black transition-all duration-300 bg-white rounded-md lg:w-auto hover:bg-gray-400">
                    Discord
                  </button>
                </Link>
              </div>
            </div>
          </Bounce>
          <div className="flex items-center justify-center w-full lg:justify-end">
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
                      className="object-cover w-full"
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Collection />
      <RoadMap />
      <Team />
    </motion.section>
  );
};

export default Home;

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
