/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import { switchNetwork, injected } from "../connecthook/switch-network";
import { FaWallet } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const router = useRouter();
  // const [open, setOpen] = useState(false);

  const { account, chainId, activate, deactivate } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);

  async function connect() {
    if (chainId !== 16 || chainId === undefined) {
      switchNetwork();
    }
    try {
      console.log("clicked");
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="w-full h-[80px] flex justify-between 2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[20px] fixed z-[59] py-[14px] items-center px-4 backdrop-blur-lg">
        <Head>
          <link rel="icon" href="/img/logo.png" />
        </Head>
        <Link href={`/`} passHref>
          <div className="bg-white cursor-pointer backdrop-blur-sm bg-opacity-10 border-[1px] rounded-lg border-gray-400">
            <img
              src="/img/logo.png"
              className=" object-cover object-center w-[50px] h-[50px] p-1"
              alt="logo"
            />
          </div>
        </Link>
        <div
          className="items-center h-full px-4 py-5 text-white border-[1px] border-gray-400 rounded-lg text-whitebg-white backdrop-blur-sm bg-opacity-10 bg-white hidden md:flex
      justify-between lg:gap-10 md:gap-3"
        >
          <Link href={`/`} passHref>
            <p className="font-normal text-white transition-all duration-300 cursor-pointer text-md hover:text-green-500">
              Home
            </p>
          </Link>
          <a
            href="#about"
            className="font-normal text-white transition-all duration-300 cursor-pointer text-md hover:text-green-500"
          >
            About
          </a>
          <a
            href="#collection"
            className="font-normal text-white transition-all duration-300 cursor-pointer text-md hover:text-green-500"
          >
            Collection
          </a>
          <a
            className="font-normal text-white transition-all duration-300 cursor-pointer text-md hover:text-green-500"
            href="#roadmap"
          >
            RoadMap
          </a>
          <a
            className="font-normal text-white transition-all duration-300 cursor-pointer text-md hover:text-green-500"
            href="#team"
          >
            Team
          </a>
        </div>

        <div className="flex items-center">
          {/* <Link href={"https://doodlebunnyflr.live/mint"} passHref>
          <li
            className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer gradient_link ${
              router.pathname === "/" ? "text-red-500 underline" : ""
            }`}
          >
            Mint
          </li>
        </Link> */}
          {account ? (
            <button
              onClick={() => disconnect()}
              className="px-2 py-3 text-white border-[1px] border-gray-400 rounded-lg backdrop-blur-sm font-normal bg-white bg-opacity-10"
            >
              <span className="flex gap-2 font-normal text">
                <FaWallet style={{ marginTop: "3%" }} />
                {account && account.slice(0, 4) + "..." + account.slice(-4)}
              </span>
            </button>
          ) : (
            <button
              onClick={() => connect()}
              className="px-2 py-3 text-white bg-opacity-10 border-[1px] border-gray-400 rounded-lg backdrop-blur-sm font-normal bg-white"
            >
              <span className="flex gap-2 font-normal text">
                {" "}
                <FaWallet style={{ marginTop: "3%" }} /> Connect wallet
              </span>
            </button>
          )}
        </div>
        <div
          className="p-1 cursor-pointer md:hidden border-[1px] border-gray-400 hover:border-white duration-300 transition-all rounded-lg"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu color="white" size={"30px"} />
        </div>
      </header>
      {menuOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[60] items-center justify-center bg-black opacity-95 md:hidden">
          <div className="flex items-center justify-end w-full px-3 py-4">
            <div
              className="p-1 border-[1px] border-gray-300 hover:border-white duration-300 transition-all rounded-lg
            cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose color="white" size={"32px"} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col justify-center gap-5 text-center lg:text-left lg:mx-0 lg:pl-4">
              <div className="flex flex-col items-center justify-center gap-10">
                <Link href={"/"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/" ? "text-cyan-500" : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </li>
                </Link>
                <a href="#about">
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/createraffle"
                        ? "text-cyan-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </li>
                </a>
                <a href="#collection">
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/createraffle"
                        ? "text-cyan-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Collection
                  </li>
                </a>
                <a href={"/#roadmap"}>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/createraffle"
                        ? "text-cyan-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Roadmap
                  </li>
                </a>
                <a href={"/#team"}>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/createraffle"
                        ? "text-cyan-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Team
                  </li>
                </a>
                <Link href={"/mint"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/mint"
                        ? "text-cyan-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Mint
                  </li>
                </Link>
                <Link href={"/claim"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/claim"
                        ? "text-cyan-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-cyan-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Claim
                  </li>
                </Link>
              </div>
              {account ? (
                <button
                  onClick={() => disconnect()}
                  className="px-2 py-3 text-white border-[1px] border-gray-400 rounded-lg backdrop-blur-sm font-normal bg-white bg-opacity-10"
                >
                  <span className="flex gap-2 font-normal text">
                    <FaWallet style={{ marginTop: "3%" }} />
                    {account && account.slice(0, 4) + "..." + account.slice(-4)}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => connect()}
                  className="px-2 py-3 text-white bg-opacity-10 border-[1px] border-gray-400 rounded-lg backdrop-blur-sm font-normal bg-white"
                >
                  <span className="flex gap-2 font-normal text">
                    {" "}
                    <FaWallet style={{ marginTop: "3%" }} /> Connect wallet
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
