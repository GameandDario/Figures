import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class RowContainer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Neo projet</Col>
        </Row>

        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
      </Container>
    );
  }
}
