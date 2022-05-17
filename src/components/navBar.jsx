import { AppBar, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "../css/navBar.css";
const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="Nav">
        <Link to="/" className="navigation">
          Home
        </Link>
        <Link to="adduser" className="navigation">
          Add Users
        </Link>
        <Link to="users" className="navigation">
          All Users
        </Link>
      </Toolbar>
      <Outlet />
    </AppBar>
  );
};
export default NavBar;
