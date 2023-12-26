import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function AddProduct(props) {
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://dummyjson.com/products/add", newProduct);
    } catch (error) {
      console.log("ürün eklenmedi.", error);
    }

    props.addProduct(newProduct);
  };

  return (
    <div className="container mt-4 ">
      <h2>Add Product</h2>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={newProduct.id}
            placeholder="Enter id"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newProduct.title}
            placeholder="Enter Title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newProduct.description}
            placeholder="Enter Description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={newProduct.price}
            placeholder="Enter Price"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Discount</Form.Label>
          <Form.Control
            type="text"
            name="discountPercentage"
            value={newProduct.discountPercentage}
            placeholder="Enter Discount Percentage"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Rating</Form.Label>
          <Form.Control
            type="text"
            name="rating"
            value={newProduct.rating}
            placeholder="Enter Rating"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Stock</Form.Label>
          <Form.Control
            type="text"
            name="stock"
            value={newProduct.stock}
            placeholder="Enter Stock"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={newProduct.brand}
            placeholder="Enter Brand"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={newProduct.category}
            placeholder="Enter Category"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Thumbnail</Form.Label>
          <Form.Control
            type="text"
            name="thumbnail"
            value={newProduct.thumbnail}
            placeholder="Enter Thumbnail"
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
