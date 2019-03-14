// imports
import axios from "axios";
const API_URL = "http://localhost:4000/api/projects";
// actions
const ADD_PROJECT = "ADD_PROJECT";

//examples
const PROJECTS_HAS_ERRORED = "PROJECTS_HAS_ERRORED";
const PROJECTS_IS_LOADING = "PROJECTS_IS_LOADING";
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

function projectsHasErrored(bool) {
  return {
    type: PROJECTS_HAS_ERRORED,
    hasErrored: bool
  };
}

function projectsIsLoading(bool) {
  return {
    type: PROJECTS_IS_LOADING,
    isLoading: bool
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
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(addProject(response.data.projects));
      })
      .catch(err => console.log(err));
  };
}

export function errorAfterFiveSeconds() {
  // We return a function instead of an action object
  return dispatch => {
    setTimeout(() => {
      // This function is able to dispatch other action creators
      dispatch(projectsHasErrored(true));
    }, 5000);
  };
}

function projectFetchData() {
  return dispatch => {
    dispatch(projectsIsLoading(true));
    axios(API_URL)
      .then(response => {
        //console.log("response", response);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(projectsIsLoading(false));
        return response;
      })
      //.then(response => response.json())
      .then(response => dispatch(projectsLoaded(response.data.projects)))
      .catch(() => dispatch(projectsHasErrored(true)));
  };
}

// initial state
const initialState = {
  projects: []
};
// reducer
const projects = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return applyAddProject(state, action);
    case "PROJECTS_LOADED":
      return applyGetProjects(state, action);
    default:
      return state;
  }
};

const proHasErrored = (state = false, action) => {
  switch (action.type) {
    case "PROJECTS_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
};

const proIsLoading = (state = false, action) => {
  switch (action.type) {
    case "PROJECTS_ARE_LOADING":
      return action.isLoading;
    default:
      return state;
  }
};

// reducer functions
function applyAddProject(state, action) {
  //console.log("applyAddProject", action);
  return {
    ...state,
    projects: [action.newProject].concat(state.projects)
  };
}

function applyGetProjects(state, action) {
  return {
    ...state,
    projects: action.projects
  };
}
//exports

const actionCreators = {
  saveProject,
  projectFetchData
};

export { actionCreators };
export { projects, proHasErrored, proIsLoading };
