import img4 from '../assets/image 15 (2).png'

const Education = () => {
    return (
        <div className="flex justify-evenly my-20">
        <div className="">
          <img src={img4} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold my-12">
             <span className="text-[#F6941E] ">Cost </span>of education
          </h1>
          <p className="my-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots <br /> in a piece of classical Latin literature from 45 BC,
            making it over 2000 years <br /> old. Richard McClintock, a Latin
            professor at Hampden-
          </p>
          <div>
            <li className='text-[#F6941E] mb-2'>Total Expenses 41535</li>
            <li className='mb-2'>Tuition Fees for one-year (Indicative) 25000</li>
            <li className='mb-2'>Living and Accommodation 15000</li>
            <li className='mb-2'>Airfare from India to USA 1000</li>
            <li className='mb-2'>Visa Fees (Visa & SEVIS) 535</li>
          </div>
   
        </div>
      </div>
    );
};

export default Education;