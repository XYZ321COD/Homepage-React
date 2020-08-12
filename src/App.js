import React from "react";
import NavBar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import AboutMe from "./components/AboutMe.js";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/Projects.js";
import Posts from "./components/Posts.js";
import MnistPost from "./components/MnistPost.js";
import SkateBoardApp from "./components/SkateBoardApp";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/projects">
          {" "}
          <NavBar />
          <Projects></Projects>
        </Route>{" "}
        <Route exact path="/posts">
          {" "}
          <NavBar />
          <Posts></Posts>
        </Route>
        <Route exact path="/aboutme">
          <NavBar />
          <AboutMe />
        </Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>
        <Route exact path="/posts/mnist">
          <NavBar />
          <MnistPost />
        </Route>
        <Route exact path="/posts/skateboardapp">
          <NavBar />
          <SkateBoardApp />
        </Route>
      </Router>
    </>
  );
}
export default App;
