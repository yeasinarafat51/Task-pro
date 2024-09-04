import { createBrowserRouter } from "react-router-dom";
import Mains from "../Mains";
import Home from "../Home";
import Usa from "../usa/Usa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/usa",
        element: <Usa />,
      },
    ],
  },
]);
export default router;
