import * as readlineSync from "readline-sync";
let Usuario: string = ""
let Contraseña: string = ""
Usuario = readlineSync.question("ingrese su nombre de usuario: ")
Contraseña = readlineSync.question("ingrese su contraseña: ")
const usuarioCorrecto: string= "Anna"
const contraseñaCorrecta: string = "Marche"
if (Usuario == usuarioCorrecto && Contraseña == contraseñaCorrecta){
    console.log("Usted ha creado su usuario con exito")
    } else {
        console.log ("Su nombre de usuario o su contraseña son incorrectos");
        };

