import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Home from "./components/Home";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import Message from "./components/Message/Message";

function App() {
    return (
        <div className="App">
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            DaycareDaily
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    {" "}
                                    <Link to="/">
                                        <p class="nav-link active">Home</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {" "}
                                    <Link to="/posts">
                                        <p class="nav-link">Posts</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {" "}
                                    <Link to="/about">
                                        <p class="nav-link">Our Daycare</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {" "}
                                    <Link to="/message">
                                        <p class="nav-link">Write a Message</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Route exact path="/">
                    <Home imgPath="https://www.fotomaniak.pl/wp-content/uploads/fotomaniak/2018/03/chmura-foto.jpg"></Home>
                </Route>
                <Route exact path="/posts">
                    <Posts />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/message">
                    <Message />
                </Route>
            </Router>
        </div>
    );
}

export default App;
