import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyContainer from './BodyContainer';
import './Home.scss';
import Header from '../Header/Header';
import { getTasksListAction } from '../../actions/tasks';

class Home extends Component {
  componentDidMount() {
    this.props.getTasksListAction('all');
  }

  render() {
    return (
      <div>
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default connect(null, { getTasksListAction })(Home);
