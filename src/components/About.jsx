import React from "react";
import Sidenav from "./templates/sidenav";
import { useNavigate } from "react-router-dom";
import Poster1 from "./templates/images/poster1.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidenav />
      <div className="w-full h-full overflow-hidden overflow-y-auto">
        <div className="text-white text-3xl font-bold flex justify-center items-center">
          <h1 className="py-5">About XFlix</h1>
        </div>

        <div className="mt-[15vh]  flex justify-center items-center">
          <h1 className="px-[20vh] text-6xl text-center font-black  text-white ">
            Stories move us. They make us feel more emotion, see new
            perspectives, and bring us closer to each other.
          </h1>
        </div>
        <div>
          <h1 className="text-l text-white text-center mt-[5vw] p-6">
            Welcome to <strong>Xflix</strong>, your ultimate destination for
            seamless and immersive movie streaming! Our platform is designed to
            offer a smooth and enjoyable experience for movie enthusiasts,
            whether you're a casual viewer or a dedicated cinephile. At Xflix,
            we are passionate about delivering top-quality entertainment at your
            fingertips. Our platform brings together a curated collection of the
            latest movies, timeless classics, and hidden gems across a wide
            range of genres. With a user-friendly interface and cutting-edge
            technology, we make it easy for you to explore, discover, and stream
            your favorite films.
          </h1>
        </div>
        <div className="w-full  p-5 flex items-center justify-center">
          <img className="w-full h-[30vw] object-cover" src={Poster1} alt="" />
          <div className="text-white text-l flex flex-col items-center justify-between  p-11">
            <h1 className="text-white p-5 text-4xl font-black">Our Vision</h1>
            <h1 className="p-5 text-center mt-5">
              Our vision is to revolutionize the way people experience movies
              online. We believe in combining entertainment with innovation,
              offering a personalized, on-demand movie service that caters to
              every user’s taste. By leveraging the latest technologies,
              including React.js and Next.js, we provide a seamless and
              enjoyable streaming experience without the complexity.
            </h1>
          </div>
        </div>
          <div className="w-full text-white text-xl p-5">
            <h1 className="text-5xl font-black text-center p-4">Why Choose Xflix?</h1>
          </div>
      </div>
    </>
  );
};

export default About;
