import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

export default function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(response.data);
  };

  return (
    <div className="container mt-5">
      <ProductDetailsComponent product={product} />
    </div>
  );
}
