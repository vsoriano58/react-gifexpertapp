import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export default function GifGrid({ category }) {

    // const [images, setimages] = useState([])
    const { loading } = useFetchGifs();

    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setimages( imgs ))
    // }, [ category ])

   

    return (
        <>
            <h3>{ category }</h3>

            { loading ? 'Cargando...' : 'Data cargada'}

            {/* <div className="card-grid">
                
                {
                    images.map( img => (
                    <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div> */}
        </>
    )  
}
