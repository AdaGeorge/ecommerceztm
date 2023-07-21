//Components
import SignInForm from "../../components/signInForm/SignInForm.components";
import SignUpForm from "../../components/signUpForm/SignUpForm.components";
//Styles
import { AuthContainer } from "./authentication.styles.js";
const Authentication = () => {
  return (
    <AuthContainer className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
