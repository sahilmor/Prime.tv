import React from "react";
import Sidenav from "./templates/sidenav";
import Topnav from "./templates/Topnav";

const Home = () => {
    document.title = "Xflix | Homepage"
  return ( 
  <>
    <Sidenav />
    <div className="w-[80%] h-full">
      <Topnav />
    </div>
  </>
  );
};

export default Home;