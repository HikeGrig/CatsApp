import React from 'react';
import CatListBlock from './components/CatList/CatListBlock';
import Content from './components/styledComponents/Content';
import Header from './components/styledComponents/Header';
import SidebarBlock from './components/Sidebar/SidebarBlock';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Main from './views/Main';

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/:id">
                    <Main/>
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
