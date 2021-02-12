import React from "react";
import { Card } from "react-bootstrap";
import image from "../../images/our_daycare5.jpg";

function SinglePost({ data }) {
    return (
        <Card
            className="h-100 bg-white "
            style={{ borderColor: "#abc4b6", height: "500px" }}
        >
            <Card.Header
                className="text-secondary small py-0 my0"
                style={{ backgroundColor: "#abc4b6" }}
            >
                {data.date}
            </Card.Header>
            <div class="row g-0">
                <div class="col-md-4">
                    <Card.Img
                        variant="bottom"
                        src={image}
                        style={{
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div class="col-md-8">
                    <Card.Body className="d-flex flex-column">
                        <div className="d-flex mb-2 justify-content-between">
                            <Card.Title className="mb-0 font-weight-bold">
                                {data.title}
                            </Card.Title>
                        </div>
                        <Card.Text className="">{data.desc}</Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
}

export default SinglePost;
