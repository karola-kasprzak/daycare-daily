import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "./PizzaCard.js";
import pizzas from "./data.json";

class Posts extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {pizzas.map((data) => (
                        <Col xs={3} className="mb-5" key={`${data.id}`}>
                            <PizzaCard data={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Posts;
