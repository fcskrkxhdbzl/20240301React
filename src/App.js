import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import MyProfile from "./pages/profile/MyProfile";
import Feed from "./components/layout/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Explore from "./pages/Explore";
import Joinmember from "./pages/Joinmember";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";

function App() {
  return (
    <Routes>
      {/* Header, Stories, SuggestionProfile + MiniProfile 전부 존재하는 Layout */}
      <Route element={<Layout />}>
        <Route path="/Home" element={<Post />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/loginTest" element={<LoginTest />} />
      </Route>
      {/* Header만 있는 Layout */}
      <Route element={<Feed />}>
        <Route path="/MyProfile" element={<MyProfile />} />
      </Route>
      {/* Layout 없음 */}
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/joinmember" element={<Joinmember />} />
    </Routes>
  );
}

export default App;
