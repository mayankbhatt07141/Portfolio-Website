import "./App.css";
import Header from "./Components/Navbar";
import Home from "./Views/Home";
import About from "./Views/About";
import Skills from "./Views/Skills";
import Feedback from "./Views/Feedback";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
