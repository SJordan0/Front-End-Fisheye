import { nickName, titleName } from './photographer.js'

let ulMedias = document.querySelector('.lightbox_container') // le conteneur d'image de la lightbox
const sectionMedia = document.querySelector('#media')

let titre

class Media {
  constructor() {
    this.createMedia = (type) => {
      let med
      if (type === 'image') {
        med = new Image()
      } else if (type === 'video') {
        med = new Video()
      }
      return med
    }
  }
}
//___images pour les cartes media___//
class Image {
  createAnImageCard(medium) {
    let anchorMedia = document.getElementById(`idImage${medium.id}`)
    let image = document.createElement('img')
    anchorMedia.appendChild(image)
    anchorMedia.setAttribute('href', 'javascript:void(0);')
    image.setAttribute('src', `./assets/images/${nickName}/${medium.image}`)
    image.setAttribute('alt', `${medium.title}`)
    image.setAttribute('id', `id${medium.id}`)
    image.setAttribute('width', '450')
    image.setAttribute('height', '400')

    anchorMedia.addEventListener('click', (e) => lightbox(e))
  }
  //___images HD pour la lightbox___//
  createAnImage(medium) {
    let li = document.createElement( 'li' );
    li.style.display = 'none'
    li.classList.add("lightboxItem")
    li.setAttribute('id', `item${medium.id}`)
    li.setAttribute('aria-hidden', 'true')
    ulMedias.appendChild(li)
    let figure = document.createElement( 'li' );
    figure.classList.add("figureLightbox")
    figure.setAttribute('aria-labelledby', `image${medium.id}`)
    figure.setAttribute('tabindex', '0')
    li.appendChild(figure)
    let image = document.createElement( 'img' );
    image.classList.add("imageLightbox")
    figure.appendChild(image)
    image.setAttribute('src', `./assets/images/${nickName}/${medium.image}`)
    image.setAttribute('alt', `${medium.title}`)
    image.setAttribute('id', `image${medium.id}`)
    image.setAttribute('width', '1050')
    let figcaption = document.createElement( 'figcaption' );
    figcaption.classList.add("titleLightbox")
    figcaption.setAttribute('aria-hidden', 'true')
    figure.appendChild(figcaption)
    figcaption.innerText = `${titre}`
  }
}
//___image de la video pour les cartes media___//
class Video {
  createAVideoCard(medium) {
    let anchorMedia = document.getElementById(`idImage${medium.id}`)
    let icone = document.createElement( 'img' );
    icone.classList.add("logoPlay")
    anchorMedia.appendChild(icone)
    anchorMedia.setAttribute('href', 'javascript:void(0);')
    icone.setAttribute('src', './images/play.png')
    icone.setAttribute('alt', '')
    icone.setAttribute('tabindex', '-1')
    let image = document.createElement('img')
    anchorMedia.appendChild(image)
    let captureImage = medium.video.replace('mp4', 'jpg')
    image.setAttribute('src', `./assets/images/${nickName}/${captureImage}`)
    image.setAttribute('alt', `${medium.title}`)
    image.setAttribute('id', `id${medium.id}`)
    image.setAttribute('width', '450')
    image.setAttribute('height', '400')

    anchorMedia.addEventListener('click', (e) => lightbox(e))
  }
  //___video pour la lightbox___//
  createAVideo(medium) {
    let li = document.createElement( 'li' );
    li.style.display = 'none'
    li.classList.add("lightboxItem")
    li.style.display = 'none'
    li.setAttribute('id', `item${medium.id}`)
    li.setAttribute('aria-hidden', 'true')
    ulMedias.appendChild(li)

    let figure = document.createElement( 'li' );
    figure.classList.add("figureLightbox")
    figure.setAttribute('aria-label', `${medium.title}`)
    figure.setAttribute('tabindex', '0')
    li.appendChild(figure)

    let video = document.createElement( 'video' );
    video.classList.add("videoLightbox")
    figure.appendChild(video)
    video.setAttribute('controls', 'true')
    video.setAttribute('width', '1050')
    video.setAttribute('aria-label', `${medium.title}`)

    let source = document.createElement( 'source' );
    source.classList.add("imageLightbox")
    video.appendChild(source)
    source.setAttribute('src', `./assets/images/${nickName}/${medium.video}`)
    source.setAttribute('type', 'video/mp4')

    let track = document.createElement( 'track' );
    video.appendChild(track)
    track.setAttribute('src', './assets/images/sous-titres.vtt')
    track.setAttribute('kind', 'subtitles')
    track.setAttribute('srclang', 'fr')
    track.setAttribute('label', 'francais')
    track.setAttribute('default', 'true')

    let divCaption = document.createElement( 'div' );
    divCaption.classList.add("controls")
    li.appendChild(divCaption)
    divCaption.setAttribute('id', 'video-controls')
    divCaption.setAttribute('data-state', 'hidden')

    let infos = document.createElement( 'p' );
    infos.classList.add("titleLightbox")
    divCaption.appendChild(infos)
    infos.innerText = `${titre}`
    infos.setAttribute('aria-hidden', 'true')


    let playButton = document.createElement('button')
    divCaption.appendChild(playButton)
    playButton.setAttribute('id', 'playpause')
    playButton.setAttribute('type', 'button')
    playButton.setAttribute('role', 'button')
    playButton.setAttribute('aria-label', 'lecture ou pause')
    playButton.setAttribute('data-state', 'play')
    playButton.innerHTML = '<span class="fas fa-play"></span>'
  }
}

