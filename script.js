/* declaro una función con el nombre de verificarPassword que será llamada cuando se haga clic en el botón. */

function verificarPassword() {
    // creo constantes para obtener los valores seleccionados de cada uno de los elementos que usare.
    // selecciono los valores de cada uno de los elementos con su metodo correspondiente "select" con id.
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;
    // concateno los valores para formar el password.
    const password = select1 + select2 + select3;

    const resultado = document.getElementById('resultado');
    // obtengo el elemento <p> con id 'resultado' donde se mostrará el mensaje del resultado del password.
    if (password === '911') {
        resultado.textContent = 'Password 1 correcto';
        // uso la propiedad .textContent para establecer el contenido del texto de un nodo y sus dencendientes.
    } else if (password === '714') {
        resultado.textContent = 'Password 2 correcto';
    } else {
        resultado.textContent = 'Password incorrecto';
    }
} /* uso las condiconales para que se verifique si el password concatenado es igual a '911', si es correcto, se actualiza el
contenido del resultado con el texto 'Password 1 correcto'.
si no es igual a '911', se verifica si es igual a '714' con el operador de igualdad estricta para evitar errores de comparacion de datos.
si es correcto, se actualiza el contenido del "resultado" con el texto 'Password 2 correcto', despues si el password no es ni '911',
ni '714', se va a actualizar el contenido de "resultado" con el texto "Password incorrecto" y asi construyo un flujo de condicionales. */
