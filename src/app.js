import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// hot module reloading
import { AppContainer } from 'react-hot-loader';
// 'createStore' helps create store, 'compose' helps compose middleware into a single middleware function
import { createStore, applyMiddleware, compose } from 'redux';
// 'Provider' brings redux store to app
import { Provider } from 'react-redux';
// 'thunk' is thunk middleware
import thunk from 'redux-thunk';
// reducer is the top level reducer
import reducer from './reducer';


//devToolsExtension will be called if it is in the window
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));


require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
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
  module.hot.accept('./components/App', () => {
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
