import CollectionSlider from "../components/CollectionSlider";

export default function Collection() {
  return (
    <section
      id="collection"
      className="border-b-[1px] border-gray-800 border-dashed bg-[#141a31]"
    >
      <div className="w-full min-h-[90vh] pb-10">
        <h1 className="text-[50px] md:text-[75px] text-gray-800 text-center font-extrabold uppercase">
          {" "}
          Collection
        </h1>
        <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
          Collection
        </p>
        <div className="w-full mt-20">
          <CollectionSlider />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="md:text-[100px] text-[50px] font-extrabold text-center text-white">
            10000
          </h1>
          <h1 className="text-xl text-center text-gray-400 uppercase">
            Total Items in collection
          </h1>
          <h1 className="text-xl text-center text-gray-400 uppercase">
            1000 Doodle Bunny; 500 MALES & 500 FEMALES with 6 different traits.
            16 backgrounds, 10 Cloths, 9 Hairs, 11 Eyes, 10 Skin colors & 10
            Mouths.
          </h1>
        </div>
      </div>
    </section>
  );
}
