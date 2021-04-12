const privatekey = 'e30572272f8f5685602ea88821a57378afc25eeb',
    publickey = '8529f0db9c296c5d884119cce2cf46eb',
    content = document.getElementById('content'),
    search = document.getElementById('search');
//Crearemos una coneccion
const getConection = () => {
    const ts = Date.now();
    const hash = MD5(ts + privatekey + publickey); //encriptamos nuestra llave
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
    fetch(URL) //proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP
        .then(response => response.json())
        .then(response => {
            response.data.results.forEach(e => {
                drawHero(e); //llamamos a los datos encontrados
            });
        })
        .catch(e => console.log(e)); //en caso de tener algun error lo controlamos
};
const drawHero = e => {
    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
        //creamos nuestra hoja de estilo para visualizar los datos encontrados
    const hero = `
    <div class="hero ed-item l-1-3" >
    <br>
        <h5>${e.name}</h5>
        <div class="hero-img">
            <img class="thumbnail" src ="${image}">
            <p class="descripcion">${e.description}</p>
            
        </div>
    </div>
`;
    content.insertAdjacentHTML('beforeEnd', hero);
};
//con el siguiente metodo buscamos por medio del nombre a los superheroes
const searchHero = name => {
    const ts = Date.now();
    const hash = MD5(ts + privatekey + publickey);
    const hero = encodeURIComponent(name);
    const URL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${hero}&ts=${ts}&apikey=${publickey}&hash=${hash}`;
    fetch(URL)
        .then(response => response.json())
        .then(json => {
            json.data.results.map(item => {
                drawHero(item);
            });
        })
        .catch(e => console.log(e));
};
//hacemos que mediante un enter se pueda buscar el nombre del superheroe
search.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        content.innerHTML = '';
        searchHero(e.target.value.trim());
    }
});
getConection();