

const calculadora = require ('../calculadora');
console.log(calculadora.suma);

//Prueba unitaria para funcion suma
test ('Debe sumar numero a + numero b', ()=>{
    expect(calculadora.suma (10,10)).toBe (20);
})

//Prueba para función resta
test ('Debe restar numero a - numero b', ()=>{
    expect(calculadora.resta (100,50)).toBe (50);
})

//Prueba para función multiplicacion
test ('Debe multiplicar numero a * numero b', ()=>{
    expect(calculadora.multiplicacion (10,5)).toBe (50);
})

//Prueba para función división
test ('Debe dividir numero a / numero b', ()=>{
    expect(calculadora.division (100,10)).toBe (10);
})

//Poner npm run test en la terminal para correr la prueba de las funciones
