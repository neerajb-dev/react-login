import "./signup-form.styles.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/login");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="sign-up-form bg-light rounded p-5">
            <form>
                <div className="mb-3" onSubmit={handleSubmit}>
                    <label htmlFor="inputEmail" className="form-label">Enter Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="Gender" id="Male" />
                    <label className="form-check-label" for="Male">
                        Male
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="Gender" id="Female" />
                    <label className="form-check-label" htmlFor="Female">
                        Female
                    </label>
                </div>

                <button type="submit" className="btn btn-primary me-3" >Sign Up</button>
            </form>
            <button className="btn btn-secondary mt-3" onClick={navigateTo} >Already have an account</button>
        </div>
    )
};

export default SignUpForm;