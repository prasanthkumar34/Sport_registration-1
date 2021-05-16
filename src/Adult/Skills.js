import React, { Component, Fragment } from "react";
import "../styles.css";
class Skill extends Component {
  constructor() {
    super();
    this.state = {
      skill: []
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    let val = event.target.value;
    this.setState((prevState) => {
      return {
        skill: [...prevState.skill, val]
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <aside>4/5</aside>
          <center>
            <h3 className="card_head">What Skill are needed for this?</h3>
            <h5 className="card_subhead">
              Choose from the list of skills below
            </h5>
          </center>
          <div onChange={this.onChangeValue} className="check">
            <label>
              <input type="checkbox" name="foo" value="A" />
              <b>A</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="AA" />
              <b>AA</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="AA" />
              <b>AAA</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="Novice" />
              <b>Novice</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="Masters" />
              <b>Mas</b>
            </label>
          </div>

          <h5 className="card_subhead skill_side">
            You choosed:{" "}
            {this.state.skill.map((item) => (
              <li>{item}</li>
            ))}{" "}
          </h5>

          <button>
            <a href="/team">Next</a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Skill;
