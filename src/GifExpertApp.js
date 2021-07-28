import React, {useState} from 'react'

export const GifExpertApp = () => {

    // No utilizaremos esta línea por los problemas ampliar los elementos y que React reacione
    //const categories = ['one Punch', 'Sanurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['one Punch', 'Sanurai X', 'Dragon Ball'])

    const handleAdd = ()=> {
        // setCategories([...categories, 'HunterXHunter'])
        
        // Otra solución sería
        setCategories( cats => [...cats, 'HunterXHunter'])
    }

    return (

        <div>
           <h2>GifExpertApp</h2> 
           <hr />

           <button onClick={handleAdd}>AGREGAR</button>

           <ol>

                {
                    categories.map( category => {
                            return <li key={category}> { category }</li>

                    })
                }       

           </ol> 
           
        </div>
    )
}
