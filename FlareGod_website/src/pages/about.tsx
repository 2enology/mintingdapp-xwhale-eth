import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-b-[1px] border-gray-800 border-dashed bg-[#141a31] bg-opacity-70 backdrop-blur-sm"
    >
      <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 min-h-[80vh] pb-10 pt-10">
        <Fade direction="down">
          <h1 className="text-[50px] md:text-[75px] text-white text-center font-extrabold mt-10 uppercase">
            {" "}
            ABout us
          </h1>
          <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
            About us
          </p>
        </Fade>
        <Fade>
          <div className="grid w-full grid-cols-1 gap-10 mt-20 md:grid-cols-2">
            <div className="rounded-lg">
              <h1 className="text-2xl font-bold text-center text-white uppercase md:text-3xl">
                WHAT IS Flaregods?
              </h1>
              <p className="text-xl font-normal text-gray-400">
                Welcome to Flaregods, the home of the most powerful warriors in
                the Flare Network. Our project consists of 5000 unique and
                intricately designed Flaregods warriors, each with their own
                distinct personalities and abilities. These NFTs are truly
                one-of-a-kind and represent the ultimate power in the Flare
                Network.
              </p>
              <br></br>
              <p className="text-xl font-normal text-gray-400">
                Our artwork has been created by a team of talented and
                experienced artists, who have poured their heart and soul into
                every Flaregod warrior. Each NFT is a masterpiece in its own
                right, combining stunning visuals with deep lore and backstory.
              </p>
              <br></br>
              <p className="text-xl font-normal text-gray-400">
                We invite you to explore our collection and discover the
                Flaregod warrior that speaks to you. Whether you're a collector,
                a fan of NFTs, or simply appreciate beautiful artwork, we're
                confident that you'll find something you love.
              </p>
              <br></br>
              <p className="text-xl font-normal text-gray-400">
                At Flaregods, we are a small team of dedicated individuals who
                have come together to create something truly special. We prefer
                to remain anonymous, as we believe that the focus should be on
                our project and our artwork, rather than on us as individuals.
              </p>
            </div>
            <div className="flex flex-col rounded-md gap-7">
              <div className="flex flex-col gap-4 border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] p-3 rounded-md">
                <p className="text-3xl font-bold text-white">The Mint?</p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Minting will be open for all, Whitelist will have no limit
                  (20% discount). 15% each mint is shared to all holders, the
                  earlier you mint & the more NFTs you hold, the more rewards
                  you can claim.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] p-3 rounded-md">
                <p className="text-3xl font-bold text-white">
                  What are the benefits?
                </p>
                <p className="text-lg font-normal text-gray-400">
                  By minting and holding one of our 5000 unique and intricately
                  designed Flaregod warriors, you'll receive the following
                  benefits:<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  15% cashback on every minted Flaregod.<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  10% of every sale made on the secondary marketplace goes to
                  holders.<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Receive 10k GFlare (GFLR) token with every mint.<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Secret progam - FlareGods NFTs & GFLARE token.<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Not only will you be supporting our project and owning a
                  one-of-a-kind piece of artwork, but you'll also have the
                  opportunity to earn a passive income by holding your Flaregod.
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="absolute top-0 bottom-0 md:min-h-screen lg:min-h-[120vh] xl:min-h-[60vh] min-h-[120vh] area">
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
