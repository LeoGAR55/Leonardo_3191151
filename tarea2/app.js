//int random 
let random = Math.floor(Math.random()*(10-1)+1);
    console.log(random)

let numUsuario = parseInt(prompt("Adivina un numero del 1 al 10"));

let vidas= 3;
    while(random !== numUsuario && vidas >1 ){
        vidas--
        numUsuario = parseInt(prompt("Vuelve a intentarlo, te quedan "+ vidas+" vidas"))
    }

if(random=== numUsuario){
    console.log("Ok")
}else{
    console.log("El numero era "+random+":(")
}

