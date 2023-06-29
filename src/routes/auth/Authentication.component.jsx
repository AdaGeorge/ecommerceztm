//Components
import SignInForm from "../../components/signInForm/SignInForm.components";
import SignUpForm from "../../components/signUpForm/SignUpForm.components";
//Styles
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
