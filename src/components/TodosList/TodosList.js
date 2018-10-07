import React from 'react';
import {
  Card, CardText, CardTitle, Button, Badge, Row, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import EditTask from '../EditTask';
import DeleteTask from '../DeleteTask';

class TodosList extends React.Component {
  render() {
    const { tasksData } = this.props;
    return (
      <div className="w-100">
        {tasksData && tasksData.map(task => (
          <div key={task._id}>
            <Card body>
              <Row>
                <Col sm={11}>
                  <CardTitle>
                    <b>{task.title} </b>
                  </CardTitle>
                  <div style={{ fontSize: '11px' }}>
                    Task Date: <span className="text-muted">{task.createdAt.substring(0, 10)}</span>
                    <Badge style={{ marginLeft: '5px' }} color={task.status === 'DONE' ? 'success' : 'warning'} pill className="">{task.status}</Badge>
                  </div>
                  <CardText>{task.description}</CardText>
                </Col>
                <Col sm={1}>
                  <EditTask task={task} />
                  <DeleteTask id={task._id} />
                </Col>
              </Row>
            </Card><br />
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { tasksData } = state.tasks;
  return { tasksData };
};

export default connect(mapStateToProps)(TodosList);
