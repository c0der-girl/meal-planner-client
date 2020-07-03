import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeals } from '../../redux/actions/mealActions';

class MealPlan extends Component {
  state = {
    meals: null,
  };
  componentDidMount() {
    this.props.getMeals();
  }
  render() {
    let className = 'container';

    let { meals } = this.props.meals;
    let selectedMeals = meals.filter(meal => meal.selected);

    console.log(selectedMeals);

    let mealPlanMarkup = selectedMeals && selectedMeals.length > 0 ? (
      selectedMeals.map(meal => <li key={meal.mealId}>{meal.name}</li>)
    ) : <li>noch keine Gerichte ausgewählt</li>;

    return (
      <div className={className}>
        <h2>Wochenplan</h2>
        <ul>
          {mealPlanMarkup}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.meals,
});

export default connect(
  mapStateToProps,
  { getMeals }
)(MealPlan);