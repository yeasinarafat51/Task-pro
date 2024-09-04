import Logo from "../assets/Logo.png";

import { FaArrowRightLong, FaAngleDown } from "react-icons/fa6";

const Nabvar = () => {
  return (
    <nav className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
          </div>
          <div className="flex  items-center justify-center ">
            <img className="w-fit" src={Logo} alt="" />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md  px-3 py-2 text-sm font-medium text-black "
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </a>
                <div className="flex items-center px-2">
                  <a
                    href="#"
                    className="rounded-md  py-2 text-sm font-medium text-[#F6941E] "
                  >
                    Study Distention
                  </a>
                  <FaAngleDown className="text-[#F6941E]" />
                </div>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="rounded-md  py-2 text-sm font-medium  text-black "
                  >
                    Gallery
                  </a>
                  <FaAngleDown />
                </div>
                <a
                  href="#"
                  className="rounded-md  px-3 py-2 text-sm font-medium text-black "
                  aria-current="page"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  Contact us{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center border shadow px-2">
              <a href="#">
                <button className="bg-[#FFFFFF] text-[#F6941E] md: md:py-3 px-2 py-1 rounded-md md:text-base text-xs border-">
                  Enquire Now
                </button>
              </a>
              <FaArrowRightLong />
            </div>

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <img id="switch" className="w-10 md:w-fit" src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="rounded-md  px-3 py-2 text-sm font-medium text-black "
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
          >
            About Us
          </a>
          <div className="flex items-center px-2">
            <a
              href="#"
              className="rounded-md  py-2 text-sm font-medium text-[#F6941E] "
            >
              Study Distention
            </a>
            <FaAngleDown className="text-[#F6941E]" />
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="rounded-md  py-2 text-sm font-medium  text-black "
            >
              Gallery
            </a>
            <FaAngleDown />
          </div>
          <a
            href="#"
            className="rounded-md  px-3 py-2 text-sm font-medium text-black "
            aria-current="page"
          >
            Blogs
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
          >
            Contact us{" "}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
