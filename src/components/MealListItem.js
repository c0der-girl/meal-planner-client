import React, { Component } from 'react';

class MealListItem extends Component {
  render() {
    let tagList = this.props.meal.tags ? (
      this.props.meal.tags.map(tag => <div key={tag.tagId} style={tag.style}>{tag.name}</div>)
    ) : <div/>;

    return (
      <li>
        <div>
          <h2>{this.props.meal.name}</h2>
          {tagList}
        </div>
      </li>
    );
  }
}

export default MealListItem;