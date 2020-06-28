import React, { Component } from 'react';

class MealListItem extends Component {
  render() {
    let tagList = this.props.meal.tags ? (
      this.props.meal.tags.map(tag => <div className="item" key={tag.tagId} style={tag.style}>{tag.name}</div>)
    ) : <div/>;

    return (
      <li className="item">
        <h2>{this.props.meal.name}</h2>
        <div className="tag-list">{tagList}</div>
      </li>
    );
  }
}

export default MealListItem;