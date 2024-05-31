import ReactDOM from "react-dom/client";
import NavBar from "./componets/day4/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/day4/Home";
import Profile from "./componets/day4/Profile";
import Contact from "./componets/day4/Contact";
import About from "./componets/day4/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar></NavBar>}>
          <Route path="/homepage" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
