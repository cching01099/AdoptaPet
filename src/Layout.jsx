import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>浪浪回家了</h1>
        </Link>
        <ul>
          <li>
            <Link to="/adopt" className="action">
              領養資訊
            </Link>
          </li>
          <li>
            <Link to="/fav" className="action">
              收藏浪浪
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
