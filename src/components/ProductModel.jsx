import React from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(255, 255, 255, 0.6)", // more transparent
        backdropFilter: "blur(10px)", // stronger blur
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        width: "320px",
        zIndex: 1000,
        textAlign: "center",
        animation: "fadeScaleIn 0.3s ease-out",
      }}
    >
      <h2>{product.name}</h2>
      <p style={{ margin: "10px 0" }}>{product.description}</p>

      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        />
      )}

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {product.url && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#007bff",
              color: "#fff",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontSize: "18px",
              width: "36px",
              height: "36px",
            }}
            title="View More"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        <button
          onClick={onClose}
          style={{
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "8px",
            fontSize: "18px",
            width: "36px",
            height: "36px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Close"
        >
          <FaTimes />
        </button>
      </div>

      {/* Inline CSS animation keyframes */}
      <style>
        {`
          @keyframes fadeScaleIn {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductModal;
