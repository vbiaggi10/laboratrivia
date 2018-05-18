function myFunction() { 
  var userName= document.getElementById('userName').value;
  var saludarUsario = document.getElementById('bienvenida');
  saludarUsario.innerHTML = "😊 Bienvenid@ " + userName + " 😊" ;
  
  var mostrarResultados = document.getElementById('contenedorPrincipal');
  var respuestasCorrectas = document.getElementById('respuestasCorrectas');
  var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');

  respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
  respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";

  var primeraPregunta=Number(document.getElementById('answer1').value);
  if (primeraPregunta == 2) { //Ejemplo de opción con NÚMERO
    respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
  } else {
    respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
  }

  var segundaPregunta = String(document.getElementById('answer2').value);
  if (segundaPregunta == "A") { //Ejemplo de opción con LETRA
    //respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  } else {
    respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  }
}