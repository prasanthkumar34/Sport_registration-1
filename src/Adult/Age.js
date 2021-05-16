import React, { Component, Fragment } from "react";
import "../styles.css";
class Age extends Component {
  constructor() {
    super();
    this.state = {
      age: "null"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    let val = event.target.value;
    this.setState({ age: val });
  }
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <aside>3/5</aside>
          <center>
            <h3 className="card_head">
              What is the age range needed for this Division?
            </h3>
            <h5 className="card_subhead">
              Choose from the list of classifications below
            </h5>
          </center>
          <br />

          <div onChange={this.onChangeValue} className="alignment">
            <input type="radio" value="26-U" name="age" /> <b>26-U</b>
            <input type="radio" value="40-U" name="age" />
            <b> 40-U</b>
            <input type="radio" value="50-U" name="age" /> <b>50-U</b>
            <br />
            <input type="radio" value="60-U" name="age" /> <b>60-U</b>
            <input type="radio" value="70-U" name="age" />
            <b> 70-U</b>
          </div>
          <br />

          <center>
            <h5 className="card_subhead">You choosed: {this.state.age} </h5>
          </center>
          <button>
            <a href="/skill">Next</a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Age;
