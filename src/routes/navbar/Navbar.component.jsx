import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/logos/crown.svg";
import "./navbar.style.scss";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
