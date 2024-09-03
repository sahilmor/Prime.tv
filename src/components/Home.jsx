import React, { useEffect, useState } from "react";
import Sidenav from "./templates/sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utilities/axios";
import Header from "./templates/header"

const Home = () => {
  document.title = "Xflix | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper ?(
    <>
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper}/>
      </div>
    </>
  ):<h1>Loading....</h1>
};

export default Home;
