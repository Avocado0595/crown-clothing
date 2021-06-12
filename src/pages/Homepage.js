import React, { Component } from "react";
import "./homepage.scss";
import MenuItem from "../components/menu-item/MenuItem";
class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          imgUrl: "https://i.ibb.co/k6fNT8K/hat-category.webp",
          size: "small"
        },
        {
          id: 2,
          title: "jackets",
          imgUrl: "https://i.ibb.co/r2B75nX/jacket-category.webp",
          size: "small"
        },
        {
          id: 3,
          title: "sneakers",
          imgUrl: "https://i.ibb.co/GJCGwSh/sneaker-category.webp",
          size: "small"
        },
        {
          id: 4,
          title: "womens fashion",
          imgUrl: "https://i.ibb.co/ySvWCPs/woman-category.webp",
          size: "large"
        },
        {
          id: 5,
          title: "mens fashion",
          imgUrl: "https://i.ibb.co/BTfTqTP/men-category.webp",
          size: "large"
        }
      ]
    };
  }
  menuItems = (i, j) => {
    let result = [];
    this.state.sections.forEach((item) => {
      if (item.id <= j && item.id >= i)
        result.push(
          <MenuItem title={item.title} imgUrl={item.imgUrl} size={item.size} />
        );
    });
    return result;
  };
  render() {
    return (
      <div className="homepage">
        <div className="homepage-row">{this.menuItems(1, 3)}</div>
        <div className="homepage-row">{this.menuItems(4, 5)}</div>
      </div>
    );
  }
}

export default Homepage;
