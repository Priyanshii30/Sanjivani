import React from 'react';
// import video from '../../assets/pexels.mp4'

const Landing: React.FC = () => {

    return (
        <div className="container">
        <section
            className="bg-cover bg-center relative flex flex-col-reverse lg:flex-row"
            style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359356.jpg?size=626&ext=jpg&ga=GA1.1.1395991368.1711584000&semt=ais)',
                minHeight: '650px', // Set the minimum height for the section
            }}
        >
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="container mx-auto px-5 py-24 relative z-10 flex justify-center items-center">
                <div className="lg:w-1/2 lg:pr-16">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg text-white mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida
                        eros id efficitur.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <video src={''} autoPlay loop muted playsInline typeof='video/mp4'></video>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Landing;
