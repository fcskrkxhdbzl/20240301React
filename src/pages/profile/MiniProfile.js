import React from "react";

import { faker } from "@faker-js/faker";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Typography,
} from "@mui/material";

function MiniProfile() {
  const [profile, setProfile] = React.useState();

  // React.useEffect(() => {
  //   const falseProfile = {
  //     email: faker.internet.email(),
  //     username: faker.name.fullName(),
  //     avatar: faker.internet.avatar(),
  //     id: faker.datatype.uuid(),
  //   };
  //   setProfile(falseProfile);
  // }, []);

  React.useEffect(() => {
    const testProfile = {
      email: "dlwhdgn1993@saenaegi.co.kr",
      username: "이종후",
      avatar: faker.internet.avatar(),
      id: faker.datatype.uuid(),
    };
    setProfile(testProfile);
  }, []);

  return (
    <List sx={{ marginTop: "2rem" }}>
      <ListItem disablePadding secondaryAction={<Button>전환</Button>}>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={profile?.avatar}
            sx={{ width: 56, height: 56, marginRight: "1rem" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="body1"
              noWrap
              sx={{ width: "350px" }}
              fontWeight={600}
            >
              {profile?.username}
            </Typography>
          }
          secondary={profile?.email}
        />
      </ListItem>
    </List>
  );
}
export default MiniProfile;
