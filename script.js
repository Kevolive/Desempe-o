function iniciarSesion() {
    const usuario = prompt('Ingrese el usuario por favor:')

    if (usuario === 'admin') {

        let intentos = 3;

        for (let i = 0; i < 3; i++) {
            const contraseña = Number(prompt('Ingrese la contraseña: '))

            if (contraseña === 1234) {
                console.log('Bienvenido al sistema ' + usuario)
                break;
            } else {
                console.log('Contarseña incorrecta. Inténtelo de nuevo')
                intentos--;
            }
        } return true;
    }else {
        console.log('Usuario incorrecto')
        return false;
    }
} 

function capturarIngresoEmpleado() {
    let numeroEmpleados = true

    while(numeroEmpleados){
        let ingresoMensualEMpleado = Number(prompt('Ingrese el sueldo del empleado: '))
        return ingresoMensualEMpleado;
    }
    // var impuesto= 0
    // if (ingresoMensualEMpleado < 2000000) {
    //      impuesto = ingresoMensualEMpleado * 0.1
    //      console.log(impuesto)
    // } else if (ingresoMensualEMpleado >=2000000 && ingresoMensualEMpleado == 5000000){
    //     impuesto = ingresoMensualEMpleado * 0.15
    //     console.log(impuesto)
    // }else {
    //     impuesto= ingresoMensualEMpleado * 0.2
    //     console.log(impuesto)
    // }
    

} 

function calcularImpuesto(ingresoMensualEMpleado) {
    
    if (capturarIngresoEmpleado() < 2000000) {
        return ingresoMensualEMpleado  * 0.10;
    } else if (capturarIngresoEmpleado() > 2000000 && capturarIngresoEmpleado() < 5000000) {
        return ingresoMensualEMpleado * 0.15;
    } else {
        return ingresoMensualEMpleado * 0.20;

    } 
}

function mostrarImpuesto(){
    console.log(`El impuesto sobre la renta a pagar es: ${impuesto}`)
}

if(iniciarSesion()){
    let continuar = true;

    while(continuar){
        let ingreso = capturarIngresoEmpleado();
        let impuesto = calcularImpuesto(ingresoMensualEMpleado);
        mostrarImpuesto(impuesto);
    }
    console.log("Calculo realizado")
} else{
    console.log("Finalizado")
}
