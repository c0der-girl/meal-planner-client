import React, { Component } from 'react';

import MealListItem from './MealListItem';

import { connect } from 'react-redux';
import { getMeals } from '../redux/actions/mealActions';
import { getTags } from '../redux/actions/tagActions';

import './mealList.css';

class MealList extends Component {
  state = {
    meals: null,
    tags: null
  };
  componentDidMount() {
    this.props.getMeals();
    this.props.getTags();
  }
  render() {
    let { meals } = this.props.meals;
    const { tags } = this.props.tags;

    let selectedTagIds = [];
    tags.filter(tag => tag.selected).forEach(tag => selectedTagIds.push(tag.tagId));
    let filteredMeals = meals.filter(meal => meal.tags.find(tag => selectedTagIds.includes(tag.tagId)));

    if (selectedTagIds.length > 0) {
      meals = filteredMeals;
    }

    let mealMarkup = meals ? (
      meals.map(meal => <MealListItem key={meal.mealId} meal={meal} />)
    ) : <div/>;

    return (
      <ul>
        {mealMarkup}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.meals,
  tags: state.tags
});

export default connect(
  mapStateToProps,
  { getMeals, getTags }
)(MealList);