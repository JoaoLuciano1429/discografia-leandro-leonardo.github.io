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

const volume5 = {
  cover: "img/volume-5.jpg",
  title: "Leandro & Leonardo Vol. 5",
  year: 1991,
  numberOfTracks: 12,
  tracks: [
    "Sonho por Sonho",
    "Gostoso Sentimento",
    "Não Aprendi a Dizer Adeus",
    "Bate Coração",
    "Sabor de Mim",
    "Me Dê Um Sinal",
    "Mensagem",
    "Estou na Mão Dessa Mulher",
    "A Rotina (Fim de Semana)",
    "Não Olhe Assim",
    "Amores São Coisas da Vida",
    "Paz na Cama",
  ],
  color: "#5e4d82",
};

const volume6 = {
  cover: "img/volume-6.jpg",
  title: "Leandro & Leonardo Vol. 6",
  year: 1992,
  numberOfTracks: 12,
  tracks: [
    "O Que Eu Sinto É Amor",
    "Um Arraso de Mulher",
    "Fim de Semana Sem Você",
    "Conta Pra Ela",
    "Mais Uma Noite Sem Você",
    "Você É Doida Demais",
    "Não Durmo Sem Ela",
    "Amor Vampiro",
    "Temporal de Amor",
    "Esta Noite Foi Maravilhosa (Wonderful Tonight)",
    "Vem Fazer Amor Comigo",
    "Chega",
  ],
  color: "#a68675",
};

const volume7 = {
  cover: "img/volume-7.jpg",
  title: "Leandro & Leonardo Vol. 7",
  year: 1993,
  numberOfTracks: 12,
  tracks: [
    "Bobo",
    "Mexe Mexe",
    "Quem é",
    "Outra Chance",
    "Seja Bem-Vinda",
    "Em Nome do Amor",
    "Quero Ser o Seu Dono",
    "Gosto Dela",
    "A Vida Tem Dessas Coisas",
    "Uma História Sem Fim",
    "O Quanto Nosso Amor Valeu",
    "Diz Que Me Ama",
  ],
  color: "#ea603d",
};

const volume8 = {
  cover: "img/volume-8.jpg",
  title: "Leandro & Leonardo Vol. 8",
  year: 1994,
  numberOfTracks: 13,
  tracks: [
    "Mulher Brasileira",
    "Não Sei Mais Dormir Sozinho",
    "25 Horas por Dia",
    "Saudades Dela",
    "Dor de Amor Não Tem Jeito",
    "Índia",
    "Diga Pra Mim (Philosopher)",
    "Casa Separa",
    "Cavaleiro do Asfalto",
    "Brigar Com Ele",
    "Dodói de Amor",
    "Separados",
    "Achei Uma Louca",
  ],
  color: "#e0d8dc",
};

const body = document.body;
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const footer = document.querySelector("footer");
const albumCover = document.getElementById("albumCover");
const albumTitle = document.getElementById("albumTitle");
const albumYear = document.getElementById("year");
const playlist = document.getElementById("playlist");

function displayAlbum(album, colorText) {
  albumCover.src = album.cover;
  albumTitle.innerText = album.title;
  albumYear.innerText = album.year;

  body.style.backgroundImage = `url("${album.cover}")`;
  body.style.color = colorText;
  main.style.backgroundColor = album.color;
  main.style.color = colorText;
  aside.style.backgroundColor = album.color;
  aside.style.color = colorText;
  footer.style.backgroundColor = album.color;
  playlist.innerHTML = ""; // Limpa a lista de músicas

  for (let i = 0; i < album.numberOfTracks; i++) {
    const li = document.createElement("li");
    li.innerText = album.tracks[i];
    playlist.appendChild(li);
  }
}

document
  .getElementById("alb1")
  .addEventListener("click", () => displayAlbum(explosaoDeDesejos, "black"));

document
  .getElementById("alb2")
  .addEventListener("click", () => displayAlbum(volume2, "white"));

document
  .getElementById("alb3")
  .addEventListener("click", () => displayAlbum(volume3, "black"));

document
  .getElementById("alb4")
  .addEventListener("click", () => displayAlbum(volume4, "white"));

document
  .getElementById("alb5")
  .addEventListener("click", () => displayAlbum(volume5, "white"));

document
  .getElementById("alb6")
  .addEventListener("click", () => displayAlbum(volume6, "black"));

document
  .getElementById("alb7")
  .addEventListener("click", () => displayAlbum(volume7, "white"));

document
  .getElementById("alb8")
  .addEventListener("click", () => displayAlbum(volume8, "black"));
