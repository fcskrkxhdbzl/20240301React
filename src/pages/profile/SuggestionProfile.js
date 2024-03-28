import React from "react";

import { faker } from "@faker-js/faker";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Box,
  Typography,
} from "@mui/material";

function SuggestionProfile() {
  const [suggestion, setSuggestion] = React.useState([]);

  React.useEffect(() => {
    const falseSuggestion = [...Array(5)].map((_) => ({
      email: faker.internet.email(),
      username: faker.name.fullName(),
      avatar: faker.internet.avatar(),
      id: faker.datatype.uuid(),
    }));
    setSuggestion(falseSuggestion);
  }, []);

  return (
    <>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color="GrayText" fontWeight="bold">
          회원님을 위한 추천
        </Typography>
        <Button color="inherit" sx={{ fontWeight: "bold" }}>
          모두 보기
        </Button>
      </Box>
      <List>
        {suggestion?.map((suggestion) => (
          <ListItem
            key={suggestion.id}
            disablePadding
            secondaryAction={<Button>팔로우</Button>}
          >
            <ListItemAvatar sx={{ marginLeft: "0.25rem" }}>
              <Avatar alt="Remy Sharp" src={suggestion.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  noWrap
                  sx={{ width: "250px" }}
                  fontWeight={600}
                >
                  {suggestion.email}
                </Typography>
              }
              secondary={suggestion.username}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default SuggestionProfile;
