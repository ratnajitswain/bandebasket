
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login'
function App() {
  return (
    <>
    
    <Switch>
      <Route exact path="/" component={Login} />

      </Switch>
    </>
  );
}

export default App;
