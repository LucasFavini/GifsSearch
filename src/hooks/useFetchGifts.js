import { useState, useEffect } from "react"
import {getGifts} from '../Components/Funciones/getGifts'

export const useFetchGifts = (categories) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    //hace que se aplica el efecto cada vez que cambie la categoria
    useEffect(() => {
      getGifts(categories)//funcion que realiza la peticion a la api
        .then(imgs=>{     
         
            setTimeout(() => {
                setState({
                    data:imgs,
                    loading:false
                });                     
            }, 1000);
        })
    }, [categories]);
 

    return state;
}

