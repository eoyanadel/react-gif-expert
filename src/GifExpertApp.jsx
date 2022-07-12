import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //useState ayuda a conservar el estado cuando hay cambios, reflejar cambios en el componente
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        
        if (categories.includes(newCategory)) return;
        
        // categories.push(newCategory) ESTO NO SE HACE
        setCategories([ newCategory, ...categories ]);
        // setCategories(cat => [ ...cat, 'Valorant' ]);
    }

    return (
        <>            
            <h1>GifExpertApp</h1>

            <AddCategory                 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map(category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }
                            
        </>
    )
}
