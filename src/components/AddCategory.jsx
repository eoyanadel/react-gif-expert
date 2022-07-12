import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('');

    //aqui estoy recibiendo siempre el event como parametro y desestructuro para sacar el target que tiene el valor
    const onInputChange = ({ target }) => {        
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // previene que el navegador recargue la página al hacer el submit del form
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;
        
        //el callback de la funcion setCategorias trae la referencia de las categorias, por eso puedo ocuparlos acá
        //setCategories((categories) => [...categories, inputValue]);

        onNewCategory(inputValue.trim());

        setInputValue('');
    }
  
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }  //más corto
                //onChange={ (event) => onInputChange(event) }  // más largo
            />
        </form>
  )
}
