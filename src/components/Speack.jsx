/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import natur from "../assets/natur.png";
import fram from "../assets/Frame 144.png";

const Speack = () => {
  return (
    <div className="my-8 relative">
      <div
        className="bg-cover bg-center h-[300px] w-full shadow"
        style={{ backgroundImage: `url(${natur})`, filter: "blur(0.5px)" }}
      >
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center text-[#FFFFFF]">
            {/* // eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities */}
            Student's <span className="text-[#F6941E] "> Speak</span>
          </h1>
          <p className="text-center  text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex justify-center absolute -mt-36 mx-16">
        <img src={fram} alt="" />
      </div>
    </div>
  );
};

export default Speack;
