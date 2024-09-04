import fram from '../assets/Frame 217.png'

const Application = () => {
    return (
        <div className="container text-center mt-12 mx-auto">
            <h1 className=" text-4xl font-medium mb-8"><span className="text-[#F6941E] ">Our</span> Application Process</h1>
            <p className="text-center text-[#1E1E1E]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex justify-center my-8'>
            <img src={fram} alt="" />
            </div>
        </div>
    );
};

export default Application;