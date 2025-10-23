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
console.log('- calc.obtenerMemoria()');
console.log('- calc.limpiarMemoria()');