const hp_films = [{
    name: "Harry Potter and the Philosopher's Stone",
    year: 2001,
    director: "Chris Columbus",
    composer: "John Williams",
    screenwriter: "Steve Kloves",
    producers: "David Heyman",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg"
}, {
    name: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    director: "Chris Columbus",
    composer: "John Williams",
    screenwriter: "Steve Kloves",
    producers: "David Heyman",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg"
}, {
    name: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    director: "Alfonso Cuarón",
    composer: "John Williams",
    screenwriter: "Steve Kloves",
    producers: "David Heyman, Chris Columbus and Mark Radcliffe",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Prisoner_of_azkaban_UK_poster.jpg"
}, {
    name: "Harry Potter and the Goblet of Fire",
    year: 2005,
    director: "Mike Newell",
    composer: "Patrick Doyle",
    screenwriter: "Steve Kloves",
    producers: "David Heyman",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg"
}, {
    name: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    director: "David Yates",
    composer: "Nicholas Hooper",
    screenwriter: "Michael Goldenberg",
    producers: "David Heyman and David Barron",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg"
}, {
    name: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    director: "David Yates",
    composer: "Nicholas Hooper",
    screenwriter: "Steve Kloves",
    producers: "David Heyman and David Barron",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg"
}, {
    name: "Harry Potter and the Deathly Hallows – Part 1",
    year: 2010,
    director: "David Yates",
    composer: "Alexandre Desplat",
    screenwriter: "Steve Kloves",
    producers: "David Heyman, David Barron and J. K. Rowling",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg"
}, {
    name: "Harry Potter and the Deathly Hallows – Part 2",
    year: 2011,
    director: "David Yates",
    composer: "Alexandre Desplat",
    screenwriter: "Steve Kloves",
    producers: "David Heyman, David Barron and J. K. Rowling",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg"
},
{
    name: "Fantastic Beasts and Where to Find Them",
    year: 2016,
    director: "David Yates",
    composer: "James Newton Howard",
    screenwriter: "J. K. Rowling",
    producers: "David Heyman, Steve Kloves, Lionel Wigram and J. K. Rowling",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Fantastic_Beasts_and_Where_to_Find_Them_poster.png"
},
{
    name: "Fantastic Beasts: The Crimes of Grindelwald",
    year: 2018,
    director: "David Yates",
    composer: "James Newton Howard",
    screenwriter: "J. K. Rowling",
    producers: "David Heyman, Steve Kloves, Lionel Wigram and J. K. Rowling",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3c/Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png"
},
{
    name: "Fantastic Beasts: The Secrets of Dumbledore",
    year: 2022,
    director: "David Yates",
    composer: "James Newton Howard",
    screenwriter: "J. K. Rowling and Steve Kloves",
    producers: "David Heyman, Steve Kloves, Lionel Wigram, J. K. Rowling and Tim Lewis",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/ab/Fantastic_Beasts_%E2%80%94_The_Secrets_of_Dumbledore_official_logo.jpg"
},
];


const directors = new Set(hp_films.map(film => film.director));
const composers = new Set(hp_films.map(film => film.composer));
const producers = new Set(hp_films.map(film => film.producers));

function create_filter(name, list) {
    const filter = [`<select id="${name}">`];
    filter.push(`<option value>Choose a ${name}</option>`);
    list.forEach(item => filter.push(`<option value="${item}">${item}</option>"`));
    filter.push("</select>");

    return filter.join("");
}

document.querySelector("#filters").innerHTML = `
                        ${create_filter("director", directors)}
                        ${create_filter("composer", composers)} 
                        ${create_filter("producer", producers)}`;

function create_movie(movie) {
    const movie_brick = ["<div class='movie'>"];

    movie_brick.push(`<h4>${movie.name} (${movie.year})</h4>`);
    movie_brick.push(`<img src="${movie.poster}" alt="${movie.name} poster image" />`);
    movie_brick.push(`<p><strong>Director</strong>: ${movie.director}</p>`);
    movie_brick.push(`<p><strong>Screenwriter</strong>: ${movie.screenwriter}</p>`);
    movie_brick.push(`<p><strong>Composer</strong>: ${movie.composer}</p>`);
    movie_brick.push(`<p><strong>Producers</strong>: ${movie.producers}</p>`);

    movie_brick.push("</div>");

    return movie_brick.join("");
}


document.querySelector("#films").innerHTML = hp_films.map(film => create_movie(film)).join("");

document.querySelectorAll("#filters select").forEach(filter => {
    filter.addEventListener("change", filter_movies);
});

function filter_movies() {
    const director = document.querySelector("#director").value;
    const producer = document.querySelector("#producer").value;
    const composer = document.querySelector("#composer").value;

    let movie_list = hp_films;

if (director) {
    movie_list = movie_list.filter(film => film.director === director)
}
if (composer) {
    movie_list = movie_list.filter(film => film.composer === composer)
}
if (producer) {
    movie_list = movie_list.filter(film => film.producers === producer)
}

document.querySelector("#films").innerHTML = movie_list.map(film => create_movie(film)).join(""); 
}





