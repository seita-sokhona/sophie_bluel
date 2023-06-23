// var data
// fetch('http://localhost:5678/api/works')
// .then((response)=> response.json())
// .then((response2) => {
//     // console.log(response2)
//      data = response2  
     

// })

//console.log("mydata",data);
const fetchObjets = async () => {
  try {
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json();
   showData(data); 
  } catch (error) {
    console.log('Une erreur s\'est produite lors de la récupération des objets:', error);
    throw error;
  }
}
fetchObjets()

const showData = (data)=>{
 let images = document.querySelector('.gallery');

 data.map((image) => {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  img.src = image.src;
  img.alt = image.alt;
  figcaption.textContent = image.caption;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  images.appendChild(figure);
});
}

//  les données
// const data = [
// {
//   src: 'assets/images/abajour-tahina.png',
//   alt: 'Abajour Tahina',
//   caption: 'Abajour Tahina'
// },
// {
//   src: 'assets/images/appartement-paris-v.png',
//   alt: 'Appartement Paris V',
//   caption: 'Appartement Paris V'
// },

// ];

showData(data);
  







