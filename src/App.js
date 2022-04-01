import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

import { Typography, Box, Paper, Stack } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home.page";
import Progresspage from "./pages/Progress.page";
import HomeNavbar from "./components/Home.Comps.Navbar";
import Layout from "./components/Layout";
import MenuItemPage from "./pages/Menu.Item.page";

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
        {/* <HomeNavbar /> */}
        <Layout>
          <div className="app font-nunito overflow-hidden ">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="progress" element={<Progresspage />} />
              <Route path="menu/:menuId" element={<MenuItemPage />} />
            </Routes>
          </div>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
