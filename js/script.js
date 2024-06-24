const explosaoDeDesejos = {
  cover: "img/explosao-de-desejos.jpg",
  title: "Explosão de Desejos",
  year: 1986,
  numberOfTracks: 12,
  tracks: [
    "Contradições",
    "Filme de Amor",
    "Explosão de Desejos",
    "Eu Nem Sei Existir",
    "Pé de Milho",
    "Teatro da Vida",
    "Muros Coloridos",
    "Fui um Tolo",
    "Sublime Renúncia",
    "Relienta",
    "Moça Bonita do Campo",
    "Você Nasceu Para Amar",
  ],
  color: "#af9c71",
};

const volume2 = {
  cover: "img/volume-2.jpg",
  title: "Leandro & Leonardo Vol. 2",
  year: 1987,
  numberOfTracks: 12,
  tracks: [
    "Aconchego",
    "Bicho do Paraná",
    "Mesmo Apesar da Chuva",
    "Fim de Comédia",
    "Bem-Te-Vi",
    "Nosso Amor",
    "Voltei Pra Ficar",
    "Solidão",
    "Amor nas Galáxias",
    "Resto de Vida",
    "O Amor Já Foi Embora",
    "Conselho de Pai",
  ],
  color: "#474f44",
};

const volume3 = {
  cover: "img/volume-3.jpg",
  title: "Leandro & Leonardo Vol. 3",
  year: 1989,
  numberOfTracks: 12,
  tracks: [
    "Quem Será Essa Mulher",
    "Lágrimas do Coração",
    "Quebra Esse Gelo",
    "Quarto Negro",
    "Paraíso",
    "É Por Você Que Canto (The Sounds of Silence)",
    "Aqueles Olhos",
    "Entre Tapas e Beijos",
    "Teu Olhar",
    "Cai na Real",
    "Semi-Luz",
    "Luar do Sertão",
  ],
  color: "#e2e2f4",
};

const volume4 = {
  cover: "img/volume-4.jpg",
  title: "Leandro & Leonardo Vol. 4",
  year: 1990,
  numberOfTracks: 12,
  tracks: [
    "Cadê Você",
    "Talvez Você Se Lembre",
    "O Cheiro da Maçã",
    "Coração Quer Te Encontrar",
    "Mais Uma Vez Sozinho (Marcas de Amor)",
    "Pra Nunca Dizer Adeus",
    "Pense em Mim",
    "Só Fazendo Amor",
    "Você Ainda Vai Voltar",
    "Ponto Fraco",
    "Desculpe, Mas Eu Vou Chorar",
    "Talismã",
  ],
  color: "#526193",
};

const body = document.body;
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const footer = document.querySelector("footer");
const albumCover = document.getElementById("albumCover");
const albumTitle = document.getElementById("albumTitle");
const albumYear = document.getElementById("year");
const playlist = document.getElementById("playlist");

document.getElementById("alb1").addEventListener("click", () => {
  albumCover.src = explosaoDeDesejos.cover;
  albumTitle.innerText = explosaoDeDesejos.title;
  albumYear.innerText = explosaoDeDesejos.year;

  body.style.backgroundImage = `url("${explosaoDeDesejos.cover}")`;
  body.style.color = "black";
  main.style.backgroundColor = explosaoDeDesejos.color;
  main.style.color = "black";
  aside.style.backgroundColor = explosaoDeDesejos.color;
  aside.style.color = "black";
  footer.style.backgroundColor = explosaoDeDesejos.color;

  for (let i = 0; i < explosaoDeDesejos.numberOfTracks; i++) {
    const li = document.createElement("li");
    playlist.append(li);

    playlist.childNodes.forEach((f, v) => {
      f.innerText = explosaoDeDesejos.tracks[v];
    });
  }
});

document.getElementById("alb2").addEventListener("click", () => {
  albumCover.src = volume2.cover;
  albumTitle.innerText = volume2.title;
  albumYear.innerText = volume2.year;

  body.style.backgroundImage = `url("${volume2.cover}")`;
  body.style.color = "white";
  main.style.backgroundColor = volume2.color;
  main.style.color = "white";
  aside.style.backgroundColor = volume2.color;
  aside.style.color = "white";
  footer.style.backgroundColor = volume2.color;

  for (let i = 0; i < volume2.numberOfTracks; i++) {
    const li = document.createElement("li");
    playlist.append(li);

    playlist.childNodes.forEach((f, v) => {
      f.innerText = volume2.tracks[v];
    });
  }
});

document.getElementById("alb3").addEventListener("click", () => {
  albumCover.src = volume3.cover;
  albumTitle.innerText = volume3.title;
  albumYear.innerText = volume3.year;

  body.style.backgroundImage = `url("${volume3.cover}")`;
  body.style.color = "black";
  main.style.backgroundColor = volume3.color;
  main.style.color = "black";
  aside.style.backgroundColor = volume3.color;
  aside.style.color = "black";
  footer.style.backgroundColor = volume3.color;

  for (let i = 0; i < volume3.numberOfTracks; i++) {
    const li = document.createElement("li");
    playlist.append(li);

    playlist.childNodes.forEach((f, v) => {
      f.innerText = volume3.tracks[v];
    });
  }
});

document.getElementById("alb4").addEventListener("click", () => {
  albumCover.src = volume4.cover;
  albumTitle.innerText = volume4.title;
  albumYear.innerText = volume4.year;

  body.style.backgroundImage = `url("${volume4.cover}")`;
  body.style.color = "white";
  main.style.backgroundColor = volume4.color;
  main.style.color = "white";
  aside.style.backgroundColor = volume4.color;
  aside.style.color = "white";
  footer.style.backgroundColor = volume4.color;

  for (let i = 0; i < volume4.numberOfTracks; i++) {
    const li = document.createElement("li");
    playlist.append(li);

    playlist.childNodes.forEach((f, v) => {
      f.innerText = volume4.tracks[v];
    });
  }
});
