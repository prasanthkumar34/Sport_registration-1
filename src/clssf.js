import React, { Component, Fragment } from "react";
import "./styles.css";
class Clssf extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <center>
            <h3 className="card_head">Register for your team here !!</h3>
            <h5 className="card_subhead">
              Choose from the list of classifications below
            </h5>
          </center>
          <br />
          <div class="select_clss">
            <button>
              <a href="/c_age">Children</a>
            </button>

            <button>
              <a href="/gender">Adult</a>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Clssf;
