/*

Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/


/*Escenario ficticio
function promedio (calificacion1, calificacion2, calificacion3){
    let promedio = calificacion1 + calificacion2 + calificacion3 / 3; //fórmula básica para calcular promedio

    //ciclo para calcular aprobado o reprobado
    if (promedio >=6){
        console.log("Felicidades, aprobaste");
    } else{
        console.log("Necesitas estudiar más, estás reprobado/a");
    }
}

promedio(6,7,8); //promedio 7

//qué pasa si no ingreso las 3 calificaciones
//qué pasa si una de estas calificaciones es un valor no numérico
//qué pasa si una de mis calificaciones es un valor negativo
*/


//Creamos una calculadora básica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicación y división) para trabajar con pruebas unitarias.

//función suma
function suma (num1, num2){
    return num1 + num2;
}

//función resta
function resta (num1, num2){
    return num1 - num2;
}

//función multiplicación
function multiplicacion (num1, num2){
    return num1 * num2;
}

//función división
function division (num1, num2){
    return num1 / num2;
}


//esportar las funciones
module.exports = {suma, resta, multiplicacion, division};


/*
Para manejar nuestras pruebas unitarias utilizamos JEST
 - JUnit (JAVA)
 - NUnit (.NET)
 - pytest (Python)
 - JEST (JS)

 JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:

*/

