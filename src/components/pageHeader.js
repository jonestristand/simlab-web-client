import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  titleContainer: {
    flexGrow: 0
  },
  title: {
    flexGrow: 1,
  },
});

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Box>
  
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" component={RouterLink} to="/">
              <Box mr={2}>
                <Icon className={`fa fa-syringe`} />
              </Box>
              <Typography variant="h6" className={classes.title}>SimLabber - BETA</Typography>
            </IconButton>
            <span className={classes.title}></span>
            {/*<FormControlLabel className={classes.title}
              control={<Switch color="default" checked={forceOpen} onChange={() => { setForceOpen(!forceOpen); }} />}
              label="Edit All"
            />*/}
            <Box mr={2}><Button color="inherit" component={RouterLink} to="/labs">Start Lab Report</Button></Box>
            <Box mr={2}><Button color="inherit" component={RouterLink} to="/roadmap">Roadmap</Button></Box>
            <Box mr={2}><Button color="inherit" component={RouterLink} to="/settings">Settings</Button></Box>
            <Box mr={2}><Button color="inherit" component={RouterLink} to="/help">Help</Button></Box>
          </Toolbar>
        </AppBar>

      </Box>
    );
  }
}

export default withStyles(styles)(PageHeader);
