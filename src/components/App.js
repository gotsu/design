import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/icons" component={MainPage} />
        <Route exact path="/docs" component={MainPage} />
        <Route exact path="/tutorial" component={MainPage} />
      </Switch>
    </div >
  );
};

export default App;
