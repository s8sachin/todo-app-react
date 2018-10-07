import { TASKS_DATA, FILTER_PARAMS } from './types';
import {
  getTaskList, newTask, updateTask, deleteTask,
} from '../apiHandlers/tasksApi';

export const getTasksListAction = params => (dispatch) => {
  getTaskList(params)
  .then((res) => {
    const { data } = res;
    dispatch({ type: TASKS_DATA, payload: data.tasks });
  })
  .catch(e => console.log(e));
  dispatch({ type: FILTER_PARAMS, payload: params });
};

export const createTaskAction = params => (
  dispatch => newTask(params)
  .then((res) => {
    const { data } = res;
    return data;
  })
  .catch(e => console.log(e))
);

export const updateTaskAction = params => (
  dispatch => updateTask(params)
  .then((res) => {
    const { data } = res;
    return data;
  })
  .catch(e => console.log(e))
);

export const deleteTasAction = params => (
  dispatch => deleteTask(params)
  .then((res) => {
    const { data } = res;
    return data;
  })
  .catch(e => console.log(e))
);
