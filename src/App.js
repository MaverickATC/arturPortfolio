import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import {HomePage} from './pages/HomePage';
import {ContactsPage} from './pages/ContactsPage';
import {GalleryPage} from "./pages/GalleryPage";
import {AdminPage} from "./pages/AdminPage";
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";


function App() {
  const {token, login, logout} = useAuth();

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{token, login, logout, isAuthenticated}}
    >
      <BrowserRouter>
        <CssBaseline/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Redirect exact from="/gallery" to="gallery/interiors"/>
          <Route exact path="/gallery/:page?" render={props => <GalleryPage {...props}/>}/>
          <Route exact path="/contacts">
            <ContactsPage/>
          </Route>
          <Redirect exact from="/admin" to="admin/add"/>
          <Route exact path="/admin/:page?" render={props => <AdminPage {...props}/>}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
