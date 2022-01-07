import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Home from "./components/home"
import Quiz from "./components/quiz"
import Success from "./components/success"

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
    <Route exact path='/:quiz_id' component={() => <Home/>} />
    <Route exact path='/quiz/:quiz_id' component={() => <Quiz/>} />
    <Route exact path='/success/:quiz_id' component={() => <Success/>} />
  </>
  </Switch>
));

export default App;
