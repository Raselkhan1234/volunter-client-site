import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../FakeData/FakeData';
import './DisplayImage.css';


const DisplayImage = () => {
    const [cart, setCart] = useState(fakeData);

    return (
        <div className="display-container">
            {
                cart.map(pd =>
                    <Col sm={3} key={pd.p}  fluid={3}>
                        <Link to={"/event/"+pd.p}>
                            <Card>
                                <Card.Img src={pd.image} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text  style={{backgroundColor:`${pd.color}`}} >{pd.p}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </Col>
                )
            }
        </div>
    );
};

export default DisplayImage;