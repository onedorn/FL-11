import React, { Component } from "react";
import ShopItem from "./ShopItem";

class Shop extends Component {
  render() {
    
    return (
      <div className="row w-75">
        {this.props.items.map(item => (
          <ShopItem
            key={item.id}
            item={item}
            show={this.props.show}
            purchaseItem={this.props.purchaseItem}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
