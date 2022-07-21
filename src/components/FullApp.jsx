import React, { Component } from "react";
import InputForm from "./InputForm";
import UserTable from "./UserTable";

class FullApp extends Component {
	state = {
		isUpdated: false,
	};

	handleIsUpdated = () => {
		this.setState({ isUpdated: true });
	};

	handleSubmit = (user) => {
		console.log("Submit pressed", user);
		fetch("https://itp-concept-bend.herokuapp.com/api/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		}).then(this.setState({ isUpdated: false }));
	};

	handleUpdate = (user) => {
		console.log("Db update started...", user);
		fetch(
			"https://itp-concept-bend.herokuapp.com/api/user?" +
				new URLSearchParams({ id: user.id }),
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(user),
			}
		).then(this.setState({ isUpdated: false }));
	};

	handleDelete = (user) => {
		console.log("Delete pressed", user);
		fetch(
			"https://itp-concept-bend.herokuapp.com/api/user?" +
				new URLSearchParams({ id: user.id }),
			{
				method: "DELETE",
			}
		).then(this.setState({ isUpdated: false }));
	};

	render() {
		return (
			<div>
				<InputForm onSubmit={this.handleSubmit} />
				<UserTable
					onUpdate={this.handleUpdate}
					onDelete={this.handleDelete}
					onIsUpdated={this.handleIsUpdated}
					isUpdated={this.state.isUpdated}
				/>
			</div>
		);
	}
}

export default FullApp;
