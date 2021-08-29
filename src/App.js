import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/signIn/SignIn';
import MainPage from './components/mainPage/MainPage';
import AddNewPost from './components/addNewPost/AddNewPost';
import Card from './components/card/Card';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/card">
            <Card />
          </Route>
          <Route path="/addPost">
            <AddNewPost />
          </Route>
          <Route path="/mainPage">
            <MainPage />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
