import React, { Component } from 'react';
import { toggleMeal } from '../../redux/actions/mealActions';
import { connect } from 'react-redux';

class MealListItem extends Component {
  handleClick = (event) => {
    this.props.toggleMeal(event.target.dataset.id);
  };
  render() {
    let tagList = this.props.meal.tags ? (
      this.props.meal.tags.map(tag => <div className="item" key={tag.tagId} style={tag.style}>{tag.name}</div>)
    ) : <div/>;

    let checkClass = 'check';
    if (this.props.meal.selected) {
      checkClass = 'check active';
    }

    return (
      <li className="item">
        <h2>{this.props.meal.name}
          <span className={checkClass} onClick={this.handleClick} data-id={this.props.meal.mealId}/>
        </h2>
        <div className="tag-list">{tagList}</div>
      </li>
    );
  }
}

const mapDispatchToProps = {
  toggleMeal,
};

export default connect(null, mapDispatchToProps)(MealListItem);