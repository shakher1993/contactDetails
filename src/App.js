import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Create from './Create';
import Edit from './Edit';
import NavBar from './NavBar';

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Home")),500);
  });
});

function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <NavBar />
        <Suspense
          fallback={
            <div className="loader">
              <i className="fas fa-spinner fa-pulse"></i>
              <p>Loading...</p>
            </div>}
        >
          <React.Fragment>
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/create" >
                <Create />
              </Route>
              <Route path="/edit" >
                <Edit />
              </Route>
            </Switch>
          </React.Fragment>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
