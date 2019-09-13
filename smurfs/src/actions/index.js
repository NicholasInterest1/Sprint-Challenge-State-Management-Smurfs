import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addAdditionalSmurfs = newSmurf => dispatch => {
  console.log("newSmurf", newSmurf);
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(response => {
      console.log("post request", response);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: newSmurf });
    })
    .catch(error => {
      console.log("post error", error);
      dispatch({ type: ADD_SMURF_FAILURE, payload: `${error}` });
    });
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: response.data });
      console.log("response.data", response.data);
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: `${err}` });
    });
};
