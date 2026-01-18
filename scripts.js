//com essa linha de codigo estou pedindo para o HTML q fique de olho até que um evento aconteca no caso o ("DOMContentLoaded")
document.addEventListener('DOMContentLoaded', ( ) =>{


    //Array das imagens 
     const artistsData = [
        {name:'Henrique e Juliano', image:'./img/henrique-e-juliano.jpg' },
        {name:'Jorge & Mateus', image:'./img/jorge-e-mateus.jpg' },
        {name:'Zé Neto e Cristiano', image:'./img/ze-neto.jpg' },
        {name:'Gusttavo Lima', image:'./img/gusttavo-lima.jpg' },
        {name:'Luan Santana', image:'./img/luan-santana.jpg' },
        {name:'Matheus & Kauan', image:'./img/fiduma-e-jeca.jpg' }
];

    const albumsData = [
        {name:'White Noise (Sleep & Relaxation Sounds', artist:'Sleepy John', image:'./img/white-noise.jpg' },
        {name:'O Céu Explica Tudo (Ao vivo)', artist:'Henrique & Juliano', image:'./img/O-Céu-Explica-Tudo.jpg' },
        {name:'Nada como um dia após o outro', artist:'Racionais', image:'./img/vida-loka.jpg' },
        {name:'HIT ME HARD AND SOFT', artist:'Billie Eilish', image:'./img/hit-me.jpg' },
        {name:'CAJU', artist:'Liniker', image:'./img/caju.jpg' },
        {name:'Escandalo Íntimo', artist:'Luísa Sonza', image:'./img/escandalo-intimo.jpg' }
];



    const artistsGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    //o forEach vai pegar item por item do artistData e vai mostrar ate acabar os itens da váriavel
    artistsData.forEach( artist => {
        
        //com essa linha de codigo eu criei uma div no meu HTML pelo JS
        const artistCard = document.createElement('div')
        //aqui eu dei uma classe para essa 'div'
        artistCard.classList.add('artist-card')
        //tudo o que eu colocar dentro da minha div, o innerHTML insere dentro dele 
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `   
        
        //essa linha basicamente o que eu colocar dentro dela ela vai jogar dentro do HTML
        artistsGrid.appendChild(artistCard)
    })    

        albumsData.forEach( album => {
            
        //com essa linha de codigo eu criei uma div no meu HTML pelo JS
        const albumCard = document.createElement('div')
        //aqui eu dei uma classe para essa 'div'
        albumCard.classList.add('album-card')
        //tudo o que eu colocar dentro da minha div, o innerHTML insere dentro dele 
        albumCard.innerHTML = `
            <img src="${album.image}" alt="Imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `   
            albumsGrid.appendChild(albumCard)

        })
})




