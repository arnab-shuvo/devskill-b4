import React from "react";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = ({ productList, setProductDetail }) => {
  return (
    <>
      <table className={styles.pr_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.length &&
            productList.map((product, index) => (
              <>
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => setProductDetail(product)}>
                      Show Detail
                    </button>
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
