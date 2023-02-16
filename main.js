console.log('jajajjaa FUNCIONO !!!')

const url='https://cataas.com/api/cats?tags=cute';

fetch(url) //devuelve una promesa y la resuelvo con un metodo then
.then(res => res.json())
.then(data =>{
    const img =document.querySelector('img')
    img.src = data[0].url;
});
