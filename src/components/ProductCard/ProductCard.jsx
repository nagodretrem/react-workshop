import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductCard(props) {
  const deleteProduct = async () => {
    try {
      await axios.delete(`https://dummyjson.com/products/${props.product.id}`);
      props.onDelete(props.product.id);
    } catch (error) {
      console.error("Ürün silinemedi.", error);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.product.thumbnail} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Link to={"/products/" + props.product.id} className="btn btn-primary">
          Detail
        </Link>
        <Button onClick={deleteProduct} variant="danger" className="ms-1">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
