import React from "react";
import { Route, Switch } from "react-router-dom";
import MainScreen from "../pages/MainScreen";

export default function Routes() {
  return (
    <Switch>
      <Route path="/main-page" component={ MainScreen } />
    </Switch>
  );
}
