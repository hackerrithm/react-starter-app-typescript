import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "../user/User";
import Start from "../start/Start";
import Navigation from "../navigation/Navigation";

const AppRouter = () => {
	return (
		<Router>
			<Navigation />
			<Content />
		</Router>
	);
};

const Content = () => (
	<Switch>
		<Route exact path="/" component={Start} />
		<Route exact path="/users" component={User} />
	</Switch>
);

export default AppRouter;
