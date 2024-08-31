var numCircles = 20;
        var circleContainer = document.getElementById("circleContainer");

        // Crear los elementos <li> dinámicamente y agregarlos al contenedor <ul>
        for (var i = 0; i < numCircles; i++) {
            var circle = document.createElement("li");
            circleContainer.appendChild(circle);
            // Asignar estilos y retrasos
            circle.style.left = Math.floor(Math.random() * 100) + "%"; // Posición aleatoria en el eje x
            circle.style.animationDelay = Math.random() * 10 + "s"; // Retraso aleatorio en la animación
            circle.style.animationDuration = Math.random() * 20 + 10 + "s"; // Duración aleatoria de la animación
            circle.style.width = Math.floor(Math.random() * 10 + 5) + "px"; // Ancho aleatorio entre 5px y 15px
            circle.style.height = circle.style.width; // Altura igual al ancho para que sea un círculo
        }