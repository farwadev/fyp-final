import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Services from "./pages/services";
import About from "./pages/About";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Categories from "./pages/categories";
import Polarise from "./pages/polarise";
import Harley from "./pages/harley";
import Honda from "./pages/honda";
import Yamaha from "./pages/yamaha";
import Suzuki from "./pages/suzuki";
import Boomtrike from "./pages/boomtrike";
import Nissan from "./pages/nissan";
import Toyota from "./pages/toyota";
import Hyundai from "./pages/hyundai";
import Jmc from "./pages/jmc";
import Lexus from "./pages/lexus";
import CHEVROLET from "./pages/chevrolet";
import Suzukii from "./pages/Suzukii";
import Yamahas from "./pages/yamahas";
import Kawasaki from "./pages/kawasaki";
import Seadoo from "./pages/seadoo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "categories",
    element: <Categories />,
  },
  {
    path: "polarise",
    element: <Polarise />,
  },
  {
    path: "harley",
    element: <Harley />,
  },
  {
    path: "honda",
    element: <Honda />,
  },
  {
    path: "yamaha",
    element: <Yamaha />,
  },
  {
    path: "suzuki",
    element: <Suzuki />,
  },
  {
    path: "boomtrike",
    element: <Boomtrike />,
  },
  {
    path: "nissan",
    element: <Nissan />,
  },
  {
    path: "toyota",
    element: <Toyota />,
  },
  {
    path: "hyundai",
    element: <Hyundai />,
  },
  {
    path: "jmc",
    element: <Jmc />,
  },
  {
    path: "lexus",
    element: <Lexus/>,
  },
  {
    path: "chevrolet",
    element: <CHEVROLET />,
  },
  {
    path: "Suzukii",
    element: <Suzukii />,
  },
  {
    path: "seadoo",
    element: <Seadoo />,
  },
  {
    path: "kawasaki",
    element: <Kawasaki />,
  },
  {
    path: "yamahas",
    element: <Yamahas />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
