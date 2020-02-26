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
function DiseaseListItem (props) {
  return (
    <ListItem dense={props.dense} button onClick={props.onClick ? props.onClick : null}>
      <ListItemIcon>
        <Checkbox checked={props.checked}/>
      </ListItemIcon>
      <ListItemText primary={props.diseaseName} />
    </ListItem>
  );
};

function DiseaseCategory(props) {
  const [ expanded, setExpanded ] = React.useState(false);

  // Color the title if one or more diseases from this category are selected
  const categoryDiseases = _.filter(props.selectedDiseases, (diseaseName) => diseaseName.startsWith(`${props.categoryId}.`));

  return (
    <ExpansionPanel expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: categoryDiseases.length > 0 ? "#eeeeee" : undefined }}>
        <Typography>{props.categoryName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>

        <List dense={props.dense}>
        
          {_.chain(props.diseases).omit("long", "short", "description").keys().sort().value().map((value) => (
            <DiseaseListItem
              key={`${props.categoryId}.${value}`}
              diseaseName={`${props.diseases[value].short} — ${props.diseases[value].long}`}
              diseaseId={`${props.categoryId}.${value}`}
              dense={props.dense}
              
              onClick={() => { 
                if (props.toggleDisease) 
                  props.toggleDisease(`${props.categoryId}.${value}`); 
              }}
              checked={_.contains(props.selectedDiseases, `${props.categoryId}.${value}`)}
            />
          ))}

        </List>

      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

function DiseaseSettings(props) {
  const classes = useStyles();

  return (
    <Container>

      {_.keys(props.diseaseList).sort().map((value) => (
        <DiseaseCategory 
          key={value} 
          categoryId={value}
          categoryName={props.diseaseList[value].long} 
          diseases={props.diseaseList[value]}

          selectedDiseases={props.selectedDiseases}
          toggleDisease={(disease) => { if (props.onSelectedChange) props.onSelectedChange(disease) }/* ? props.onSelectedChange : null*/}
          dense={props.dense}
        />))}

    </Container>
    
  );
}

export default DiseaseSettings;
