import React from 'react'
                                //categorie
export const GiftGaleryItem = ({id,title,url}) => {

    return (
        <div className = "contenedor animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}
