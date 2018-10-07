import React, { Component } from 'react';
import {
  Container, Row, Col, Form, FormGroup, Button, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getTasksListAction } from '../../actions/tasks';
import NewTask from '../NewTask/NewTask';

class FilterRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFieldType: 'text',
      seachField: '',
      dateField: '',
      statusField: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { filterParams } = this.props;
    if (filterParams !== prevProps.filterParams) {
      this.setFilterState(filterParams);
    }
  }

  setFilterState(filterParams) {
    if (filterParams === 'all') {
      this.setState({ seachField: '', dateField: '', statusField: '' });
    } else {
      this.setState({ seachField: filterParams.title, dateField: filterParams.date, statusField: filterParams.status });
    }
  }

  handleSearch(e) {
    e.preventDefault();
    const { seachField, dateField, statusField } = this.state;
    this.props.getTasksListAction({ title: seachField, date: dateField, status: statusField });
  }

  render() {
    const {
      dateFieldType, seachField, dateField, statusField,
    } = this.state;
    return (
      <React.Fragment>
        <Form inline onSubmit={e => this.handleSearch(e)}>
          <Col>
            <FormGroup>
              <Input type="text" onChange={e => this.setState({ seachField: e.target.value })} placeholder="Search for title" value={seachField} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type={dateFieldType}
                value={dateField}
                onChange={e => this.setState({ dateField: e.target.value })}
                onFocus={() => this.setState({ dateFieldType: 'date' })}
                onBlur={() => this.setState({ dateFieldType: 'text' })}
                placeholder="Task date"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input type="select" value={statusField} onChange={e => this.setState({ statusField: e.target.value })}>
                <option value="">Status</option>
                <option>DONE</option>
                <option>NOT DONE</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Button type="submit" color="primary">Filter</Button>
            </FormGroup>
          </Col>
          <Col>
            <Button onClick={() => this.props.getTasksListAction('all')}>Clear</Button>
          </Col>
        </Form>
        <Col><NewTask /></Col>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { filterParams } = state.tasks;
  return { filterParams };
};

export default connect(mapStateToProps, { getTasksListAction })(FilterRow);
