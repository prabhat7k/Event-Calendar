import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";
import "./log-sign.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app
					.auth()
					.signInWithEmailAndPassword(email.value, password.value);
				history.push("/");
				document.title = "Home";
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<h1 className="cen my-4">Log In</h1>
			<form className="loginForm" onSubmit={handleLogin}>
				<div className="form-group col-md-4 cen">
					<label for="InputEmail">
						Email address
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
						Password
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
						Log In
					</button>
				</div>
				<div className="sign">
					<p>Don't have an account?</p>
					<Link
						onClick={() => {
							document.title = "Signup Page | Event Calendar";
						}}
						to="/signup"
						className="link"
					>
						Register
					</Link>
				</div>
			</form>
		</div>
	);
};

export default withRouter(Login);
