import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {
  
    const { images, isLoading  } = useFetchGifs(category);

    return (
    <>
      <h3>{ category }</h3>
      {
        //es un if corto con una sola condición
        isLoading && (<h2>Cargando...</h2>)        
      }

      <div className='card-grid'>
        {
            images.map((img) => (                
                //<li key={ img.id }>{ img.title }</li>
                <GifItem 
                    key={ img.id }
                    { ...img }
                />
            ))
        }
      </div>        
    </>
  )
}
