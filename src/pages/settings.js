import React from 'react';
import { connect } from "react-redux";
import {
  setUseShortName,
  setUseMetricUnits,
} from "../store/settings";


import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem'
  }
}));

function SettingsPage(props) {
  const classes = useStyles();

  const Done = () => (<span role="img" aria-label="done">✅</span>);
  const InProgress = () => (<span role="img" aria-label="in progress">🚀</span>);
  const NotStarted = () => (<span role="img" aria-label="not started">🚧</span>);

  return (
    <>
      <Helmet>
        <title>SimLabber - Settings</title>
      </Helmet>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Typography gutterBottom variant="h2">Settings</Typography>
          
          <FormControlLabel
            control={<Switch checked={props.settings.useShortName} onChange={(e) => props.setUseShortName(e.target.checked)} name="shortNameChecked" />}
            label="Use Short Names (e.g. Hgb instead of Hemoglobin)"
          />

        </Box>

      </Container>
    </>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = {
  setUseMetricUnits,
  setUseShortName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);


//export default SettingsPage;
