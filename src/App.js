import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import { store } from "./store/store";
import Movie from "./components/Movie";
import Tvshows from "./components/TvShows";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PeopleDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";
import { Provider } from 'react-redux';

const App = () => {
    return (
        <div className="bg-[#001726] w-screen h-screen flex">
            <Provider store={store}>

            <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/details/:id" element={<Moviedetails />}>
                    <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>
                <Route path="/tv" element={<Tvshows />} />
                <Route path="/tv/details/:id" element={<TvDetails />}>
                    <Route
                        path="/tv/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>
                <Route path="/person" element={<People />} />
                <Route path="/person/details/:id" element={<PersonDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </Router>
            </Provider>
        </div>
    );
};

export default App;
