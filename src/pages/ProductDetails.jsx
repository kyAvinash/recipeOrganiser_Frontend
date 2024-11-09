import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://recipe-organiser-backend-tan.vercel.app/recipes/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipe details.</p>;
  if (!data) return <p>Recipe not found.</p>;

  const instructions = data.cookingInstructions.split(". ");

  return (
    <>
      <Header />
      <main className="container py-4">
        <h3>{data.name}</h3>
        <div className="card border">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={data.imageLink}
                  alt={data.name}
                  className="card-img-top"
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-md-8 mt-3">
              <h2>Cuisine: {data.cuisineType}</h2>

              <h3>Ingredients:</h3>
              <p>{data.ingredients}</p>

              <h3>Instructions:</h3>
              <ol>
                {instructions.map((instruction, index) => (
                  <li key={index}>{instruction}.</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
