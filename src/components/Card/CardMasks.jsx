import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, Col, Row, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import './CardMasks.css'

const CardMasks = ({ name, country, photo, description}) => {
  return (

      
        <Card className="Card">
          <CardImg top width="50%" src={photo} alt="Mask photo" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{country}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button>View more...</Button>
          </CardBody>
        </Card>
    

  );
};

export default CardMasks;
