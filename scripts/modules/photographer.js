import { openTri, closeTri, popularitySort, dateSort, titleSort } from './tri.js'
import { testCreation } from './media.js'

let photographer
let title
let nickName

//___DOM___//
const h1 = document.querySelector('h1')
const Location = document.querySelector('#location')
const Tagline = document.querySelector('#tagline')
const img = document.querySelector('.photographer_picture_img')
const Price = document.querySelector('.infos_price')
const contactTitle = document.querySelector('.modal_titre')
const totalLikesNb = document.querySelector('.infos_nombre_likes')

//___Récupération de l'id dans l'url___//

let str = window.location.href
let url = new URL(str)
let login = url.searchParams.get('id')

//___Récupération des données du photographe___//
class Photographer {
    constructor(name, id, city, country, tags, tagline, price, portrait, media) {
      this.name = name,
      this.id = id,
      this.city = city,
      this.country = country,
      this.tags = tags,
      this.tagline = tagline,
      this.price = price,
      this.portrait = portrait,
      this.media = media
    }
  }
  function getPhotographerData(photographers) {
    for (let i = 0; i < photographers.length; i++ ) {
      if (photographers[i].id == login) {
        photographer = new Photographer(
          photographers[i].name, 
          photographers[i].id, 
          photographers[i].city, 
          photographers[i].country,
          photographers[i].tags,
          photographers[i].tagline,
          photographers[i].price,
          photographers[i].portrait,
          photographers[i].media,
        )
        folderName(photographers[i])
        displayPhotographer(photographers[i])
        testCreation(photographers[i].media)
        return photographer
      }
    }
  }

  //___Récupération du nom du dossier image___//
function folderName(photographer) {
  let name = photographer.name.toLowerCase().replace('-', '_')
  let i = name.indexOf(' ')
  nickName = i == -1 ? name : name.substring(0, i)
  return nickName
}

//___Affichage du profil___//
function displayPhotographer() {
  h1.innerHTML = photographer.name
  h1.setAttribute('aria-label', `${photographer.name}`)
  Location.innerHTML = photographer.city + ', ' + photographer.country
  Tagline.innerHTML = photographer.tagline
  Price.innerHTML = photographer.price + ' € / jour'
  img.setAttribute('src', `./assets/photographers/${photographer.portrait}`)
  img.setAttribute('alt', `portrait du photographe ${photographer.name}`)
  contactTitle.innerHTML = `Contactez-moi </br>${photographer.name}`
  totalLikes(photographer.media)
}

//___Calcul et affichage des Likes___//
function totalLikes(media) {
  let number = 0
  for (let i = 0; i < media.length; i++) {
    number += media[i].likes
  }
  totalLikesNb.innerHTML = number
}

//___Récupération du nom de chaque image___//
function titleName(alt) {
  let str = alt
  let i = str.indexOf()
  title = i == -1 ? str : str.substring(0, i)
  return title
}

//___liste de tri___//

let open = document.querySelector('#button-triOpen')
let popularity = document.getElementById('option1')
let date = document.getElementById('option2')
let titre = document.getElementById('option3')
let close = document.querySelector('#button-triClose')

open.addEventListener('click', () => openTri())
close.addEventListener('click', () => closeTri())

//___popularité___//
popularity.addEventListener('click', () => popularitySort(photographer.media))
popularity.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    popularitySort(photographer.media)
  }
})

//___date___//
date.addEventListener('click', () => dateSort(photographer.media))
date.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    dateSort(photographer.media)
  }
})

//___titre___//
titre.addEventListener('click', () => titleSort(photographer.media))
titre.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    titleSort(photographer.media)
  }
})

export { getPhotographerData, titleName, nickName }



/*function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `../assets/photographers/${portrait}`;
    //const photographer = `photographer.html`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const button = document.createElement( 'button' );
        button.setAttribute = ("a", photographer);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement ('h3');
        h3.textContent = city + country;
        const p = document.createElement ('p');
        p.classList.add("tagline");
        p.textContent = tagline;
        const span = document.createElement ('span');
        span.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);
        return (article);
    }
    return { name, city, country, tagline, price, portrait, getUserCardDOM }
}

export { photographerFactory }*/