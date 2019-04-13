import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    patient_pool: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };



  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">

      <TextField
          required
          id="standard-multiline-flexible"
          label="Name of Search"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

      <TextField
          required
          id="standard-name"
          label="Control DNA Sequence"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <TextField
        required
          id="standard"
          label="Patient Pool"
          placeholder=" [{id: 1, DNA: 'ABCDABCD'}] "
          value={this.state.patient_pool}
          placeholder= " [{id: 1, DNA: 'ABCDABCD'}] "
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard"
          label="known mutation sequence"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
