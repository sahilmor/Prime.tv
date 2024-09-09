import React from "react";
import { Link } from "react-router-dom";
import noimage from "./images/noimage.png";

const Horizontalcards = ({ data, title }) => {
  return (
    <div className="w-[100%] p-5 flex overflow-y-hidden">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type || title}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[35vh]  bg-zinc-900 mr-5 mb-5"
          >
            <img
              className="w-full h-[45%] object-cover"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="text-white p-2">
              <h1 className="text-xl font-black">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-xs mt-3">
                {d.overview.slice(0, 50)}...
                <span className="text-blue-400">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 text-white font-black text-center">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default Horizontalcards;
