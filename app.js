function Saludos() {
   alert ("Hola")
}
   Saludos()
function nombre() {
    

let nombreAlumno = prompt("ingrese su nombre")
alert ("Hola"+" "+nombreAlumno)
}
nombre()
function años() {
    

let edad =  prompt("ingresa tu edad")
if (edad >=18){
console.log("soy mayor a 18") 
    
}else{
console.log("soy menor de edad") 
}}
años()
function Beber() {
    

let bebida = prompt("¿Que bebida queres?")
switch(bebida){
    case "fernet":
    console.log(`pedido${bebida},
    valor 2000`)
    break
    case "Cerveza":
        console.log(`pedido${bebida},
        valor 1000`)
        break
        case"Ron":
        console.log(`pedido${bebida},
        valor 2200`)
        break
        case "whisky":
            console.log(`pedido${bebida},
            valor 2200`)
        break
        case "vodka":
        console.log(`pedido${bebida},
        valor 2200`)
        break
        default:
            console.log("Ninguna opcion anterior")
            break
        }
}
Beber()
alert("Vuelva pronto")
