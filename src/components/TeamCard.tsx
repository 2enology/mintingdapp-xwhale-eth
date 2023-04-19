import { DiscordIcon, TwitterIcon } from "./svgIcons";

export default function TeamCard() {
  return (
    <div className="relative w-full p-3">
      <div className="w-[20px] h-[20px] border-t-[1px] border-[#14c2a3] absolute top-0 left-0 border-l-[1px]" />
      <div className="w-[20px] h-[20px] border-t-[1px] border-[#14c2a3] absolute top-0 right-0 border-r-[1px]" />
      <div className="w-[20px] h-[20px] border-b-[1px] border-[#14c2a3] absolute bottom-0 left-0 border-l-[1px]" />
      <div className="w-[20px] h-[20px] border-b-[1px] border-[#14c2a3] absolute bottom-0 right-0 border-r-[1px]" />
      <div className="border-[1px] border-gray-800 p-3">
        <img
          src={`/img/nft/v4-slider-img.png`}
          className="z-10 w-90"
          alt="nftCollectionSlider"
        />
        <div className="relative z-20 w-full p-3 -mt-8">
          <div className="py-4 bg-gray-800 text-[#14c2a3] text-center">
            CO-Founder: SAAD
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full gap-5 ">
          <TwitterIcon color="#14c2a3" />
          <DiscordIcon color="#14c2a3" />
        </div>
      </div>
    </div>
  );
}
