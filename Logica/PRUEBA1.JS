console.log(" logica conectada ");

const usuario ='prueba'
const clave = '12345'

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

// operacion de la calculadora//

let resultado = document.getElementById('resultado');


        function obtenernumero(numero) {
            resultado.value += numero;
        }
        
        function operacion(operacion) {
            resultado.value += operacion;
        }
        
        function calcular() {
            try {
                resultado.value = eval(resultado.value);
            } catch (e) {
                resultado.value = 'Error';
            }
        }
        
        function limpiar() {
            resultado.value = '';
  
        }

        function borrar(){
                resultado.value = resultado.value.slice(0,-1);
        }