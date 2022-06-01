
let stock= 10

for (let i = 0; i <= 15; i++) {

    if (i==10) {
        break
    }
    console.log(i);
} 



let ingreso=prompt("Ingresa un productos, ESC para finalizar")

while (ingreso != "ESC") {
    console.log("El producto ingresado es" + " " + ingreso);

    ingreso=prompt ("Ingresa un producto. para salir ingres ESC");

}