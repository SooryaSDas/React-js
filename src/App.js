import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainBody from "./Components/MainBody";
import HomePage from "./Components/HomePage.js/HomePage";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Body from './Components/Body';
import PlaneBody from "./Components/SignInSignUp/PlaneBody"
import SignIn from "./Components/SignIn/SignIn"
import SignUp from "./Components/SignUp/SignUp"
import { useEffect, useContext } from 'react';
import { AuthContext, FirebaseContext } from './store/Context';

const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <Body/>
    },
    {
      path : "/body",
      element : <MainBody/>
    },
    {
      path : "/signin",
      element : <SignIn/>,
    },
    {
      path : "/signup",
      element : <SignUp/>
    }
  ])


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div className="App">
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

