import React from "react";
import Image from "react-bootstrap/Image";
import "./ProductDetailsComponent.css";
import { Link } from "react-router-dom";

function ProductDetailsComponent(props) {
  return (
    <div className="container mt-5">
      <div className="product">
        <div className="product-images">
          <Image src={props.product.thumbnail} className="w-100" />
        </div>
        <br />
        <h2 className="product-title">{props.product.title}</h2>
        <p className="product-description">{props.product.description}</p>
        <div className="product-info">
          <p className="product-price">Price: ${props.product.price}</p>
          <p className="product-discount">
            Discount: {props.product.discountPercentage}%
          </p>
          <p className="product-rating">Rating: {props.product.rating}</p>
          <p className="product-stock">Stock: {props.product.stock}</p>
          <p className="product-brand"> Brand: {props.product.brand} </p>
          <p className="product-category">Category: {props.product.category}</p>

          <div>
            <Link to={"/products/"} className="btn btn-primary productsBtn">
              Ürünler sayfası
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComponent;
