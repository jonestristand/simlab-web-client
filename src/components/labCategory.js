import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import LabValue from './labValue';

const styles = theme => ({

});

class LabCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidUpdate(oldProps) {

  }

  render() {
    //const { classes } = this.props;
    
    return (
      <Grid item xs={12}>
        <Paper variant="outlined" style={{margin: 'auto', marginTop: 50}}>
          <Typography variant="h6" style={{padding: '0.5em', marginBottom: '0.75rem'}}>
            {this.props.title}
          </Typography>
          { this.props.labResults.map((v, i) => <LabValue key={v.id} {...v} />) }
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(LabCategory);
