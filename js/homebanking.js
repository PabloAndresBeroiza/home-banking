//Declaración de variables
//https://github.com/PabloAndresBeroiza/home-banking
var nombreUsuario = 'Pablito';
var saldoCuenta = 380;

var limiteExtraccion = 500;
var claveUsuario = 4567;
//variables de la cuenta. Se que se podia hacer con objetos, pero no era el objetivo.
var nombreCuentaAmiga = ["Casu", "Diego", "Karen", "Kevin"];
var numeroCuentaAmiga = ["1234567", "7654321", "678", "10101"];


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
//cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("ingrese el nuevo Limite");

    if (esEntradaValida(nuevoLimite)) {
        limiteExtraccion = parseInt(nuevoLimite);
        actualizarLimiteEnPantalla();
        alert("Su nuevo limite de extraccion es: " + limiteExtraccion);
    }
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
    }
    return true;

}
//comprueba que la entrada no sea letra y que no este vacia
function esEntradaValida(datoUsuario) {
    if (datoUsuario < 0) { //Nueva validacion
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
    }
    return true;

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
//Devuelve falso si el monto es mayor que el saldo
function hayDineroEnLaCuenta(monto) {
    if (monto > saldoCuenta) {
        alert("No hay dinero Suficiente");
        return false;
    }
    return true;
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
            default:
                alert("Elija una opcion valida...");
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
    var textoMenu = listaDeCuentasAmigas();
    var datoUsuario = "";
    var respuesta = prompt("Transferecia", "ingrese el monto a transferir");
    var montoTransferencia = parseInt(respuesta);


    if (esEntradaValida(respuesta) && hayDineroEnLaCuenta(montoTransferencia)) {
        datoUsuario = prompt(textoMenu, "Ingrese numero de cuenta");

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
    var respuesta = prompt("Clave", "Ingrese su clave para operar");


    // Verifica que la clave sea correcta y sea del mismo tipo
    if (esEntradaValida(respuesta) && parseInt(respuesta) === claveUsuario) {
        // console.log("clave: "+typeof(clave)+" claveUsuario: "+typeof(claveUsuario));
        alert("Bienvenido" + nombreUsuario);
        cargarNombreEnPantalla();

    } else {
        saldoCuenta = 0;
        nombreUsuario = "";
        actualizarSaldoEnPantalla();
        alert("Se va a retener su dinero por hasta que no ingrese su clave");
        anularMenu();
    }


}
//Funcion Anula el menu para operar la cuenta
function anularMenu() {
    var listaMenu = document.getElementsByClassName("links");
    var i;
    for (i = 0; i < listaMenu.length; i++) {
        listaMenu[i].disabled = true;
    }

}

//Funcion que devuelve falso si no es una cuenta amiga. De lo contrario devuelve verdadero
function esCuentaAmiga(nroCta, nroCtaAmi) {
    var esta = nroCtaAmi.includes(nroCta);

    if (esta) {
        return true;
    } else {
        alert("No es una cuenta amiga");
        return false;
    }
}

//suma al saldoCuentta el monto que se le pasa por parametro
function sumarDinero(monto) {
    saldoCuenta += monto;
}

//resta al saldoCuenta el monto que se le pasa por parametro
function restarDinero(monto) {
    saldoCuenta -= monto;
}

function agregarCuentaAmiga() {
    var nuevoNombreCuenta = prompt("Ingrese el nuevo nombre: ");
    var nuevoNumeroCuenta = parseInt(prompt("Ingrese el Numero de la cuenta"));
    if (esEntradaValida(nuevoNumeroCuenta)) {
        agregarCuenta(nuevoNombreCuenta, nuevoNumeroCuenta);
    }

}

function agregarCuenta(nombre, numero) {
    nombreCuentaAmiga.push(nombre);
    numeroCuentaAmiga.push(numero.toString());
}

// Borra una cuenta amiga
function borrarCuentaAmiga() {
    var textoMenu = listaDeCuentasAmigas();
    var indiceABorrar = parseInt(prompt(textoMenu, "ingrese 0, 1, 2..."));

    // si es solo numero y acepta borrar ejecuta la funcion borrarCuenta()
    if (esEntradaValida(indiceABorrar) && confirm("Esta Seguro....")) {
        borrarCuenta(indiceABorrar);
    }
}

// texto para el menu
function listaDeCuentasAmigas() {
    var textoMenu = "";
    //texto para el menu
    for (var index = 0; index < nombreCuentaAmiga.length; index++) {
        textoMenu += index + " - " + nombreCuentaAmiga[index] + ":" + numeroCuentaAmiga[index] + "\n";
    }
    return textoMenu;
}


// Borra la cuenta que se le pasa por indice.
function borrarCuenta(indice) {
    nombreCuentaAmiga.slice(indice, 1);
    numeroCuentaAmiga.splice(indice, 1);
    console.log("borrado");
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