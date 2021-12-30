import AppBar from "./layouts/Navbar";
import { Suspense, lazy } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => (
  <div className="App">
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <AppBar />
        <Container fluid>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Container>
      </Router>
    </Suspense>
  </div>
);

export default App;
