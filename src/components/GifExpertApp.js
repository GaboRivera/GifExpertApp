import React, { useState } from 'react'

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
      <button onClick={() => handleAdd('Dragon ball super')}>
        Agregar categoria
      </button>
      <ul>
        {categories.map((categorie, index) => {
          return <li key={index}>{categorie}</li>
        })}
      </ul>
    </>
  )
}

export default GifExpertApp
