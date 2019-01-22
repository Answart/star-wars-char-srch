import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// hot module reloading
import { AppContainer } from 'react-hot-loader';
// 'createStore' helps create store, 'compose' helps compose middleware into a single middleware function
import { createStore, applyMiddleware, compose } from 'redux';
// 'Provider' brings redux store to app
import { Provider } from 'react-redux';
// 'thunk' is middleware used to delay dispatch of an action, or dispatch only if condition is met
import thunk from 'redux-thunk';
// 'reducer' is the top level reducer
import reducer from './reducer';
import { getCharacters } from './reducer/characters/actions';


//devToolsExtension will be called if in window
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

// Creates an action (starts AJAX request) to fetch the characters from the API (reducer/characters/actions.js). Once received, characters will be sent to an action in the store where the reducer will return the characters (reducer/characters/index.js).
store.dispatch(getCharacters());

// require('../index.html');

const container = document.querySelector('#root');


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      , container
    );
  });
}
