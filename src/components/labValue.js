import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  unitAdornment: {
    position: "relative",
    top: -2
  },
  indicator: {
    fontWeight: 'bold'
  },
  closedInput: {
    paddingTop: 3
  }
});

class LabValue extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLostFocus = this.handleLostFocus.bind(this);
    this.handleGotFocus = this.handleGotFocus.bind(this);

    this.state = {
      open: false,
      value: props.initialValue
    };
  }

  componentDidUpdate(oldProps) {
    // Check if forceOpen went true->false (then close local state even if previously open)
    if (oldProps.forceOpen && !this.props.forceOpen)
      this.setState({ open: false });
  }

  handleChange(event) {
    this.setState({value: Number(event.target.value)});
  }

  handleKeyPressed(event) {
    if (this.state.open && event.key === "Enter") {
      // close the control
      this.setState({ open: false });
    }
  }

  handleLostFocus(event) {
    this.setState({ open: false });
  }

  handleGotFocus(event) {
    this.setState({ open: true });
  }

  handleClick(event) {
    this.setState((state) => { return { open: !state.open } });
  }

  render() {
    const { classes } = this.props;
    const unitDisplay = <InputAdornment position="end" className={classes.unitAdornment}>{<span dangerouslySetInnerHTML={{ __html: this.props.units }} />}</InputAdornment>;

    let indicator = " ";
    let indicatorColor = "";
    if (this.state.value > this.props.high) {
      indicator = "[H]";
      indicatorColor = "red";
    }
    else if (this.state.value < this.props.low) {
      indicator = "[L]";
      indicatorColor = "blue";
    }

    const valueField = (this.state.open || this.props.forceOpen) ? 
      (<TextField 
        id={this.props.id}
        size="small"
        type="number"
        InputProps={{
            endAdornment: unitDisplay,
          }} 
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPressed}
        onBlur={this.handleLostFocus}
        autoFocus
        fullWidth
      />) :
      (<InputBase
        id={this.props.id}
        value={this.state.value.toFixed(this.props.precision)}
        size="small"
        onFocus={this.handleGotFocus}
        inputProps={{
          className: classes.closedInput
        }}
        endAdornment={unitDisplay}
      />);

    return (
      <Grid container spacing={3}>
        {/*<Grid item xs={0}> </Grid>*/}
        <Grid item xs={3} sm={4}>
          <Typography align="right">{this.props.short}</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          {valueField} 
        </Grid>
        <Grid item xs={3} sm={4}>
          <Typography className={classes.indicator} style={{ color: indicatorColor }}>{indicator}</Typography>
        </Grid>
        {/*<Grid item xs={0}> </Grid>*/}
      </Grid>
    );
  }
}

export default withStyles(styles)(LabValue);
