//Declaración de variables
//https://github.com/PabloAndresBeroiza/home-banking
var nombreUsuario = 'Pablito';
var saldoCuenta = 380;
var limiteExtraccion = 500;
var claveUsuario = 4567;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
// iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("ingrese el nuevo Limite");
    
    if(! esEntradaValida(nuevoLimite)){return;} 
    limiteExtraccion = parseInt(nuevoLimite);   
    
    actualizarLimiteEnPantalla();
    alert("Su nuevo limite de extraccion es: " + limiteExtraccion);
}
//Funcion que extrae dinero
function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var respuesta = prompt('ingrese la cantidad de dinero');
    var extraccion = parseInt(respuesta);

   console.log(extraccion);
    // Solo billetes de 100
    if (esEntradaValida(respuesta) && esMultiplo100(extraccion) && hayDineroEnLaCuenta(extraccion) && hayLimiteExtraccion(extraccion)) {               
        
        restarDinero(extraccion);
        alert("has sacado: $" + extraccion + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
    }

}
//devuelves falso si supera el limite de extraccion
function hayLimiteExtraccion(datoUsuario) {
    if (datoUsuario > limiteExtraccion) {
        alert('Para para...! No supere el limite de extraccion...');
        return false;
    } else {
        return true;
    }
}
//comprueba que la entrada no sea letra y que no este vacia
function esEntradaValida(datoUsuario) {
    if (datoUsuario < 0){
        alert("No ingrese numeros negativos");
        return false;
    }
    if (datoUsuario === null) {
        return false;
    }
    if (datoUsuario == "") {
        alert("No deje vacio el campo");
        return false;
    }
    if (isNaN(datoUsuario)) {
        alert("No ingrese letras");
        return false;
    }
    return true;
}
//retorna falso si no es multiplo de 100
function esMultiplo100(ext) {
    if (((ext % 100) != 0) || (ext < 100)) {
        alert("Solo puede dar billetes de 100");
        return false;
    } else {
        return true;
    }
    // return !(ext % 100) == 0; //retorna true y con el negado false
}
//pide dinero para depositar
function depositarDinero() {
    var deposito = prompt('ingrese la cantidad de dinero');
    var saldoAnterior = saldoCuenta;

    if (esEntradaValida(deposito)) {       
        sumarDinero(parseInt(deposito));
        actualizarSaldoEnPantalla();
        alert("has depositado: $" + deposito + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
    }
}
//Devuelve falso si el monto es menor que el saldo
function hayDineroEnLaCuenta(monto) {    
    // prueba con operador ternario
    return (monto < saldoCuenta) ?  true : alert("No hay dinero Suficiente"), false; 
}

function pagarServicio() {
    var servicio = ["Agua", "Luz", "Telefono", "Internet"];
    var costo = [350, 210, 425, 570];
    var saldoAnterior = saldoCuenta;
    var textoMenu = "servicios a pagar: \n\n1 - Agua: $" + costo[0] + "\n2 - Luz: $" + costo[1] + "\n3 - Telefono: $" + costo[2] + "\n4 - Internet: $" + costo[3];
    var textoSinDinero = "No hay suficiente dinero...";
    var respuesta = prompt(textoMenu, "Elija un numero");
    var opcion = (parseInt(respuesta) - 1);//se resta 1 para obtener bien el indice

    if (esEntradaValida(respuesta) && hayDineroEnLaCuenta(costo[opcion])) {
        var textoConfirmacion = "Has pagado:" + servicio[opcion] + " $" + costo[opcion] + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta;
        
        restarDinero(costo[opcion]);

        switch (opcion) {
            default: alert("Elija una opcion valida...");
                break;
            case 0:                
                alert(textoConfirmacion);
                actualizarSaldoEnPantalla();
                break;
            case 1:
                alert(textoConfirmacion);
                actualizarSaldoEnPantalla();
                break;
            case 2:                
                alert(textoConfirmacion);
                actualizarSaldoEnPantalla();
                break;
            case 3:                
                alert(textoConfirmacion);                
                actualizarSaldoEnPantalla();
                break;
        }
    }
}

function transferirDinero() {
    var nombreCuentaAmiga = ["Casu", "Diego"];
    var numeroCuentaAmiga = ["1234567", "7654321"];
    var textoCuentaAmiga = "";
    var datoUsuario = "";

    //texto para el menu
    for (var index = 0; index < nombreCuentaAmiga.length; index++) {
        textoCuentaAmiga += index + " - " + nombreCuentaAmiga[index] + ":" + numeroCuentaAmiga[index] + "\n";
    }
    // console.log(textoCuentaAmiga);
    var montoTransferencia = prompt("Transferecia", "ingrese el monto a transferir");
    
    if (esEntradaValida(montoTransferencia) && hayDineroEnLaCuenta(montoTransferencia)) {
        datoUsuario = prompt(textoCuentaAmiga, "Ingrese numero de cuenta");    

        if (esCuentaAmiga(datoUsuario, numeroCuentaAmiga)) {        
            // Identifica el indice para mostrar el NombreCuentaAmiga En el alert()
            var i = parseInt(numeroCuentaAmiga.indexOf(datoUsuario));        
            
            restarDinero(montoTransferencia);
            actualizarSaldoEnPantalla();
            alert("has transferifo: $" + montoTransferencia + "\n Cuenta destino: " + nombreCuentaAmiga[i] + "\n Numero Cuenta: " + numeroCuentaAmiga[i]);
        }
    }
}
//Si no ingresa la contrasena correcta retiene el dinero
function iniciarSesion() {
    var clave = prompt("Clave", "Ingrese su clave para operar");

    if (esEntradaValida(clave) || clave == claveUsuario) {
        alert("Bienvenido" + nombreUsuario);
    } else {
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        alert("Se va a retener su dinero por hasta que no ingrese su clave");
        iniciarSesion();        
    }
}

//Funcion que devuelve falso si no es una cuenta amiga. De lo contrario devuelve verdadero
function esCuentaAmiga(nroCta, nroCtaAmi) {    
    var esta = nroCtaAmi.includes(nroCta);    

    return (esta) ? true : alert("No es una cuenta amiga"),  false;    
}

//suma al saldoCuentta el monto que se le pasa por parametro
function sumarDinero(monto) {
    saldoCuenta += monto;
}

//resta al saldoCuenta el monto que se le pasa por parametro
function restarDinero(monto) {    
    saldoCuenta -= monto;
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