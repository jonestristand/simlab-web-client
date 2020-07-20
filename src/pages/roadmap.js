import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem'
  }
}));

function RoadmapPage() {
  const classes = useStyles();

  const Done = () => (<span role="img" aria-label="done">✅</span>);
  const InProgress = () => (<span role="img" aria-label="in progress">🚀</span>);
  const NotStarted = () => (<span role="img" aria-label="not started">🚧</span>);

  return (
    <>
      <Helmet>
        <title>SimLabber - Roadmap</title>
      </Helmet>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Typography gutterBottom variant="h2">Feature Roadmap</Typography>
          <Typography paragraph><Done /> Add capability for male/female, age/weight, etc.</Typography>
          <Typography paragraph><Done /> Nicer unit fonts (e.g. proper superscripts)</Typography>
          <Typography paragraph><Done /> Needs dependency or default for calculate values</Typography>
          <Typography paragraph><Done /> Prevent some labs from having negative numbers</Typography>
          <Typography paragraph><Done /> Navigation</Typography>
          <Typography paragraph><Done /> Support order sets</Typography>
          <Typography paragraph><Done /> Standard ordering for categories</Typography>
          <Typography paragraph><Done /> Allow diseases to be selected that influences lab output</Typography>
          <Typography paragraph><Done /> Separate lab generator into separate package</Typography>
          <Typography paragraph><Done /> Select labs, patient settings, disease process, etc.</Typography>
          <Typography paragraph><Done /> Allow re-generation of lab results at the click of a button</Typography>
          <Typography paragraph><Done /> Persist settings/labs requested across page refresh</Typography>

          <Typography paragraph><InProgress /> Add a help page</Typography>
          <Typography paragraph><InProgress /> Settings menu (e.g. long vs. short name, etc.)</Typography>
          <Typography paragraph><InProgress /> Allow locking of values that have been edited so that they don't get regenerated</Typography>
          
          <Typography paragraph><NotStarted /> Prevent calculated values from being updated directly, instead update as dependencies are changed</Typography>
          <Typography paragraph><NotStarted /> Save sets of labs to user account</Typography>
          <Typography paragraph><NotStarted /> ABG calculator</Typography>
          <Typography paragraph><NotStarted /> Non-numeric lab results</Typography>
          <Typography paragraph><NotStarted /> Export PDF, DOCX, XLSX</Typography>
        </Box>

      </Container>
    </>
  );
}

export default RoadmapPage;
