import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from '../containers/Header';
import ProductDetails from "../containers/ProductDetail";
import ProductListing from "../containers/ProductListing";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Page Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
