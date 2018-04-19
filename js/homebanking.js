//Declaración de variables
var nombreUsuario = 'Pablito';
var saldoCuenta = 1000;
var limiteExtraccion = 50;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
var nuevoLimite = parseInt(prompt("ingrese el nuevo Limite"));
limiteExtraccion = nuevoLimite;
actualizarLimiteEnPantalla();
alert("Su nuevo limite de extraccion es: " + limiteExtraccion);
}

function extraerDinero() {
var extraccion= parseInt(prompt('ingrese la cantidad de dinero'));
var saldoAnterior = saldoCuenta;

if(extraccion % 100){
    alert("Solo puede dar billetes de 100");
}
if(extraccion > saldoCuenta){
    alert('No puede sacar mas de lo que tienes');
}
else if (extraccion>limiteExtraccion)  {
    alert('Elija un monto menor');
} 
else{
    saldoCuenta -= extraccion;
    alert("has sacado: $"+ extraccion +"\n Saldo anterior: "+ saldoAnterior + "\n Saldo actual: " + saldoCuenta);
    actualizarSaldoEnPantalla();
}

}

function depositarDinero() {
var deposito = parseInt(prompt('ingrese la cantidad de dinero'));
var saldoAnterior = saldoCuenta;
saldoCuenta += deposito;
alert("has depositado: $"+ deposito +"\n Saldo anterior: "+ saldoAnterior + "\n Saldo actual: " + saldoCuenta);
actualizarSaldoEnPantalla();
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

