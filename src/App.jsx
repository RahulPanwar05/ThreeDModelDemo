import React, { useState } from "react";
import ModelViewer from "./components/ModelViewer";
import ProductModal from "./components/ProductModel";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ModelViewer onMeshClick={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;
