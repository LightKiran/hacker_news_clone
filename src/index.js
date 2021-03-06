import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
import * as serviceWorker from './serviceWorker';
import hackerNewsApi from 'services/hackerNewsApi';

setGlobalStyles();

hackerNewsApi.getTopStoryIds().then(ids => console.log(ids));

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);
  store.dispatch({ type: '@hnClone/@@INIT' });

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state ->');
    console.log(store.getState());
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();

serviceWorker.register();