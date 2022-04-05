import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from "./Nav";

export const App = () => {
    return (
        <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' render={() => <h3>default</h3>} />
                    <Route exact path='/popular' render={() => <h3>popular</h3>} />
                    <Route exact path='/battle' render={() => <h3>battle</h3>} />
                    <Route render={() => {
                        return <p>Not Found</p>
                    }} />
                </Switch>
            </div>
        </Router>
    )
}
