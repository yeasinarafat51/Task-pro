import img7 from "../assets/image 12.png";
import img8 from "../assets/image 12 (1).png";
import img9 from "../assets/image 12 (2).png";
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { FaArrowRightLong, FaUser } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-8 text-center">
        Our Latest <span className="text-[#F6941E] ">Blog</span>
      </h1>
      <p className="text-center text-[#1E1E1E]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor <br /> incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-3 gap-2 mx-24 my-8">
        <div className="card bg-base-100 w-[364px] shadow-xl">
          <figure>
            <img src={img7} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex items-center px-2">
              <LiaCreativeCommonsShare />
              <p>July 24, 2024</p>
            </div>
            <p className="text-lg font-semibold">
              Emotional Intelligence in <br /> Education Building
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FaUser />
                <p>Back Theme</p>
              </div>
              <div className="flex items-center gap-1">
                <TiMessages />
                <p>25 Comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-[364px] shadow-xl">
          <figure>
            <img src={img8} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex items-center px-2">
              <LiaCreativeCommonsShare />
              <p>July 24, 2024</p>
            </div>
            <p className="text-lg font-semibold">
              Emotional Intelligence in <br /> Education Building
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FaUser />
                <p>Back Theme</p>
              </div>
              <div className="flex items-center gap-1">
                <TiMessages />
                <p>25 Comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-[364px] shadow-xl">
          <figure>
            <img src={img9} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex items-center px-2">
              <LiaCreativeCommonsShare />
              <p>July 24, 2024</p>
            </div>
            <p className="text-lg font-semibold">
              Emotional Intelligence in <br /> Education Building
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FaUser />
                <p>Back Theme</p>
              </div>
              <div className="flex items-center gap-1">
                <TiMessages />
                <p>25 Comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ml-96 pl-48 py-8">
          <button className="flex items-center   text-[#F6941E]  btn outline-orange-500 font-bold bg-[#f7f3f3] p- ">
            Browse More Blog
            <FaArrowRightLong className="mx-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
