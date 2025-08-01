import React, { useState } from "react";
import Form from "./Components/Form";
import ProductCard from "./Components/ProductCard";

const App = () => {
  const [formData, setFormData] = useState([]);

  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
      <div className="flex w-full">
        {formData.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
