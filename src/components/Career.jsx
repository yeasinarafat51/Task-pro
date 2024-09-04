import { FaArrowRightLong } from "react-icons/fa6";
import img2 from '../assets/image 15 (1).png'

const Career = () => {
    return (
        <div  className='flex justify-evenly my-20'>
             <div>
                <h1 className='text-4xl font-bold'> <span  className="text-[#F6941E] ">Careers </span>& Industry</h1>
                <p className='my-6'>One of the most technologically powerful and dynamic countries, USA is the <br /> largest & most dominant economy globally. Sectors that empower this world’s <br /> most productive economy include Healthcare, Technology, Construction, <br /> Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with <br /> high remuneration prospects for international students include Medicine, <br /> Computer & Information Systems Managers, Architectural & Engineering <br /> Managers and Marketing & Financial Managers. Standard of living in the USA <br /> is among the highest in the world with high per capita income. This nation <br /> performs very well in many measures of well-being such as income & wealth, <br /> health status, jobs and earnings, education & skills and environmental quality.</p>
               
                <button className='flex items-center text-[#1E1E1E] border-[#F6941E] btn outline-orange-500 font-bold bg-[#FFFFFF] p-2 my-8'>Read More  <FaArrowRightLong className='mx-1' /></button>
            </div>
            <div className=''>
            <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default Career;