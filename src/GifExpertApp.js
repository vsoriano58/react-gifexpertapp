import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    // No utilizaremos esta línea por los problemas ampliar los elementos y que React reacione
    //const categories = ['one Punch', 'Sanurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])


    return (

        <div>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>  
           <hr />



           <ol>

                {
                    categories.map( category => (
                           
                        <GifGrid
                            key={ category }
                            category={category}
                        />

                    ))
                }       

           </ol> 
           
        </div>
    )
}
