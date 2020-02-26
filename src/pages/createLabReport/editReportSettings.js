import React from 'react';

import { connect } from 'react-redux';
import { setPatientAge, setPatientHeight, setPatientWeight, setPatientGender } from '../../store/patient';
import { toggleDisease } from '../../store/disease';
import { toggleTest } from '../../store/tests';

import { Helmet } from 'react-helmet';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

import { Diseases, Tests, OrderSets } from 'simlab';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

import PatientSettings from '../../components/patientSettings';
import DiseaseSettings from '../../components/diseaseSettings';
import TestSettings from '../../components/testSettings';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  expansion: {
    minWidth: "100%"
  }
}));

function EditReportSettingsPage(props) {
  //console.log(Diseases);
  const classes = useStyles();
  const match = useRouteMatch();


  const [patientExpanded, setPatientExpanded] = React.useState(true);
  const [diseasesExpanded, setDiseasesExpanded] = React.useState(true);
  const [testsExpanded, setTestsExpanded] = React.useState(true);

  return (
    <>
      <Helmet>
        <title>SimLabber - Create Lab Report - Settings</title>
      </Helmet>

      <Container maxWidth="md">
        <Box className={classes.root} style={{margin: 'auto', marginTop: 50}}>

        <ExpansionPanel className={classes.expansion} expanded={testsExpanded} onChange={() => setTestsExpanded(!testsExpanded)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Lab Tests</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <TestSettings 
                  testList={Tests}
                  orderSetList={OrderSets}
                  selectedTests={props.tests}
                  onSelectedChange={(test) => { props.toggleTest(test); }} 

                  dense
                />

            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expansion} expanded={diseasesExpanded} onChange={() => setDiseasesExpanded(!diseasesExpanded)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Disease Settings</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <DiseaseSettings 
                diseaseList={Diseases}
                selectedDiseases={props.disease}
                onSelectedChange={(disease) => { props.toggleDisease(disease); }} 

                dense
              />

            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expansion} expanded={patientExpanded} onChange={() => setPatientExpanded(!patientExpanded)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Patient Settings</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <PatientSettings 
                age={props.patient.age}
                setAge={props.setPatientAge}

                height={props.patient.height}
                setHeight={props.setPatientHeight}

                weight={props.patient.weight}
                setWeight={props.setPatientWeight}

                gender={props.patient.gender}
                setGender={props.setPatientGender}
              />

            </ExpansionPanelDetails>
          </ExpansionPanel>


          <Box pt={4}>
            <Button className={classes.formControl} color="secondary" variant="contained" size="large" component={RouterLink} to={`${match.url}/display`}>Create Lab Report</Button>
          </Box>

        </Box>
      </Container>
    </>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    patient: state.patient,
    disease: state.disease,
    tests: state.tests
  };
};

const mapDispatchToProps = { 
  setPatientAge, 
  setPatientHeight, 
  setPatientWeight, 
  setPatientGender,
  toggleDisease,
  toggleTest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReportSettingsPage);
