import React, { Component, Fragment } from "react";

class BasketItem extends Component {
  render() {
    return (
      <Fragment>
        <li className="list-group-item border-top-0 border-left-0 border-right-0 p-0 mb-1">
          {this.props.purchaseItem.title}
          <i className="material-icons text-danger float-right">clear</i>
        </li>
      </Fragment>
    );
  }
}

export default BasketItem;
