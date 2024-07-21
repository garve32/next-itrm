import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST+'/api',
  // headers: {
  //   "Content-Type": 'application/json'
  // },
  // withCredentials: true
});

function fetchTodoActList( params ) {
  // const params = {TODO_DT: paramDt, TEAM_ID: teamId, USER_ID: userId}
  console.log('call fetchTodoActList');
  console.log(params)
  return instance.post('/todoMngActView/getList', params );
}

function fetchTodoActItem(params) {
  // const params = {TODO_DT: paramDt, TODO_ID: userId}
  console.log('call fetchTodoActItem');
  console.log(params)
  return instance.post('/todoMngActView/get', params);
}

function saveTodoActItem(params) {
  // TODO_DT, TODO_ID, PROGRESS, DESCRIPTION, UPDATE_ID
  console.log('call saveTodoActItem');
  console.log(params)
  return instance.post('/todoMngActView/save', params);
}

const mock = axios.create({
  baseURL: 'http://localhost:4000',
});

function fetchMockList({ paramDt, teamId, userId }) {
  const params = {TODO_DT: paramDt, TEAM_ID: teamId, USER_ID: userId}
  return mock.get('/itrmList');
}

function fetchMockItem(todoId) {
  console.log("api : " + todoId)
  const params = {TODO_ID: todoId};
  return mock.get('/item', {
    params
  });
}

export {
  fetchTodoActList,
  fetchTodoActItem,
  saveTodoActItem,
  // fetchMockList,
  // fetchMockItem
}