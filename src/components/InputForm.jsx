import {
	Button,
	Container,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Input,
} from "@chakra-ui/react";
import React, { Component } from "react";

class InputForm extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
	};

	handleChange(event) {
		console.log("Handle change called!");
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div>
				<Container
					border="1px"
					borderRadius="10"
					p="5"
					mt="5"
					borderColor="gray"
				>
					<Grid
						templateColumns="repeat(2,1fr)"
						templateRows="repeat(3,1fr)"
						gap={6}
					>
						<GridItem colSpan={1}>
							<FormControl>
								<FormLabel>First Name</FormLabel>
								<Input
									placeholder="First Name"
									onChange={(e) => this.handleChange(e)}
									name="firstName"
								></Input>
							</FormControl>
						</GridItem>
						<GridItem colSpan={1}>
							<FormControl>
								<FormLabel>Last Name</FormLabel>
								<Input
									placeholder="Last Name"
									onChange={(e) => this.handleChange(e)}
									name="lastName"
								></Input>
							</FormControl>
						</GridItem>
						<GridItem colSpan={2}>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									placeholder="email@email.com"
									type="email"
									onChange={(e) => this.handleChange(e)}
									name="email"
								></Input>
							</FormControl>
						</GridItem>
						<GridItem colSpan={1} alignItems="center" pt="8">
							<Button
								colorScheme="blue"
								size="md"
								w="100%"
								onClick={() => this.props.onSubmit(this.state)}
							>
								Submit
							</Button>
						</GridItem>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default InputForm;
