let age = prompt("Ingresa tu edad");
const MIN_AGE = 6;
const MAX_AGE = 60;
if (age <= MIN_AGE || age >= MAX_AGE) {
    console.log("Puedes vacunar");
} else {
    console.log("No se puede vacunar");
}
