// preguntas.js

// Array de preguntas con opciones y respuestas
const preguntas = [
  // Historia
  {
    pregunta: "¿Quién fue el primer emperador de Roma?",
    opciones: [
      "Nerón",
      "Augusto",
      "César",
      "Trajano"
    ],
    respuesta: "Augusto"
  },
  {
    pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
    opciones: [
      "1912",
      "1914",
      "1916",
      "1918"
    ],
    respuesta: "1914"
  },
  {
    pregunta: "¿Cuál fue la principal causa de la Revolución Francesa?",
    opciones: [
      "Conflictos religiosos",
      "Desigualdades sociales y económicas",
      "Ambiciones militares",
      "Reformas políticas"
    ],
    respuesta: "Desigualdades sociales y económicas"
  },
  {
    pregunta: "¿Qué civilización construyó las pirámides de Giza?",
    opciones: [
      "Mesopotámica",
      "Egipcia",
      "Azteca",
      "Inca"
    ],
    respuesta: "Egipcia"
  },
  {
    pregunta: "¿Qué reina británica fue conocida como la 'Reina Victoria'?",
    opciones: [
      "Victoria",
      "Isabel",
      "Ana",
      "María"
    ],
    respuesta: "Victoria"
  },
  {
    pregunta: "¿Qué país fue el primero en conceder el voto a las mujeres?",
    opciones: [
      "Estados Unidos",
      "Reino Unido",
      "Nueva Zelanda",
      "Canadá"
    ],
    respuesta: "Nueva Zelanda"
  },
  {
    pregunta: "¿En qué año cayó el Muro de Berlín?",
    opciones: [
      "1987",
      "1988",
      "1989",
      "1990"
    ],
    respuesta: "1989"
  },
  {
    pregunta: "¿Quién fue el líder del movimiento de independencia en la India?",
    opciones: [
      "Nehru",
      "Jinnah",
      "Mahatma Gandhi",
      "Ambedkar"
    ],
    respuesta: "Mahatma Gandhi"
  },
  {
    pregunta: "¿Cuál fue la última dinastía imperial de China?",
    opciones: [
      "Ming",
      "Qing",
      "Han",
      "Tang"
    ],
    respuesta: "Qing"
  },
  {
    pregunta: "¿Qué imperio se conoce por la construcción de Machu Picchu?",
    opciones: [
      "Azteca",
      "Inca",
      "Maya",
      "Olmeca"
    ],
    respuesta: "Inca"
  },

  // Deportes
  {
    pregunta: "¿Quién es conocido como el 'Rey del Fútbol'?",
    opciones: [
      "Maradona",
      "Pelé",
      "Messi",
      "Cristiano Ronaldo"
    ],
    respuesta: "Pelé"
  },
  {
    pregunta: "¿Qué país ha ganado más Copas del Mundo de la FIFA hasta 2022?",
    opciones: [
      "Alemania",
      "Italia",
      "Brasil",
      "Argentina"
    ],
    respuesta: "Brasil"
  },
  {
    pregunta: "¿En qué deporte se usa un 'puck'?",
    opciones: [
      "Fútbol",
      "Hockey sobre hielo",
      "Golf",
      "Tenis"
    ],
    respuesta: "Hockey sobre hielo"
  },
  {
    pregunta: "¿Cuál es el nombre del torneo de tenis que se juega en Wimbledon?",
    opciones: [
      "US Open",
      "Roland Garros",
      "Australian Open",
      "Campeonato de Wimbledon"
    ],
    respuesta: "Campeonato de Wimbledon"
  },
  {
    pregunta: "¿Qué atleta ganó el mayor número de medallas en los Juegos Olímpicos?",
    opciones: [
      "Usain Bolt",
      "Michael Phelps",
      "Carl Lewis",
      "Paavo Nurmi"
    ],
    respuesta: "Michael Phelps"
  },
  {
    pregunta: "¿En qué deporte se destaca la disciplina de 'salto con pértiga'?",
    opciones: [
      "Atletismo",
      "Natación",
      "Ciclismo",
      "Gimnasia"
    ],
    respuesta: "Atletismo"
  },
  {
    pregunta: "¿Cuál es el equipo de fútbol más exitoso en la historia de la UEFA Champions League?",
    opciones: [
      "Barcelona",
      "Manchester United",
      "Real Madrid",
      "AC Milan"
    ],
    respuesta: "Real Madrid"
  },
  {
    pregunta: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
    opciones: [
      "1892",
      "1896",
      "1900",
      "1904"
    ],
    respuesta: "1896"
  },
  {
    pregunta: "¿Quién tiene el récord de más goles en una sola temporada de La Liga española?",
    opciones: [
      "Cristiano Ronaldo",
      "Raúl",
      "Lionel Messi",
      "Ferenc Puskás"
    ],
    respuesta: "Lionel Messi"
  },
  {
    pregunta: "¿En qué deporte se usa un 'swing' para golpear una bola?",
    opciones: [
      "Golf",
      "Béisbol",
      "Tenis",
      "Ping Pong"
    ],
    respuesta: "Golf"
  },

  // Geografía
  {
    pregunta: "¿Cuál es el río más largo del mundo?",
    opciones: [
      "Amazonas",
      "Nilo",
      "Yangtsé",
      "Misisipi"
    ],
    respuesta: "Nilo"
  },
  {
    pregunta: "¿En qué continente se encuentra el desierto del Sahara?",
    opciones: [
      "Asia",
      "África",
      "América del Norte",
      "Oceanía"
    ],
    respuesta: "África"
  },
  {
    pregunta: "¿Cuál es el país más grande del mundo por superficie?",
    opciones: [
      "Estados Unidos",
      "China",
      "Canadá",
      "Rusia"
    ],
    respuesta: "Rusia"
  },
  {
    pregunta: "¿Qué océano se encuentra al oeste de Australia?",
    opciones: [
      "Océano Atlántico",
      "Océano Pacífico",
      "Océano Índico",
      "Océano Ártico"
    ],
    respuesta: "Océano Índico"
  },
  {
    pregunta: "¿Cuál es la capital de Canadá?",
    opciones: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Ottawa"
    ],
    respuesta: "Ottawa"
  },
  {
    pregunta: "¿Qué país es conocido por tener la forma de un 'zapato de bota'?",
    opciones: [
      "Francia",
      "España",
      "Italia",
      "Grecia"
    ],
    respuesta: "Italia"
  },
  {
    pregunta: "¿Qué gran cadena montañosa se extiende a lo largo de la frontera entre Europa y Asia?",
    opciones: [
      "Los Andes",
      "Los Alpes",
      "Los Urales",
      "Las Rocosas"
    ],
    respuesta: "Los Urales"
  },
  {
    pregunta: "¿Cuál es la isla más grande del mundo?",
    opciones: [
      "Nueva Guinea",
      "Borneo",
      "Groenlandia",
      "Madagascar"
    ],
    respuesta: "Groenlandia"
  },
  {
    pregunta: "¿En qué continente se encuentra el desierto de Atacama?",
    opciones: [
      "Asia",
      "África",
      "América del Sur",
      "Oceanía"
    ],
    respuesta: "América del Sur"
  },
  {
    pregunta: "¿Cuál es el mar más salado del mundo?",
    opciones: [
      "Mar Rojo",
      "Mar Caspio",
      "Mar Muerto",
      "Mar Caribe"
    ],
    respuesta: "Mar Muerto"
  },

  // Preguntas adicionales
  {
    pregunta: "¿Cuál es el nombre de la señora que atiende la cocina?",
    opciones: [
      "Ana",
      "Sol",
      "Marta",
      "Laura"
    ],
    respuesta: "Sol"
  },
  {
    pregunta: "Según el rumor conocido en la escuela, ¿qué dinero fue urtado por uno de los directivos?",
    opciones: [
      "Donaciones",
      "Cooperadora",
      "Caja chica",
      "Fondos de emergencia"
    ],
    respuesta: "Cooperadora"
  },
  {
    pregunta: "¿A qué profesor se le filtró un video explícito, de él siendo juguetón con sí mismo?",
    opciones: [
      "Alan Uzal",
      "José Pérez",
      "Luis Martínez",
      "Carlos Gómez"
    ],
    respuesta: "Alan Uzal"
  }
];

// Exportar el objeto para que pueda ser utilizado en otros archivos
module.exports = preguntas;

  