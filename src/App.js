
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import LoginFunction from './LoginFunction'



import {

  BrowserRouter,
  Switch,
  Route,
  Link

} from 'react-router-dom'



function App() {
  return (
   

      <BrowserRouter>
      <Link to= "/login">Login</Link>
      <Link to= "/">Login Function</Link>

      <div className="App">

        <Switch>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/">                         
          <LoginFunction></LoginFunction>
          </Route>
        </Switch>
     

    </div>
    </BrowserRouter>
  );
}

export default App;
