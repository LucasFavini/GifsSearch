import React, { useState } from 'react'
import PropTypes from 'prop-types'

                        //aca se pasan las props
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);        
    }

    
    const handleSubmit = (e) =>{
       e.preventDefault();
       
       if (inputValue==='')
       {
           setInputValue('');
       }
       else{        
           setCategories((categories)=>[inputValue,...categories]);
           setInputValue('');
       }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Busca un gif..."
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

//obligando a usar mi prop .func xq es funcion