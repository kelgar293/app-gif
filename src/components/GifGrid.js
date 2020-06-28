import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category} ) => {


//renombra data como images
const {data:images,loading } = useFetchGifs(category);

//para que accion se ejecute solo una vez al renderizar

//se agrega [category] si la cateogria cambia vuelve a efectuar el efecto
    return (
       <>
        <h3>{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
       
         <div className="card-grid">
            
            {
                    images.map((img)=>(
                    <GifGridItem 
                    key={img.id}
                    {...img}
                    />
                    ))
                    }
            
        </div> 
        </>
    )
}
