import { RiDoubleQuotesL,  } from "react-icons/ri";

import { FaStar } from "react-icons/fa";
import eplis from '../assets/Ellipse 2.png'
import eplis2 from '../assets/Ellipse 2 (1).png'
import eplis3 from '../assets/Ellipse 2 (2).png'

const Student = () => {
    return (
        <div className="mx-24 my-12">
             <h1 className="text-4xl font-semibold  my-8">
        <span className="text-[#F6941E]">What’s</span>  Our student say
      </h1>
      <p className='text-[#1E1E1E] my-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
      <div>
     <div  className="grid grid-cols-3">
     <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[270px] pl-4 py-8 ">
        <div className=''>
        <RiDoubleQuotesL  className="text-[#F6941E]"/>
        </div>
        <p className="text-[#1E1E1E] font-thin text- my-4">We are the representatives of more than 30+ <br /> universities in Australian countries and our <br /> admission </p>
        <div className="flex gap-1 my-4">
        
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        </div>
        <div className="flex">
            <img src={eplis} alt="" />
            <div className="mx-2">
                <p className="font-semibold">Lisa Dowen</p>
                <p>Student</p>
            </div>
        </div>
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[270px] pl-4 py-8 ">
        <div className=''>
        <RiDoubleQuotesL  className="text-[#F6941E]"/>
        </div>
        <p className="text-[#1E1E1E] font-thin text- my-4">We are the representatives of more than 30+ <br /> universities in Australian countries and our <br /> admission </p>
        <div className="flex gap-1 my-4">
        
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        </div>
        <div className="flex">
            <img src={eplis2} alt="" />
            <div className="mx-2">
                <p className="font-semibold">Lisa Dowen</p>
                <p>Student</p>
            </div>
        </div>
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[270px] pl-4 py-8 ">
        <div className=''>
        <RiDoubleQuotesL  className="text-[#F6941E]"/>
        </div>
        <p className="text-[#1E1E1E] font-thin text- my-4">We are the representatives of more than 30+ <br /> universities in Australian countries and our <br /> admission </p>
        <div className="flex gap-1 my-4">
        
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        <FaStar  className="text-[#F6941E]" />
        </div>
        <div className="flex">
            <img src={eplis3} alt="" />
            <div className="mx-2">
                <p className="font-semibold">Lisa Dowen</p>
                <p>Student</p>
            </div>
        </div>
       
       </div>
     </div>
      </div>

        </div>
    );
};

export default Student;