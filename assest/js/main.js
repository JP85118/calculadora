// contiene la operacion o resultado parcial 
let parcial = "";

// elemento donde se coloca la operacion que se esta realizando 
let opeRealizada = document.getElementById("operacionRealizada");

// elemento donde se coloca el resultado
let textResult = document.getElementById("textResultado");

// ultimo operado seleccionado
let operSeleccionado = "";

// numero ingresado
let numero = "";

// para determinar si lo ultimo seleccionado es un numero o una operacion
let ultimoDigitoPresionado = "";

function operador(num){
  //concateno el numero
  numero = numero + num;
  //concateno la operacion hasta el momento
  parcial = parcial + num;
  //muestro
  opeRealizada.innerHTML = parcial;

  //controlamos la division por 0
  if(numero == "0" && operSeleccionado == "/"){
    limpiar();
    textResult.innerHTML = "Indefinido";
    return;
  }
  //guardo el tipo de tecla presionado por ultima vez 
  if(ultimoDigitoPresionado == "operacion"){
    ultimoDigitoPresionado = "numero"
  }
}

//Detecto cuando se presiona una operacion
function operacion(oper){
  //guardo la operacion que eligio
  operSeleccionado = oper;
  //actualizo el tipo de letra presionado
  ultimoDigitoPresionado = "operacion"
  //voy armando la operacion matematica
  parcial = parcial + oper;
  numero = "";
  opeRealizada.innerHTML = parcial;
}

//realizo el calculo de la formula matematica cuando presionan igual =
function calculo(){
  // con eval evluo la formula matematica qu esta en formato string
  parcial = eval(parcial);
  textResult.innerHTML = parcial;
  //vuelco a convertir un string por si continua la formula 
  parcial = parcial.toString();
  numero = "";
  
  opeRealizada.innerHTML = parcial;
}

// funcion que limipa todo
function limpiar(){
  operSeleccionado = "";
  parcial = "";
  textResult.innerHTML = "";
  numero = "";
  opeRealizada.innerHTML = "0";
}
