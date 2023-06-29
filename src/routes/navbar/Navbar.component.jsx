import { Fragment, useContext } from "react";
//router
import { Outlet, Link } from "react-router-dom";
//assets
import { ReactComponent as CrownLogo } from "../../assets/logos/crown.svg";
//context
import { UserContext } from "../../context/User.context";
//styles
import "./navbar.style.scss";
//firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
