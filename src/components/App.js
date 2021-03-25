import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import { HomePage, AboutPage } from '../components';
import { setUpAction } from '../redux';

const App = ({ setUp, fireSetUp }) => {
  useEffect(() => {
    fireSetUp();
    console.log(setUp);
  }, []);
  return (
    <div className="container">
      <Router history={history}>
        <h1>Header {setUp}</h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  setUp: state.connected.set_up,
});

const mapDispatchToProps = {
  fireSetUp: setUpAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
