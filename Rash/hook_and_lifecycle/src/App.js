const App = () => {
  return (
    <div className="App">
      <img
        className="cover-img"
        src="https://www.shutterstock.com/shutterstock/photos/1569882214/display_1500/stock-vector-web-page-design-template-for-fast-food-street-cafe-cooking-food-ordering-junk-food-burger-1569882214.jpg"
        alt=""
      />
      <h1>Fast Food Shops</h1>
      <h3>Avoid fast food </h3>
      <div className="Shop">
        {/* {shopsInfo.map((shopInfo, index) => (
          <Shop
            key={index}
            title={shopInfo.title}
            description={shopInfo.description}
            image={shopInfo.image}
            link={shopInfo.link}
          />
        ))} */}
      </div>
    </div>
  );
};

export default App;