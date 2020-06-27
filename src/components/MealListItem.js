import React, { Component } from 'react';

class MealListItem extends Component {
  render() {
    return (
      <li>
        <div>{this.props.meal.name}</div>
      </li>
    );
  }
}

export default MealListItem;