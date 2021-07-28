import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    // No utilizaremos esta línea por los problemas ampliar los elementos y que React reacione
    //const categories = ['one Punch', 'Sanurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['one Punch', 'Sanurai X', 'Dragon Ball'])

    // const handleAdd = ()=> {
       
    //     // setCategories = () =>
    //     // Otra solución sería
    //     setCategories( cats => [...cats, 'HunterXHunter'])
    // }

    return (

        <div>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>  
           <hr />



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
