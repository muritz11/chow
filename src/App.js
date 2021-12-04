import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import Home from "./pages/Homepage";
import Dish from "./pages/Dish";
import KitchensPage from "./pages/kitchens";
import KitchenProfile from "./pages/KitchenProfile";
import Nav from "./components/mini/Navbar";
import "./css/font-awesome-4.7.0/css/font-awesome.css";
import './css/bootstrap-main/dist/css/bootstrap.css';
import Footer from "./components/mini/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/dish'>
            <Dish />
          </Route>
          <Route exact path='/kitchens'>
            <KitchensPage />
          </Route>
          <Route path='/kitchen-profile'>
            <KitchenProfile />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
