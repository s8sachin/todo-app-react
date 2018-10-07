import axios from 'axios';

const { NODE_ENV } = process.env;
const API_URI = (NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://todo-tasks-api.herokuapp.com');

export const getTaskList = (params) => {
  let url;
  if (params === 'all') {
    url = `${API_URI}/api/tasks`;
  } else {
    const { title, date, status } = params;
    url = `${API_URI}/api/tasks?title=${title}&date=${date}&status=${status}`;
  }
  return axios({
    method: 'get',
    url,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const newTask = (data) => {
  const url = `${API_URI}/api/tasks`;
  return axios({
    method: 'post',
    url,
    headers: { 'Content-Type': 'application/json' },
    data,
  });
};

export const updateTask = (data) => {
  const url = `${API_URI}/api/tasks/${data.id}`;
  return axios({
    method: 'PATCH',
    url,
    headers: { 'Content-Type': 'application/json' },
    data,
  });
};

export const deleteTask = (id) => {
  const url = `${API_URI}/api/tasks/${id}`;
  return axios({
    method: 'delete',
    url,
    headers: { 'Content-Type': 'application/json' },
  });
};
