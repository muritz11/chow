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
          <Route exact path='/' component={Home} />
          <Route path='/dish/:dishId' component={Dish} />
          <Route exact path='/kitchens' component={KitchensPage} />
          <Route path='/kitchen-profile/:kitchenId' component={KitchenProfile} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
