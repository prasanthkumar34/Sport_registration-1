import React, { Component, Fragment } from "react";
import "../styles.css";
class CSkill extends Component {
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
          <aside>3/4</aside>
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
              <input type="checkbox" name="bar" value="Bronze" />
              <b>Bronze</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="Silver" />
              <b>Silver</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="Gold" />
              <b>Gold</b>
            </label>
            <br />
            <label>
              <input type="checkbox" name="bar" value="Diamond" />
              <b>Diamond</b>
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
export default CSkill;
