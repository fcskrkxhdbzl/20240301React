import { useEffect, useState } from "react";

import { faker } from "@faker-js/faker";

import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const falsePosts = [...Array(5)].map((_, i) => ({
      username: faker.name.fullName(),
      userimg: faker.internet.avatar(),
      img: faker.image.image(),
      caption: faker.lorem.text(),
      id: i,
    }));

    setPosts(falsePosts);
  }, []);

  if (!posts) return null;

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userimg={post.userimg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
export default Posts;
