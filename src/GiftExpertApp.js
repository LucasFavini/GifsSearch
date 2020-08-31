import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GiftGalery } from './Components/GiftGalery';



const GiftExpertApp = () =>{
    //estado
    const [categories, setCategories] = useState([''])
   


                            //setCategories Verde es una prop q se pasa al otro componente
    return(
        <>
            <h2>GiftExpertApp</h2>            
            <AddCategory setCategories={setCategories}/>  
                              
            <hr/>
           
            <ul>
                {categories.map(categorie=>{
                    return <GiftGalery key={categorie} categories={categorie}/>
                })}
            </ul>


        </>
    
    )
}

export default GiftExpertApp;