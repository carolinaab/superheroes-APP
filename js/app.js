

// const nasa = {
//     render: () =>  {
//         const urlAPI = 'http https://swapi.co/api/planets/1/';
//         const contenedor = document.querySelector('#nasa-row');
//         let contentHTML = '';

//       fetch(urlAPI)
//       .then(res => res.json())
//       .then((json) => {
//           console.log(json, 'RES.JSON')
//       })

//     }
// };

// nasa.render();
// heroes.render();
//
// const traer = () => {
// fetch('data.https://api.nasa.gov/planetary/apod?U0o10wKRl4OfjhL09MczjFyxx1UcTrcZ19n2')
// .then(res => res.json())
// .then(data => {
//     console.log(data.abilities[0].ability.name)
//      contenido.innerHTML = `<img src="${data.abilities[0].ability.url}" width="100px" class="img-fluid rounded-circle">
//      <p>nombre: ${data.abilities[0].ability.name}</p>`
// })

// }
// const apikey = 'U0o10wKRl4OfjhL09MczjFyxx1UcTrcZ19n2';
// let contenido = document.querySelector("#contenido");

// const connection = () 

const boton = document.querySelector('#boton');

const hello = () => {
console.log("hola")
}
boton.addEventListener('click', hello)