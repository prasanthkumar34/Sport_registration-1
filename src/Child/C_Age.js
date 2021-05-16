import React, { Component, Fragment } from "react";
import "../styles.css";
class CAge extends Component {
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
          <aside>2/4</aside>
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
            <input type="radio" value="12-U" name="age" /> <b>12</b>
            <input type="radio" value="13-U" name="age" />
            <b> 13</b>
            <input type="radio" value="14-U" name="age" /> <b>14</b>
            <br />
            <input type="radio" value="15-U" name="age" /> <b>15</b>
            <input type="radio" value="16-U" name="age" />
            <b> 16</b>
            <input type="radio" value="17-U" name="age" />
            <b> 17</b>
          </div>
          <br />

          <center>
            <h5 className="card_subhead">You choosed: {this.state.age} </h5>
          </center>
          <button>
            <a href="/c_skill">Next</a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default CAge;
