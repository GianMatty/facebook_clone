import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

// import { NavBar } from './NavBar';

import { SignUpScreen } from './signup/SignUpScreen';
import { LoginScreen } from './login/LoginScreen';
import { HomeScreen } from './home/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
                
                {/* <NavBar /> */}

                <div>
                    <Switch>
                        <Route path="/" exact component={ LoginScreen } />
                        <Route path="/signup" component={ SignUpScreen } />
                        <Route  path="/home"  component={ HomeScreen } />
                        
                        <Redirect to="/" />

                    </Switch>
                </div>

        </Router>
    )
}
