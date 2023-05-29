import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import StartForm from "./pages/StartForm";
import Forms from "./pages/Forms";
import FinishForm from "./pages/FinishForm";
import Main from "./pages/Main";
import Urgente from "./pages/Urgente";
import Directo from "./pages/Directo"
import Mixto from "./pages/Mixto"
import MaterialApoyo from "./pages/MaterialApoyo"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/LogIn" exact component={LogIn}/>
          <Route path="/StartForm" exact component={StartForm} />
          <Route path="/Forms" exact component={Forms} />
          <Route path="/FinishForm" exact component={FinishForm} />
          <Route path="/Main" exact component={Main} />
          <Route path="/Urgente" exact component={Urgente} />
          <Route path="/Directo" exact component={Directo} />
          <Route path="/Mixto" exact component={Mixto} />
          <Route path="/MaterialApoyo" exact component={MaterialApoyo} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
