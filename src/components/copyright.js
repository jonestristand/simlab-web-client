import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "auto",
    paddingBottom: "1.5rem"
  }
}));

function Copyright(props) {
  const classes = useStyles();

    return (
      <Box className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          {new Date().getFullYear()}{' '}
          <Link color="inherit" href="http://tdjones.ca">
            Tristan Jones
          </Link>
        </Typography>
      </Box>
    );
  }

export default Copyright;
