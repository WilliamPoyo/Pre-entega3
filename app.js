function Saludos() {
   alert ("Hola")
}
   Saludos()


   function nombre() {
    
let nombreAlumno = prompt("ingrese su nombre")
alert ("Hola"+" "+nombreAlumno)
}
nombre()

function ValidarEdad() {
    

let Edad =  prompt("ingresa tu edad")
if (Edad >=18){
alert("soy mayor a 18") 
    
}else{
alert("soy menor de edad") 
}}
ValidarEdad()

function Bebidas() {
    

let bebida = prompt("¿Que bebida queres?")
switch(bebida){
    case "fernet":
    alert(`pedido${bebida},
    valor 2000`)
    break
    case "Cerveza":
    alert(`pedido${bebida},
        valor 1000`)
        break
        case"Ron":
        alert(`pedido${bebida},
        valor 2200`)
        break
        case "whisky":
            alert(`pedido${bebida},
            valor 2200`)
        break
        case "vodka":
        alert(`pedido${bebida},
        valor 2200`)
        break
        default:
            alert("Ninguna opcion anterior")
            break
        }
}
Bebidas()
alert("Vuelva pronto")
