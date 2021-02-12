import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

function SinglePost({ data }) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Header
                className="text-secondary small py-0 my0"
                style={{ backgroundColor: "#abc4b6" }}
            >
                Date: {data.date}
            </Card.Header>
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {data.title}
                    </Card.Title>
                </div>
                <Card.Text className="">{data.desc}</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={data.image} />
        </Card>
    );
}

export default SinglePost;
