import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error403 from "./pages/Error403";

import "./index.css";
import Homepage from "./pages/Homepage";
import Timer from "./pages/Timer/Timer";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import GameLog from "./pages/GameLog";
import TerminalKlone from "./pages/TerminalKlone";
import Paint from "./pages/Paint";

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
    // GameLog
    path: "/games",
    element: (
      <>
        <HeaderBar />
        <GameLog />
      </>
    ),
  },
  {
    // Terminal Klone
    path: "/terminal",
    element: (
      <>
        <HeaderBar />
        <TerminalKlone />
      </>
    ),
  },
  {
    // Paint
    path: "/paint",
    element: (
      <>
        <HeaderBar />
        <Paint />
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
