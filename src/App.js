import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpass";
import Home from "./components/home";
import Dashboard from "./components/layout";
function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgotpass" component={ForgotPassword}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </>
  );
}

export default App;
