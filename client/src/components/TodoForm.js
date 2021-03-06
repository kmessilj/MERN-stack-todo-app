import React from 'react'
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;

    if (name.length !== 0) {
      console.log('A Todo was submitted: ' + name);
      this.props.addTodo(name);
      this.setState({ name: '', errorMessage: '' });
    } else {
      console.log('A Todo was submitted with no name.');
      this.setState({ errorMessage: 'Cannot add empty Todo.' });
    }
    //reset to blank
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Todo Name"
          value={this.state.name}
          onChange={this.handleChange} />
        <small className="m-auto text-danger align-items-center error-message">
          {this.state.errorMessage}
        </small>
        <Input
          className="form-control btn btn-primary mt-4"
          type="submit"
          value="Add"
        />
      </Form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm;