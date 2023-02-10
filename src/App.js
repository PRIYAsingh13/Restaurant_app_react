import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

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
            <Link to="/details">Details</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/update">update</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/list" element={<RestaurantList />}></Route>
          <Route path="/create" element={<RestaurantCreate />}></Route>
          <Route path="/details" element={<RestaurantDetail />}></Route>
          <Route path="/search" element={<RestaurantSearch />}></Route>
          <Route path="/update" element={<RestaurantUpdate />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
