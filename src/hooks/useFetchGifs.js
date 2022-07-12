import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";

// Un hook no es más q una función que retorna algo
export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    //userEffect es un hook de react que sirve para disparar efectos secundarios (proceso que se quiera ejecutar cuando algo suceda)
    //si el arreglo de dependencias es vacío, la función getImages se ejecutara sólo cuando se renderice el componente GifGrid
    //esto ayuda a que se eviten ejecuciones de procesos más de una vez, en este caso q el getImages se ejecute dos veces cada vez que hay un cambio en el componente
    useEffect(() => {
      getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
