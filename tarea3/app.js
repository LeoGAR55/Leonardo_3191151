num1 = parseInt(prompt("Hola! dame un número:"))
num2 = parseInt(prompt("Dame otro número porfavor:"))

function suma(num1,num2){
    return num1 + num2
}

console.log(suma(num1,num2));

//for
let frutas = ['manzana', 'pera', 'durazno', 'platano','piña', 'sandia'];
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}

//forof

for (let fruta of frutas) {
    console.log(frutas + " iterando el forof")
}

//forin
//Un bucle for...in solo itera sobre propiedades enumerables que no son símbolo.
//Los objetos creados a partir de constructores integrados como Array y Object han heredado propiedades no enumerables de Object.prototype y String.prototype, 
//como el método indexOf() de String o el método toString() de Object. 
//El bucle iterará sobre todas las propiedades enumerables del objeto en sí y aquellas que el objeto hereda de su cadena de prototipos 
//(las propiedades de los prototipos más cercanos tienen prioridad sobre las de los prototipos más alejados del objeto en su cadena de prototipos).
for (let fruta in frutas) {
     console.log(frutas)
}