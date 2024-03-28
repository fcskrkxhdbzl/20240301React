import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
//import Home from "./pages/Home";
import Layout from "./components/Layout";
import PostNew from "./components/PostNew";
import Post from "./components/Post";
import Explore from "./pages/Explore";
import Joinmember from "./pages/Joinmember";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/joinmember" element={<Joinmember />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginTest" element={<LoginTest />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
