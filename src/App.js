import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import Event from "./Components/Event/Event";
import Admin from "./Components/Admin/Admin";
import AddEvent from "./Components/AddEvent/AddEvent";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/event/:productId">
            <Register />
          </PrivateRoute>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/addEvent">
            <AddEvent/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
