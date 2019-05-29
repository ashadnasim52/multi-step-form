import React, { Component } from "react";
import { FormUserDetails } from "./FormUserDetails";
import { FormUserPersonal } from "./FormUserPersonal";
import { FormConfirm } from "./FormConfirm";
import { FormSuccess } from "./FormSuccess";
export class FormUser extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    occupation: "",
    city: ""
  };

  //Procced to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //goback to next step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      lastName,
      email,
      occupation,
      city,
      bio,
      firstName
    } = this.state;
    const values = { step, lastName, email, occupation, city, bio, firstName };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormUserPersonal
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormConfirm
            values={values}
            previousStep={this.previousStep}
            nextStep={this.nextStep}
          />
        );
      case 4:
        return <FormSuccess />;
    }
  }
}

export default FormUser;
