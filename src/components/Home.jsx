import React, { useEffect, useState } from "react";
import Sidenav from "./templates/sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utilities/axios";
import Header from "./templates/header"
import Horizontalcards from "./templates/Horizontalcards";
import Dropdown from "./templates/Dropdown";

const Home = () => {
  document.title = "Xflix | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all")

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ?(
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper}/>
        <div className="p-5 flex justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
        <Dropdown title="Filter" options={["all", "tv", "movie"]} func={(e) => setcategory(e.target.value)} />
      </div>
        <Horizontalcards data={trending}/>
      </div>
    </>
  ):<h1 className="w-full h-full text-white font-black text-xl flex justify-center items-center">Loading....</h1>
};

export default Home;
