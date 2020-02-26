import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function PatientSettings(props) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);


  return (
    <Container>

      <div>
        <TextField className={classes.formControl}
          id="patientAge" 
          label="Age" 
          type="number"
          InputProps={{ endAdornment: <InputAdornment position="end">years</InputAdornment> }}
          
          value={props.age}
          onChange={e => props.setAge(e.target.value)}
        />
      </div>
      <div>
        <TextField className={classes.formControl}
          id="patientHeight" 
          label="Height" 
          type="number"
          InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }}
          
          value={props.height}
          onChange={e => props.setHeight(e.target.value)}
        />

        <TextField className={classes.formControl}
          id="patientWeight" 
          label="Weight" 
          type="number"
          InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
          
          value={props.weight}
          onChange={e => props.setWeight(e.target.value)}
        />
      </div>

      <div>
        <FormControl  className={classes.formControl}>
          <InputLabel ref={inputLabel} id="patientGenderLabel">Gender</InputLabel>
          <Select
            labelId="patientGenderLabel"
            id="patientGender"
            labelWidth={labelWidth}

            value={props.gender}
            onChange={e => props.setGender(e.target.value)}
          >
            <MenuItem value="f">Female</MenuItem>
            <MenuItem value="m">Male</MenuItem>
            <MenuItem value="o">Other</MenuItem>
          </Select>
        </FormControl>
      </div>

    </Container>
    
  );
}

export default PatientSettings;
