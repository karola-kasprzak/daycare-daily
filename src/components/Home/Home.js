import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";

class Home extends Component {
    render() {
        return (
            <div className="home-bg">
                <Container className="">
                    <div className="card w-50 home-container">
                        <h1 className="card-title">Home</h1>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Card subtitle
                        </h6>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
