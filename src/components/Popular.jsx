import univer from '../assets/univer.png'
import pic1 from '../assets/image 17.png'
import pic2 from '../assets/image 17 (1).png'
import pic3 from '../assets/image 17 (2).png'
import { FaArrowRightLong } from "react-icons/fa6";


const Popular = () => {
    return (
        <div>
            <div
        className="bg-cover bg-center h-[700px] w-full shadow"
        style={{ backgroundImage: `url(${univer})`, filter: "blur(0.5px)" }}
      >
        <h1 className='text-4xl font-bold text-center py-12'><span className='text-[#F6941E]'>Popular</span> Universities</h1>
       <div className='grid grid-cols-3 gap-4 mx-24'>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[205px] md:p-12 p-6  ">
        <div className='flex justify-center pb-2'>
        <img src={pic1} alt=""/>
        </div>
        <p className="text-[#1E1E1E] font-normal text-center my-">University of Connecticut, Connecticut <br />
        (Public Ivy)</p>
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[205px] md:p-12 p-6  ">
        <div className='flex justify-center pb-2'>
        <img src={pic2} alt=""/>
        </div>
        <p className="text-[#1E1E1E] font-normal text-center my-">Arizona State University, Phoenix, <br />
        Arizona</p>
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[205px] md:p-12 p-6  ">
        <div className='flex justify-center pb-2'>
        <img src={pic3} alt=""/>
        </div>
        <p className="text-[#1E1E1E] font-normal text-center my-">University of California, Riverside,   <br />
        California</p>
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[205px] md:p-12 p-6  ">
        <div className='flex justify-center pb-2'>
        <img src={pic2} alt=""/>
        </div>
        <p className="text-[#1E1E1E] font-normal text-center my-">Arizona State University, Phoenix, <br />
        Arizona</p>
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[205px] md:p-12 p-6  ">
        <div className='flex justify-center pb-2'>
        <img src={pic3} alt=""/>
        </div>
        <p className="text-[#1E1E1E] font-normal text-center my-">University of California, Riverside,   <br />
        California</p>
       
       
       </div>
       <div className="bg-[#FFFFFF] border md:w-[364px] md:h-[205px] md:p-12 p-6  ">
        <div className='flex justify-center pb-2'>
        <img src={pic1} alt=""/>
        </div>
        <p className="text-[#1E1E1E] font-normal text-center my-">University of Connecticut, Connecticut <br />
        (Public Ivy)</p>
       
       </div>
      <div className='flex justify-center ml-96 pl-48 py-8'>
      <button className="flex items-center   text-[#FFFFFF]  btn outline-orange-500 font-bold bg-[#1E1E1E] p- ">
          Read More <FaArrowRightLong className="mx-1" />
        </button>
      </div>
       </div>

      </div>
        </div>
    );
};

export default Popular;