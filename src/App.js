import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import AddServices from './components/AddServices/AddServices';
import AddReview from './components/AddReview/AddReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CustomerStatus from './components/CustomerStatus/CustomerStatus';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AdminServiceList from './components/AdminServiceList/AdminServiceList';

export const userInfo = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userInfo.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Addservices'>
            <AddServices />
          </Route>
          <Route path='/review'>
            <AddReview />
          </Route>
          <Route path='/customerServicesList'>
            <CustomerStatus />
          </Route>
          <Route path='/makeAdmin'>
            <AddAdmin />
          </Route>
          <Route path='/adminServicesList'>
            <AdminServiceList />
          </Route>
          <PrivateRoute path='/customerOrder/:_id'>
            <PlaceOrder />
          </PrivateRoute>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </userInfo.Provider>
  );
}

export default App;
