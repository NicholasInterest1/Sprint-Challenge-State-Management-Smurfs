import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSmurfs, addingAdditionalSmurfs } from "../actions/index";

const App = ({ getSmurfs, addingAdditionalSmurfs, smurfs }) => {
  const [addSmurf, setAddSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setAddSmurf({ ...addSmurf, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    addingAdditionalSmurfs(addSmurf);
  };

  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>
        {smurfs.map(smurfs => (
          <h1>{smurfs.name}</h1>
        ))}
        {smurfs.map(smurfs => (
          <h2>{smurfs.age}</h2>
        ))}
        {smurfs.map(smurfs => (
          <h3>{smurfs.height}</h3>
        ))}
      </div>
      <form>
        <label>Smurf Adder</label>
        <input
          placeholder="Smurf Name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Smurfs Age"
          type="text"
          name="age"
          onChange={handleChange}
        />
        <input
          placeholder="Smurfs Height"
          type="text"
          name="height"
          onChange={handleChange}
        />
        <button onClick={submitHandler}>Add Smurf</button>
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
  { getSmurfs, addingAdditionalSmurfs }
)(App);
