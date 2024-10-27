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
        }
    }
} iniciarSesion();

function capturarIngresoEmpleado() {
    let ingresoMensualEMpleado = Number(prompt('Ingrese el sueldo del empleado: '))
    var impuesto= 0
    if (ingresoMensualEMpleado < 2000000) {
         impuesto = ingresoMensualEMpleado * 0.1
         console.log(impuesto)
    } else if (ingresoMensualEMpleado >=2000000 && ingresoMensualEMpleado == 5000000){
        impuesto = ingresoMensualEMpleado * 0.15
        console.log(impuesto)
    }else {
        impuesto= ingresoMensualEMpleado * 0.2
        console.log(impuesto)
    }
    
}capturarIngresoEmpleado()
