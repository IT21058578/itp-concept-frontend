import React, { Component } from "react";
import { Tr, Td, Button, Input, ButtonGroup } from "@chakra-ui/react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

class UserDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				id: props.user.id,
				firstName: props.user.firstName,
				lastName: props.user.lastName,
				email: props.user.email,
			},
			isUpdating: false,
		};
	}

	handleChange(event) {
		console.log("Changing row details...");

		//Way to create an object from multiple different sources.
		//Takes values from the state.user then replaces the other values from
		//second argument
		const user = Object.assign({}, this.state.user, {
			[event.target.name]: event.target.value,
		});
		this.setState({ user: user });
	}

	handleUpdateStart = () => {
		console.log("Row updating...");
		this.setState({ isUpdating: true });
	};

	handleUpdateFinalize = () => {
		console.log("Row update finalized.");
		this.props.onUpdate(this.state.user);
		this.setState({ isUpdating: false });
	};

	handleUpdateStop = () => {
		console.log("Row update stopped.");
		this.setState({
			user: {
				id: this.props.user.id,
				firstName: this.props.user.firstName,
				lastName: this.props.user.lastName,
				email: this.props.user.email,
			},
			isUpdating: false,
		});
	};

	getRowColor() {
		if (this.state.isUpdating === true) {
			return "gray.100";
		}
		return "whiteAlpha";
	}

	renderUpdatePanel() {
		if (this.state.isUpdating === true) {
			return (
				<div>
					<ButtonGroup isAttached>
						<Button
							colorScheme="green"
							onClick={() => this.handleUpdateFinalize()}
						>
							<AiOutlineCheck />
						</Button>
						<Button colorScheme="pink" onClick={() => this.handleUpdateStop()}>
							<AiOutlineClose />
						</Button>
					</ButtonGroup>
				</div>
			);
		} else {
			return (
				<Button variant="outline" onClick={() => this.handleUpdateStart()}>
					Update
				</Button>
			);
		}
	}

	render() {
		return (
			<Tr bgColor={this.getRowColor()}>
				<Td>{this.state.user.id}</Td>
				<Td>
					<Input
						type="text"
						value={this.state.user.firstName}
						isReadOnly={!this.state.isUpdating}
						name="firstName"
						onChange={(e) => this.handleChange(e)}
					></Input>
				</Td>
				<Td>
					<Input
						type="text"
						value={this.state.user.lastName}
						isReadOnly={!this.state.isUpdating}
						name="lastName"
						onChange={(e) => this.handleChange(e)}
					></Input>
				</Td>
				<Td>
					<Input
						type="text"
						value={this.state.user.email}
						isReadOnly={!this.state.isUpdating}
						name="email"
						onChange={(e) => this.handleChange(e)}
					></Input>
				</Td>
				<Td>{this.renderUpdatePanel()}</Td>
				<Td>
					<Button
						variant="outline"
						onClick={() => this.props.onDelete(this.props.user)}
					>
						Delete
					</Button>
				</Td>
			</Tr>
		);
	}
}

export default UserDetails;
