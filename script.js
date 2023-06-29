async function juegos() {
  const consulta = await fetch("https://raw.githubusercontent.com/Martina-Flores/Girls-Gaming/main/data.json");
  const data = await consulta.json();
  var donde = document.querySelector("#trabajos");
  
  // Función para filtrar los elementos
  function filtrarElementos() {
    var categoriaSeleccionada = filtro.value;
    var filteredData = [];

    data.forEach(function (t, i) {
      if (categoriaSeleccionada === "Todos" || t.categoria === categoriaSeleccionada) {
        filteredData.push('<article class="col"><div class="card h-100 shadow-sm ' + t.description +
          '"><img width="100%" height="100%" src="' + t.cover + '" alt="' + t.alt + '" class="card-img-top"><div class="card-body text-secondary" id="tarjetas"><h3 class="fs-5"><a href="single.html?nro=' + i + '" class="link-secondary">' + t.title + "</a></h3><p>" + t.company + "</p><small>#" + t.tags + "</small><p><small>#" + t.categoria + "</p></small></div></div></article>");
      }
    });

    donde.innerHTML = filteredData.join("");
  }

  // Obtener referencia al elemento select de filtro
  var filtro = document.getElementById("filtro");

  // Escuchar cambios en el filtro
  filtro.addEventListener("change", filtrarElementos);

  // Cargar la lista inicial
  filtrarElementos();
}

juegos().catch((error) => console.error(error));
