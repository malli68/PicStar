import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";
import Login from "./components/Login/Login";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.login
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from "react-router-dom"
// import App from './App';
// import { Auth0Provider } from "@auth0/auth0-react";
// import history from "./utils/history";
// import { getConfig } from "./config";
// import * as serviceWorker from "./serviceWorker";
// import LoginButton from './components/Login/LoginButton';
// // const Uri="http://localhost:3000/login"
// ReactDOM.render(
//   <Router>
//   <Auth0Provider
//     domain="dev-fwhugmus.us.auth0.com"
//     clientId="jzXKhN091wihdBcCRFSQGUrVICKje7Re"
//     redirectUri= {window.location.origin} 
//   >
//      <LoginButton/> 
//     <App />
//   </Auth0Provider>
//   </Router>,
//   document.getElementById('root')

// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();






/* ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App/>
  </Auth0Provider>,
  document.getElementById("root") */


/* const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
}; */




/* import LoginButton from './components/Login/LoginButton';

ReactDOM.render(
  <Router>
  <Auth0Provider
    domain="dev-fwhugmus.us.auth0.com"
    clientId="jzXKhN091wihdBcCRFSQGUrVICKje7Re"
    redirectUri={window.location.origin}
  >
    /* <LoginButton/> 
    <App />
  </Auth0Provider>
  </Router>,
  document.getElementById('root')
); 
*/











// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from "react-router-dom"
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain="dev-fwhugmus.us.auth0.com";
// const clientid="jzXKhN091wihdBcCRFSQGUrVICKje7Re";
// ReactDOM.render(
//     <Auth0Provider
//       domain={domain}
//       clientid={clientid}
//       redirectUri={window.location.origin}>
    
//       <App />
//     </Auth0Provider>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// // <BrowserRouter>
// <App />
// </BrowserRouter>,
//