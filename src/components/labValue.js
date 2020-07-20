import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
}));

function LabValue(props) {
  const classes = useStyles();

  const [ open, setOpen ] = useState(true);
  const [ value, setValue ] = useState(props.initialValue);
  const [ lockHoverVisible, setLockHoverVisible ] = useState(false);
  const [ locked, setLocked ] = useState(false);

  // Override local open state based on forceOpen prop
  useEffect(() => {
    setOpen(props.forceOpen);
  }, [props.forceOpen]);

  // Override local value if we refresh (e.g. a new initialValue is provided)
  // TODO: Add a control to 'lock' one field'
  useEffect(() => {
    if (!locked) {
      setValue(props.initialValue);
    }
  }, [props.initialValue]);

  let indicator = " ";
  let indicatorColor = "";
  if (value > props.high) {
    indicator = "[H]";
    indicatorColor = "red";
  }
  else if (value < props.low) {
    indicator = "[L]";
    indicatorColor = "blue";
  }

  const unitDisplay = (
    <InputAdornment position="end" className={classes.unitAdornment}>
      {<span dangerouslySetInnerHTML={{ __html: props.units }} />}
    </InputAdornment>
  );
    
  const valueField = open ? 
    (<TextField 
      id={props.id}
      size="small"
      type="number"
      InputProps={{
          endAdornment: unitDisplay,
        }} 
      value={value}
      onChange={ (e) => setValue(Number(e.target.value)) }
      onKeyPress={ (e) => setOpen(!(e.key === "Enter") || props.forceOpen) }
      onBlur={ () => setOpen(false || props.forceOpen) }
      autoFocus
      fullWidth
    />) :
    (<InputBase
      id={props.id}
      value={value.toFixed(props.precision)}
      size="small"
      onFocus={ () => setOpen(true) }
      inputProps={{
        className: classes.closedInput
      }}
      endAdornment={unitDisplay}
    />);

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} sm={1} // TODO: Convert this to store lock state in the redux store
        onClick={ () => setLocked(!locked) } 
        onMouseEnter={ () => setLockHoverVisible(true) } 
        onMouseLeave={ () => setLockHoverVisible(false) }
      >
        <Box displayPrint="none">
          {locked ? <LockIcon color="secondary" /> : (
            lockHoverVisible ? <LockOpenIcon color="disabled" /> : null
          ) }
        </Box>
      </Grid>
      <Grid item xs={3} sm={3}>
        <Typography align="right">{props.short}</Typography>
      </Grid>
      <Grid item xs={5} sm={4}>
        {valueField} 
      </Grid>
      <Grid item xs={3} sm={4}>
        <Typography className={classes.indicator} style={{ color: indicatorColor }}>{indicator}</Typography>
      </Grid>
    </Grid>
  );
}

export default LabValue;