import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PostNew from "./components/PostNew";
import Post from "./components/Post";
import Explore from "./pages/Explore";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/post/new" element={<PostNew />} /> */}
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
