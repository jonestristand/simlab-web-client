import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import _ from 'underscore';
import { Helmet } from 'react-helmet';

import LabCategory from '../components/labCategory';

import GenerateLabResults from '../generator/labGenerator';

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

function DisplayLabsPage() {
  const classes = useStyles();

  // Placeholder
  const LabList = (props) => (<Grid container>{props.children}</Grid>);

  const PatientInfo = {
    age: 40,
    gender: 'm',
    race: 'white',
    height: 154,
    weight: 70
  };

  const labs1 = GenerateLabResults([
    'hgb',
    'hct',
    'rbc',
    'mcv',
    'mch',
    'plts',
    'rdw',
    'retics',
    'esr',
    'crp',
    'neut',
    'band',
    'baso',
    'eosin',
    'lymph',
    'mono',
    'wbc',
    'inr',
    'pt',
    'ptt',
    'gluc',
    'na',
    'k',
    'cl',
    'hco3',
    'ag',
    'bun',
    'cr',
    'gfr',
    'ast',
    'alt',
    'ggt',
    'alp',
    'dbili',
    'ibili',
    'tbili',
    'lip',
    'hstnt',
    'ck',
    'bnp',
    ], PatientInfo);

  return (
    <>
      <Helmet>
        <title>SimLabber - Lab Report</title>
      </Helmet>

      <Container maxWidth="sm">
        <Box className={classes.root}>

          <LabList>
            { _.chain(labs1).mapObject((results, category) => <LabCategory key={category} title={category} labResults={results} />).values().value() }
          </LabList>

        </Box>

      </Container>
    </>
  );
}

export default DisplayLabsPage;
