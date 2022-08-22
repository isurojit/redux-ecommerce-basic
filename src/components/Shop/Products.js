import React from "react";
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 6.99,
    title: "Product 1",
    description: "Product 1 description",
  },
  {
    id: "p2",
    price: 5.99,
    title: "Product 2",
    description: "Product 2 description",
  },
  {
    id: "p3",
    price: 8.99,
    title: "Product 3",
    description: "Product 3 description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
