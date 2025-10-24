class Calculadora {
    constructor() {
        // Atributo de memoria
        this.ultimaOperacion = null;
    }

    // Métodos de memoria
    guardarMemoria(valor) {
        this.ultimaOperacion = valor;
    }

    obtenerMemoria() {
        return this.ultimaOperacion;
    }

    limpiarMemoria() {
        this.ultimaOperacion = null;
    }

    // Operaciones matemáticas 
    sumar(a, b) {
        const resultado = a + b;
        this.guardarMemoria(resultado);
        return resultado;
    }

    restar(a, b) {
        const resultado = a - b;
        this.guardarMemoria(resultado);
        return resultado;
    }

    multiplicar(a, b) {
        const resultado = a * b;
        this.guardarMemoria(resultado);
        return resultado;
    }

    dividir(a, b) {
        if (b === 0) {
            const resultado = Infinity; 
            this.guardarMemoria(resultado);
            return resultado;
        }
        const resultado = a / b;
        this.guardarMemoria(resultado);
        return resultado;
    }
  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b == 0)
	    throw new Error('No se puede dividir por cero');
    return a / b;
  }

    potencia(base, exponente) {
        const resultado = Math.pow(base, exponente);
        this.guardarMemoria(resultado);
        return resultado;
    }

    raizCuadrada(numero) {
        if (numero < 0) {
            console.log("el numero es negativo");
            console.log("Vuelva a intentarlo");
            const resultado = NaN;
            this.guardarMemoria(resultado);
            return resultado;
        }
        const resultado = Math.sqrt(numero);
        this.guardarMemoria(resultado);
        return resultado;
    }

    factorial(n) {
        if (n < 0) {
            const mensaje = "Error: no se puede calcular el factorial de un número negativo";
            this.guardarMemoria(mensaje);
            return mensaje;
        }
        if (n === 0 || n === 1) {
            this.guardarMemoria(1);
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        this.guardarMemoria(resultado);
        return resultado;
    }

    promedio(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0) {
            throw new Error("Debe ingresar al menos un número");
        }
        const valores = numeros.map(Number).filter(n => !Number.isNaN(n));
        if (valores.length === 0) throw new Error("No contiene números válidos");
        const total = valores.reduce((acc, n) => acc + n, 0);
        const resultado = total / valores.length;
        this.guardarMemoria(resultado);
        return resultado;
    }
    maximo(numeros) {
            //Verifica que sea un arreglo y que no este vacio
            if (!Array.isArray(numeros) || numeros.length === 0) {
                throw new Error("Debe ingresar al menos un numero");
            }
            //Convierte los elementos a numero y descarta los no validos 
            const valores = numeros.map(Number).filter(n => !Number.isNaN(n));
            //Si todos los elementos del array son invalidos
            if (valores.length === 0) throw new Error("No contiene numeros validos");
            //Obtencion del maximo
            return Math.max(...valores);
        }
        // Funcion de Resto
    resto(a, b) {
        if (b === 0) {
            const mensaje = "Error: división por cero no permitida";
            this.guardarMemoria(mensaje);
            return mensaje;
        }
        const resultado = a % b;
        this.guardarMemoria(resultado);
        return resultado;
    }

    porcentaje(a, b) {
        if (b === 0) {
            const mensaje = "Error: división por cero no permitida";
            this.guardarMemoria(mensaje);
            return mensaje;
        }
        const resultado = (a / b) * 100;
        this.guardarMemoria(resultado);
        return resultado;
    }
}

// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
console.log('- calc.factorial(n)');
console.log('- calc.promedio([a, b, c, ...])');
console.log('- calc.resto(a, b)');
console.log('- calc.porcentaje(a, b)');
console.log('- calc.obtenerMemoria()');
console.log('- calc.limpiarMemoria()');
