// Control de ingresos y egresos para el usuario

// Definiendo los arrays para las categorías de gastos e ingresos

const categoriasGastos = [
    '1. Alimentación', '2. Transporte', '3. Vivienda', '4. Salud', '5. Ocio'
];
const categoriasIngresos = [
    '1. Sueldo', '2. Trabajo extra', '3. Inversiones', '4. Regalos', '5. Otro'
];

const gastos = [];
const ingresos = [];

// Definiendo las variables

let totalGastos = 0;
let totalIngresos = 0;

let seguirRegistrando = true

// Función para registrar los gastos

function registrarGasto () {
    const tipoGasto = prompt('Describe el tipo de gasto, por ejemplo: "Me comí una arepa"');
    const montoGasto = parseFloat(prompt('Ingresa el monto del gasto'));
        if (isNaN(montoGasto) || montoGasto <= 0) {
            alert('Error: recuerda que el monto del gasto debe ser un número mayor que cero');
            return;
        }

    totalGastos += montoGasto;
    alert(`El total de tus gastos es de: ${totalGastos}`);

    let seguirRegistrando;
    do {
        seguirRegistrando = prompt('¿Desea seguir registrando datos? \n1. Sí \n2. No')
        if (seguirRegistrando === '1') {
            registrarGasto();
        } else {
            alert('¡Gracias por participar!')
        }
    } while (seguirRegistrando === '1');

// Almacenar el gasto en el array

    gastos.push ({tipo: tipoGasto, monto: montoGasto});

// Función para mostrar los gastos registrados

function mostrarGastos () {
    if (gastos.length === 0) {
        alert('No hay gastos registrados este mes');
    } else {
        alert('Tu último gasto registrado de este mes es:');
        gastos.forEach(gasto => {
            alert(`${gasto.tipo}: ${gasto.monto}`);
        });
    }
}

    const verGastos = prompt('¿Deseas ver el último gasto de tu mes? \n1. Sí \n2. No');
        if (verGastos === '1') {
            mostrarGastos();
        } else {
            alert('¡Gracias por participar en mi segunda pre-entrega!');
        }
}


// Función para registrar los ingresos

function registrarIngreso () {
    const categoriaIngreso = parseInt(prompt(`Por favor, elige la categoría de tu ingreso: \n${categoriasIngresos.join("\n")}`));
        if (isNaN(categoriaIngreso) || categoriaIngreso < 1 || categoriaIngreso > categoriasIngresos.length) {
            alert('Categoría inválida. Inténtalo de nuevo, por fis');
            return;
        }

    const tipoIngreso = prompt('Describe el tipo de ingreso, por ejemplo: "Me ascendieron en el trabajo"');
    const montoIngreso = parseFloat(prompt('Coloca el monto del ingreso'));
        if (isNaN(montoIngreso) || montoIngreso <= 0) {
            alert('Error: recuerda que el monto del ingreso debe ser un número mayor que cero');
            return;
        }

    totalIngresos += montoIngreso;
    alert(`El total de tus ingresos es de: ${totalIngresos}`);

    let seguirRegistrando;
    do {
        seguirRegistrando = prompt('¿Desea seguir registrando datos? \n1. Sí \n2. No')
        if (seguirRegistrando === '1') {
            registrarIngreso();
        } else {
            alert('¡Gracias por participar!')
        }
    } while (seguirRegistrando === '1');

// Almacenar el ingreso en el array

        ingresos.push ({tipo: tipoIngreso, monto: montoIngreso});

// Función para mostrar los ingresos registrados

    function mostrarIngresos () {
        if (ingresos.length === 0) {
            alert('No hay ingresos registrados este mes');
        } else {
            alert('Tu último ingreso registrado de este mes es:');
            ingresos.forEach(ingreso => {
                alert(`${ingreso.tipo}: ${ingreso.monto}`);
            });
        }
    }

        const verIngresos = prompt('¿Deseas ver los ingresos de tu mes? \n1. Sí \n2. No');
            if (verIngresos === '1') {
                mostrarIngresos();
            } else {
                alert('¡Gracias por participar en mi segunda pre-entrega!');
            }

}

// Función para solicitar la categoría del dinero utilizado al usuario

const tipoRegistro = prompt('Por favor, escribe si quieres agregar un gasto o un ingreso (recuerda no colocar números): \nGasto \nIngreso').toLocaleLowerCase();

    if (tipoRegistro ==='gasto') {
        const categoriaGasto = parseInt(prompt(`Por favor, elige (en número) la categoría de tu gasto: \n${categoriasGastos.join ("\n")}`));

    if (isNaN(categoriaGasto) || categoriaGasto < 1 || categoriaGasto > categoriasGastos.length) {
        alert('Categoría inválida. Inténtalo de nuevo, por fis');
    }

    registrarGasto(); 
} else if (tipoRegistro === 'ingreso') {
    registrarIngreso();
} else {
    alert('Tipo de categoría inválida. Por favor, inténtalo de nuevo :)');
}