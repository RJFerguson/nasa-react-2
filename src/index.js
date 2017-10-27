import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App.jsx';
import Store from './Store.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
