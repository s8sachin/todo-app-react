import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import TodosList from '../TodosList';
import FilterRow from '../FilterRow/FilterRow';

class BodyContainer extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <FilterRow />
        </Row><br />
        <TodosList />
      </Container>
    );
  }
}

export default (BodyContainer);
