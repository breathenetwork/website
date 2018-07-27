import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path='/'
                    exact={true}
                    render={(props) => <Main {...props}/>}
                />
                <Route
                    render={(props) => <NotFound {...props}/>}
                />
            </Switch>
        );
    }
}

export default App;
