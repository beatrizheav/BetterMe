import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Forms from "./pages/Forms";
import FinishForm from "./pages/FinishForm";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/LogIn" exact component={LogIn}/>
          <Route path="/Forms" exact component={Forms} />
          <Route path="/FinishForm" exact component={FinishForm} />
          <Route path="/Main" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
