import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SMURF_SUCCESS:
      console.log("smurfs from state", state);
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false,
        error: ""
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload
      };
    default:
      return state;
  }
};
