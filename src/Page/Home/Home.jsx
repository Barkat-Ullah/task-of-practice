/* eslint-disable react/no-unknown-property */
import Navbar from "../Navbar/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
      <div>
        <div
            className="hero min-h-[90vh]"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
           
          <div   className="hero-overlay bg-opacity-60"></div>
          <div   className="hero-content text-center text-neutral-content">
            <div   className="hero-content flex-col lg:flex-row-reverse">
          
              <div>
                <h1   className="text-5xl font-bold">Box Office News!</h1>
                <p   className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button   className="btn btn-primary">
                  Get Started <AiOutlineArrowRight></AiOutlineArrowRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
