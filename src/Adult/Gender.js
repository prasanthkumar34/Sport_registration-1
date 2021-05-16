import React, { Component, Fragment } from "react";
import "../styles.css";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";
import { NavLink, Router } from "react-router-dom";
class Gender extends Component {
  constructor() {
    super();
    this.state = {
      gender: "null"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    let val = event.target.value;
    this.setState({ gender: val });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <aside>2/5</aside>
          <center>
            <h3 className="card_head">
              What gender group are needed for this division?
            </h3>
            <h5 className="card_subhead">
              Make selection based on option below
            </h5>
          </center>
          <div onChange={this.onChangeValue} className="alignment">
            <input type="radio" value="Male" name="gender" /> <b>Male</b>
            <br />
            <input type="radio" value="Female" name="gender" />
            <b> Female</b>
            <br />
            <input type="radio" value="Other" name="gender" /> <b>Other</b>
            <br />
          </div>
          <center>
            <h5 className="card_subhead">You choosed: {this.state.gender} </h5>
          </center>
          <button>
            <a href="/age">Next</a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Gender;
