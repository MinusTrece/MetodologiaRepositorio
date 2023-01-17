let username = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu contraseña");
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "se3cr3t";
if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    console.log("Acceso correcto");
} else {
    console.log("Acceso incorrecto, intente de nuevo");
}
