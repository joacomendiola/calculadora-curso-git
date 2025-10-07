class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        return a / b;
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    raizCuadrada(numero) {
    if (numero < 0) {
        console.log("el numero es negativo");
        console.log("Vuelva a intentarlo");
        return "";//si es negativo el numero que no colapse y vuelva al menu 
    }
    return Math.sqrt(numero);
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