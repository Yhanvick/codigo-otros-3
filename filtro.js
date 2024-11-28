// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaDeProductos = document.getElementById("lista-de-productos"); // aqui se toma el elemento por su id (byName es para elementos con un name)
const $i = document.getElementById("filtro"); // Usamos el id 'filtro' en lugar de la clase input como se seleccuinaba anteriormente con el querySelector


for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  listaDeProductos.appendChild(d) //el contenedor correcto es listaDeProductos, ya que li no es un contenedor para poder agregar productos
}

displayProductos(productos) //función para mostrar los productos al cargar la página
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild); //se sigue reemplazando li
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    listaDeProductos.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(texto.toLowerCase()) || 
    item.color.toLowerCase().includes(texto.toLowerCase())
  );
} //toLowerCase es un metodo que convierte el texto en  minúsculas, para asegurar que la comparacion de las cadenas se realicen, mientras que el método includes verifica si lo ingresado se encuentra en las propiedades de tipo y color  