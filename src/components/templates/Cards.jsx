import { Link } from "react-router-dom";
import noimage from "./images/noimage.png";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] mt-5 justify-center bg-[#042940]">
      <Link
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#DBF227] rounded-lg"
      >
        <i className="text-white ri-arrow-up-line text-xl"></i>
      </Link>
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%]"
          key={i}
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px__2px_rgba(0, 0, 0, .5)]"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[35%] text-white w-[5vh] text-l font-semibold h-[5vh] rounded-full flex justify-center items-center bg-yellow-500">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
