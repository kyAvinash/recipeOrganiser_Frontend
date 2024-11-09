import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GenerateCard from "./components/GenerateCard";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (term = "") => {
    setLoading(true);
    setError(null);

    const url = term
      ? `https://recipe-organiser-backend-tan.vercel.app/recipes/search/${term}`
      : "https://recipe-organiser-backend-tan.vercel.app/recipes";

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        if (result.length === 0) {
          setError("No recipes found.");
          setData([]);
        }
      } else {
        setError("No recipes found.");
        setData([]);
      }
    } catch (error) {
      setError("Error loading recipes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    fetchRecipes(term);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://recipe-organiser-backend-tan.vercel.app/recipes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Failed to delete recipe.");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row py-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by recipe name..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <h2>All Recipes:</h2>

        {loading && <p>Loading recipes...</p>}
        {error && <p className="text-danger">{error}</p>}
        {data?.length > 0 ? (
          <div className="row">
            {data.map((recipe) => (
              <div key={recipe._id} className="col-md-3">
                <GenerateCard recipe={recipe} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        ) : (
          !loading && !error && <p>No recipes found.</p>
        )}
      </main>
    </>
  );
}

export default App;
