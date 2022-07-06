import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-form.styles.css";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // on email input setEmail to input value
    const handleEmail = (e) => {
        // console.log("email = " + e.target.value);
        setEmail(e.target.value);
    }

    // on password input setPassword to input value 
    const handlePassword = (e) => {
        // console.log("password = " + e.target.value);
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        console.log("logged in");
        e.preventDefault(); // prevents page refresh

        let data = {
            "email": email,
            "password": password
        }
        axios({
            method: "POST",
            url: "https://reqres.in/api/login",
            data: data
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup")
    }

    // console.log("email = " + email)
    // console.log("password = " + password)

    return (
        <div className="login-form__container bg-light rounded p-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={(e) => handleEmail(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" onChange={(e) => handlePassword(e)} />
                </div>
                <button type="submit" className="btn btn-primary me-3" >Login</button>
                <button className="btn btn-secondary" onClick={handleSignUp} >Sign Up</button>
            </form>
        </div>
    )
};

export default LoginForm;