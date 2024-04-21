import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./recipeDetails.css";

export const RecipeDetails = () => {

  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchRecipe() {
        const response = await fetch(`http://localhost:8001/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);   
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className='recipe_details my-24'>
      <h2 className='recipe_name'>{recipe.name}</h2>
      <div>
        <div className='flex recipe-img-section max-md:block h-auto '>
            <div className="details_img flex justify-center">
          <img src={recipe.img} alt={recipe.name} />
        </div>
        <div className="ingredients max-md:ml-6 mt-6">
          <h3>Ingredients:</h3>
          <ol>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className='flex'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
              </svg>{ingredient}</li>
            ))}
          </ol>
        </div>
        </div>
      
        <div className="method">
          <h3>Method:</h3>
          <ol>
            {recipe.method.map((step, index) => (
              <li className='max-md:text-sm' key={index}>{step}</li>
              
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
