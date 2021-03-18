// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import { Provider } from 'react-redux';
import { store } from './store';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
