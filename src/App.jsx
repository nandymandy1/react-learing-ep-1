import AppBar from "./layouts/Navbar";
import { Suspense, lazy } from "react";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const MediaManager = lazy(() => import("./pages/MediaManager"));

const App = () => (
  <div className="App">
    <ToastContainer />
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <AppBar />
        <Container className="mt-5 pt-5" fluid>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/manage-blogs" exact component={MediaManager} />
          </Switch>
        </Container>
      </Router>
    </Suspense>
  </div>
);

export default App;
