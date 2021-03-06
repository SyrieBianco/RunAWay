import merge from 'lodash/merge';

import {
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT,
  REMOVE_WORKOUT
} from '../actions/workout_actions';

const WorkoutReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_WORKOUTS:
      return action.workouts;
    case RECEIVE_WORKOUT:
      const newWorkout = {[action.workout.id]: action.workout};
      return merge({}, state, newWorkout);
    case REMOVE_WORKOUT:
      delete newState[action.workout.id];
      return newState;
    default:
      return state;
  }
};

export default WorkoutReducer;
