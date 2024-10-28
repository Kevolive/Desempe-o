function iniciarSesion() {
    let intentosUsuario = 3;
    for (let i = 0; i < 3; i++) {
        const usuario = prompt("Ingrese por favor el usuario:")

        if (usuario === "admin") {
            console.log("Usuario encontrado...")

            let intentos = 3;

            for (let i = 0; i < 3; i++) {
                const contraseña = Number(prompt("Por favor ingresa la contraseña:"))

                if (contraseña === 1234) {

                    console.log("Ingreso exitoso. Bienvenido al sistema " + usuario)


                    function capturarIngresoEmpleado() {

                        let ingresoEmpleado = Number(prompt("Por favor ingresa el sueldo mensual del empleado. Escribe 0  o Salir para abandonar el sistema. "))

                        return ingresoEmpleado > 0 ? ingresoEmpleado : null
                    }

                    function calcularImpuesto(ingresoEmpleado) {

                        let tasaDeImpuesto = 0;

                        if (ingresoEmpleado < 2000000) {

                            tasaDeImpuesto = 0.10;

                        } else if (ingresoEmpleado >= 2000000 && ingresoEmpleado <= 5000000) {

                            tasaDeImpuesto = 0.15;

                        } else {
                            tasaDeImpuesto = 0.20;

                        } return ingresoEmpleado * tasaDeImpuesto;
                    }

                    function mostrarImpuesto(ingresoEmpleado, impuesto) {

                        console.log(`Para el ingreso de $${ingresoEmpleado}, el impuesto sobre la renta es de $${impuesto}.`)
                    }

                    let numEmpleados = true;

                    while (numEmpleados) {

                        let ingresoEmpleado = capturarIngresoEmpleado();

                        if (ingresoEmpleado === null) {

                            numEmpleados = false;

                        } else {

                            let impuesto = calcularImpuesto(ingresoEmpleado)

                            mostrarImpuesto(ingresoEmpleado, impuesto)

                        }
                    }

                    return true;

                } intentos--;

                console.log("La contraseña ingresada es incorrecta. Tienes " + intentos + " intentos más para poder ingresar.")

                if (intentos == 0) {

                    console.log("Se te acabaron los intentos. System blocked!!!")

                    return false;
                }
            }

        } else {
            console.log("Usuario incorrecto.  Vuelve a intentarlo.")

            intentosUsuario--;

            if (intentosUsuario == 0) {

                console.log("System blocked!!!")

                return false;
            }
        }
    }

} iniciarSesion();













































