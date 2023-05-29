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

function crearObjetoCuenta(nombre,apellido,saldo){
this.nombreCuenta = nombre = prompt("Ingrese el nombre de la cuenta")
this.apellidoCuenta= apellido = prompt("Ingrese el apellido")
this.saldoCuenta= saldo = parseInt(prompt("Infrse el saldo de la cuenta"))
this.mostrarCuenta = function(){
    return `Nombre: ${this.nombreCuenta}, Apellido : ${this.apellidoCuenta}, Saldo : ${this.saldoCuenta}`
}
}

const cuenta1 = new crearObjetoCuenta()
console.log(cuenta1.mostrarCuenta())
/n

const carrito =[]

carrito.push("Mi producto")
carrito.push("Segundo producto")
/n

const Carrito = [
    {nombre : "Producto A", precio: 1000},
    {nombre : "Producto B", precio: 2000},
    {nombre : "Producto c", precio: 2200}

]
let totalCompra = Carrito.reduce((acumm, prod) => { return acumm + prod.precio},0
)


alert("Vuelva pronto")
    