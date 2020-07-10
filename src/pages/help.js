import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import start from './help/images/start.png';

import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem'
  }
}));

function RoadmapPage() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>SimLabber - Help</title>
      </Helmet>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Typography gutterBottom variant="h2">Help</Typography>
          <Typography paragraph>This is a quick start guide to using SimLab. This website is designed to help you create lab results and reports for use in medical simulations. </Typography>
          <Typography gutterBottom variant="h4">Creating a Lab Report</Typography>
          <Typography paragraph>
            To create a new lab report, three criteria need to be specified:
            <ol>
              <li>Which lab tests to include</li>
              <li>What disease process(es) the patient has</li>
              <li>The characteristics of the patient</li>
            </ol>
            To start, select 'Start Lab Report' from the navigation menu at the top of the page.
            <img src={start} />
            In the new page that appears, you can make selections for the three items above, starting with which labs to include. Labs are divided into individual lab tests, and 
          </Typography>
          <Typography paragraph></Typography>
        </Box>

      </Container>
    </>
  );
}

export default RoadmapPage;
