import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");
  console.log(query);

  return (
    <div className="w-[100%] h-[10vh] relative flex justify-start items-center pl-[15%]">
      <i class="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-400 mx-4 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search...."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          class="text-2xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 inline-block p-7 w-[100%] flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
