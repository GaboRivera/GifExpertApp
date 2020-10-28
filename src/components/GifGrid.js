import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const url =
            'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=M92umU9WMxE2dKd1Z3hp3GpREVkXgUPL'
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        setImages(gifs)
    }

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    )
}