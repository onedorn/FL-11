import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class ShopItem extends Component {
  onClick = () => this.props.show(this.props.item);

  buyPack = () => {
    this.props.purchaseItem(this.props.item)
    
  };

  render() {
    return (
      <div className="card-body col-4 text-center mx-auto">
        <div onClick={this.onClick}>
          <span className="h1">{this.props.item.emoji[0].char}</span>
          <span className="h3">{this.props.item.emoji[1].char}</span>
          <span className="h5">{this.props.item.emoji[2].char}</span>
        </div>
        <h4 className="pt-2 mb-0 pb-0">{this.props.item.title}</h4>
        <StarRatings
          rating={this.props.item.stars}
          starDimension="15px"
          starRatedColor="#FFA500"
          starSpacing="2px"
        /> <br/>
        <button className="btn btn-primary mt-3 p-1 pr-4 pl-4" onClick={this.buyPack}>
          GET ({this.props.item.price})$
        </button>
      </div>
    );
  }
}

export default ShopItem;
