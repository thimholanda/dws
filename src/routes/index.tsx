import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "./Error";
import Band from "../pages/Band";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/band/:id",
    element: <Band />,
  },
]);

export default router;
