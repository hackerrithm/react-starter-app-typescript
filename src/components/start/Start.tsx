import React, { Component } from "react";
import Login from "../login/Login";
import Tasks from "../task/tasks";

export default class Start extends Component<{}, any> {
	render() {
		return (
			<div>
				<h2>Hi from Start</h2>
				<Login />
				<Tasks />
			</div>
		);
	}
}
