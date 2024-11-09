// GenerateCard.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const GenerateCard = ({ recipe, onDelete }) => {
  const { id } = useParams();

  return (
    <div className="card mb-3">
      <img
        src={recipe.imageLink}
        alt={recipe.name}
        className="card-img-top"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">
          <strong>Cuisine Type:</strong> {recipe.cuisineType}
        </p>

        <p className="card-text">
          <strong>Ingredients:</strong>{" "}
          <Link to={`/productdetails/${recipe._id}`} className="text-primary">
            See Recipe &gt;
          </Link>
        </p>

        <p className="card-text">
          <strong>Instructions:</strong>{" "}
          <Link to={`/productdetails/${recipe._id}`} className="text-primary">
            See Recipe &gt;
          </Link>
        </p>

        <button
          onClick={() => onDelete(recipe._id)}
          className="btn btn-danger mt-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GenerateCard;
