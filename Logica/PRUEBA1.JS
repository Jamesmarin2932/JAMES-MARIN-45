console.log(" logica conectada ");

const usuario ='prueba'
const clave = '12345'

const frutas = [ 'manzana','pera','sandia']

function pruebaBoton(){
    console.log(usuario+clave);

    let user= document.getElementById('user').value
    let contraseña= document.getElementById('contraseña').value

    if(usuario==user && clave==contraseña){
window.open('calculadora.html')
    }else{
        alert('Ingreso no permitido')
    }

    console.log(`usuario ${user} clave ${contraseña}`);
}

function imprimirArreglo(){
    let posicion= document.getElementById('arrayposicion').value
    if( posicion > frutas.length){
        alert('posicion no valida'); 
        limpiar() 
    }else{
        
    
    console.log(frutas [posicion]);
    }
}
function limpiar(){
    document.getElementById('arrayposicion').value =''

}