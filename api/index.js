import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST+'/api'
});

function fetchTodoActList({ paramDt, teamId, userId }) {
  return instance.post('/todoMngAct/getList', 
    {TODO_DT: paramDt, TEAM_ID: teamId, USER_ID: userId}
  )
}

export {
  fetchTodoActList
}