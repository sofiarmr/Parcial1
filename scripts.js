// Función para agregar un nuevo concierto a la experiencia CodPlay
function addConcert() {
    // Crear un nuevo elemento div
    var newConcert = document.createElement("div");
    // Asignar una clase para el estilo
    newConcert.className = "experience-element";
    // Asignar texto con información del concierto
    newConcert.textContent = "🎤 Nuevo Concierto: 'Music of the Spheres World Tour'";
    // Agregar el nuevo elemento al final del contenedor
    document.getElementById("experience-container").appendChild(newConcert);
  }

  // Función para agregar un nuevo fan a la experiencia CodPlay
  function addFan() {
    // Crear un nuevo elemento div
    var newFan = document.createElement("div");
    // Asignar una clase para el estilo
    newFan.className = "experience-element";
    // Asignar texto con información del fan
    newFan.textContent = "👥 Nuevo Fan: 'Anónimo'";
    // Agregar el nuevo elemento al final del contenedor
    document.getElementById("experience-container").appendChild(newFan);
  }

  // Función para agregar un nuevo álbum destacado a la experiencia CodPlay
  function addFeaturedAlbum() {
    // Crear un nuevo elemento div
    var newAlbum = document.createElement("div");
    // Asignar una clase para el estilo
    newAlbum.className = "experience-element";
    // Asignar texto con información del álbum destacado
    newAlbum.textContent = "🎵 Nuevo Álbum Destacado: 'Music of the Spheres'";
    
    // Insertar el nuevo álbum antes del primer elemento en el contenedor
    var container = document.getElementById("experience-container");
    container.insertBefore(newAlbum, container.firstChild);
  }