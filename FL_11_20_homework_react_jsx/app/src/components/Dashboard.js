import React, { Component } from "react";
import Basket from "./Basket";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9 card bg-light border-0">
            <div className="card-body">
              <h3>NEW! {this.props.draw.title}</h3>
              <p>Includes</p>
              <div>
                {this.props.draw.emoji[0].char}
                {this.props.draw.emoji[1].char}
                {this.props.draw.emoji[2].char}
              </div>
              <button className="btn btn-primary float-right p-1 pr-4 pl-4">
                GET ({this.props.draw.price}) $
              </button>
            </div>
          </div>
          <Basket purchaseItem={this.props.purchaseItem}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
