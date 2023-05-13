import { Fade } from "react-awesome-reveal";
import CollectionSlider from "../components/CollectionSlider";

export default function Collection() {
  return (
    <section id="collection" className="mt-20">
      <div className="w-full min-h-[90vh]">
        <Fade direction="down">
          <h1 className="text-[50px] md:text-[75px] text-white text-center font-extrabold uppercase">
            {" "}
            Collection
          </h1>
          <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
            Collection
          </p>
        </Fade>
        <div className="w-full mt-20">
          <CollectionSlider />
        </div>
        <Fade>
          <div className="flex flex-col gap-5">
            <h1 className="md:text-[100px] text-[50px] font-extrabold text-center text-white">
              5000
            </h1>
            <h1 className="text-xl text-center text-gray-400 uppercase">
              Total Items in collection
            </h1>
            <h1 className="text-xl text-center text-gray-400 uppercase">
              5000 Flaregods; 12 different traits. 10 backgrounds, 4 Angelic
              Wings, 8 Divine Attire, 4 Divine Dazzel, 11 Headdress, 3 Mystic
              Vel, 7 Radiance, 6 Radiant Gaze, 10 Sentinel Plate, 10 Weapons &
              More.
            </h1>
          </div>
        </Fade>
      </div>
    </section>
  );
}
