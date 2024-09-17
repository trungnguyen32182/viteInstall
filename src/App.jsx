import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Install from "./Install";

export default function App() {
  console.log("vao")
  return (
    <Router>
      <div className="home-navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/install">Install</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install" element={<Install />} />
        </Routes>

      </div>
    </Router>
  );
}