import React, { useEffect, useState } from 'react'
import { RecipeCard } from '../../components';

export const RecipeList = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        async function fetchRecipe() {
        const response = await fetch("http://localhost:8001/recipes");
        const data = await response.json();
        setRecipe(data);
    }
    fetchRecipe();
    }, []) 

  return (
    <div>
        {recipe.map((recipe, index) => (
           <RecipeCard recipe={recipe} index={index}/>
        ))}
    </div>
  )
}
