import axios from "../../utilities/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "./noimage.png";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const Getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    Getsearches();
  }, [query]);

  return (
    <div className="w-[100%] h-[10vh] relative flex justify-start items-center pl-[15%]">
      <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[70%] text-zinc-400 mx-4 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search...."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[68%] max-h-[50vh] bg-zinc-200 top-[100%] left-[14%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 inline-block p-7 w-[100%] flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
