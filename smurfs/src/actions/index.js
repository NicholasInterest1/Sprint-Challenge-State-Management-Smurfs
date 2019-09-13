import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const SMURF_ADDER = "SMURF_ADDER_START";

export const postSmurfData = cred => dispatch => {
    console.log("cred", cred);
  dispatch({ type: SMURF_ADDER });
  axios
    .post("http://localhost:3333/smurfs", cred)
    .then(res => {
        console.log("post request", res)
      dispatch({ type: SMURF_ADDER, payload: res.data.smurfs });
    })
    .catch(err => console.log("post err", err));
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
    });
};
