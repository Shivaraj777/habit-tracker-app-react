import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import { habits } from './reducers';
import { Provider } from 'react-redux';

//creating the store
const store = createStore(habits);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

