import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import AddProduct from "../../components/AddProduct/AddProduct";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((products) => [...products, newProduct]);
    setIsVisible(false);
  };

  return (
    <div className="container mt-5 ">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="btn btn-primary"
      >
        Ürün Ekle
      </button>
      {isVisible && <AddProduct addProduct={handleAddProduct} />}

      <div className="row mt-5">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-3"
            key={product.id}
          >
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDeleteProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
