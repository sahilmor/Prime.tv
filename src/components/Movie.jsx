import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utilities/axios";
import Cards from "./templates/Cards";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
    const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [Page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "XFlix | Movies " + category.toUpperCase();

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category}?page=${Page}`
      );
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setPage(Page + 1);
      } else {
        sethasMore(false);
      }

      //   setmovie(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#DBF227] mr-1 ri-arrow-left-line"
          ></i>
          Movie <small className="text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center justify-between w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie