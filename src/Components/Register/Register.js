import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import logo1 from "../../logos/Group 1329.png";
import "./Register.css";
import _ from "lodash/fp";
import fakeData from ".././FakeData/FakeData";
import { UserContext } from "../../App";
import "react-datepicker/dist/react-datepicker.css";


const Register = () => {
  const { handleSubmit, register, watch, errors } = useForm();

  const { productId } = useParams();
  const product = fakeData.find((pd) => pd.p === productId);
 


 

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);



  let history = useHistory();

  const onSubmit = (data) => {
    const newBooking = { image: product.image, ...data };

    fetch("https://limitless-mesa-78892.herokuapp.com/addBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/event");
      });
  };

  return (
    <div className="register-container">
      <img className="register-img" src={logo1} alt="" />

      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="register-h2">Register as a Volunteer</h2>

        <input
          name="name"
          ref={register({ required: true })}
          placeholder="Full name"
        />
        {errors.name && (
          <span className="error">This Full Name field is required</span>
        )}

        <input
          name="email"
          defaultValue={loggedInUser.email}
          ref={register({ required: true })}
          placeholder="Username or Email"
        />
        {errors.email && (
          <span className="error">
            This Username or Email field is required
          </span>
        )}

        <input
          name="date"
          type="date"
          patten="dd/MM/YYYY"
          ref={register({ required: true })}
          placeholder="Date"
        />
        {errors.date && (
          <span className="error">
            This Date field is required
          </span>
        )}

        {/* {startDate === "" ? (
          <>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
            />
            <FontAwesomeIcon id="icon" icon={faCalendar} />
            <p>Please select a date</p>
          </>
        ) : (
          <>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
            />
            <FontAwesomeIcon id="icon" icon={faCalendar} />
          </>
        )} */}

        {/* <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                  
                />
                <FontAwesomeIcon id="icon" icon={faCalendar} /> */}

        <input
          name="description"
          ref={register({
            required: true,
            minLength: 20,
          })}
          placeholder="Description"
        />
        {_.get("description.type", errors) === "required" && (
          <span className="error">This description field is required</span>
        )}
        {_.get("description.type", errors) === "minLength" && (
          <span className="error">
            Description must be exceed 20 characters
          </span>
        )}

        <input
          name="organize"
          defaultValue={productId === ":productId" ? "" :productId}
          ref={register({ required: true })}
          placeholder="Organize books at the library."
        />
        {errors.organize && (
          <span className="error">This Organize books field is required</span>
        )}

        <input id="submit" type="submit" value="Registration" />
      </form>
    </div>
  );
};

export default Register;
