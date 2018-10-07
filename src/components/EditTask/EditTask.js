import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { updateTaskAction, getTasksListAction } from '../../actions/tasks';

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      description: '',
      status: '',
      id: '',
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const { task } = this.props;
    const {
      title, description, status, _id,
    } = task;
    this.setState({
      title, description, status, id: _id,
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      title, description, status, id,
    } = this.state;
    this.props.updateTaskAction({
      title, description, status, id,
    })
    .then((res) => {
      this.toggle();
      this.props.getTasksListAction(this.props.filterParams);
    })
    .catch(e => console.log(e));
  }

  render() {
    const {
      modal, title, description, status,
    } = this.state;
    return (
      <div>
        <Button title="edit" onClick={this.toggle} color="link"><i className="fas fa-edit" /></Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader>Update the task</ModalHeader>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <ModalBody>
              <FormGroup>
                <Label>Title</Label>
                <Input type="text" placeholder="Add some Title" required onChange={e => this.setState({ title: e.target.value })} value={title} />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" placeholder="Add Some Description" required onChange={e => this.setState({ description: e.target.value })} value={description} />
              </FormGroup>
              <FormGroup>
                <Label>Status</Label>
                <Input type="select" value={status} onChange={e => this.setState({ status: e.target.value })}>
                  <option>DONE</option>
                  <option>NOT DONE</option>
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Update</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { filterParams } = state.tasks;
  return { filterParams };
};

export default connect(mapStateToProps, { updateTaskAction, getTasksListAction })(EditTask);
