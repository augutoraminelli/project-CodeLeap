import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignUp } from './pages';
import { MainScreen } from './pages';
import { NotFound } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SignUp } />
        <Route path="/main-page" component={ MainScreen } />
        <Route component={ NotFound } />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
