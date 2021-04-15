import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import photo1 from "../../logos/Group 1329.png";
import photo2 from "../../logos/users-alt 1.png";
import photo3 from "../../logos/plus 1.png";
import photo4 from "../../logos/trash-2 9.png";
import './Admin.css';
import { Link } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://limitless-mesa-78892.herokuapp.com/allUser")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  const handleDelete = (id) => {
    fetch(`https://limitless-mesa-78892.herokuapp.com/admin/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("data delete successfully");
        const remainItem = user.filter((us) => us._id !== id);
        setUser(remainItem);
      });
  };
  return (
    <div className="admin-container">
      <Row>
        <Col md={2}>
          <img className="img-1" src={photo1} alt="" />
          <br/>
          <p className="admin-p">
            <img className="img-2" src={photo2} alt="" />
            Volunteer register list
          </p>
          <br/>
          <Link to="/addEvent"><small>
            <img className="img-3" src={photo3} alt="" />
            Add event
          </small></Link>
        </Col>
        <Col md={10}>
          <h2>volunteer register list</h2>
          <div  className='admin'>
          <Table>
            <thead>
              <tr>
                <th id="num">Name</th>
                <th id="ema">Email ID</th>
                <th id="reg">Registating date</th>
                <th id="vol">Volunteer list</th>
                <th id="act">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((info, index) => (
                <tr key={info._id}>
                  <td >{info.name}</td>
                  <td >{info.email}</td>
                  <td >{info.date}</td>
                  <td > {info.organize}</td>
                  <td>
                    <button className="admin-btn" onClick={() => {
                    handleDelete(`${info._id}`);
                  }}>
                      <img className="img-4" src={photo4} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
