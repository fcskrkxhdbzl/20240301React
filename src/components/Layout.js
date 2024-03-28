import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="contents">
        <Header classProps="my-header" />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
