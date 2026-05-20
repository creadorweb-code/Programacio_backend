
// a. Igualdad exacta con toBe

function suma(a, b) {
    return a + b;
}

test('10 + 10 debe ser igual a 20', () => {
    expect(suma(10, 10)).toBe(20);
});


// b. Comparación de objetos con toEqual


function crearUsuario() {
    return {
        nombre: 'Hugo',
        edad: 38
    };
}

test('Los objetos deben ser iguales', () => {
    expect(crearUsuario()).toEqual({
        nombre: 'Hugo',
        edad: 38
    });
});



// c. Verificación de valores null y definidos


function obtenerValor(valor) {
    return valor;
}

test('Debe ser null', () => {
    expect(obtenerValor(null)).toBeNull();
});

test('Debe estar definido', () => {
    expect(obtenerValor('Hola')).toBeDefined();
});

test('No debe estar indefinido', () => {
    expect(obtenerValor('Texto')).not.toBeUndefined();
});

// d. Comparaciones numéricas


function numeroMayor(a, b) {
    return a;
}

test('20 es mayor que 10', () => {
    expect(numeroMayor(20, 10)).toBeGreaterThan(10);
});

test('5 es menor que 10', () => {
    expect(5).toBeLessThan(10);
});

test('10 es mayor o igual a 10', () => {
    expect(10).toBeGreaterThanOrEqual(10);
});


// e. Coincidencia de cadenas con RegExp


function obtenerMensaje() {
    return 'Bienvenido al sistema';
}

test('La cadena contiene "sistema"', () => {
    expect(obtenerMensaje()).toMatch(/sistema/);
});


// f. Verificación de contenido en arrays


function obtenerFrutas() {
    return ['manzana', 'pera', 'uva'];
}

test('El array contiene pera', () => {
    expect(obtenerFrutas()).toContain('pera');
});



// g. Negación con not

test('5 no es igual a 10', () => {
    expect(5).not.toBe(10);
});



// h. Pruebas asíncronas con Promesas


function promesaExitosa() {
    return Promise.resolve('Operación exitosa');
}

function promesaFallida() {
    return Promise.reject('Error en la operación');
}

test('La promesa debe resolverse correctamente', async () => {
    await expect(promesaExitosa()).resolves.toBe('Operación exitosa');
});

test('La promesa debe fallar correctamente', async () => {
    await expect(promesaFallida()).rejects.toBe('Error en la operación');
});