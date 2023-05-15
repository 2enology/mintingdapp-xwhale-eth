export default function About() {
  return (
    <section
      id="about"
      className="border-b-[1px] border-gray-800 border-dashed"
    >
      <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 min-h-[80vh] pb-10">
        <h1 className="text-[50px] md:text-[75px] text-gray-800 text-center font-extrabold mt-10 uppercase">
          {" "}
          ABout us
        </h1>
        <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
          About us
        </p>
        <div className="grid w-full grid-cols-1 gap-10 mt-20 md:grid-cols-2">
          <div className="">
            <h1 className="text-3xl font-bold text-white uppercase">
              WHAT IS CYBOX?
            </h1>
            <p className="text-xl font-normal text-gray-400">
              Maecenas sit pretium, cras in. In quisque sem id eget. In vel
              gravida ut adipiscing integer felis. Id ac non arcu facilisi proin
              ultrices sed. Id accumsan quam viverra ante in id integer ut.
              Volutpat lobortis dolor etiam dis interdum tincidunt senectus.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4 border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] p-3">
              <p className="text-3xl font-bold text-white">
                Unique, 1/1 Generated
              </p>
              <p className="text-lg font-normal text-gray-400">
                Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet
                phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris
                cursus lorem mattis arcu.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] p-3">
              <p className="text-3xl font-bold text-white">
                Unique, 1/1 Generated
              </p>
              <p className="text-lg font-normal text-gray-400">
                Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet
                phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris
                cursus lorem mattis arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
