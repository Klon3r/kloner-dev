import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error403 from "./pages/Error403";
import Header from "./components/Header/Header";
import App from "./pages/Terminal/App";

import "./style.css";

const router = createBrowserRouter([
  {
    // Root
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    // 403 Error
    path: "*",
    element: <Error403 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
