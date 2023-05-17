function Saludos() {
   alert ("Hola") 
}
   Saludos()  


   function nombre() {
    
let nombreAlumno = prompt("ingrese su nombre")
alert ("Hola"+" "+nombreAlumno)
}
nombre()
/n 

function ValidarEdad() {
    

let edad =  prompt("ingresa tu edad")
if (edad >=18){
alert("soy mayor a 18") 
    
}else{
alert("soy menor de edad") 
}}
ValidarEdad()
/n

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
/n

alert("Vuelva pronto")
