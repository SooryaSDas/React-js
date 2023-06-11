import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import firebase from "./firebase/config"
import Context from './store/Context';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


