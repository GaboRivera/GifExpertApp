import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = (props) => {
    const [categories, setcategories] = useState(['dragon ball'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setcategories={setcategories}></AddCategory>

            <ul>
                {categories.map((category, index) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ul>
        </>
    )
}

export default GifExpertApp
