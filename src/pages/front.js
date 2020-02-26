import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import theme from '../theme';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItem: "flex-start",
    flexDirection: "row",
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    [theme.breakpoints.down('sm')]: {
      alignItems: "center",
      flexDirection: "column",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8)
    }
  },
  iconBlock: {
    width: 215,
    height: 215,
    marginRight: 64,
    marginTop: 16,
    [theme.breakpoints.down('sm')]: {
      width: 120,
      height: 120,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 16  
    }
  },
  textBlock: {
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    }
  },
  title: {
    fontSize: "3rem",
    fontWeight: 300,
    letterSpacing: "1rem"
  },
  titleHeavy: {
    fontWeight: 700
  }
}));

const SyringeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} viewBox="0 0 512 512"><path d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"/></svg>
);

function FrontPage() {
  const classes = useStyles();
  
  return (
    <>
      <Helmet>
        <title>SimLabber</title>
      </Helmet>
      <Container maxWidth="md" className={classes.root}>
        <Box className={classes.iconBlock}>
          <SyringeIcon fill={theme.palette.primary.main}/>
        </Box>
        <Box className={classes.textBlock}>
          <Typography gutterBottom variant="h1" color="primary" className={classes.title}><span className={classes.titleHeavy}>SIM</span>LABBER</Typography>
          <Typography paragraph variant="h5" color="textPrimary">A web application for generating realistic lab results for simulated patients.</Typography>
          <Typography paragraph variant="h6" color="textSecondary">Boost your simulation fidelity and decrease your workload at the same time.</Typography>
          <Button variant="outlined" color="primary" component={RouterLink} to="/labs">Start a New Lab Report</Button>
        </Box>

      </Container>
    </>
  );
}

export default FrontPage;
