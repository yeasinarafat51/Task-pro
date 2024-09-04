import group1 from '../assets/Group.png'
import group2 from '../assets/Group (1).png'
import group3 from '../assets/Group (2).png'

const Self = () => {
    return (
        <div className=' grid grid-cols-3 gap-2 mx-28 my-12'>
            <div className="bg-[#464646] border md:w-[359px] md:h-[300px]   ">
            <div className="flex justify-center items-center my-8">
              <img src={group1} alt="" />
            </div>
            <p className="text-[#FFFFFF] font-bold text-center my-">
            
            Self-Expression
            </p>
            <p className='text-[#D9D9D9] text-center'>sit aAdipiscing sed faucibus vitae nibh <br /> vitae id tortor sit. Integer quis volutpat <br /> aliquam turpis vitae risus quis euismod <br /> lectus. Quam in mauris sem cras orci sed <br /> luctus sit convallis.</p>
          </div>
            <div className="bg-[#464646] border md:w-[359px] md:h-[300px]   ">
            <div className="flex justify-center items-center my-8">
              <img src={group2} alt="" />
            </div>
            <p className="text-[#FFFFFF] font-bold text-center my-">
            Confidence
            </p>
            <p className='text-[#D9D9D9] text-center'>sit aAdipiscing sed faucibus vitae nibh <br /> vitae id tortor sit. Integer quis volutpat <br /> aliquam turpis vitae risus quis euismod <br /> lectus. Quam in mauris sem cras orci sed <br /> luctus sit convallis.</p>
          </div>
            <div className="bg-[#464646] border md:w-[359px] md:h-[300px]   ">
            <div className="flex justify-center items-center my-8">
              <img src={group3} alt="" />
            </div>
            <p className="text-[#FFFFFF] font-bold text-center my-">
            Enhanced Authority
            </p>
            <p className='text-[#D9D9D9] text-center'>sit aAdipiscing sed faucibus vitae nibh <br /> vitae id tortor sit. Integer quis volutpat <br /> aliquam turpis vitae risus quis euismod <br /> lectus. Quam in mauris sem cras orci sed <br /> luctus sit convallis.</p>
          </div>
        </div>
    );
};

export default Self;