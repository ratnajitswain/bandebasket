import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpass";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgotpass" component={ForgotPassword}/>
      </Switch>
    </>
  );
}

export default App;
