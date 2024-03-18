import { Routes, Route } from "react-router-dom";

import "./App.css";
import PostList from "./pages/Test";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </>
  );
}

export default App;
