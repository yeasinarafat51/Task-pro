import banner from "../assets/banner3.jfif";
const Banner = () => {
  return (
    <>
      <div
        className="bg-cover bg-[#000000] bg-center h-[300px] w-full shadow"
        style={{ backgroundImage: `url(${banner})`, filter: "blur(0.5px)" }}
      >
        <div className="flex justify-between py-24 px-20">
          <h1 className="text-[#FFFFFF] text-4xl items-center text-center">
            Study In USA
          </h1>
          <p className="text-[#FFFFFF]">Home /Study Distention/USA</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
