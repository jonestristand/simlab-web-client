import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import _ from 'underscore';
import { generateLabResults } from 'simlab';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import LabCategory from '../../components/labCategory';

import { setReportResult } from '../../store/reportResult';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
}));

// Placeholder
function LabList (props) {
  return (
    <Grid container>{props.children}</Grid>
  );
}

function DisplayLabsPage(props) {
  const classes = useStyles();
  
  //const generateLabs = () => {
    const result = generateLabResults(
      props.tests,
      props.disease,
      props.patient
    );  

    //props.setReportResult(result);
  //}

  return (
    <>
      <Helmet>
        <title>SimLabber - Lab Report</title>
      </Helmet>

      <Container maxWidth="sm">

        {/*<Box className={classes.root} pt={4}>
          <Button disabled color="secondary" variant="contained" size="large">Generate New Values</Button>
        </Box>*/}
        <Box>

          <LabList>
            { _.chain(result).mapObject((results, category) => <LabCategory key={category} title={category} labResults={results} />).values().value() }
          </LabList>

        </Box>
        <Box pt={8}> </Box>

      </Container>
    </>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    patient: state.patient,
    disease: state.disease,
    tests: state.tests,
    reportResult: state.reportResult
  };
};

const mapDispatchToProps = { 
  setReportResult
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayLabsPage);
