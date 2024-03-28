import MyProfile from "../../pages/profile/MyProfile";
import Header from "./Header";

import { Typography, Box } from "@mui/material";

function Feed() {
  return (
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
        <Box component="section">
          <MyProfile />
        </Box>
      </Box>
    </div>
  );
}
export default Feed;
