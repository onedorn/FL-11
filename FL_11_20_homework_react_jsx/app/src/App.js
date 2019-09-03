import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Shop from "./components/Shop";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    isLoaded: false,
    show_item: null,
    purchaseItem: []
  };

  componentDidMount() {
    fetch("http://localhost:1337/emoji-shop").then(res =>
      res.json().then(items => {
        this.setState({
          items: items.emoji,
          isLoaded: true
        });
      })
    );
  }

  showItem = show_item =>
    this.setState({
      show_item: show_item
    });

  purchaseItem = purchaseItem => {
    const storage = this.state.purchaseItem;
    storage.push(purchaseItem);
    this.setState({ purchaseItem: storage });
  };

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Dashboard
            draw={
              this.state.show_item ? this.state.show_item : this.state.items[1]
            }
            purchaseItem={
              this.state.purchaseItem.length
                ? this.state.purchaseItem
                : (<div>
                    <h5 className="pl-3">Basket</h5>
                    <p className="pl-3">No items to purchase</p>
                  </div>)
            }
          />
          <Shop
            show={this.showItem}
            items={this.state.items}
            purchaseItem={this.purchaseItem}
          />
        </div>
      );
    }
  }
}

export default App;
