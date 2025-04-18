🐉 API Dragon Ball - Aplicación React
Descripción
Esta aplicación web desarrollada con React consume la API pública de personajes de Dragon Ball para mostrar información detallada sobre los personajes del universo Dragon Ball. Los usuarios pueden explorar todos los personajes, filtrarlos por género y ver información detallada de cada uno.
Mostrar imagen
Características Principales

Galería de Personajes: Visualización de todos los personajes de Dragon Ball con tarjetas interactivas
Filtrado por Género: Navegación separada para personajes masculinos y femeninos
Vista Detallada: Información completa de cada personaje (nombre, imagen, raza, género, planeta de origen, ki, descripción)
Diseño Responsive: Experiencia optimizada para dispositivos móviles y de escritorio
Interfaz Temática: Diseño inspirado en el universo de Dragon Ball

🚀 Tecnologías Utilizadas

React: Biblioteca JavaScript para construir interfaces de usuario
Vite: Herramienta de compilación que proporciona una experiencia de desarrollo más rápida
React Router DOM: Enrutamiento dinámico para la aplicación
Material UI: Framework de componentes UI para React
CSS personalizado: Estilos adicionales para una experiencia visual única
Fetch API: Para realizar solicitudes HTTP a la API de Dragon Ball

📋 Prerrequisitos

Node.js (versión 14.0.0 o superior)
npm (versión 6.0.0 o superior)


🔍 Estructura del Proyecto
/src
  /Components
    /CustomCard    - Componente de tarjeta para personajes
    /Footer        - Pie de página de la aplicación
    /Header        - Cabecera de la aplicación
    /NavBar        - Barra de navegación con opciones de filtrado
  /Pages
    /AboutPage     - Página con información sobre los desarrolladores
    /DetailsPage   - Vista detallada de cada personaje
    /ErrorPage     - Página de error para rutas no encontradas
    /FilterPage    - Página para mostrar personajes filtrados por género
    /HomePage      - Página principal con todos los personajes
  /assets          - Imágenes y otros recursos estáticos
  App.jsx          - Componente principal y configuración de rutas
  main.jsx         - Punto de entrada de la aplicación
📞 Endpoints de API Utilizados

https://dragonball-api.com/api/characters - Lista de personajes
https://dragonball-api.com/api/characters/:id - Detalles de un personaje específico

👥 Desarrolladores

Mateo Augusto Basto Olaya - mat.basto@udla.edu.co
Damary Andrea Montealegre Caldon - da.montealegre@udla.edu.co

🏫 Proyecto Académico
Desarrollado como parte del curso de Programación Web en la Universidad de la Amazonia, programa de Ingeniería de Sistemas.
📜 Licencia
Este proyecto es de código abierto.