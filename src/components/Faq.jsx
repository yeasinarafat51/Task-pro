/* eslint-disable react/no-unescaped-entities */
import img5 from "../assets/image 18.png";

const Faq = () => {
  return (
    <div className="my-12 grid grid-cols-2 gap-12 ml-36">
      <div>
        <h1 className="text-4xl font-bold my-8">
          Study in <span className="text-[#F6941E] ">USA FAQ's</span>
        </h1>
        <p className="my-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can you work while studying in the United States?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can you work while studying in the United States?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can you work while studying in the United States?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can you work while studying in the United States?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can you work while studying in the United States?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <img src={img5} className="h-[480px]" alt="" />
      </div>
    </div>
  );
};

export default Faq;
