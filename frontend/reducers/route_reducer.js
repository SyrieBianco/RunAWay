import merge from 'lodash/merge';

import {
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE
} from '../actions/route_actions';

const RouteReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_ROUTE:
      const newRoute = {[action.route.id]: action.route};
      return merge({}, state, newRoute);
    case REMOVE_ROUTE:
      delete newState[action.route.id];
      return newState;
    default:
      return state;
  }
};

export default RouteReducer;
