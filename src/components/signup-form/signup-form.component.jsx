import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup-form.styles.css";

const SignUpForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // set name state
    const handleName = (e) => {
        setName(e.target.value);
    }

    // set email state
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    // set password state
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    //set confirm password
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    // test state of email, password, and confirm password
    console.log("name = " + name + ", email = " + email + ", password = " + password + ", re-enter password = " + confirmPassword)

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/login");
    }

    const handleSignUp = (e) => {
        console.log("signed up");
        e.preventDefault();

        if(password === confirmPassword) {
            let data = {
                "email": email,
                "password": password
            }

            axios({
                method: "POST",
                url: "https://reqres.in/api/register",
                data: data
            }).then(res => {
                console.log(res.data);
                navigate("/login");
            }).catch(err => {
                console.log(err);
            })

        } else {
            alert("Passwords do not match.");
        }


    }

    return (
        <div className="sign-up-form bg-light rounded p-5">
            <form onSubmit={handleSignUp}>
                <div className="form-floating mb-3" >
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name" onChange={(e) => handleName(e)} />
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                </div>

                <div className="form-floating mb-3" >
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email" onChange={(e) => handleEmail(e)} />
                    <label htmlFor="inputEmail" className="form-label">Enter Email</label>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="inputPassword" placeholder="enter password" onChange={(e) => handlePassword(e)} />
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="inputPassword2" placeholder="confirm password" onChange={(e) => handleConfirmPassword(e)} />
                    <label htmlFor="inputPassword2" className="form-label">Confirm Password</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="Gender" id="Male" />
                    <label className="form-check-label" htmlFor="Male">
                        Male
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="Gender" id="Female" />
                    <label className="form-check-label" htmlFor="Female">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mb-2 me-3" >Sign Up</button>
                <button className="btn btn-secondary mb-2" onClick={navigateTo} >Already have an account</button>
            </form>
        </div>
    )
};

export default SignUpForm;