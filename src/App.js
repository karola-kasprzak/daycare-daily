import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import Message from "./components/Message/Message";

function App() {
    return (
        <div className="App">
            <Router>
                {/* add shadow to bottom border */}
                <nav className="navbar navbar-expand-lg navbar-light my-3">
                    <div className="container-fluid">
                        <Link to="/">
                            <a className="logo-sign navbar-brand" href="#">
                                <span className="color-dark">Daycare</span>
                                <span className="color-contrast">Daily</span>
                            </a>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarText"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/posts">
                                        <a className="nav-link active">Posts</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">
                                        <a className="nav-link">Our Daycare</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/message">
                                        <a className="nav-link">
                                            Write a Message
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-custom__outline">
                            Login
                        </button>
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
            <footer className="h-25 p-3 footer">
                <p className="text-muted small">
                    2021 DaycareDaily by Karola Kasprzak
                </p>
            </footer>
        </div>
    );
}

export default App;
