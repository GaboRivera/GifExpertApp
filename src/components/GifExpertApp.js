import React, { useState } from 'react'
import { AddCategory } from './AddCategory'

const GifExpertApp = (props) => {
  // const categories = ['Dragon ball', 'One Piece', 'Ranma']
  const [categories, setcategories] = useState([
    'Dragon ball',
    'One Piece',
    'Ranma',
  ])

  const handleAdd = (newCategory) => {
    setcategories([...categories, newCategory])
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <AddCategory setcategories={handleAdd}></AddCategory>

      <ul>
        {categories.map((categorie, index) => {
          return <li key={index}>{categorie}</li>
        })}
      </ul>
    </>
  )
}

export default GifExpertApp
