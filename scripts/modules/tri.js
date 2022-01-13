import { testCreation } from './media.js'

//___DOM___//
let listeTri = document.getElementById('container')
let open = document.querySelector('#button-triOpen')
let popularity = document.getElementById('option1')

//___Ouverture de la liste___//
function openTri() {
  listeTri.style.display = 'flex'
  open.setAttribute('aria-expanded', 'true')
  popularity.focus()
}

//___Fermeture de la liste___//
function closeTri() {
  listeTri.style.display = 'none'
  open.setAttribute('aria-expanded', 'false')
  open.focus()
}

//___Renommage selon le tri___//
function renameTri(alt) {
  let name = document.querySelector('.option1')
  name.innerHTML = alt
}

//___Tri par popularité___//
function popularitySort(media) {
  function tri(a,b) {
    return ((a.likes < b.likes) ? 1 : (a.likes == b.likes) ? 0 : -1)
  }
  media.sort(tri)
  testCreation(media)
  renameTri('&ensp;Popularité')
}

//___Tri par date___//
function dateSort(media) {
  function tri(a,b) {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)
    return ((dateA < dateB) ? 1 : (dateA == dateB) ? 0 : -1)
  }
  media.sort(tri)
  testCreation(media)
  renameTri('&ensp;Date')
}

//___Tri par titre___//
function titleSort(media) {
  function tri(a,b) {
    let titleA = a.title.split(' ').join('')
    a = titleA.toLowerCase()
    let titleB = b.title.split(' ').join('')
    b = titleB.toLowerCase()
    return (a < b) ? -1 : 1
  }
  media.sort(tri)
  testCreation(media)
  renameTri('&ensp;Titre')
}

export { openTri, closeTri, popularitySort, dateSort, titleSort }