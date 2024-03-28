import { Outlet } from "react-router-dom";

import { Typography, Box } from "@mui/material";

import Header from "./Header";
import MiniProfile from "../../pages/profile/MiniProfile";
import Stories from "../../pages/story/Stories";
import SuggestionProfile from "../../pages/profile/SuggestionProfile";
import Explore from "../../pages/Explore";

import "../../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="contents">
        <Header classProps="my-header" />
        <Box
          component="main"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, fr)",
              sm: "repeat(1, fr)",
              md: "repeat(1, fr)",
            },
            columnGap: "3rem",
            maxWidth: "lg",
            marginX: "auto",
          }}
        >
          <Box component="section" sx={{ gridColumn: "1/3" }}>
            <Stories />
            {/* 게시글 */}
            <Explore />
          </Box>

          <Box
            component="section"
            sx={{ display: { xs: "none", md: "block" }, gridColumn: "3" }}
          >
            <MiniProfile />
            {/* 추천 */}
            <SuggestionProfile />
          </Box>
          <Typography
            variant="body2"
            noWrap
            align="center"
            sx={{ width: "56px" }}
          >
            {Stories.username}
          </Typography>
        </Box>
        <main>{/* <Outlet /> */}</main>
      </div>
    </div>
  );
};

export default Layout;
