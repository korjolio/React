
const getImagen = async () => {

    const apiKey = 'sKmQDaudwbBof620844e5cvd7fMT0MzF';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;
    console.log(url)

    const img = document.createElement('img');
    img.src = url

    document.body.append(img)

}

getImagen()

// const apiKey = 'sKmQDaudwbBof620844e5cvd7fMT0MzF';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         console.log(data.images.original.url);
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url

//         document.body.append(img)
//     })
//     .catch(console.warn);