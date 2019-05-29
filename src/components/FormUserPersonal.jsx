import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

export class FormUserPersonal extends Component {
  render() {
    const { handleChange, previousStep, nextStep, values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="provide personal details" />
          <TextField
            hintText="please provide your occuputation "
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <TextField
            hintText="please provide your city "
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <TextField
            hintText="please provide your bio "
            floatingLabelText="bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <FlatButton
            label="Back"
            onClick={previousStep}
            primary={true}
            centerRipple={true}
            backgroundColor={true}
          />
          <FlatButton label="Continue" onClick={nextStep} primary={true} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserPersonal;
