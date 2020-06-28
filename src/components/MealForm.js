import React, { Component } from 'react';
import { createMeal } from '../redux/actions/mealActions';
import { connect } from 'react-redux';
import './mealForm.css';

class MealForm extends Component {
  state = {
    name: '',
    tags: []
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleInputChange = (event) => {
    let tags = [...this.state.tags];
    if (event.target.checked) {
      tags.push({ tagId: event.target.value, name: event.target.name });
      this.setState({tags});
    } else {
      tags = tags.filter(item => item.tagId !== event.target.value);
      this.setState({tags});
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMeal({ name: this.state.name, tags: this.state.tags });
  };
  render() {
    const { tags } = this.props.tags;

    let tagList = tags ? (
      tags.map(tag => <label key={tag.tagId}>{tag.name}<input onChange={this.handleInputChange} type="checkbox" name={tag.name} value={tag.tagId}/></label>)
    ) : <div/>;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" onChange={this.handleChange}/>
        {tagList}
        <button type="submit">add</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.meals,
  tags: state.tags
});

export default connect(
  mapStateToProps,
  { createMeal }
)(MealForm);