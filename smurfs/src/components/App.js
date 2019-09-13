import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addAdditionalSmurfs } from "../actions/index";

const App = ({ getSmurfs, addAdditionalSmurfs, smurfs }) => {
  const [newSmurf, setnewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChange = e => {
    setnewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    addAdditionalSmurfs(newSmurf);
  };

  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>
        {smurfs.map(smurf => (
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h3>Age: {smurf.age}</h3>
            <h4>Height: {smurf.height}</h4>
          </div>
        ))}
      </div>
      <form>
        <label>Smurf Adder</label>
        <input
          placeholder="Smurfs Name"
          name="name"
          onChange={e => handleChange(e)}
        />
        <input
          placeholder="Smurfs Age"
          name="age"
          onChange={e => handleChange(e)}
        />
        <input
          placeholder="Smurfs Height"
          name="height"
          onChange={e => handleChange(e)}
        />
        <input id="id" name="id" onChange={e => handleChange(e)} />
        <button type="submit" onClick={submitHandler}>
          Add a Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addAdditionalSmurfs }
)(App);
