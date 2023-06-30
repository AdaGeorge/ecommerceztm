import { Fragment, useContext, useState } from "react";
//router
import { Outlet, Link } from "react-router-dom";
//assets
import { ReactComponent as CrownLogo } from "../../assets/logos/crown.svg";
//context
import { UserContext } from "../../context/User.context";
import { CartContext } from "../../context/Cart.context";
//styles
import "./navbar.style.scss";
//firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";
//components
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropdown/CartDropdown.component";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
