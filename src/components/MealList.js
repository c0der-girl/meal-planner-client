import React, { Component } from 'react';

import MealListItem from './MealListItem';

import { connect } from 'react-redux';
import { getMeals } from '../redux/actions/mealActions';

import './mealList.css';

class MealList extends Component {
  state = {
    meals: null,
  };
  componentDidMount() {
    this.props.getMeals();
  }
  render() {
    const { meals } = this.props.meals;

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
  meals: state.meals
});

export default connect(
  mapStateToProps,
  { getMeals }
)(MealList);