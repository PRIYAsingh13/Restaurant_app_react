import "./App.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import RestaurantList from "./Components/RestaurantList";
import RestaurantCreate from "./Components/RestaurantCreate";
import RestaurantDetail from "./Components/RestaurantDetail";
import RestaurantSearch from "./Components/RestaurantSearch";
import RestaurantUpdate from "./Components/RestaurantUpdate";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Router>
    
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/details">Detail</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/detail">
          <RestaurantDetail />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/update">
          <RestaurantUpdate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
