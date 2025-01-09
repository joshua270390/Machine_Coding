import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Wikitechy Home</Link>
          </li>
          <li>
            <Link to="/about">Wikitechy Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Wikitechy 
            Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;