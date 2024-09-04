import img1 from '../assets/image 15.png'
import { FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const Study = () => {
    return (
        <div className='flex justify-evenly my-20'>
            <div className=''>
            <img src={img1} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Why Study <span  className="text-[#F6941E] ">in USA?</span></h1>
                <p className='my-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots <br /> in a piece of classical Latin literature from 45 BC, making it over 2000 years <br /> old. Richard McClintock, a Latin professor at Hampden-</p>
                <h1 className='text-xl font-bold my-4'>Quick facts</h1>
                <div className='flex items-center mb-2'>
                <FaStar className='text-[#F6941E] ' /> <p className='px-2 text-[#1E1E1E]'>USA hosts more than a million international students</p>
                </div>
                <div className='flex items-center mb-2'>
                <FaStar className='text-[#F6941E] ' /> <p className='px-2 text-[#1E1E1E]'>Over 25% of world’s top 100 universities are in the USA</p>
                </div>
                <div className='flex items-center mb-2'>
                <FaStar className='text-[#F6941E] ' /> <p className='px-2 text-[#1E1E1E]'>Post-study stay back visas (OPT) up to 3 years for STEM programs</p>
                </div>
                <div className='flex items-center mb-2'>
                <FaStar className='text-[#F6941E] ' /> <p className='px-2 text-[#1E1E1E]'>Internships (CPT) up to 12 months while studying</p>
                </div>
                <div className='flex items-center mb-2'>
                <FaStar className='text-[#F6941E] ' /> <p className='px-2 text-[#1E1E1E]'>Merit Based & Need Based Scholarships</p>
                </div>
                <button className='flex items-center text-[#FFFFFF] bg-[#F6941E] p-2 my-8'>See More  <FaArrowRightLong className='mx-1' /></button>
            </div>
        </div>
    );
};

export default Study;