import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "./component/Calendar";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Routes/PrivateRoute";

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<div>
					<PrivateRoute exact path="/" component={Calendar} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</div>
			</Router>
		</AuthProvider>
	);
};

export default App;
