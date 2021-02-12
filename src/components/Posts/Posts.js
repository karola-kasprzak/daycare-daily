import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import SinglePost from "./SinglePost.js";
import data from "./data.json";

class Posts extends Component {
    render() {
        return (
            <div className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
                <Container className="py-5">
                    <Row className="row-cols-1">
                        {data.map((data) => (
                            <Col className="mb-5" key={`${data.id}`}>
                                <SinglePost data={data} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Posts;
