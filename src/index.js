import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import firebase from "./firebase/config"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


