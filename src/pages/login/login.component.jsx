import LoginForm from "../../components/login-form/login-form.component";
import "./login.styles.css";

const Login = () => {
    return (
        <div className="login-page bg-dark d-flex justify-content-center align-items-center">
            <LoginForm />
        </div>
    )
};

export default Login;