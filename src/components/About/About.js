import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./About.scss";
import image from "../../images/our_daycare6.jpg";
import image2 from "../../images/about_wide.jpg";

class About extends Component {
    render() {
        return (
            <div className="bg-texture py-5">
                <Container className="g-4 my-5">
                    <div className="row row-cols-1 row-cols-md-2 mb-4">
                        <div className="col">
                            <div
                                className="card text-black card-bg-secondary h-100"
                                style={{ borderColor: "#abc4b6" }}
                            >
                                <div className="card-body">
                                    <h2 className="card-title">Our Daycare</h2>
                                    <p className="card-text lh-lg lead">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Inventore deserunt,
                                        aperiam velit expedita aspernatur
                                        molestias, delectus porro doloribus
                                        recusandae nihil omnis nisi quia. Quidem
                                        aliquid consequuntur, nobis praesentium
                                        veritatis deserunt. Modi quibusdam ipsa,
                                        enim maiores fuga iste ratione error
                                        nesciunt fugiat amet eveniet doloremque
                                        architecto ipsam saepe, similique
                                        laborum tempore!.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                class="card bg-light text-white"
                                style={{ borderColor: "#abc4b6" }}
                            >
                                <img src={image} class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 mb-4">
                        <div className="col">
                            <div
                                className="card text-black bg-white mb-4"
                                style={{ borderColor: "#abc4b6" }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">About</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Inventore deserunt,
                                        aperiam velit expedita aspernatur
                                        molestias, delectus porro doloribus
                                        recusandae nihil omnis nisi quia. Quidem
                                        aliquid consequuntur, nobis praesentium
                                        veritatis deserunt. Modi quibusdam ipsa,
                                        enim maiores fuga iste ratione error
                                        nesciunt fugiat amet eveniet doloremque
                                        architecto ipsam saepe, similique
                                        laborum tempore!.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                className="card text-black bg-white mb-4"
                                style={{ borderColor: "#abc4b6" }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">Daily Plan</h5>
                                    <p className="card-text lh-lg">
                                        Our routine is very flexible, to ensure
                                        that children are given optimum time to
                                        explore the learning experiences that
                                        are available. Because of this, we do
                                        not always have our group times at the
                                        same time each day.
                                    </p>
                                    <p>
                                        8:30am - Kindergarten day begins
                                        (children may arrive from this time -
                                        it's great if they can arrive by around
                                        9am)
                                    </p>
                                    <p>
                                        9:00/9:15am - Short circle group time to
                                        say good morning and discuss the day
                                        ahead
                                    </p>

                                    <p>
                                        9:30/9:45am - Morning “brain food”
                                        healthy snack followed by indoor/outdoor
                                        self-directed play experiences
                                    </p>

                                    <p>
                                        11:30am - Tidy up inside and outside,
                                        prepare for relaxation
                                    </p>
                                    <p>11:45am - Relaxation, rest and story</p>
                                    <p>12:00pm - Lunch in the “kindy cafe”</p>
                                    <p>
                                        12:30pm - indoor/outdoor self-directed
                                        play experiences
                                    </p>
                                    <p>2:00pm - optional afternoon snack</p>
                                    <p>
                                        2:30pm - Pack up inside/outside. OSHC
                                        children pack bags
                                    </p>
                                    <p>
                                        3:00pm - Group time learning experiences
                                    </p>
                                    <p>
                                        3:30pm - Kindergarten day ends. All
                                        children need to be collected by this
                                        time, however it is completely fine if
                                        they are picked up earlier. Children can
                                        sometimes take a while to adjust to the
                                        demands of a long day or two at
                                        preschool.
                                    </p>
                                    <p>
                                        3:35pm - educators engage in curriculum
                                        planning and documentation of children’s
                                        learning. Please try to be on time to
                                        collect your child so that we have time
                                        to plan and prepare learning experiences
                                        for the next day.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                class="card bg-light text-white"
                                style={{
                                    borderColor: "#abc4b6",
                                    filter: "saturate(65%)",
                                }}
                            >
                                <img src={image2} class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-lg-3">
                        <div className="col">
                            <div className="card text-white card-bg-primary mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Fun</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Inventore deserunt,
                                        aperiam velit expedita aspernatur
                                        molestias, delectus porro doloribus
                                        recusandae nihil omnis nisi quia. Quidem
                                        aliquid consequuntur, nobis praesentium
                                        veritatis deserunt. Modi quibusdam ipsa,
                                        enim maiores fuga iste ratione error
                                        nesciunt fugiat amet eveniet doloremque
                                        architecto ipsam saepe, similique
                                        laborum tempore!.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card text-white card-bg-accent mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Education</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Inventore deserunt,
                                        aperiam velit expedita aspernatur
                                        molestias, delectus porro doloribus
                                        recusandae nihil omnis nisi quia. Quidem
                                        aliquid consequuntur, nobis praesentium
                                        veritatis deserunt. Modi quibusdam ipsa,
                                        enim maiores fuga iste ratione error
                                        nesciunt fugiat amet eveniet doloremque
                                        architecto ipsam saepe, similique
                                        laborum tempore!.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card text-white card-bg-secondary mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Care</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Inventore deserunt,
                                        aperiam velit expedita aspernatur
                                        molestias, delectus porro doloribus
                                        recusandae nihil omnis nisi quia. Quidem
                                        aliquid consequuntur, nobis praesentium
                                        veritatis deserunt. Modi quibusdam ipsa,
                                        enim maiores fuga iste ratione error
                                        nesciunt fugiat amet eveniet doloremque
                                        architecto ipsam saepe, similique
                                        laborum tempore!.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;
