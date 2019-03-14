// imports
import axios from "axios";
const API_URL = "http://localhost:4000/api/projects";
// actions
const ADD_PROJECT = "ADD_PROJECT";
const PROJECTS_LOADED = "PROJECTS_LOADED";

// action creatroes
function addProject(newProject) {
  return {
    type: ADD_PROJECT,
    newProject
  };
}

function projectsLoaded(projects) {
  return {
    type: PROJECTS_LOADED,
    projects
  };
}

// api call
function saveProject(title, description, status, filePath) {
  return (dispatch, getState) => {
    axios
      .post(API_URL, {
        title,
        description,
        status,
        filePath
      })
      //.then(res => console.log(res.data.projects + "/" + res.data.projects._id))
      .then(res => {
        console.log(res.data.projects + " " + res.data.projects.length);
        if (res.data.projects._id) dispatch(addProject(res.data.projects));
      });
  };
}

function getProjects() {
  return (dispatch, getState) => {
    axios.get(API_URL).then(res => {
      console.log(res.data.projects + " " + res.data.projects.length);
      if (res.data) dispatch(projectsLoaded(res.data.projects));
    });
  };
}
// initial state
const initialState = {
  projects: []
};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return applyAddProject(state, action);
    case "PROJECTS_LOADED":
      return applyGetProjects(state, action);
    default:
      return state;
  }
};

// reducer functions
function applyAddProject(state, action) {
  //console.log(action);
  return {
    ...state,
    projects: [action.data].concat(state.projects)
  };
}

function applyGetProjects(state, action) {
  return {
    ...state,
    projects: ""
  };
}
//exports

const actionCreators = {
  saveProject,
  getProjects
};

export { actionCreators };
export default reducer;
