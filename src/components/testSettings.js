import React from 'react';

import _ from 'underscore';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

  // Component for disease items
function TestListItem (props) {
  return (
    <ListItem dense={props.dense} button onClick={props.onClick ? props.onClick : null}>
      <ListItemIcon>
        <Checkbox checked={props.checked}/>
      </ListItemIcon>
      <ListItemText primary={props.testName} />
    </ListItem>
  );
};

function TestSettings(props) {
  const classes = useStyles();

  const [ orderSetsExpanded, setOrderSetsExpanded ] = React.useState(false);
  const [ testsExpanded, setTestsExpanded ] = React.useState(false);

  const orderSetsActive = _.chain(props.orderSetList).keys().intersection(props.selectedTests).value();
  const testsActive = _.chain(props.testList).keys().intersection(props.selectedTests).value();

  return (
    <Container>

      <ExpansionPanel expanded={orderSetsExpanded} onChange={() => setOrderSetsExpanded(!orderSetsExpanded)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: orderSetsActive.length > 0 ? '#eeeeee' : undefined }}>
          <Typography>Order Sets</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <List dense={props.dense}>
          
            {_.chain(props.orderSetList).keys().sort().value().map((value) => (
              <TestListItem
                key={value}
                testName={props.orderSetList[value].Short}
                testId={value}
                dense={props.dense}
                
                onClick={() => { 
                  if (props.onSelectedChange) 
                    props.onSelectedChange(value); 
                }}
                checked={_.contains(props.selectedTests, value)}
              />
            ))}

          </List>

        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={testsExpanded} onChange={() => setTestsExpanded(!testsExpanded)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: testsActive.length > 0 ? '#eeeeee' : undefined }}>
          <Typography>Individual Lab Tests</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <List dense={props.dense}>
          
            {_.chain(props.testList).keys().sort().value().map((value) => (
              <TestListItem
                key={value}
                testName={`${props.testList[value].long} (${props.testList[value].short})`}
                testId={value}
                dense={props.dense}
                
                onClick={() => { 
                  if (props.onSelectedChange) 
                    props.onSelectedChange(value); 
                }}
                checked={_.contains(props.selectedTests, value)}
              />
            ))}

          </List>

        </ExpansionPanelDetails>
      </ExpansionPanel>

    </Container>
    
  );
}

export default TestSettings;
