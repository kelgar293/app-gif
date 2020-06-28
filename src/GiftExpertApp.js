import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Marvel']);
 
// const handleAdd=()=>{
//     //setCategories(['Naruto',...categories])
//     setCategories(cats=>['Naruto',...cats]);
// }


    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

        
            {/* order list */}
            <ol>
               {
                //    loop para desplegar elementos 
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    ))
               }

            </ol>
        </>
    )
}

