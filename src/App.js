import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import MyProfile from "./pages/profile/MyProfile";
import Posts from "./pages/testPost/Posts";
import Feed from "./components/layout/Feed";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/Home" element={<Posts />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
      <Route element={<Feed />}>
        <Route path="/MyProfile" element={<MyProfile />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
