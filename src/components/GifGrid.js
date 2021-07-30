import React, {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export default function GifGrid({ category }) {

    const [images, setimages] = useState([])

    useEffect( () => {
        getGifs( category )
            .then( imgs => setimages( imgs ))
    }, [ category ])

   

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                
                {
                    images.map( img => (
                    <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )  
}
