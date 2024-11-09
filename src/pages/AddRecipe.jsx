import React, { useState } from "react";
import Header from "../components/Header";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisineType: "",
    imageLink: "",
    ingredients: "",
    cookingInstructions: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://recipe-organiser-backend-tan.vercel.app/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Recipe added successfully!" });
        setFormData({
          name: "",
          cuisineType: "",
          imageLink: "",
          ingredients: "",
          cookingInstructions: "",
        });
      } else {
        setMessage({
          type: "danger",
          text: "Failed to add recipe. Please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "danger",
        text: "Error while submitting the recipe.",
      });
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="row justify-content-left py-4">
          <div className="col-md-4">
            <h2>Add Recipe</h2>
            {message && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cuisineType" className="form-label">
                  Cuisine Type:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cuisineType"
                  name="cuisineType"
                  value={formData.cuisineType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageLink" className="form-label">
                  Image Link:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imageLink"
                  name="imageLink"
                  value={formData.imageLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ingredients" className="form-label">
                  Ingredients:
                </label>
                <textarea
                  className="form-control"
                  id="ingredients"
                  name="ingredients"
                  rows="3"
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="cookingInstructions" className="form-label">
                  Instructions:
                </label>
                <textarea
                  className="form-control"
                  id="cookingInstructions"
                  name="cookingInstructions"
                  rows="3"
                  value={formData.cookingInstructions}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddRecipe;
