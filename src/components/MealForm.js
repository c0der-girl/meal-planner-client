import React, { Component } from 'react';
import { createMeal } from '../redux/actions/mealActions';
import { connect } from 'react-redux';
import './mealForm.css';

class MealForm extends Component {
  state = {
    name: ''
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMeal({ name: this.state.name });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" onChange={this.handleChange}/>
        <button type="submit">add</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.meals
});

export default connect(
  mapStateToProps,
  { createMeal }
)(MealForm);