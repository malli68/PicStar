import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import MoviesCat from '../Cat/MoviesCat';
import MusicianCat from '../Cat/MusicianCat';
import NewAddCat from '../Cat/NewAddCat';
import SportsCat from '../Cat/SportsCat';
import AddCelebrity from '../Celebrity/AddCelebrity';
import CelebrityList from '../Celebrity/CelebrityList';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import LoginRegistration from '../Login/LoginRegistration';
import RecoveryPassword from '../Login/RecoveryPassword';
import OrderView from '../views/OrderView'
import ProfileView from '../views/ProfileView'
import SettingsView from '../views/SettingsView'
import PoliticalCat from '../Cat/PoliticalCat'
export default class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={Login}/>
                        <Route path="/registration" component={LoginRegistration}/>
                        <Route path="/recoverypassword" component={RecoveryPassword}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/addcelebrity" component={AddCelebrity}/>
                        <Route path="/celebritylist" component={CelebrityList}/>
                        <Route path="/orderview" component={OrderView}/>
                        <Route path="/profile" component={ProfileView}/>
                        <Route path="/settings" component={SettingsView}/>
                        <Route path="/movies" component={MoviesCat}/>
                        <Route path="/musician" component={MusicianCat}/>
                        <Route path="/newaddcat" component={NewAddCat}/>
                        <Route path="/political" component={PoliticalCat}/>
                        <Route path="/sports" component={SportsCat}/>

                    </Switch>
                </Router>
            </div>
        )
    }
}