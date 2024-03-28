import React, { useState } from "react";

import { faker } from "@faker-js/faker";
import "App.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleIcon from "@mui/icons-material/People";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import { Link } from "react-router-dom";

import FollowModal from "../../components/Follow/FollowModal";
import FollowerModal from "../../components/Follow/FollowerModal";
import Following from "../../components/Follow/Following";
import PostUserPersonal from "components/PostUserPersonal";

function MyProfile() {
  const [myProfile, setMyProfile] = React.useState();

  React.useEffect(() => {
    const testMyProfile = {
      username: "이종후",
      avatar: faker.internet.avatar(),
    };
    setMyProfile(testMyProfile);
  }, []);

  return (
    <>
      <Box textAlign="center" sx={{ marginTop: "2rem" }}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={myProfile?.avatar}
              sx={{ width: 200, height: 200, marginTop: "1rem" }}
            />
          </ListItemAvatar>
          <ListItemText>
            <Typography
              variant="body1"
              noWrap
              sx={{
                width: "500px",
                marginLeft: "6rem",
                marginBottom: "5rem",
                fontSize: "2.0rem",
              }}
              fontWeight={600}
            >
              <Box>
                {myProfile?.username}

                <Button sx={{ marginLeft: "2rem" }}>
                  <Following />
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    marginLeft: "1rem",
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "black",
                  }}
                >
                  프로필 편집
                </Button>
                <Button sx={{ color: "black" }}>
                  <SettingsIcon />
                </Button>
              </Box>
              <Box sx={{ display: "flex", marginTop: "1rem" }}>
                <Typography variant="body2">게시글 90</Typography>
                <Typography variant="body2" sx={{ marginLeft: "1rem" }}>
                  팔로잉 2
                </Typography>
                <Typography variant="body2" sx={{ marginLeft: "1rem" }}>
                  팔로워 2
                </Typography>
              </Box>
              <Card sx={{ marginTop: "5rem" }}>
                <CardContent>
                  <Typography fontWeight={600}>안녕하세요</Typography>
                  <Typography sx={{ marginTop: "1rem" }}>
                    점심시간 너무 늦지 않나요
                  </Typography>
                </CardContent>
              </Card>
            </Typography>
          </ListItemText>
        </ListItem>
      </Box>
      <hr />
      <Box textAlign="center">
        <Button>
          <FormatListBulletedIcon sx={{ color: "black" }} />
          게시물 버튼
        </Button>
        <Button>
          <BookmarkIcon sx={{ backgroundColor: "white", color: "black" }} />
          <FollowModal />
        </Button>
        <Button>
          <PeopleIcon sx={{ color: "black" }} />
          <FollowerModal />
        </Button>
      </Box>
      <Box>
        <PostUserPersonal />
      </Box>
    </>
  );
}
export default MyProfile;
