import React from "react";
import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";

const ProductDetail = ({ product, setProductDetail }) => {
  return (
    <>
      <button onClick={() => setProductDetail(null)}>Back To Home Page</button>
      <table className={styles.pr_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductDetail;
