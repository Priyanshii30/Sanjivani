import React from "react";
import "./MainUser.css";
const MainUser: React.FC = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Technologies we offer</h1>
        <div className="h-1 w-20 bg-red-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{color:'black'}}>"Sanjivini: Your holistic mental wellness companion. Meet Acharya, our AI chatbot, and access healthcare resources for personalized support, stress management, and thriving in daily life."</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://www.shutterstock.com/image-vector/3d-artificial-intelligence-digital-brain-600nw-2288372371.jpg"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Archarya
                    </h2>
                    <p
                      className="leading-relaxed text-base"
                      style={{ color: "black" }}
                    >
                      "Meet our AI-powered chatbot, Archarya! Offering
                      personalized home remedies and stress-relief solutions.
                      Engage in insightful conversations for holistic
                      well-being."
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://img.freepik.com/free-vector/rehabilitation-hospital-abstract-concept-illustration-rehab-hospital-rehabilitation-center-stabilization-medical-conditions-mental-health-care-medical-facility_335657-551.jpg"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Ashtang
                    </h2>
                    <p
                      className="leading-relaxed text-base"
                      style={{ color: "black" }}
                    >
                      "Shalom Health Care: Uncover stress triggers and tailored
                      remedies. Empowering you with insights and solutions for
                      holistic well-being. Let's conquer stress together."
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Calm Music
                    </h2>
                    <p
                      className="leading-relaxed text-base"
                      style={{ color: "black" }}
                    >
                      "Discover rejuvenating yoga poses to refresh body and
                      mind. Release physical tension and mental fatigue,
                      fostering vitality and mental clarity through mindful
                      movement."
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://c.ndtvimg.com//yoga_625x300_1529482160763.jpg "
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Yoga poses
                    </h2>
                    <p
                      className="leading-relaxed text-base"
                      style={{ color: "black" }}
                    >
                      "Discover rejuvenating yoga poses to refresh body and
                      mind. Release physical tension and mental fatigue,
                      fostering vitality and mental clarity through mindful
                      movement."
                    </p>
                  </div>
      </div>
    </div>
  </div>
</section>)
};

export default MainUser;
