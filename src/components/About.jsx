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
          <h1 className="py-5">About Prime.tv</h1>
        </div>

        <div className="mt-[15vh]  flex justify-center items-center">
          <h1 className="px-[20vh] text-6xl text-center font-black  text-white ">
            Stories move us. They make us feel more emotion, see new
            perspectives, and bring us closer to each other.
          </h1>
        </div>
        <div>
          <h1 className="text-l text-white text-center mt-[5vw] p-6">
            Welcome to <strong>Prime.tv</strong>, your ultimate destination for
            seamless and immersive movie streaming! Our platform is designed to
            offer a smooth and enjoyable experience for movie enthusiasts,
            whether you're a casual viewer or a dedicated cinephile. At
            Prime.tv, we are passionate about delivering top-quality
            entertainment at your fingertips. Our platform brings together a
            curated collection of the latest movies, timeless classics, and
            hidden gems across a wide range of genres. With a user-friendly
            interface and cutting-edge technology, we make it easy for you to
            explore, discover, and stream your favorite films.
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
          <h1 className="text-5xl font-black text-center p-4">
            Why Choose Prime.tv?
          </h1>
          <section id="why-choose-us" class="py-16 text-white">
            <div class="max-w-4xl mx-auto px-6">
              <p class="text-center text-lg mb-12">
                At <span class="font-semibold">Prime.tv</span>, we go beyond
                just streaming. We’re here to redefine your movie-watching
                experience. Here’s why you should choose us:
              </p>
              <ul class="space-y-8">
                <li class="flex items-start">
                  <span class="text-2xl mr-4">🎬</span>
                  <div>
                    <h3 class="text-xl font-semibold">Curated Content</h3>
                    <p class="text-gray-300">
                      From blockbuster hits to hidden gems, we handpick a
                      diverse collection of movies that cater to every mood and
                      taste.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-4">⚡</span>
                  <div>
                    <h3 class="text-xl font-semibold">Seamless Streaming</h3>
                    <p class="text-gray-300">
                      Enjoy lightning-fast loading times and uninterrupted
                      viewing with our advanced technology built on React.js and
                      Next.js.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-4">✨</span>
                  <div>
                    <h3 class="text-xl font-semibold">
                      Personalized Experience
                    </h3>
                    <p class="text-gray-300">
                      Get tailored recommendations based on your preferences, so
                      you always find something you love.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-4">🌐</span>
                  <div>
                    <h3 class="text-xl font-semibold">
                      User-Friendly Interface
                    </h3>
                    <p class="text-gray-300">
                      Our clean, intuitive design makes it easy to discover,
                      search, and stream without any hassle.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-4">🔒</span>
                  <div>
                    <h3 class="text-xl font-semibold">Secure & Reliable</h3>
                    <p class="text-gray-300">
                      Your privacy and data are important to us. We ensure a
                      safe, secure, and reliable streaming environment.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-4">🎥</span>
                  <div>
                    <h3 class="text-xl font-semibold">
                      Available Anytime, Anywhere
                    </h3>
                    <p class="text-gray-300">
                      Watch your favorite films anytime, on any device, with our
                      fully responsive platform.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
