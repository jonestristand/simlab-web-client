import React from "react";
import {
  /*Link as RouterLink,*/
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import DisplayLabsPage from "./displayLabs";
import EditReportSettingsPage from './editReportSettings';

const useStyles = makeStyles(theme => ({

}));

function CreateLabReportPage() {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/display`}>
        <DisplayLabsPage />
      </Route>
      <Route path={match.path}>
        <EditReportSettingsPage />
      </Route>
    </Switch>
  );
}

export default CreateLabReportPage;
