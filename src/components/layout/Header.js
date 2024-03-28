import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// 인스타그램 CSS API
import {
  Box,
  IconButton,
  Avatar,
  TextField,
  AppBar,
  Toolbar,
  InputAdornment,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "lg",
            width: "100%",
            mx: "auto",
          }}
        >
          {/* 로고 */}
          <Link to="/Home">
            <Box sx={{ width: "96px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png
                "
                alt="logo"
                width={"100%"}
              />
            </Box>
          </Link>
          {/* 검색바 */}
          <Box>
            <TextField
              id="input-with-icon-textfield"
              placeholder="검색"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              // variant="standard"
              size="small"
            />
          </Box>
          {/* 프로필 */}
          <Box sx={{ display: "flex" }}>
            {/* 인스타그램 아이콘 그룹 */}
            <Box sx={{ marginRight: "1rem" }}>
              <Link to="/Home">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Link>
              <IconButton>
                <Badge badgeContent={100} color="error">
                  <SendIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
              <IconButton>
                <GroupIcon />
              </IconButton>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
            <Link to="/MyProfile">
              <Avatar alt="Remy Sharp" src="https://" />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
