import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
