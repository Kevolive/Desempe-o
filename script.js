function iniciarSesion() {
    const usuario = prompt('Ingrese el usuario por favor:')

    if (usuario === 'admin') {

        let intentos = 3;

        for (let i = 0; i < 3; i++) {
            const contraseña = Number(prompt('Ingrese la contraseña: '))

            if (contraseña === 1234) {
                console.log('Bienvenido al sistema ' + usuario)
                function capturarIngresoEmpleado() {
                    let numEmpleados = true;
                    let ingresoMensualEmpleado = Number(prompt('Ingrese el sueldo del empleado: '))
                    while(numEmpleados){
                        
                    }
                    return ingresoMensualEmpleado;
                   

                } capturarIngresoEmpleado();

                function calcularImpuesto(ingresoMensualEmpleado) {
                    let impuesto = 0;
                    if (ingresoMensualEmpleado < 2000) {
                        impuesto = 0.10
                    } else if (ingresoMensualEmpleado > 2000 && ingresoMensualEmpleado < 5000) {
                        impuesto = 0.15
                    } else {
                        impuesto = 0.20
                    }
                    return ingresoMensualEmpleado * impuesto
                } calcularImpuesto();

                function mostrarImpuesto(ingresoMensualEmpleado, impuesto) {
                    console.log(`El impuesto del sueldo mensual de $${ingresoMensualEmpleado}, es: $${impuesto}`)
                } mostrarImpuesto();
                return true;
            } intentos--;
            console.log("Contraseña incorrecta. Te quedan " + intentos + " intentos. Por favor ingresa la contraseña correcta")
            if (intentos == 0) {
                console.log("System blocked")
            }
        }
    } else {
        console.log("Usuario incorrecto")
        return false;
    }
} iniciarSesion();






























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
// function capturarEmpleado() {
//     let ingreso = parseFloat(prompt("Ingrese el ingreso mensual del empleado (o ingrese '0' para salir):"));
//     return ingreso > 0 ? ingreso : null;
// }

// capturarIngresoEmpleado();

// function calcularImpuesto(ingresoMensualEmpleado) {
//     let impuesto = 0;
//     if (ingresoMensualEmpleado < 2000000) {
//         impuesto = ingresoMensualEmpleado * 0.10;
//         return impuesto;
//     } else if (ingresoMensualEmpleado > 2000000 && ingresoMensualEmpleado < 5000000) {
//         impuesto = ingresoMensualEmpleado * 0.15;
//         return impuesto;
//     } else {
//         impuesto = ingresoMensualEmpleado * 0.20;
//         return impuesto;

//     }
// } calcularImpuesto();

// function mostrarImpuesto() {

// } mostrarImpuesto();




