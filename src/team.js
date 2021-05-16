import React, { Component, Fragment } from "react";
import "./styles.css";
class Team extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      descp: ""
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.Thankyou = this.Thankyou.bind(this);
  }

  onChangeValue(event) {
    let left = event.target.name;
    let val = event.target.value;
    if (left == "name") {
      this.setState({ name: val });
    } else {
      this.setState({ descp: val });
    }
  }
  Thankyou() {
    let name = this.state.name;
    alert("Thank you team " + name + "\n We will contact you ");
  }
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <aside>5/5</aside>
          <center>
            <h3 className="card_head">
              What is the age range needed for this Division?
            </h3>
            <h5 className="card_subhead">
              Choose from the list of classifications below
            </h5>
          </center>
          <br />

          <div className="alignment">
            <b>What is your team name ? </b>
            <input
              type="textbox"
              placeholder="Enter your team name"
              name="name"
              onChange={this.onChangeValue}
            />
            <br />
            <b>What your team descrption</b>
            <input
              type="textbox"
              placeholder="Enter your team descp"
              name="descp"
              onChange={this.onChangeValue}
            />
          </div>
          <br />

          <button onClick={this.Thankyou}>
            <a href="/home">Submit</a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
