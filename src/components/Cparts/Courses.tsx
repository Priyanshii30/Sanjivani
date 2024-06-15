import React from "react";
import { useState } from 'react';
import "./Courses.css";
import { Link } from "react-router-dom"; const CoursesMy = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
          <div className="flex flex-col">
            <div
              className="flex flex-wrap flex-col mb-7"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                lineHeight: "4",
                fontSize: "3.2rem",
              }}
            >
              <h1 className="text-5xl font-bold text-black">
                About Sanjivini
              </h1>
            </div>
            <div
              className="flex flex-row justify-center font-bold"
              style={{
                width: "100%",
                marginBottom: "2rem",
                marginTop: "2rem",
                color: "black",
              }}
            >
              <Link to=''>
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem"}}
                >
                  ChatBot
                </span>
              </Link>
              <Link to=''>
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem" }}
                >
                  Di‍‍et
                </span>
              </Link>

              {/* <Link to="http://127.0.0.1:5000/predict">
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem" }}
                >
                  Health Care Center
                </span>
              </Link> */}
              <Link to='/auth/Calmwaves'>
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem" }}
                >
                  Calm Music
                </span>
              </Link>
              <Link to='http://127.0.0.1:5501/'>
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem" }}
                >
                  Game
                </span>
              </Link>
              {/* <Link to=''>
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem" }}
                >
                  Facial emotion recognizer
                </span >
              </Link> */}
              <Link to='/auth/videos'>
                <span
                  className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                  style={{ margin: "0 1rem" }}
                >
                  Yoga Postures
                </span>
              </Link>

            </div>
          </div>
          {/* photos */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-6">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://t4.ftcdn.net/jpg/02/11/61/95/360_F_211619589_fnRk5LeZohVD1hWInMAQkWzAdyVlS5ox.jpg"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4 ">
                      Archarya
                    </h2>
                    <p
                      className="leading-relaxed text-base"
                      style={{ color: "black" }}
                    >
                      "Meet our AI-powered chatbot,  Archarya! Offering
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10EowT_-t_ZKUoa8_KMKdMVYFQagiUS1stPJ0Sk_w0A&s"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Shalom
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfScvyFVtoL29a8HNXtLbmiOmDSLc6_lcRkWDH7d70ck44lNI5EnuuPSuQi6ra3MLHaqk&usqp=CAU"
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
                      src="https://www.health.com/thmb/dkSb893I2fiEUG4DyfsDblT-sSc=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/HLTH_MoveYourBody_YogaPoses_THUMB-LARGE-726a28603c8043eba44eb9f128f30551.jpg"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Yog Guru
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
          </section>
        </div>
      </section>
      {/* satguru photo  */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-center">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0-IlrFjQ_dsMsVh3XJi9e3vsoZ8dEbARank0ubYfDg&s" />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">You cannot really separate physical and mental health because health happens as a whole.</h1>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoursesMy;
