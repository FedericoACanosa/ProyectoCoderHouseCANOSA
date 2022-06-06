//Desafío complementario I

/* let stock= 10

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

} */

//Desafío Entregable I

let catalogo = prompt("¡Elegí tu producto! \n-Elegi alguna de las siguientes opciones \n- Remera blanca \n- Jean oscuro \n- botas de cuero \n- Gorro invierno \n- salir / siguiente opcion");

while(catalogo != "salir"){
    switch(catalogo){
        case "Remera blanca":
            alert ("El precio de Remera blanca es: $1200");
            break;
        case "Jean oscuro":
            alert ("El precio de Jean oscuro es: $3200");
            break;
        case "Botas de cuero":
            alert ("El precio de botas de cuero es: 6500");
            break;
            case "Gorro invierno":
            alert ("El precio de gorro invierno es: 1000");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    catalogo = prompt("Elegi alguna de las siguientes opciones \n- Remera blanca \n- Jean oscuro \n- Botas de cuero \n- Gorro invierno \n- salir / siguiente opcion");
}

let costoEnvio = prompt("¡Calcula tu envío! \n-Elegi alguna de las siguientes opciones \n- Correo Argentino \n- Andreani \n- Retiro por local \n- salir / siguiente opcion");

while(costoEnvio != "salir"){
    switch(costoEnvio){
        case "Correo Argentino":
            alert ("El adicional por envío de Correo argentino es: 800");
            break;
            case "Andreani":
            alert ("El adicional por envío de Andreani es: 500");
            break;
        case "Retiro por local":
            alert ("El adicional por Retiro por local es: 0");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    costoEnvio = prompt("Elegi alguna de las siguientes opciones \n- Correo Argentino \n- Andreani \n- Retiro por local \n- salir / siguiente opcion");
}


let datoCatalogo = parseInt (prompt("cargar el costo de producto elegido en catálogo"))
let datoEnvio = parseInt (prompt("cargar el costo x envío"))


function sumarProductos(dato1,dato2){
    return dato1 + dato2;
}

function mostrar(mensaje){
    alert("El total a pagar es de: "+ mensaje);
}

let resultado = sumarProductos(datoCatalogo,datoEnvio); 

mostrar(resultado)

