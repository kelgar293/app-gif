import React,{useState} from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);

    }

    const handleSubmit=(e)=>{
        //evita el reacargo de la pagina.
        e.preventDefault();
        if( inputValue.trim().length>2){
        setCategories(cats=>[inputValue,...cats]);
        setInputValue('');
        }
    }
    return (
        //onsubmit evento evita recargo de pagina
        <form onSubmit={handleSubmit}> 
      
            <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    // set categories es requerido desde giftexpert
    setCategories: PropTypes.func.isRequired
}
