import { useState, useEffect } from "react";

function ProductDetails(props) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          name: "ATmega32 Development Board",
          description:
            "Classic ATmega32A minimum system, eliminating welding trouble",
          price: "1190.00",
          category: "Development Board",
        },
        {
          name: "AVR Microcontroller Learning Board",
          description:
            "This is a cost-effective ultra-high AVR microcontroller development board, hardware, rich resources, supporting routine improvement.",
          price: "3200.00",
          category: "Learning Board",
        },
        {
          name: "ESP32-CAM WiFi + Bluetooth Camera Module",
          description: "Ultra-small 802.11b/g/n Wi-Fi + BT/BLE SoC module",
          price: "900.00",
          category: "Module",
        },
      ]);
    }, 3000);
  }, []);

  return (
    <div>
      {products ? (
        products.map((product) => {
          return (
            <div onClick={() => props.setSelected(product)}>
              <div>Name: {product.name}</div>
              <div>Price: {product.price}</div>
            </div>
          );
        })
      ) : (
        <div className="LoaderBalls">
          <div className="LoaderBalls__item"></div>
          <div className="LoaderBalls__item"></div>
          <div className="LoaderBalls__item"></div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
