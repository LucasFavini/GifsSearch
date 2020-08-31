import React from 'react'
import { useFetchGifts} from '../hooks/useFetchGifts'
import { GiftGaleryItem } from './GiftGaleryItem';




export const GiftGalery = ({categories}) => {

     const {data:images,loading}=useFetchGifts(categories);

     console.log('test');


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{categories}</h3>     
            {loading &&  <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            </div>}     

            <div className="card-grid"> 

                <ul>
                    {images.map((img)=>{               
                            return <GiftGaleryItem 
                                    key={img.id} 
                                    {...img}//envia todas las propiedades como props id,url,title                            
                                    />                   
                    })}                   
                </ul>
                
            </div>
        </>
    )
}
