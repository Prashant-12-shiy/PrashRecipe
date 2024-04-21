import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Homepage, RecipeDetails, RecipeList} from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/recipes' element={<RecipeList/>}/>
            <Route path='/recipes/:id' element={<RecipeDetails />}/>
        </Routes>
    </>
  )
}