const creation = new Media()

function testCreation(media) {
  sectionMedia.innerHTML = ''
  media.forEach(medium => {
    titre = titleName(medium.title)
    createDOMElements(medium)
    if (medium.image !== undefined) {
      let card = creation.createMedia('image')
      card.createAnImageCard(medium)
      card.createAnImage(medium)
    } else {
      let card = creation.createMedia('video')
      card.createAVideoCard(medium)
      card.createAVideo(medium)
    }
  })
  let allItems = document.querySelectorAll('.lightboxItem')
  let items = Array.from(allItems)
  items.forEach((item) => {
    item.classList.add(`item-${items.indexOf(item)}`)
  })
  let allMedias = document.querySelectorAll('.article_link')
  let medias = Array.from(allMedias)
  medias.forEach((media) => {
    media.classList.add(`article_link-${medias.indexOf(media)}`)
  })

}

function createDOMElements(medium) {
  let article = document.createElement( 'article' );
  sectionMedia.appendChild(article)
  article.setAttribute('id', `${medium.id}`)
  article.classList.add('article')
  //___DOM élément conteneur___//
  let figure = document.createElement( 'figure' );
  article.appendChild(figure)
  //___DOM élément conteneur du media___//
  let anchorMedia = document.createElement( 'a' );
  anchorMedia.classList.add("article_link")
  figure.appendChild(anchorMedia)
  anchorMedia.setAttribute('id', `idImage${medium.id}`)
  anchorMedia.setAttribute('aria-label', `${titre} gros plan`)
  let figcaption = document.createElement( 'figcaption' );
  figcaption.classList.add("article_informations")
  figure.appendChild(figcaption)
  //___DOM élément titre de l'image___//
  let title = document.createElement( 'p' );
  figcaption.appendChild(title)
  title.innerHTML = `${titre}`
  title.setAttribute('id', `title${medium.id}`)
  //___DOM élément conteneur likes___//
  let divLikes = document.createElement( 'div' );
  divLikes.classList.add("article_informations_likes")
  figcaption.appendChild(divLikes)
  //___DOM élément nombre de likes___//
  let numberLikes = document.createElement( 'p' );
  numberLikes.classList.add("likes")
  divLikes.appendChild(numberLikes)
  numberLikes.innerHTML = medium.likes
  numberLikes.setAttribute('id', `likes${medium.id}`)
  //___DOM élément coeur___//
  let aHeart = document.createElement( 'a' );
  aHeart.classList.add("heart")
  divLikes.appendChild(aHeart)
  aHeart.setAttribute('id', `heart${medium.id}`)
  aHeart.setAttribute('tabindex', '0')
  aHeart.setAttribute('aria-label', 'ajouter ou enlever un like')
  let heart = document.createElement( 'span' );
  heart.classList.add("heart")
  heart.classList.add('fas', 'fa-heart')
  aHeart.appendChild(heart)

  aHeart.addEventListener('click', () => addLikes())
  aHeart.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
      addLikes()
    }
  })
}


//_____________________________________________________________________________________________________________
export { testCreation }