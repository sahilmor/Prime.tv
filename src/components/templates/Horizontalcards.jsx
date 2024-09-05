import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Horizontalcards = ({ data }) => {
  return (
      
      <div className="w-[100%] p-5 flex overflow-y-hidden">
        {data.map((d, i) => (
          <div key={i} className="min-w-[17%] mr-5 mb-5">
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
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
          </div>
        ))}
      </div>
  );
};

export default Horizontalcards;
