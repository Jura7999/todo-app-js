let listaDeReproduction = [
  {
    titulo: "latinoamerica",
    artista: "calle13",
    duracion: 13,
    miFavorito: true,
  },
  {
    titulo: "Berlin lebt",
    artista: "Capital Bra",
    duracion: 210,
    miFavorito: true,
  },
  {
    titulo: "Nemoya",
    artista: "Sun Diego",
    duracion: 188,
    miFavorito: false,
  },
];

function mostrarCancion(playlist) {
  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i].miFavorito === true) {
      console.log(
        "Favorita: " + playlist[i].titulo + "por " + playlist[i].artista
      );
    } else {
      console.log(playlist[i].titulo + " por " + playlist[i].artista);
    }
  }
}

mostrarCancion(listaDeReproduction);

let biblioteca = [
  { titulo: "Wie man Freunde gewinnt", autor: "Dale Carnegie", paginas: 120 },
  { titulo: "Ogilvy on Advertising", autor: "David Ogilvy", paginas: 80 },
  { titulo: "Never eat alone", autor: "Dude von Deloite", paginas: 100 },
];

function buscarLibroPorTitulo(bib, titel) {
  for (let i = 0; i < bib.length; i++) {
    let book = bib[i].titulo;
    if (book === titel) {
      return bib[i];
    }
  }
  return null;
}

let libroEncontrado = buscarLibroPorTitulo(biblioteca, "Ogilvy on Advertising");
console.log("Ergebnis:" + libroEncontrado);

libroEncontrado = buscarLibroPorTitulo(biblioteca, "Das Haus Anubis");
console.log("Ergebnis: " + libroEncontrado);
