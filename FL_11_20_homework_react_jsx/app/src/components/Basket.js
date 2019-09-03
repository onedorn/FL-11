import React, { Component } from "react";
import BasketItem from "./BasketItem";

class Basket extends Component {
  
  render() {
    
    if(Array.isArray(this.props.purchaseItem)) {
      return (
        <div className="col-3">
          <h5>Basket</h5>
          <ul className="list-group">
            {this.props.purchaseItem.map(item => (
              <BasketItem key={item.id} purchaseItem={item}/>
            ))}
          </ul>
          <button className="btn btn-primary mt-2 p-1 pr-4 pl-4" onClick={this.clearBasketAfterPurchase}>Purchase</button>
        </div>
      );
    } else {
      return this.props.purchaseItem
    }
 
  }
}

export default Basket;
