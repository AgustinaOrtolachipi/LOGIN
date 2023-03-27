"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Usuario = "";
var Contraseña = "";
Usuario = readlineSync.question("ingrese su nombre de usuario: ");
Contraseña = readlineSync.question("ingrese su contraseña: ");
var usuarioCorrecto = Usuario == "Anna";
var contraseñaCorrecta = Contraseña == "Marche";
if (usuarioCorrecto && contraseñaCorrecta) {
    console.log("Usted ha creado su usuario con exito");
}
else {
    console.log("Su nombre de usuario o su contraseña son incorrectos");
}
;
