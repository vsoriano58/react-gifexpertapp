import React, {useState, useEffect} from 'react';

export default function GifGrid({ category }) {

    const [count, setcount] = useState(0)

    useEffect( () => {
        getGifs()
    }, [])

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=rRAFmkKlCqp1mzTpEX1znDMe9OEn3OXs'
        const resp = await fetch(url)
        const { data } = await resp.json()

       const gifs = data.map( img => {
           return {
               id: img.id,
               title: img.title,
               url: img.images?.downsized_medium.url
           }
       })

       console.log(gifs)

    }

    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={ () => setcount(count +1)}></button>
        </div>
    )
}
