import React from'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from'./pages/Login';
import Register from'./pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncident';
import Ongs from './pages/Ongs';
import OngsProfile from './pages/OngsProfile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/> 
                <Route path="/register" component={Register}/>
                
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents" component={NewIncidents}/>

                <Route path="/ongs" component={Ongs}/>
                <Route path="/ongsprofile" component={OngsProfile}/>

            </Switch>
        </BrowserRouter>
    );
}