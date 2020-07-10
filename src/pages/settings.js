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
        <title>SimLabber - Settings</title>
      </Helmet>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Typography gutterBottom variant="h2">Settings</Typography>
          <Typography paragraph></Typography>
        </Box>

      </Container>
    </>
  );
}

export default RoadmapPage;
