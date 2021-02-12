import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Home.scss";

class Home extends Component {
    render() {
        return (
            <div className="home-bg py-5">
                <Container className="d-flex justify-content-center align-items-center h-75 my-5">
                    <div className="card w-75 home-container align-self-center p-5 home-card-bg">
                        <h1 className="card-title py-3">Welcome!</h1>
                        {/* <h4 className="card-subtitle mb-2 text-muted py-3">
                            DaycareDaily
                        </h4> */}
                        <p className="card-text py-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat, modi! Sed asperiores ipsum cumque est
                            recusandae quos, distinctio harum animi alias nobis
                            debitis odio ea voluptatem in vitae soluta dolor!
                        </p>
                        <p className="card-text py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error quidem nisi delectus obcaecati officiis
                            quos blanditiis. Deserunt animi iste commodi
                            reiciendis sit modi voluptates asperiores repellat
                            libero totam! Aliquid, totam.
                        </p>

                        <button type="button" class="btn btn-custom">
                            Login
                        </button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
