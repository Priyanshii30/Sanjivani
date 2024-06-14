import { RiArrowRightSLine } from "react-icons/ri"; // Importing right arrow icon
import { TypewriterEffectSmoothDemo } from "./Hero";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Hash = () => {
  const { userLoggedIn } = useAuth();

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}>
        <source src="https://xyzhomework-production.s3.us-west-1.amazonaws.com/qimages/e159966a-131c-4b48-96d3-d6c37a732567.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div style={{ width: "100vw", margin: "auto", height: "100vh", borderRadius: "30px", backgroundRepeat: "no-repeat", paddingLeft: "2.25rem", paddingRight: "1.2", paddingTop: " 2rem", paddingBottom: "1rem", backgroundSize: "100% 100%", backgroundPosition: "center", }}>
        <div className="bg-gif">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{ backgroundColor: 'transparent' }}>
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-xl text-8xl mb-4 font-medium text-gray-900" style={{ fontSize: "3.25rem" }}>
                  <div style={{ width: "100%", color: "white" }}>
                    <TypewriterEffectSmoothDemo />
                  </div>
                </h1>
                
                <div className="flex justify-center" style={{ marginTop: "13.25rem" }}>
                  <button className="inline-flex items-center justify-center text-dark bg-dark-500 border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg" style={{ background: "black", color: "white", boxShadow: "0px 4px 6px rgba(223, 255, 253)",border:'3px solid white' }}>
                    <Link to={"/auth/user"}>
                      <span className="flex items-center">
                        Enter free
                        <RiArrowRightSLine className="ml-2" />
                      </span>
                    </Link>
                  </button>
                  {!userLoggedIn && (
                    <button className="ml-4 font-bold inline-flex text-black-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" style={{ color: "black", boxShadow: "0px 4px 6px rgba(6,6,6)" }}>
                      Sign Up
                    </button>
                  )}
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hash;
