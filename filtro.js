// Tenemos un li de productos


//se crea un array con objetos dentro
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


//se llaman los elementos del HTML referenciandolos en JS
const li = document.getElementsByClassName("lista-de-productos")[0]; //Se cambia el selector de TagName por ClassName
const $i = document.getElementsByClassName('input')[0];  //se le agregan los indices 0 para tomarlo como punto de partida


//Se crea una funcion para ir pintando producto por producto en el DOM
function displayProductos(productos){

  //El for recorre todos los indices del arreglo products
for (let i = 0; i < productos.length; i++) {

  //se crea un div 
  var d = document.createElement("div")

  //se le agrega la clase producto
  d.classList.add("producto")

 //se crea una p 
  var ti = document.createElement("p")

  //se agrega la clase titulo al elemento p
  ti.classList.add("titulo")

  //se pinta el texto que sea equivalente al nombre de acuerdo al i que esté recorriendo en ese momento
  ti.textContent = productos[i].nombre


  //se crea un elemento img
  var imagen = document.createElement("img");

  //se pinta la imagen que sea equivalente al src del atributo img de acuerdo al i que esté recorriendo en ese momento
  imagen.setAttribute('src', productos[i].img);


  //se agregan los elementos previamente creados
  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}
}

displayProductos(productos)

//se llama al boton desde el HTML
const botonDeFiltro = document.getElementsByTagName("button")[0];

//Cuando el le des click al botón...
botonDeFiltro.onclick = function() {
  while (li.firstChild) {           //Esta parte no la entiendo muy bien, por lo que entiendo "mientas lees el primer hijo de la lsita"
    
    li.removeChild(li.firstChild); //quitale ese mismo elemento (?) esto no lo entendí muy bien, y que bueno porque no le moví nada
  }

  //Vas a tomar el valor ingresado en el input y lo guardas en la variable texto
  const texto = $i.value;
  console.log(texto); //muestra el valor de texto en la consola
  const productosFiltrados = filtrado(productos, texto ); //crea una variable que activa la función filtrado con los parametros producos (el array) y texto (el input)


  //con esta funcion for vas recorriendo todo el arreglo nuevo que son los productos filtrados
  for (let i = 0; i < productosFiltrados.length; i++) {

    //esta parte es basicamente la misma que la de arriba, creas elementos y luego los agregas con appenChild, solo que no todos, sino los que sean resultantes del filtro
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

//Esta sería como tal la función con la que se pinta, teniendo el indice del producto y el texto (o sea el valor del input)
const filtrado = (productos = [], texto) => {

  //nos retorna el metodo aplicado a productos con una función flecha y variable temporal item, los cuales contiene el tipo o el color + el valor de texto, esto gracias al metodo includes
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  