//Peticion para conseguir los gifts
    
    export const getGifts = async (categories) => {    

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=17&api_key=ONRc99dDPr00lqUpzpW8htQBGMxpQqbO`;

        const peticion= await fetch(url);        
        const {data} =await peticion.json();

        //asignando valores a gifts
        const gifts = data.map((img) => { 
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,            
            }
        });
        return gifts;
    }