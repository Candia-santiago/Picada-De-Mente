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
      "Dj Pekke",
      "Luis Martínez",
      "Carlos Gómez"
    ],
    respuesta: "Alan Uzal"
  },
  {
    pregunta: "¿Cuál es el elemento químico con el símbolo 'O'?",
    opciones: [
      "Osmio",
      "Oxígeno",
      "Oro",
      "Ombrelón"
    ],
    respuesta: "Oxígeno"
  },
  {
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    opciones: [
      "Júpiter",
      "Saturno",
      "Urano",
      "Neptuno"
    ],
    respuesta: "Júpiter"
  },
  {
    pregunta: "¿Qué tipo de célula es la unidad básica de la vida?",
    opciones: [
      "Animal",
      "Vegetal",
      "Procariota",
      "Eucariota"
    ],
    respuesta: "Eucariota"
  },
  {
    pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
    opciones: [
      "El corazón",
      "El hígado",
      "La piel",
      "Los pulmones"
    ],
    respuesta: "La piel"
  },
  {
    pregunta: "¿Qué científico formuló la teoría de la relatividad?",
    opciones: [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "Galileo Galilei"
    ],
    respuesta: "Albert Einstein"
  },
  {
    pregunta: "¿Cómo se llama la sustancia que da color a la piel?",
    opciones: [
      "Melanina",
      "Hemoglobina",
      "Colágeno",
      "Queratina"
    ],
    respuesta: "Melanina"
  },
  {
    pregunta: "¿Cuál es el órgano responsable de bombear la sangre en el cuerpo humano?",
    opciones: [
      "El hígado",
      "El cerebro",
      "El riñón",
      "El corazón"
    ],
    respuesta: "El corazón"
  },
  {
    pregunta: "¿Qué planeta es conocido como el 'planeta rojo'?",
    opciones: [
      "Marte",
      "Venus",
      "Mercurio",
      "Saturno"
    ],
    respuesta: "Marte"
  },
  {
    pregunta: "¿Qué es la fotosíntesis?",
    opciones: [
      "El proceso por el cual las plantas producen oxígeno",
      "La formación de hielo en los océanos",
      "La conversión de luz en energía por las plantas",
      "El crecimiento de los tejidos animales"
    ],
    respuesta: "La conversión de luz en energía por las plantas"
  },
  {
    pregunta: "¿Cuál es el compuesto químico de la sal de mesa?",
    opciones: [
      "NaCl",
      "KCl",
      "CaCl2",
      "MgSO4"
    ],
    respuesta: "NaCl"
  },

  // Literatura
  {
    pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
    opciones: [
      "Miguel de Cervantes",
      "Gabriel García Márquez",
      "William Shakespeare",
      "Jorge Luis Borges"
    ],
    respuesta: "Miguel de Cervantes"
  },
  {
    pregunta: "¿Cuál es la obra más famosa de J.K. Rowling?",
    opciones: [
      "Harry Potter y la Piedra Filosofal",
      "El Hobbit",
      "Cumbres Borrascosas",
      "1984"
    ],
    respuesta: "Harry Potter y la Piedra Filosofal"
  },
  {
    pregunta: "¿En qué libro aparece el personaje de Sherlock Holmes?",
    opciones: [
      "El nombre de la rosa",
      "El caso de los tres estudiantes",
      "El retrato de Dorian Gray",
      "Los crímenes de la calle Morgue"
    ],
    respuesta: "El caso de los tres estudiantes"
  },
  {
    pregunta: "¿Cuál es el autor de 'Cien años de soledad'?",
    opciones: [
      "Gabriel García Márquez",
      "Mario Vargas Llosa",
      "Carlos Fuentes",
      "Julio Cortázar"
    ],
    respuesta: "Gabriel García Márquez"
  },
  {
    pregunta: "¿Qué escritor es conocido por sus novelas de misterio y suspenso?",
    opciones: [
      "Agatha Christie",
      "Jane Austen",
      "Ernest Hemingway",
      "Leo Tolstoy"
    ],
    respuesta: "Agatha Christie"
  },
  {
    pregunta: "¿Cuál es el nombre del protagonista en 'Matar a un ruiseñor'?",
    opciones: [
      "Scout Finch",
      "Atticus Finch",
      "Jem Finch",
      "Tom Robinson"
    ],
    respuesta: "Scout Finch"
  },
  {
    pregunta: "¿Qué novela es famosa por su crítica a la sociedad del siglo XIX en Inglaterra?",
    opciones: [
      "Orgullo y prejuicio",
      "Crimen y castigo",
      "Los miserables",
      "La casa de los espíritus"
    ],
    respuesta: "Orgullo y prejuicio"
  },
  {
    pregunta: "¿Qué obra literaria es conocida por su construcción de mundos ficticios y mitología?",
    opciones: [
      "El señor de los anillos",
      "1984",
      "La metamorfosis",
      "El gran Gatsby"
    ],
    respuesta: "El señor de los anillos"
  },
  {
    pregunta: "¿Qué libro es el primero de la serie de 'Canción de hielo y fuego'?",
    opciones: [
      "Juego de Tronos",
      "Choque de Reyes",
      "Tormenta de Espadas",
      "Festín de Cuervos"
    ],
    respuesta: "Juego de Tronos"
  },
  {
    pregunta: "¿Quién escribió '1984'?",
    opciones: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "H.G. Wells"
    ],
    respuesta: "George Orwell"
  },

  // Cine
  {
    pregunta: "¿Quién dirigió la película 'Titanic'?",
    opciones: [
      "Steven Spielberg",
      "James Cameron",
      "Martin Scorsese",
      "Christopher Nolan"
    ],
    respuesta: "James Cameron"
  },
  {
    pregunta: "¿En qué película se puede escuchar la famosa frase 'Que la fuerza te acompañe'?",
    opciones: [
      "Star Wars",
      "Star Trek",
      "Blade Runner",
      "Matrix"
    ],
    respuesta: "Star Wars"
  },
  {
    pregunta: "¿Quién interpretó a Jack Sparrow en 'Piratas del Caribe'?",
    opciones: [
      "Johnny Depp",
      "Orlando Bloom",
      "Tom Cruise",
      "Brad Pitt"
    ],
    respuesta: "Johnny Depp"
  },
  {
    pregunta: "¿Cuál es la película ganadora del Oscar a la Mejor Película en 2022?",
    opciones: [
      "Nomadland",
      "Parasite",
      "Green Book",
      "Everything Everywhere All at Once"
    ],
    respuesta: "Everything Everywhere All at Once"
  },
  {
    pregunta: "¿Qué película animada ganó el Oscar a Mejor Película de Animación en 2016?",
    opciones: [
      "Frozen",
      "Coco",
      "Zootopia",
      "Moana"
    ],
    respuesta: "Zootopia"
  },
  {
    pregunta: "¿Cuál es el nombre del personaje interpretado por Keanu Reeves en la saga 'Matrix'?",
    opciones: [
      "Neo",
      "Morpheus",
      "Trinity",
      "Smith"
    ],
    respuesta: "Neo"
  },
  {
    pregunta: "¿Qué película de Alfred Hitchcock es famosa por su escena en la ducha?",
    opciones: [
      "Vértigo",
      "Psicosis",
      "Con la muerte en los talones",
      "Rebecca"
    ],
    respuesta: "Psicosis"
  },
  {
    pregunta: "¿Quién protagonizó la película 'El Padrino'?",
    opciones: [
      "Al Pacino",
      "Robert De Niro",
      "Marlon Brando",
      "Jack Nicholson"
    ],
    respuesta: "Marlon Brando"
  },
  {
    pregunta: "¿Qué director es conocido por su estilo único y por películas como 'Pulp Fiction' y 'Kill Bill'?",
    opciones: [
      "Quentin Tarantino",
      "Martin Scorsese",
      "Francis Ford Coppola",
      "Woody Allen"
    ],
    respuesta: "Quentin Tarantino"
  },
  {
    pregunta: "¿Cuál es la película de Pixar que trata sobre una familia de superhéroes?",
    opciones: [
      "Monsters, Inc.",
      "Finding Nemo",
      "The Incredibles",
      "Ratatouille"
    ],
    respuesta: "The Incredibles"
  },

  // Música
  {
    pregunta: "¿Quién es conocido como el 'Rey del Pop'?",
    opciones: [
      "Elvis Presley",
      "Michael Jackson",
      "Prince",
      "David Bowie"
    ],
    respuesta: "Michael Jackson"
  }
];

// // Función para obtener una pregunta aleatoria
// function obtenerPreguntaAleatoria() {
//   const indice = Math.floor(Math.random() * preguntas.length);
//   return preguntas[indice];
// }

// // Función para verificar la respuesta
// function verificarRespuesta(respuesta, pregunta) {
//   return pregunta.correcta === respuesta;
// }

// module.exports = { obtenerPreguntaAleatoria, verificarRespuesta };
export default preguntas;