import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error403 from "./pages/Error403";

import "./index.css";
import Homepage from "./pages/Homepage";
import Timer from "./pages/Timer/Timer";
import HeaderBar from "./components/HeaderBar/HeaderBar";

const router = createBrowserRouter([
  {
    //Homepage
    path: "/",
    element: (
      <>
        <HeaderBar />
        <Homepage />
      </>
    ),
  },
  {
    // Timer
    path: "/timer",
    element: (
      <>
        <HeaderBar />
        <Timer />
      </>
    ),
  },
  {
    // 403 Error
    path: "*",
    element: (
      <>
        <HeaderBar />
        <Error403 />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
