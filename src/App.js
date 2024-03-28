import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import MyProfile from "./pages/profile/MyProfile";
import Feed from "./components/layout/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PostNew from "./components/PostNew";
import Post from "./components/Post";
import Explore from "./pages/Explore";
import Joinmember from "./pages/Joinmember";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/Home" element={<Post />} />

                <Route path="/" element={<Login />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/joinmember" element={<Joinmember />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginTest" element={<LoginTest />} />
            </Route>
            <Route element={<Feed />}>
                <Route path="/MyProfile" element={<MyProfile />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
