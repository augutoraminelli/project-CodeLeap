import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SignUp } from './pages';
import { MainScreen } from './pages';
import { NotFound } from './pages';
import store from './redux/store';


function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SignUp } />
          <Route path="/main-page" component={ MainScreen } />
          <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
