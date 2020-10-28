import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

const GifExpertApp = (props) => {
    // const categories = ['Dragon ball', 'One Piece', 'Ranma']
    const [categories, setcategories] = useState(['Dragon ball'])

    const handleAdd = (newCategory) => {
        setcategories([...categories, newCategory])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setcategories={handleAdd}></AddCategory>

            <ul>
                {categories.map((category, index) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ul>
        </>
    )
}

export default GifExpertApp
