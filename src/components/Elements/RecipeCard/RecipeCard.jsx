import React from 'react'
import { Link } from 'react-router-dom';
import "./RecipeCard.css"

export const RecipeCard = ({recipe, index}) => {

    const {id, img , name , description } = recipe;
  return (
      <div key={index} className={`list ${index %2 !== 0 ? "flex-row-reverse" : ""}`}>
                <div className='list-img'>
                    <img src={img} alt="" />
                </div>
                <div className='list-content'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link to={`/recipes/${recipe.id}`}><button>Recipe</button></Link>
                 </div>
            <div/>
    </div>
  )
}



