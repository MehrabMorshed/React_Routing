import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Homepage from "../component/homepage/Homepage";
import Documents from "../component/staticpage/Documents";
import About from "../component/staticpage/About";
import History from "../component/staticpage/History";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
          path: "/",
          element: <Homepage></Homepage>
        },
        {
          path: "/documents",
          element: <Documents></Documents>
        },
        {
          path: "/history",
          element: <History></History>
        },
        {
          path: "/about",
          element: <About></About>
        },
      ]
    },
  ]);

  export default router