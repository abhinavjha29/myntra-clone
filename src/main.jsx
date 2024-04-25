import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./components/Bag.jsx";
import Home from "./routes/Home.jsx";
import SingleProductDetail from "./components/SingleProductDetail.jsx";
import { Provider } from "react-redux";
import store from "./store/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/",
        element: <Home />,
      },
      { path: "/single", element: <SingleProductDetail /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
