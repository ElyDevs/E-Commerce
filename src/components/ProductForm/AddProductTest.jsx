import React, { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase/Firebase"; // Use named import

const AddProductTest = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [previousPrice, setPreviousPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    if (selectedImages.length + images.length > 3) {
      alert("You can only upload a maximum of 3 images.");
      return;
    }

    const validImages = selectedImages.filter(
      (image) => image.size <= 3 * 1024 * 1024
    );
    if (validImages.length !== selectedImages.length) {
      alert("Some images exceed the 3MB size limit.");
    }

    setImages([...images, ...validImages]);
  };

  const handleAddSize = () => {
    if (sizeInput) {
      setSizes((prevSizes) => [...prevSizes, sizeInput]);
      setSizeInput("");
    }
  };

  const handleAddColor = () => {
    if (colorInput) {
      setColors((prevColors) => [...prevColors, colorInput]);
      setColorInput("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      title,
      description,
      images,
      price,
      previousPrice,
      sizes,
      colors,
      outOfStock,
    };
    console.log(productData);

    try {
      const res = await addDoc(collection(db, "cities"), {
        name: "Tessssssssssst",
        state: "AAAAAAAA",
        country: "ssssqsadqsfdqsf",
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#444",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        color: "#fff",
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            color: "#333",
            backgroundColor: "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            color: "#333",
            backgroundColor: "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "100px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Images (max 3, max size 3MB each):
        </label>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            color: "#333",
            backgroundColor: "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Price:
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            color: "#333",
            backgroundColor: "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Previous Price (optional):
        </label>
        <input
          type="number"
          value={previousPrice}
          onChange={(e) => setPreviousPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            color: "#333",
            backgroundColor: "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Sizes (XS to XXL):
        </label>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
            placeholder="Enter a size"
            style={{
              flex: 1,
              padding: "0.5rem",
              fontSize: "1rem",
              color: "#333",
              backgroundColor: "#eee",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            type="button"
            onClick={handleAddSize}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Add
          </button>
        </div>
        <div style={{ marginTop: "0.5rem", color: "#bbb" }}>
          {sizes.join(", ")}
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          Colors:
        </label>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            placeholder="Enter a color"
            style={{
              flex: 1,
              padding: "0.5rem",
              fontSize: "1rem",
              color: "#333",
              backgroundColor: "#eee",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            type="button"
            onClick={handleAddColor}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Add
          </button>
        </div>
        <div style={{ marginTop: "0.5rem", color: "#bbb" }}>
          {colors.join(", ")}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
            paddingRight: 30,
          }}
        >
          Out of Stock:
        </label>
        <input
          type="checkbox"
          checked={outOfStock}
          onChange={(e) => setOutOfStock(e.target.checked)}
          style={{
            transform: "scale(2.2)",
            margin: "0.5rem 0",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          fontSize: "1.1rem",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductTest;
