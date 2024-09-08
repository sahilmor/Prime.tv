import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utilities/axios";
import Cards from "./templates/Cards";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
    const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [Page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "XFlix | Movies " + category.toUpperCase();

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(
        `/person/${category}?page=${Page}`
      );
      if (data.results.length > 0) {
        setpeople((prevState) => [...prevState, ...data.results]);
        setPage(Page + 1);
      } else {
        sethasMore(false);
      }

      //   setpeople(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setpeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#DBF227] mr-1 ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="flex items-center justify-between w-[80%]">
          <Topnav />
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={people} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People