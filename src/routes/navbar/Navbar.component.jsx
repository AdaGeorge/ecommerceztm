import { Fragment, useContext } from "react";
//router
import { Outlet } from "react-router-dom";
//assets
import { ReactComponent as CrownLogo } from "../../assets/logos/crown.svg";
//context
import { CartContext } from "../../context/Cart.context";
//styles
import {
  NavigationComponent,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navbar.style.js";
//firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";
//components
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropdown/CartDropdown.component";
//redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationComponent>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationComponent>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
