import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import MoviesCat from '../src/components/Cat/MoviesCat';
import MusicianCat from '../src/components/Cat/MusicianCat';
import NewAddCat from '../src/components/Cat/NewAddCat';
import SportsCat from '../src/components/Cat/SportsCat';
import AddCelebrity from '../src/components/Celebrity/AddCelebrity';
import CelebrityList from '../src/components/Celebrity/CelebrityList';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Login from '../src/components/Login/Login';
import LoginRegistration from '../src/components/Login/LoginRegistration';
import RecoveryPassword from '../src/components/Login/RecoveryPassword';
import OrderView from '../src/components/views/OrderView'
import ProfileView from '../src/components/views/ProfileView'
import SettingsView from '../src/components/views/SettingsView'
import PoliticalCat from '../src/components/Cat/PoliticalCat'
import history from './utils/history'
import Loading from './components/commons/Loading'
// import loading from '../../../src/loading.svg'
import {useAuth0} from "@auth0/auth0-react"
import LoginButton from '../src/components/Login/LoginButton'
import Loginb from "./components/Login/Loginb";
const App=()=> {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
  logout({
    returnTo: window.location.origin,
  });
  return (
      <div>
                <Router history={history}>
                <Route path="/" component={Login}/>
                    <Switch>
                        <Route exact path="/registration" component={LoginRegistration}/>
                    {isAuthenticated && (       
                      <Route exact path="/recoverypassword" component={RecoveryPassword}/>)}
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/addcelebrity" component={AddCelebrity}/>
                        <Route exact path="/celebritylist" component={CelebrityList}/>
                        <Route exact path="/orderview" component={OrderView}/>
                        <Route exact path="/profile" component={ProfileView}/>
                        <Route exact path="/settings" component={SettingsView}/>
                        <Route exact path="/movies" component={MoviesCat}/>
                        <Route exact path="/musician" component={MusicianCat}/>
                        <Route exact path="/newaddcat" component={NewAddCat}/>
                        <Route exact path="/political" component={PoliticalCat}/>
                        <Route exact path="/sports" component={SportsCat}/>
                 

                    </Switch>
                </Router>
            </div>
  );
}

export default App;
