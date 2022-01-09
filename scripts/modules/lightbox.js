//___DOM___//
let lightBoxBg = document.querySelector('.lightbox-background') // lightbox background
let closeLightbox = document.getElementById('closeLightbox') // le bouton de fermeture de la lightbox
let prev = document.getElementById('left') // bouton "précédent"
let next = document.getElementById('right') // bouton "suivant"
let lightBox = document.querySelector('.lightbox-content')
let body = document.querySelector('.bloc_page')
const main = document.getElementById('main_photo')
let position

//___Ouverture de la lightbox___//
function lightbox(e) {
  e.preventDefault()
  body.classList.add('no-scroll')
  lightBoxBg.style.display = 'flex'
  lightBoxBg.setAttribute('aria-hidden', 'false')
  main.setAttribute('aria-hidden', 'true')
  main.setAttribute('tabindex', '-1')

  lightBox.setAttribute('tabindex', '0')

  let picture = window.event.target
  let id = searchId(picture)
  let firstItem = document.getElementById(`item${id}`)
  researchPosition(firstItem)
  firstItem.style.display = 'flex'
  firstItem.setAttribute('aria-hidden', 'false')
  lightBox.focus()
  let myVideo = document.querySelector('.videoLightbox')
  let playPause = document.getElementById('playpause')
  myVideo.removeAttribute('controls')
  playPause.addEventListener('click', () => switchState())
}

//___Recupération de la position du premier media___//
function researchPosition(firstItem) {
  let cName = firstItem.className
  let i = cName.lastIndexOf('-')
  let positionString = cName.substr(i+1)
  position = parseInt(positionString)
  return position
}

//___Play ou pause___//
function switchState() {
  let myVideo = document.querySelector('.videoLightbox')
  let playPause = document.getElementById('playpause')
  if (myVideo.paused == true) {
    myVideo.play()
    playPause.innerHTML = '<img class="button_video-null" src="./assets/images/play.png"/>'
  } else {
    myVideo.pause()
    playPause.innerHTML = '<img src="./assets/images/play.png"/>'
  }
//___Affichage du bouton replay___//
  myVideo.addEventListener('ended', () => {
    playPause.innerHTML = '<img src="./assets/images/replay.png"/>'
  });
}

document.addEventListener('keydown', (e) => {
  const keyCode = e.code
  if (keyCode === 'Space' || keyCode === 'Enter') {
    switchState()
  }
})

//___Récupération de l'id du media___//
function searchId(picture) {
  if (picture.tagName !== 'A') {
    let divMedia = picture.parentNode
    let idDivMedia = divMedia.getAttribute('id')
    let id = idDivMedia.replace('idImage', '')
    return id
  } else {
    let idDivMedia = picture.getAttribute('id')
    let id = idDivMedia.replace('idImage', '')
    return id
  }
}

//___Navigation prochaine et précédente___//
next.addEventListener('click', () => goToNextSlide())
prev.addEventListener('click', () => goToPreviousSlide())

document.addEventListener('keydown', (e) => {
  const keyCode = e.key
  if (keyCode === 'ArrowRight') {
    goToNextSlide()
  } else if (keyCode === 'ArrowLeft') {
    goToPreviousSlide()
  } 
})

function goToNextSlide() {
  let items = document.querySelectorAll('.lightboxItem')
  let total = items.length - 1
  if (position < total ) {
    const lastItem = document.querySelector(`.item-${position}`)
    position++
    const currentItem = document.querySelector(`.item-${position}`)
    setNodeAttributes(lastItem, currentItem)
  } else if (position === total) {
    const lastItem = document.querySelector(`.item-${position}`)
    position = 0
    const currentItem = document.querySelector(`.item-${position}`)
    setNodeAttributes(lastItem, currentItem)
  }
}
function goToPreviousSlide() {
  let items = document.querySelectorAll('.lightboxItem')
  let total = items.length - 1
  if (position - 1 >= 0) {
    position -= 1
    const currentItem = document.querySelector(`.item-${position}`)
    const lastItem = document.querySelector(`.item-${position + 1}`)
    setNodeAttributes(lastItem, currentItem)
  } else {
    const lastItem = document.querySelector(`.item-${position}`)
    position = total
    const currentItem = document.querySelector(`.item-${position}`)
    setNodeAttributes(lastItem, currentItem)
  }
}

const setNodeAttributes = (lastItem, currentItem) => {
  lastItem.style.display = 'none'
  currentItem.style.display = 'flex'
  lastItem.setAttribute('aria-hidden', 'true')
  currentItem.setAttribute('aria-hidden', 'false')
}

//___Fermeture de la lightbox___//
closeLightbox.addEventListener('click', () => closeBox())
lightBox.addEventListener('keydown', (e) => onKeyUp(e))

function onKeyUp(e) {
  let keynum = e.key
  if (keynum == 'Escape') {
    closeBox()
  }
}
function closeBox() {
  let firstLink = document.querySelector('.article_link-0')
  firstLink.focus()
  lightBoxBg.style.display = 'none'
  lightBoxBg.setAttribute('aria-hidden', 'true')
  main.setAttribute('aria-hidden', 'false')
  main.setAttribute('tabindex', '0')

  body.classList.remove('no-scroll')
  lightBox.removeEventListener('keydown', onKeyUp)
  next.removeEventListener('click', () => goToNextSlide())
  prev.removeEventListener('click', () => goToPreviousSlide())

  lightBox.setAttribute('tabindex', '-1')
  let allItems = document.querySelectorAll('.lightboxItem')
  let items = Array.from(allItems)
  items.forEach((item) => {
    item.setAttribute('aria-hidden', 'true')
    item.style.display = 'none'
  })
}

export { lightbox }