import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/Navigation";
import MoviePage from "./pages/MoviePage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import LatestMoviesPage from "./pages/LatestMoviesPage";
import MovieActorsPage from "./pages/MovieActorsPage";
import ActorPage from "./pages/ActorPage";
import GenresMoviesPage from "./pages/GenresMoviesPage";
import GenrePage from "./pages/GenrePage";
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <>
      <Navigation />

      <div className="pb-5" id="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/top-rated-films">
            <TopRatedMoviesPage />
          </Route>

          <Route exact path="/popular-films">
            <PopularMoviesPage />
          </Route>

         

          <Route exact path="/profile" component={GenrePage} />
          <Route exact path="/now-playing-films">
            <LatestMoviesPage />
          </Route>

          <Route exact path="/genres">
            <GenresMoviesPage />
          </Route>

          <Route exact path="/genres/:id/:IDpage">
            <GenrePage />
          </Route>

          <Route path="/person/:id">
            <ActorPage />
          </Route>

          <Route path="/movie/:id/cast">
            <MovieActorsPage />
          </Route>

          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route>
                  <PageNotFound />
                </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
