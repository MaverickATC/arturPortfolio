import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import {HomePage} from './pages/HomePage';
import {ContactsPage} from './pages/ContactsPage';
import {GalleryPage} from "./pages/GalleryPage";

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Redirect exact from="/gallery" to="gallery/interiors"/>
                <Route exact path="/gallery/:page?" render={props => <GalleryPage {...props}/>} />
                <Route exact path="/contacts">
                    <ContactsPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
