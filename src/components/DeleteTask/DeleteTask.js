import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { deleteTasAction, getTasksListAction } from '../../actions/tasks';

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  handleDelete(id) {
    this.props.deleteTasAction(id)
    .then((res) => {
      this.toggle();
      this.props.getTasksListAction('all');
    })
    .catch(e => console.log(e));
  }

  render() {
    const { modal } = this.state;
    const { id } = this.props;
    return (
      <div>
        <Button color="link" onClick={this.toggle}><i className="fas fa-trash" /></Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader>Update the task</ModalHeader>
          <ModalBody>
              Are you sure about deleting this task ?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => this.handleDelete(id)}>Delete</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { deleteTasAction, getTasksListAction })(DeleteTask);
