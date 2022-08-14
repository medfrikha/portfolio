import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
