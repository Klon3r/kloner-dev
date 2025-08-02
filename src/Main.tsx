import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error403 from "./pages/Error403";
import Header from "./components/Header/Header";

import "./Style.css";
import Homepage from "./pages/Homepage";
import Timer from "./pages/Timer/Timer";

const router = createBrowserRouter([
  {
    //Homepage
    path: "/",
    element: (
      <>
        <Header />
        <Homepage />
      </>
    ),
  },
  {
    // Timer
    path: "/timer",
    element: (
      <>
        <Header />
        <Timer />
      </>
    ),
  },
  {
    // 403 Error
    path: "*",
    element: (
      <>
        <Header />
        <Error403 />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
