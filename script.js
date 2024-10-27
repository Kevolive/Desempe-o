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
} iniciarSesion();

function capturarIngresoEmpleado() {
    let numeroEmpleados = true

    while(numeroEmpleados){
        let ingresoMensualEmpleado = Number(prompt('Ingrese el sueldo del empleado: '))
        if(ingresoMensualEmpleado < 2000000){
        return ingresoMensualEmpleado;
    } else if(ingresoMensualEmpleado >=2000000 && ingresoMensualEmpleado <= 5000000){
        return ingresoMensualEmpleado;
    } else{
        return ingresoMensualEmpleado;
    }
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
    

} capturarIngresoEmpleado();

function calcularImpuesto(ingresoMensualEmpleado) {
    let impuesto = 0;
    if (ingresoMensualEmpleado < 2000000) {
        impuesto = ingresoMensualEmpleado  * 0.10;
        return impuesto;
    } else if (ingresoMensualEmpleado > 2000000 && ingresoMensualEmpleado < 5000000) {
        impuesto = ingresoMensualEmpleado * 0.15;
        return impuesto;
    } else {
        impuesto= ingresoMensualEmpleado * 0.20;
        return impuesto;

    } 
} calcularImpuesto();

function mostrarImpuesto(){
   
}mostrarImpuesto();
   


        
        