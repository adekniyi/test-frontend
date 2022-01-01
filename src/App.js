import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Home from "./components/home"
import Quiz from "./components/quiz"

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </div>
  );
}

const MainComponent = withRouter(({ location, history, match }) => (
  <Switch>
  <>
    <Route exact path='/' component={() => <Home/>} />
    <Route exact path='/quiz' component={() => <Quiz/>} />
  </>
  </Switch>
));

export default App;
