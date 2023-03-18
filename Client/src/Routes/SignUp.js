import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import { Link } from "react-router-dom";
import { doc } from "firebase/firestore";

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app
					.auth()
					.createUserWithEmailAndPassword(
						email.value,
						password.value
					);
				history.push("/");
				document.title = "Home";
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	return (
		<div>
			<h1 className="cen my-4">Event Calendar</h1>
			<h3 className="cen my-4">Sign Up</h3>
			<form className="loginForm" onSubmit={handleSignUp}>
				<div className="form-group col-md-4 cen">
					<label for="InputEmail">
						Enter Email address
						<input
							name="email"
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							placeholder="example@someone.com"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</label>
				</div>
				<div className="form-group col-md-4 cen">
					<label for="exampleInputPassword1">
						Create Password
						<input
							type="password"
							name="password"
							className="form-control"
							placeholder="Password"
						/>
					</label>
				</div>
				<div className="cen">
					<button type="submit" className="btn btn-primary mt-2 cen">
						Sign Up
					</button>
				</div>
				<div className="sign my-4">
					<p>Already have an account?</p>
					<Link
						onClick={() => {
							document.title = "Login Page | Event Calendar";
						}}
						to="/login"
						className="link"
					>
						{/* <button className="btn btn-primary m-4 btn-sm">
								Log In
							</button>{" "} */}
						Login
					</Link>
				</div>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
