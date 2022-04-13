import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

import "react-lazy-load-image-component/src/effects/blur.css";

import { Typography, Box, Paper, Stack } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import React from "react";
import SkeletonLoading from "./components/SkeletonLoading";

const Homepage = React.lazy(() => import("./pages/Home.page"));
const Progresspage = React.lazy(() => import("./pages/Progress.page"));
const MenuItemPage = React.lazy(() => import("./pages/Menu.Item.page"));
const Paymentpage = React.lazy(() => import("./pages/Payment.page"));
const MenuHomePage = React.lazy(() => import("./pages/Menu.page"));
// import Homepage from "./pages/Home.page";
// import Progresspage from "./pages/Progress.page";
// import MenuItemPage from "./pages/Menu.Item.page";
// import Paymentpage from "./pages/Payment.page";
// import MenuHomePage from "./pages/Menu.page";

const theme = createTheme({
  typography: {
    fontFamily: `'Nunito',sans-serif`,
  },
  palette: {
    primary: { main: "#000", contrastText: "#fff" },
    secondary: { main: "#fff", contrastText: "#fff" },
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <div className="app font-nunito overflow-hidden ">
            <React.Suspense fallback={<SkeletonLoading />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="progress" element={<Progresspage />} />
                <Route path="payment" element={<Paymentpage />} />
                <Route path="menu" element={<MenuHomePage />} />
                <Route path="menu/:menuId" element={<MenuItemPage />} />
              </Routes>
            </React.Suspense>
          </div>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
