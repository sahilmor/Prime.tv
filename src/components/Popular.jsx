import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utilities/axios";
import Cards from "./templates/Cards";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
    const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [Page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "XFlix | Popular " + category.toUpperCase();

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${Page}`
      );
      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setPage(Page + 1);
      } else {
        sethasMore(false);
      }

      //   setpopular(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#DBF227] mr-1 ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="flex items-center justify-between w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular