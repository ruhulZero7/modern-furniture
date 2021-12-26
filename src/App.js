import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/pages/About/About";
import AllProducts from "./components/pages/AllProduct/AllProducts";
import Booking from "./components/pages/Booking/Booking";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Dashboard from "./components/pages/Dashboard/Dashboard/Dashboard";
import Home from "./components/pages/Home/Home/Home";
import Login from "./components/pages/Login/Login/Login";
import PrivateRoute from "./components/pages/Login/Login/PrivateRoute/PrivateRoute";
import Register from "./components/pages/Login/Register/Register";
import NotFound from "./components/pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/all-products" component={AllProducts} />
            <Route path="/about-us" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/booking/:furnitureId">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
