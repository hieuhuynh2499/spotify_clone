import "./scss/index.scss";

// import Header from "./components/header";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./containers/registerPage";
// import Wellcome from "./containers/wellcomePage/index";
// import Footer from "./components/footer";
//import Login from "./containers/loginPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header />
        <Switch>
          <Route to="/wellcome">
            <Wellcome />
          </Route>
        </Switch>
        <Footer /> */}
        <Register />
        {/* <Login />*/}
      </div>
    </Router>
  );
}

export default App;
