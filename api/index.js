import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST+'/api'
});



function fetchTodoActList({ paramDt, teamId, userId }) {
  return instance.post('/todoMngAct/getList', 
    {TODO_DT: paramDt, TEAM_ID: teamId, USER_ID: userId}
  )
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
  // fetchTodoActList,
  fetchMockList,
  fetchMockItem
}