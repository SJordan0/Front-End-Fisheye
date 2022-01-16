//___DOM___//
let photographersSection = document.querySelector(".photographer_section");

//___Création d'un profil___//
function createAcard(photographer) {
    let article = document.createElement( 'article' );
    let link = document.createElement('a');
    let img = document.createElement( 'img' );
    let Infos = document.createElement ( 'div' );
    let h2 = document.createElement( 'h2' );
    let Location = document.createElement( 'h3' );
    let Tagline = document.createElement( 'p' );
    let Price = document.createElement( 'span' );
    link.appendChild(img)
    link.appendChild(h2)
    article.appendChild(link)
    Infos.appendChild(Location)
    Infos.appendChild(Tagline)
    Infos.appendChild(Price)
    article.appendChild(Infos)
    photographersSection.appendChild(article)

//___Contenu du profil___//
  img.setAttribute('src', `./assets/photographers/${photographer.portrait}`)
  img.setAttribute('alt', `portrait du photographe ${photographer.name}`)
  link.setAttribute('href', 'photographer.html?id=' + `${photographer.id}`)
  link.setAttribute('aria-label', `${photographer.name}`) 
  Infos.classList.add('info')
  Infos.setAttribute('aria-label', `Infos du photographe`) 
  Infos.setAttribute('tabindex', `0`)
  h2.innerHTML = `${photographer.name}`
  Location.innerHTML = `${photographer.city}, ${photographer.country}`
  Tagline.innerHTML = `${photographer.tagline}`
  Price.innerHTML = `${photographer.price}€/jour`
  article.setAttribute('id', `article${photographer.id}`)
}

export { createAcard }