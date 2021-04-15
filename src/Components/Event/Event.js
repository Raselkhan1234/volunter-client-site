import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Event.css";
import logo1 from "../../logos/Group 1329.png";
import { UserContext } from "../../App";

const Event = () => {
  const [event, setEvent] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    fetch("https://limitless-mesa-78892.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://limitless-mesa-78892.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("data delete successfully");
        const remainItem = event.filter((ev) => ev._id !== id);
        setEvent(remainItem);
      });
  };
  return (
    <section>
      <div className="event-header">
        <div className="upper-container">
          <img className="upper-image" src={logo1} alt="" />
        </div>
        <div className="upper-navbar">
          <ul className="upper-ul">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/donation">Donation</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
          <p className="upper-p">{loggedInUser.name}</p>
        </div>
      </div>
      <div className="events">
        {event.map((ev) => (
          <Col
            key={ev.organize}
            sm={6}
            fluid={6}
            md="40"
            className="event-container"
          >
            <Row className="event">
              <Col sm={6} fluid={6}>
                <img className="event-image" src={ev.image} alt="" />
              </Col>
              <Col sm={6} fluid={6}>
                <h1 className="event-title">{ev.organize}</h1>
                <p className="event-p">{ev.date}</p>
                <button
                  className="event-btn"
                  onClick={() => {
                    handleDelete(`${ev._id}`);
                  }}
                >
                  Cancel
                </button>
              </Col>
            </Row>
          </Col>
        ))}
      </div>
    </section>
  );
};

export default Event;
