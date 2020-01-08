import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

setGlobalStyles();

// const renderApp = () => {
    ReactDOM.render(
    //  <GlobalStyles />,   
     <App />, 
    document.getElementById('root'),
    );
// };

// renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// registerServiceWorker();

serviceWorker.register();
