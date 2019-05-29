import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextFiled from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="enter user name" />
          <TextFiled
            hintText="enter your firstname"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextFiled
            hintText="enter your lastName"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextFiled
            hintText="enter your email"
            floatingLabelText="email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            primary={true}
            label="continue"
            style={styles.button}
            labelColor="#000"
            backgroundColor="#000"
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
