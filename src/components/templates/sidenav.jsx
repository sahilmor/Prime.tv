import { Link } from "react-router-dom";

const Sidenav = () => {
return (
  <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
    <h1 className="text-2xl text-white font-bold">
      <i className="text-[#DBF227] ri-tv-fill mr-2"></i>
      <span><Link to="/">Prime.tv</Link></span>
    </h1>
    <nav className="flex flex-col text-zinc-400 text-l gap-1">
      <h1 className="text-white font-semibold text-xl mt-7 mb-2">New Feeds</h1>
      <Link to="/trending" className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-fire-fill"></i>Trending
      </Link>
      <Link to="/popular" className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-bard-fill"></i>Popular
      </Link>
      <Link to="/movie" className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-movie-2-fill"></i>Movies
      </Link>
      <Link to="/tv" className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
      </Link>
      <Link to="/person" className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-group-fill"></i>People
      </Link>
    </nav>
    <hr className="border-none h-[1px] bg-zinc-400 text-xl gap-3 mt-2" />
    <nav className="flex flex-col text-zinc-400 text-l gap-2">
      <h1 className="text-white font-semibold text-xl mt-7 mb-2">
        Website Information
      </h1>
      <Link to="/about" className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-information-2-fill"></i>About
      </Link>
      <Link className="hover:bg-[#DBF227] hover:text-[#042940] rounded-lg duration-300 p-4">
        <i className="mr-2 ri-phone-fill"></i>Contact Us
      </Link>
    </nav>
  </div>
);
};

export default Sidenav;
