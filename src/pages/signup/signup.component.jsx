import SignUpForm from "../../components/signup-form/signup-form.component";
import "./signup.styles.css";

const SignUp = () => {
    return (
        <div className="signUp-page bg-dark d-flex justify-content-center align-items-center">
            <SignUpForm />
        </div>
    )
};

export default SignUp;