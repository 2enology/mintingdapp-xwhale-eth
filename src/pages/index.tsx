/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import {
  DAWGSCONTRACTADDR,
  DAWGSIMGIPFSADDRESS,
  DAWGSIPFSADDRESS,
} from "../config";

import Card from "../components/Card";
import ParentCard from "../components/ParentCard";
import {
  errorAlert,
  infoAlert,
  successAlert,
  warningAlert,
} from "../components/toastGroup";
import { ScaleLoader } from "react-spinners";

import DOODLEBUNYABI from "../../public/abi/DAWGSNFTCONTRACTABI.json";
import BREEDINGABI from "../../public/abi/BREEDINGABI.json";
import BUNNYTOKENABI from "../../public/abi/BUNNYTOKENABI.json";

interface NFTType {
  name: string;
  tokenId: number;
  imgUrl: string;
}

interface PARENTNFTType {
  maleTokenId: number;
  feMaleTokenId: number;
  maleImgUrl: string;
  feMaleImgUrl: string;
  startedTime: number;
  breedAllow: boolean;
  owner: string;
}

interface WindowWithEthereum extends Window {
  ethereum?: any;
}

const Home: NextPage = () => {
  const { account } = useWeb3React();
  return (
    <main className="flex flex-col w-full">
      <img
        src="/img/home.jpg"
        className="object-cover w-full max-h-screen min-h-screen -z-10"
      />
      <div className="lg:px-[100px] md:px-[30px] px-5"></div>
    </main>
  );
};

export default Home;
