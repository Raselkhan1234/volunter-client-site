import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import photo1 from "../../logos/Group 1329.png";
import photo2 from "../../logos/users-alt 1.png";
import photo3 from "../../logos/plus 1.png";
import photo5 from "../../logos/cloud-upload-outline 1.png";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./AddEvent.css";

import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

const AddEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState({
    title: "",
    description: "",
  });

  const handleBlur = (e) => {
    if (e.target.name === "title") {
      const userInfo = { ...value };
      userInfo[e.target.name] = e.target.value;
      setValue(userInfo);
    }
    if (e.target.name === "description") {
      const userInfo = { ...value };
      userInfo[e.target.name] = e.target.value;
      setValue(userInfo);
    }
  };
  let history = useHistory();

  const handleSubmit = (e) => {
    const newUser = { value, startDate };
    console.log(newUser);
    fetch("https://limitless-mesa-78892.herokuapp.com/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/admin");
        alert("success");
      });
    e.preventDefault();
  };

  return (
    <div className="admin-container">
      <Row>
        <Col md={2}>
          <img className="img-1" src={photo1} alt="" />
          <br />
          <p className="admin-p">
            <img className="img-2" src={photo2} alt="" />
            Volunteer register list
          </p>
          <br />
          <small>
            <img className="img-3" src={photo3} alt="" />
            Add event
          </small>
        </Col>
        <Col md={10}>
          <h2>Add event</h2>

          <div className="admin-form">
            <form className="admin-form-add">
              <div className="main-form">
                <div className="form-title">
                  <label htmlFor="">Event Title</label>
                  <input
                    type="text"
                    placeholder="Event Title"
                    name="title"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-date">
                  <label htmlFor="">Event Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <FontAwesomeIcon className="form-icon" icon={faChevronDown} />
                </div>
                <div className="form-description">
                  <label htmlFor="">Description</label>
                  <textarea
                    name="description"
                    onBlur={handleBlur}
                    type="message"
                    id="description"
                    placeholder="Enter description"
                  />
                </div>
                <div className="form-banner">
                  <label htmlFor="">Banner</label>
                  <div className="form-banner-img">
                    <img className="form-img" src={photo5} alt="" />
                    <p className="form-p">Update Image</p>
                  </div>
                </div>
              </div>
              <div>
                <input
                  className="form-btn"
                  type="submit"
                  onClick={handleSubmit}
                  value="submit"
                />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddEvent;
