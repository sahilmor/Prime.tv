import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utilities/axios";
import Cards from "./templates/Cards";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
    const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvshows, setTvShows] = useState([]);
  const [Page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "XFlix | Movies " + category.toUpperCase();

  const GetTvShows = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${category}?page=${Page}`
      );
      if (data.results.length > 0) {
        setTvShows((prevState) => [...prevState, ...data.results]);
        setPage(Page + 1);
      } else {
        sethasMore(false);
      }

      //   setTvShows(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (tvshows.length === 0) {
      GetTvShows();
    } else {
      setPage(1);
      setTvShows([]);
      GetTvShows();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#DBF227] mr-1 ri-arrow-left-line"
          ></i>
          Tv Shows <small className="text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center justify-between w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvshows.length}
        next={GetTvShows}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={tvshows} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows