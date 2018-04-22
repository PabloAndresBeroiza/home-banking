//Declaración de variables
var nombreUsuario = 'Pablito';
var saldoCuenta = 10000;
var limiteExtraccion = 500;

var nombreCuentaAmiga = ["Casu", "Diego"];
var numeroCuentaAmiga = ["1234567", "7654321"];

var claveUsuario = 4567;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
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
    var extraccion = parseInt(prompt('ingrese la cantidad de dinero'));
    var saldoAnterior = saldoCuenta;
    // si no es multiplo de 1000
    if (!(extraccion % 100)) {
        alert("Solo puede dar billetes de 100");
    }

    // Si no hay dinero
    if (!hayDineroEnLaCuenta(extraccion)) {
        alert('No puede sacar mas de lo que tienes');
    } else if (extraccion > limiteExtraccion) {
        alert('Elija un monto menor');
    } else {

        restarDinero(extraccion);
        alert("has sacado: $" + extraccion + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
    }

}

function depositarDinero() {
    var deposito = parseInt(prompt('ingrese la cantidad de dinero'));
    saldoAnterior = saldoCuenta;
    sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert("has depositado: $" + deposito + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
}

function hayDineroEnLaCuenta(monto) {
    if (monto <= saldoCuenta) {
        return true;
    }

}

function pagarServicio() {
    var servicio = ["Agua", "Luz", "Telefono", "Internet"];
    var costo = [350, 210, 425, 570];

    var saldoAnterior = saldoCuenta;

    var textoMenu = "servicios a pagar: \n\n1 - Agua: $" + costo[0] + "\n2 - Luz: $" + costo[1] + "\n3 - Telefono: $" + costo[2] + "\n4 - Internet: $" + costo[3];
    var textoSinDinero = "No tenes suficiente dinero...";

    var opcion = prompt(textoMenu, "Elija un numero") - 1;

    if (hayDineroEnLaCuenta(costo[opcion])) {
        var textoConfirmacion = "Has pagado:" + servicio[opcion] + " $" + costo[opcion] + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta;

        switch (opcion) {
            default: text = "Elija una opcion valida...";
                alert(text);
                break;
            case 0:
                //Preguntar por que anda con el texto y sin no???    
                restarDinero(costo[opcion]);
                alert("Has pagado:" + servicio[opcion] + " $" + costo[opcion] + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            case 1:
                restarDinero(costo[opcion]);
                alert(textoConfirmacion);
                actualizarSaldoEnPantalla();
                break;
            case 2:
                restarDinero(costo[opcion]);
                alert(textoConfirmacion);
                actualizarSaldoEnPantalla();
                break;
            case 3:
                restarDinero(costo[opcion]);
                alert(textoConfirmacion);
                console.log(saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
        }
    } else {
        alert(textoSinDinero);
    }

}

function transferirDinero() {

    var textoCuentaAmiga = "";
    var datoUsuario = "";

    for (var index = 0; index < nombreCuentaAmiga.length; index++) {
        textoCuentaAmiga += index + " - " + nombreCuentaAmiga[index] + ":" + numeroCuentaAmiga[index] + "\n";

    }
    // console.log(textoCuentaAmiga);

    var montoTransferencia = prompt("Transferecia", "ingrese el monto a transferir");


    if (hayDineroEnLaCuenta(montoTransferencia)) {
        datoUsuario = prompt(textoCuentaAmiga, "Ingrese numero de cuenta");

        if (esCuentaAmiga(datoUsuario, numeroCuentaAmiga)) {
            restarDinero(montoTransferencia);
            // Identifica el indice
            var i = parseInt(numeroCuentaAmiga.indexOf(datoUsuario));

            actualizarSaldoEnPantalla();
            alert("has transferifo: $" + montoTransferencia + "\n Cuenta destino: " + nombreCuentaAmiga[i] + "\n Numero Cuenta: " + numeroCuentaAmiga[i]);

            
        } else {
            alert("No es cuenta amiga");
        }


    } else {
        alert("No hay dinero suficiente...");
    }

}

function iniciarSesion() {

var clave = prompt("Clave", "Ingrese su clave para operar");
    if (clave == null || clave == "" || clave != claveUsuario) {
        iniciarSesion();
    } 
}

function esCuentaAmiga(nroCta, nroCtaAmi) {
    
    return nroCtaAmi.includes(nroCta);
}
//suma dos parametros

function sumarDinero(monto) {

    saldoCuenta += monto;
}

function restarDinero(monto) {
    saldoAnterior = saldoCuenta;
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