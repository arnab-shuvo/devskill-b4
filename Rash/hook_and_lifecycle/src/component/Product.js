import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

let uniqueIndex;
let index;

const Products = ({selectProduct}) => {
  const [productItems, setProductItems] = useState([{
    title: "McDonald's",
    description:
      "A global fast food chain that specializes in burgers, fries, and shakes.",
    image:
      "https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_Desktop_Deals-v1_1168x520.jpg",
    link: "https://www.mcdonalds.com/",
  },
  {
    title: "KFC",
    description: " A fast food chain that specializes in fried chicken.",
    image:
      "https://www.kfc.com/_next/static/images/empty-bucket-835c4f452fae1420a288523f2c1ead2b.png",
    link: "https://www.kfc.com/",
  },
  {
    title: "Subway ",
    description: "A fast food chain that specializes in sandwiches and salads.",
    image:
      "https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/08/09165704/new-subway%C2%AE-retaurants-logo-5-HR.jpg",
    link: "https://www.subway.com/",
  },
  {
    title: "Burger King",
    description:
      "A global fast food chain that specializes in flame-grilled burgers, fries, and shakes.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
    link: "https://www.bk.com/",
  },
  {
    title: "Domino's Pizza",
    description:
      "A global pizza delivery chain that specializes in various types of pizza, sides, and desserts.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png",
    link: "https://www.dominos.com/",
  },
  {
    title: "Pizza Hut",
    description:
      "A global pizza chain that specializes in various types of pizza, wings, and sides.",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/190625084159-20190625-pizza-hut-logo-new.jpg?q=w_3000,h_1688,x_0,y_0,c_fill",
    link: "https://www.pizzahut.com/",
  },
  {
    title: "Wendy's",
    description:
      "A fast food chain that specializes in burgers, fries, and frostys.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/640px-Wendy%27s_full_logo_2012.svg.png",
    link: "https://www.wendys.com/",
  },
  {
    title: "Taco Bell",
    description:
      "A fast food chain that specializes in Mexican-inspired food such as tacos, burritos, and nachos.",
    image:
      "https://cdn.mos.cms.futurecdn.net/hgRu36yguybcDeZLsZybEA-1200-80.jpg",
    link: "https://www.tacobell.com/",
  },

  {
    title: "Dunkin' Donuts",
    description:
      "A global coffee and donut chain that specializes in various types of coffee, donuts, and breakfast items.",
    image:
      "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62f38b151d02bacb1aed4187_av2Vg5SPPdp1YtEE3CpzB5bw-J7JOu31S8z3KT3QuW2hKGu3CWe7LrQuX7Il8OgpQdtYHc8woNDc6X-FFLNYQ-TWWqsgK7jOfHlWpDzlLLHH_uQWBOkWc7wcOtaGnjNPpereqvkVAAI7xJ-rNoVkbGA.png",
    link: "https://www.dunkindonuts.com/",
  },
  {
    title: "Chick-fil-A",
    description:
      "A fast food chain that specializes in chicken sandwiches, nuggets, and strips.",
    image:
      "https://1000logos.net/wp-content/uploads/2018/01/chick-fil-emblem.jpg",
    link: "https://www.chick-fil-a.com/",
  },
])

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isClicked: true });
//     }, 5000);
//   }

  handleButtonClick = (index) => {
    // window.alert("Hello");
    uniqueIndex = index;
    
    this.setState({ isClicked: true });
    // <ProductDetails information={this.state.products} />;
  };

  // render() {


    return (
       productsMap = productItems.map((product, index) => (
        <div key={index}>
          Name: {product.name} <br />
          Price: {product.price}
          <br />
          {/* <button type="button" id={index} onClick={this.handleButtonClick(index)}>
            Show Details
          </button> */}
          <br />
          <br />
        </div>
      ))

      <div>
        
        {/* {isClicked ? <ProductDetails information={products} /> : {productsMap} } */}
          
        {/* : (
          <div>
            <h1>Product Page</h1>
            {productsMap}
          </div>
        )} */}
        {/* <button type="button" onClick={this.handleButtonClick}>
          Show Details
        </button> */}
      </div>
    );
  }


export default Product;
