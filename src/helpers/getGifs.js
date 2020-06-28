export const getGifs = async(category )=>{
    //encodeURI codifica texto a formato sin espacios para hacer el post and get
const url =`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=JzyogdvlYMLk3a4GcVGyB76y7eBFhfrQ`;
const resp=await fetch(url);
const {data}=await resp.json();

const gifs= data.map(img=>{
    return{
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,

    }
})
return gifs;
}
