import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/Logout';
import setAuthToken from './utils/setAuthToken';
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from './actions/auth';

const App = () => {

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);


  return (
   <Provider store={store}>
     <Router>
      <Fragment>
       <Route exact path="/" component={Landing}/>
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
          </Switch>
      </Fragment>
    </Router>
   </Provider>
  );
}

export default App;
