console.log(" logica conectada ");

const usuario ='Admin'
const clave = '1234'

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
