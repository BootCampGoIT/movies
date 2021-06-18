import Cast from "../Components/details/Cast";
import Review from "../Components/details/Review";

export const detailsRoutes = [
  {
    name: "Cast",
    path: "/cast",
    exact: true,
    component: Cast,
  },
  {
    name: "Review",
    path: "/review",
    exact: true,
    component: Review,
  },
];
