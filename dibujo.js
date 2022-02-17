var boton = document.getElementById("textoBoton");
var texto = document.getElementById("textoLineas");
boton.addEventListener("click", dibujoPorClick);

var di = document.getElementById("dibujito");
var ancho = di.width;

var lienzo = di.getContext("2d");
//console.log(lienzo);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath(); //funciones solo funcionan si tienen parentesis
  lienzo.strokeStyle=color; //atributo
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var numeroIngresado = parseInt(texto.value);
  console.log("El numero es:" + numeroIngresado);
  var lineas=numeroIngresado;
  var L=0;
  var yi,xf;
  var colorcito = "#ff0047";
  var espacio= ancho/lineas;

  for (L<0;L<lineas;L++)
  {
    yi=espacio*L;
    xf=espacio*(L+1);
    dibujarLinea(colorcito,0,yi,xf,300)
    //console.log("linea"+L);
    L=L+1;

  }
  dibujarLinea(colorcito,299,1,1,1)
  dibujarLinea(colorcito,1,1,1,299)
  dibujarLinea(colorcito,299,299,299,1)
  dibujarLinea(colorcito,1,299,299,299) }
