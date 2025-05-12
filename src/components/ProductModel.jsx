import React from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: "1rem",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <h2>{product.name}</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductModal;
