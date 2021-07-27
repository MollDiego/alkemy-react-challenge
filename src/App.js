import { useAuthState } from "./service/Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Searcher from "./components/Searcher";

function App() {
  const { isAuthenticated } = useAuthState();
  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/searcher">
            <Searcher />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Login />;
  }
}

export default App;
