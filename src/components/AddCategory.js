
// rafc [tab]
import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submit hecho')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="rext"
                value={inputValue}
                onChange={handleInputChange}
             />
        </form>
    )
}
