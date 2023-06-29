import { useState, useContext } from "react";
//Firebase
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
//Components
import FormInput from "../formInput/FormInput.component";
import Button from "../buttons/Button.component";
//Styles
import "./signInForm.styles.scss";
//Default values for form
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      if (err) {
        alert("your credentials are not available");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit" buttonType={"default"}>
            Sign In
          </Button>
          <Button
            onClick={signInWithGoogle}
            buttonType={"google"}
            type="button"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
