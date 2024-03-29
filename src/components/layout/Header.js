import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Modal } from "antd";

import { Faker, faker } from "@faker-js/faker";

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
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import PostNew from "components/PostNew";

function Header() {
  const [isPostNewOpen, setIsPostNewOpen] = useState(false);
  const postNewShow = () => {
    setIsPostNewOpen(true);
  };
  const postNewHide = () => {
    setIsPostNewOpen(false);
  };

  const [miniAvatar, setMiniAvatar] = useState();

  React.useEffect(() => {
    const falseMiniAvatar = {
      avatar: faker.internet.avatar(),
    };
    setMiniAvatar(falseMiniAvatar);
  }, []);
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
                    <Link to="/explore">
                      <SearchIcon sx={{ marginTop: "0.5rem" }} />
                    </Link>
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
                <AddCircleOutlineIcon onClick={postNewShow} />
                <Modal
                  open={isPostNewOpen}
                  title="새 게시물 작성"
                  width={"90%"}
                  footer={null}
                  onCancel={postNewHide}
                >
                  <PostNew />
                </Modal>
              </IconButton>
              <IconButton>
                <GroupIcon />
              </IconButton>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
            <Link to="/MyProfile">
              <Avatar alt="Remy Sharp" src={miniAvatar?.avatar} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
