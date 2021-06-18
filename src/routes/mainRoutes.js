import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
    isLink: true,
  },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    component: MoviesPage,
    isLink: true,
  },
  {
    name: "MoviesDetailsPage",
    path: "/moviesDetails",
    exact: false,
    component: MovieDetailsPage,
    isLink: false,
  },
];
