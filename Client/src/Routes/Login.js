import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

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
			<h1>Log in</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					Password
					<input
						name="password"
						type="password"
						placeholder="Password"
					/>
				</label>
				<button type="submit">Log in</button>
			</form>
			<Link to="/signup">
				<button>SignUp</button>
			</Link>
		</div>
	);
};

export default withRouter(Login);
