import './App.css';
import PageStart from "../PageStart/PageStart";
import {Router, Route} from "react-router-dom";
import PageOver from "../PageOver/PageOver";
import PageGame from "../PageGame/PageGame";
import {customHistory} from "../../helpers/history";

function App() {
  return (
      <Router history={customHistory}>
          <div className="App">
              <Route exact path="/" render={ () => <PageStart /> } />
              <Route exact path="/over" render={ () => <PageOver/> } />
              <Route exact path="/game" render={ () => <PageGame /> } />
          </div>
      </Router>

  );
}

export default App;
