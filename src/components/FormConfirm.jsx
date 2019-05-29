import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";

export class FormConfirm extends Component {
  confirm = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, previousStep } = this.props;
    const { firstName, lastName, email, occupation, bio, city } = values;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />
          <List>
            <ListItem
              primaryText="first name"
              secondaryText={firstName}
              style={styles.ListItem}
            />
            <ListItem
              primaryText="last name"
              secondaryText={lastName}
              style={styles.ListItem}
            />
            <ListItem
              primaryText="email"
              secondaryText={email}
              style={styles.ListItem}
            />
            <ListItem
              primaryText="occupation"
              secondaryText={occupation}
              style={styles.ListItem}
            />
            <ListItem
              primaryText="city"
              secondaryText={city}
              style={styles.ListItem}
            />
            <ListItem
              primaryText="bio"
              secondaryText={bio}
              style={styles.ListItem}
            />
          </List>
          <RaisedButton onClick={previousStep} label="Go Back" primary={true} />
          <RaisedButton onClick={this.confirm} label="Confirm" primary={true} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  listItem: {
    backgroundColor: "#000"
  }
};
export default FormConfirm;
