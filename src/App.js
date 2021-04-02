import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CheckOut from "./components/CheckOut/CheckOut";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import UserInfo from "./components/UserInfo/UserInfo";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    userName: '',
    email: '',
    error: '',
    photo: '',
    password: '',
    confirmPassword: '',
    isLoggedIn: false
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/product/:id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/userInfo">
            <UserInfo />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
