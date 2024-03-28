import { useEffect, useState } from "react";

import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

import Story from "./Story";
import "../../styles/Stories.css";

function Stories() {
  const [stories, setStories] = useState();

  useEffect(() => {
    const falseStories = [...Array(10)].map((_, i) => ({
      username: faker.name.fullName(),
      name: faker.name.firstName(),
      phone: faker.phone.number(),
      address: faker.address.county(),
      website: faker.internet.url(),
      avatar: faker.internet.avatar(),
      id: i,
    }));

    setStories(falseStories);
  }, []);

  if (!stories) return <div>loading...</div>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "1.5rem",
          marginTop: "2rem",
          overflow: "hidden",
          border: `1px solid${grey[200]}`,
          borderRadius: "2px",
          "> div + div": {
            marginLeft: "0.5rem",
          },
        }}
      >
        {stories.map((story) => (
          <Story
            key={story.id}
            avatar={story.avatar}
            username={story.username}
          />
        ))}
      </Box>
    </>
  );
}
export default Stories;
