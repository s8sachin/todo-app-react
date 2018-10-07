import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { createTaskAction, getTasksListAction } from '../../actions/tasks';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      description: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description } = this.state;
    this.props.createTaskAction({ title, description })
    .then((res) => {
      this.toggle();
      this.props.getTasksListAction('all');
    })
    .catch(e => console.log(e));
  }

  render() {
    const { modal, title, description } = this.state;
    return (
      <div>
        <Button onClick={this.toggle} className="float-right" color="primary"><i className="fas fa-plus" /> New Task</Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader>New Task for today</ModalHeader>
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
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Create</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { createTaskAction, getTasksListAction })(NewTask);
