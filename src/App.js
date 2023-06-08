import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainBody from "./Components/MainBody";
import HomePage from "./Components/HomePage.js/HomePage";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Body from './Components/Body';


const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <Body/>
    },
    {
      path : "/body",
      element : <MainBody/>
    }
  ])


function App() {
  return (
    <div className="App">
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
