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
import ROYALTYCONTRACT_ABI from "../../public/abis/ROYALTYCONTRACT_ABI.json";
import STAKINGCONTRACT_ABI from "../../public/abis/STAKINGCONTRACT_ABI.json";
import GFLRTOKENCONTRACT_ABI from "../../public/abis/GFLRTOKENCONTRACT_ABI.json";

import {
  MINTCONTRACT_ADDR,
  ROYALTYCONTRACT_ADDR,
  STAKINGCONTRACT_ADDR,
  TOKENCONTRACT_ADDR,
} from "../config";
import { useWeb3React } from "@web3-react/core";
import { errorAlert, successAlert } from "../components/toastGroup";

export default function Claim() {
  const { account } = useWeb3React();

  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [claimableAmount, setClaimableAmount] = useState<number>(0);
  const [lifeTimeReward, setLifeTimeReward] = useState<number>(0);
  const [royaltyReward, setRoyaltyReward] = useState<number>(0);
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [pendingStakingReward, setPendingStakingReward] = useState<number>(0);
  const [onBoarding, setOnBoardingState] = useState<boolean>(false);
  const [royaltyClaimState, setRoyaltyClaimState] = useState<boolean>(true);
  const [lastClaimState, setLastClaimState] = useState<number>(0);
  const [loadingState, setLoadingState] = useState<boolean>(false);

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

  const ROYALTYCONTRACT = new ethers.Contract(
    ROYALTYCONTRACT_ADDR,
    ROYALTYCONTRACT_ABI,
    Signer
  );

  const STAKINGCONTRACT = new ethers.Contract(
    STAKINGCONTRACT_ADDR,
    STAKINGCONTRACT_ABI,
    Signer
  );

  const TOKENCOUNTRACT = new ethers.Contract(
    TOKENCONTRACT_ADDR,
    GFLRTOKENCONTRACT_ABI,
    Signer
  );

  const get15ClaimData = async () => {
    const counts = await MINTCONTRACT.balanceOf(account);
    setTotalSupply(Number(counts));
    const amount = await MINTCONTRACT.claimableAmount(account);
    setClaimableAmount(
      Number(parseFloat(ethers.utils.formatEther(amount.toString())).toFixed(5))
    );
    const reward = await MINTCONTRACT.getLifetimeRewards(account);
    setLifeTimeReward(
      Number(parseFloat(ethers.utils.formatEther(reward.toString())).toFixed(5))
    );
  };

  const get10RoyaltyData = async () => {
    const royalty = await ROYALTYCONTRACT.getTotalRewardsForAddress(account);
    setRoyaltyReward(
      Number(
        parseFloat(ethers.utils.formatEther(royalty.toString())).toFixed(4)
      )
    );
    const state = await ROYALTYCONTRACT.hasClaimedAllRewards(account);
    setRoyaltyClaimState(state);
  };

  const getStakingAmount = async () => {
    const token = await TOKENCOUNTRACT.balanceOf(account);
    setTokenAmount(
      Number(parseFloat(ethers.utils.formatEther(token.toString())).toFixed(4))
    );
    const pendingReward = await STAKINGCONTRACT.getPendingRewards(account);
    setPendingStakingReward(
      Number(
        parseFloat(ethers.utils.formatEther(pendingReward.toString())).toFixed(
          4
        )
      )
    );
    const state = await STAKINGCONTRACT.getOnboardedStatus(account);
    setOnBoardingState(state);
    const lastState = await STAKINGCONTRACT.lastClaimed(account);
    setLastClaimState(Number(lastState));
  };

  useEffect(() => {
    if (account) {
      setLoadingState(true);
      get15ClaimData();
      get10RoyaltyData();
      getStakingAmount();
      setLoadingState(false);
    }
  }, [account]);

  const handleOnboardFunc = async () => {
    if (!account) {
      errorAlert("please connect wallet");
    } else {
      setLoadingState(true);
      await STAKINGCONTRACT.onBoardUser()
        .then((tx: any) => {
          tx.wait()
            .then(() => {
              successAlert("OnBoarding Successful!");
              get15ClaimData();
              get10RoyaltyData();
              getStakingAmount();
              setLoadingState(false);
            })
            .catch(() => {
              errorAlert("OnBoarding not success!");
              setLoadingState(false);
            });
        })
        .catch(() => {
          errorAlert("OnBoarding not success!");
          setLoadingState(false);
        });
    }
  };

  const handleMintRewardFunc = async () => {
    if (!account) {
      errorAlert("please connect wallet");
    } else if (claimableAmount === 0) {
      errorAlert("Claim amount is 0.");
    } else {
      setLoadingState(true);
      await MINTCONTRACT.claim()
        .then((tx: any) => {
          tx.wait()
            .then(() => {
              successAlert("Claim Successful!");
              get15ClaimData();
              get10RoyaltyData();
              getStakingAmount();
              setLoadingState(false);
            })
            .catch(() => {
              errorAlert("Claim not success!");
              setLoadingState(false);
            });
        })
        .catch(() => {
          errorAlert("Claim not success!");
          setLoadingState(false);
        });
    }
  };

  const handleRoyaltyClaim = async () => {
    if (!account) {
      errorAlert("please connect wallet");
    } else if (royaltyReward === 0) {
      errorAlert("Claim amount is 0.");
    } else {
      setLoadingState(true);
      await ROYALTYCONTRACT.claimAllRewards({ gasLimit: 3000000 })
        .then((tx: any) => {
          tx.wait()
            .then(() => {
              successAlert("Claim Successful!");
              get15ClaimData();
              get10RoyaltyData();
              getStakingAmount();
              setLoadingState(false);
            })
            .catch(() => {
              errorAlert("Claim not success!");
              setLoadingState(false);
            });
        })
        .catch(() => {
          errorAlert("Claim not success!");
          setLoadingState(false);
        });
    }
  };

  const handleStakingClaimFunc = async () => {
    if (!account) {
      errorAlert("please connect wallet");
    } else if (pendingStakingReward === 0) {
      errorAlert("Claim amount is 0.");
    } else {
      setLoadingState(true);
      await STAKINGCONTRACT.claimRewards({ gasLimit: 3000000 })
        .then((tx: any) => {
          tx.wait()
            .then(() => {
              successAlert("Claim Successful!");
              get15ClaimData();
              get10RoyaltyData();
              getStakingAmount();
              setLoadingState(false);
            })
            .catch(() => {
              errorAlert("Claim not success!");
              setLoadingState(false);
            });
        })
        .catch(() => {
          errorAlert("Claim not success!");
          setLoadingState(false);
        });
    }
  };

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
        <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 mt-[100px] lg:mt-[100px] w-full gap-5 pb-10 z-50">
          <Link href={"/"} passHref>
            <div className="w-full my-5 text-right transition-all duration-300 hover:translate-x-2">
              <h1 className="font-bold text-right text-white cursor-pointer">{`<- Back to Home`}</h1>
            </div>
          </Link>
          <div className=" w-full gap-4 mt-10 flex flex-col">
            <div className="p-2 border-[1px] border-gray-400 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm relative flex flex-col items-start md:items-center justify-center min-h-[30vh]">
              <div className="absolute top-0 bottom-0 -z-[1] left-0 right-0 flex items-center justify-center">
                <h1 className="xl:text-[80px] lg:text-[70px] md:text-[70px] text-[45px] font-bold text-red-400 opacity-60">
                  15% Claim
                </h1>
              </div>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Total NFTs: {totalSupply}s
              </h1>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Claimable rewards: {claimableAmount}
              </h1>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Lifetime rewards: {lifeTimeReward}
              </h1>
              <div
                className="w-full px-10 py-4 mt-10 font-bold text-center text-black transition-all duration-300 bg-white rounded-md cursor-pointer hover:bg-gray-400 bottom-0 absolute left-0 right-0"
                onClick={() => handleMintRewardFunc()}
              >
                Claim Now
              </div>
            </div>
            <div className="p-2 border-[1px] border-gray-400 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm relative  flex flex-col items-start md:items-center justify-center min-h-[30vh]">
              <div className="absolute top-0 bottom-0 -z-[1] left-0 right-0 flex items-center justify-center">
                <h1 className="xl:text-[80px] lg:text-[70px] md:text-[70px] text-[45px] font-bold text-red-400 opacity-60">
                  10% Royalty
                </h1>
              </div>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Total NFTs: {totalSupply}s
              </h1>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Claimable amount:{royaltyReward}
              </h1>
              {!royaltyClaimState && (
                <div
                  className="w-full px-10 py-4 mt-10 font-bold text-center text-black transition-all duration-300 bg-white rounded-md cursor-pointer hover:bg-gray-400  bottom-0 absolute left-0 right-0"
                  onClick={() => handleRoyaltyClaim()}
                >
                  Claim Now
                </div>
              )}
            </div>
            <div className="p-2 border-[1px] border-gray-400 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm relative  flex flex-col items-start md:items-center justify-center min-h-[30vh]">
              <div className="absolute top-0 bottom-0 -z-[1] left-0 right-0 flex items-center justify-center">
                <h1 className="xl:text-[80px] lg:text-[70px] md:text-[70px] text-[45px] font-bold text-red-400 opacity-60">
                  Staking
                </h1>
              </div>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Total GFLR token: {tokenAmount}
              </h1>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Total NFTs: {totalSupply}
              </h1>
              <h1 className="text-white md:text-3xl text-2xl font-bold">
                Claimable rewards: {pendingStakingReward}
              </h1>
              <div className="w-full flex gap-2 absolute left-0 right-0 bottom-0">
                {lastClaimState === 0 && (
                  <div
                    className={`w-full py-4 font-bold text-center text-black transition-all duration-300 bg-white rounded-md cursor-pointer hover:bg-gray-400`}
                    onClick={() => handleOnboardFunc()}
                  >
                    On Boarding
                  </div>
                )}
                {lastClaimState !== 0 && (
                  <div
                    className={`w-full py-4 font-bold text-center text-black transition-all duration-300 bg-white rounded-md cursor-pointer hover:bg-gray-400`}
                    onClick={() => handleStakingClaimFunc()}
                  >
                    Claim
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[3] area">
          <ul className="circles z-[3]">
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
        {loadingState && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 flex-col text-white">
            <ScaleLoader color="white" />
          </div>
        )}
      </section>
    </motion.section>
  );
}
