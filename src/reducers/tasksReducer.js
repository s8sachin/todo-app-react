import {
  TASKS_DATA,
  FILTER_PARAMS,
} from '../actions/types';

const INITIAL_STATE = {
  tasksData: null,
  filterParams: 'all',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TASKS_DATA:
    return { ...state, tasksData: action.payload };
  case FILTER_PARAMS:
    return { ...state, filterParams: action.payload };
  default:
    return state;
  }
};
