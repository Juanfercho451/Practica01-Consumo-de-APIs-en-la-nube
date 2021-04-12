const privatekey = 'e30572272f8f5685602ea88821a57378afc25eeb',
    publickey = '8529f0db9c296c5d884119cce2cf46eb',
    content = document.getElementById('content'),
    search = document.getElementById('search');


const getConection = () => {
    const ts = Date.now();
    const hash = MD5(ts + privatekey + publickey);
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            response.data.results.forEach(e => {
                drawHero(e);
            });
        })
        .catch(e => console.log(e));
};
const drawHero = e => {
    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
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
search.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        content.innerHTML = '';
        searchHero(e.target.value.trim());
    }
});

getConection();