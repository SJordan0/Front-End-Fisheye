function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    const photographer = `photographer.html`;

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
    return { name, picture, getUserCardDOM }
}