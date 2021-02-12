import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Message extends Component {
    render() {
        return (
            <div className="py-5 bg-texture">
                <Container className="d-flex justify-content-center align-items-center h-75 py-5">
                    <div className="card w-100 home-container align-self-center p-5 home-card-bg">
                        <h2 className="card-title py-3">Write to Us</h2>

                        <p className="card-text py-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat, modi! Sed asperiores ipsum cumque est
                            recusandae quos, distinctio harum animi alias nobis
                            debitis odio ea voluptatem in vitae soluta dolor!
                        </p>

                        <form className="g-3 py-3">
                            <div className="py-2">
                                <label
                                    for="validationDefault01"
                                    className="form-label"
                                >
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault01"
                                    required
                                />
                            </div>

                            <div className="py-2">
                                <label
                                    for="validationDefaultUsername"
                                    className="form-label"
                                >
                                    Your email
                                </label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        id="inputGroupPrepend2"
                                    >
                                        @
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefaultUsername"
                                        aria-describedby="inputGroupPrepend2"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="py-2">
                                <label
                                    for="validationDefault04"
                                    className="form-label"
                                >
                                    Choose a Group
                                </label>
                                <select
                                    className="form-select form-control"
                                    id="validationDefault04"
                                    required
                                >
                                    <option selected disabled value="">
                                        Choose...
                                    </option>
                                    <option value="1">Group 1 Ages 0-2</option>
                                    <option value="2">Group 2 Ages 3</option>
                                    <option value="3">Group 3 Age 4</option>
                                </select>
                            </div>

                            <div class="py-2">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="10"
                                ></textarea>
                            </div>

                            <div className="py-2">
                                <button
                                    className="btn btn-custom"
                                    type="submit"
                                >
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Message;
