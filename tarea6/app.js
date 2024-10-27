let frutas=["banana"];
frutas.push("manzana");
console.log(frutas);
frutas.unshift("sandia");
console.log(frutas);
frutas.unshift("aguacate");
console.log(frutas);

function empujar (frutas,fruta) {
    frutas[frutas.length]=fruta;
}

empujar(frutas,"naranja");
console.log(frutas);

function pedir(){
    let cant = prompt("Cuantas veces se va a repetir?");
    let guardar = "";
    let guardar2 = "";
    for (let index = 0; index < cant; index++) {
        guardar += "*";
    }
    for (let index = 0; index < cant; index++) {
        guardar2 += "*\n"; 
    }
    console.log(guardar);
    console.log(guardar2);
}

pedir();

function multiplicar(){
    for (let index1 = 0; index1 <= 10; index1++) {
         for (let index2 = 0; index2 <= 10; index2++) {
           resultado=index1 * index2
           console.log(resultado);
         } 
    }
}

multiplicar();

function frutongas() {
    frutas=["manzana","pera","sandia","durazno","melon","guayaba","kiwi","fruta8","fruta9","fruta10"]
    for (let index = 0; index < frutas.length; index++) {
        console.log(frutas[index]+"El indice es: "+ index)  
    }
    let index4=0
    frutas.forEach(element =>{
        console.log(frutas[index4]+" El indice es: "+ index4)
    });
    frutas.forEach(function callback(value, index) {
        console.log(`${index}: ${value}`);
    }); 
}

frutongas();