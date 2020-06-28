import React, { Component } from 'react';
import { createMeal } from '../../redux/actions/mealActions';
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
      tags.map(tag =>
        <div key={tag.tagId} className="tag-ckeckbox">
          <input onChange={this.handleInputChange} type="checkbox" name={tag.name} value={tag.tagId} id={tag.tagId}/>
          <label htmlFor={tag.tagId}>{tag.name}</label>
        </div>)
    ) : <div/>;

    return (
      <form className="meal-form container" onSubmit={this.handleSubmit}>
        <h2>Neues Gericht</h2>
        <div className="field-set">
          <label>Name</label>
          <input type="text" placeholder="z.B. Lasagne" required={true} name="name" onChange={this.handleChange}/>
        </div>
        <div className="field-set">
          <label>Tags</label>
          <div>{tagList}</div>
        </div>
        <button className="submit-btn" type="submit">Hinzufügen</button>
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