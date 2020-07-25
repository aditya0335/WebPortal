import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Welcome from "./welcome";
import App from "./App";
import NYAnalytics from "./components/nyAnalyticsPage";
import ContactTracing from "./components/contactTracing";
import AnalyticsPage from "./components/analyticsPage";
import GeoFencing from "./components/geoFencing";
import University from "./components/university";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/analytics" component={App} />
          {/* <Route path="/geoFencing" component={GeoFencing} /> */}
          <Route exact path="/nyanalytics" component={App} />
          <Route exact path="/tracing" component={App} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;