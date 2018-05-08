import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, IconsPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/icons" component={IconsPage} />
        <Route exact path="/icons/docs" component={MainPage} />
        <Route exact path="/icons/tutorial" component={MainPage} />
      </Switch>
    </div >
  );
};

export default App;
