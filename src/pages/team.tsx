import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "../components/TeamCard";
export default function Team() {
  return (
    <section
      id="team"
      className="border-b-[1px] border-gray-800 border-dashed bg-[#141a31]"
    >
      <div className="w-full min-h-[70vh] 2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5">
        <h1 className="text-[50px] md:text-[75px] text-gray-800 text-center font-extrabold uppercase">
          {" "}
          Our Core Team
        </h1>
        <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
          Our Core Team
        </p>
        <div className="grid w-full grid-cols-1 gap-5 mt-10 lg:grid-cols-4 md:grid-cols-2">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
}
