import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";
import { PizzaCard } from "./components/PizzaCard";
import Navbar from "./components/Navbar";

import pizzas from "./data.json";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Container>
                <Row>
                    {pizzas.map((data) => (
                        <Col xs={3} className="mb-5" key={`${data.id}`}>
                            <PizzaCard data={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default App;
