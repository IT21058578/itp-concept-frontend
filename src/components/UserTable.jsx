import React, { Component } from "react";
import UserDetails from "./UserDetails";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableCaption,
	TableContainer,
	Box,
} from "@chakra-ui/react";

class UserTable extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		//Once component is mounted, do an AJAX request.
		console.log("Table mounted. Fetching details...");
		fetch("https://itp-concept-bend.herokuapp.com/api/user", { method: "GET" })
			.then((response) => response.json())
			.then((result) => this.setState({ users: result }));
	}

	componentDidUpdate() {
		if (this.props.isUpdated === false) {
			console.log("State updated. Updating UI...");
			fetch("https://itp-concept-bend.herokuapp.com/api/user", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((result) => this.setState({ users: result }))
				.then(() => {
					this.props.onIsUpdated();
				});
		}
	}

	render() {
		return (
			<div>
				<Box m="10" borderColor="gray" border="1px" borderRadius="10">
					<TableContainer>
						<Table>
							<TableCaption>List of users</TableCaption>
							<Thead>
								<Tr>
									<Th>Id</Th>
									<Th>First Name</Th>
									<Th>Last Name</Th>
									<Th>Email</Th>
									<Th>Update</Th>
									<Th>Delete</Th>
								</Tr>
							</Thead>
							<Tbody>
								{this.state.users.map((user) => (
									<UserDetails
										key={user.id}
										user={user}
										onDelete={this.props.onDelete}
										onUpdate={this.props.onUpdate}
									/>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				</Box>
			</div>
		);
	}
}

export default UserTable;
