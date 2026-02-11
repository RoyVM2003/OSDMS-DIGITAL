# Guía: Página Agentivas + Conversión Web en WordPress

## Archivos

- **AGENTIVAS-HTML-PARA-WORDPRESS.html** – Contenido (Hero, IA Agentiva, Conversión, Demostración, Arquitectura, Chatbot, Implementación, Beneficios, Formulario).
- **AGENTIVAS-CSS-PARA-WORDPRESS.css** – Estilos de la página (todo bajo `.exp-page-wp`).
- **AGENTIVAS-JS-PARA-WORDPRESS.js** – Chatbot (chips, envío de mensajes, respuestas simuladas) y formulario (validación, envío).

## Pasos en WordPress / Elementor

### 1. Crear la página

- Crea una página (ej. “Agentivas + Conversión Web”).
- En Elementor, añade un widget **HTML** y pega **todo** el contenido de `AGENTIVAS-HTML-PARA-WORDPRESS.html` (incluye el `<link>` de Font Awesome y el `<div class="exp-page-wp">` con todas las secciones).

### 2. Cargar el CSS

**Opción A – CSS global (recomendado)**  
- **Apariencia → Personalizar → CSS adicional**  
- Pega todo el contenido de `AGENTIVAS-CSS-PARA-WORDPRESS.css`.

**Opción B – Solo en esta página**  
- Usa un plugin como **WPCode** o **Insert Headers and Footers** y añade el CSS dentro de un bloque que se cargue solo en esta página (por URL o plantilla).

### 3. Cargar el JavaScript

El JS es necesario para:
- Chatbot: chips de sugerencias, input, botón enviar, respuestas simuladas.
- Formulario: validación en tiempo real y envío (prevenir envío por defecto y mostrar mensaje).

**Recomendado:** cargar solo en la página Agentivas para no afectar al resto del sitio.

- **WPCode:** crea un snippet “JavaScript”, pega el contenido de `AGENTIVAS-JS-PARA-WORDPRESS.js`, y en “Ubicación” elige “Solo en páginas” y selecciona esta página.
- **Insert Headers and Footers:** en “Scripts en pie de página” (o “Scripts en páginas específicas” si el plugin lo permite) añade algo como:
  ```html
  <script src="https://tudominio.com/wp-content/uploads/agentivas/AGENTIVAS-JS-PARA-WORDPRESS.js"></script>
  ```
  Solo en la página Agentivas si tu plugin permite condicionar por página.

Si subes el JS a **Medios**, usa la URL del archivo. Asegúrate de que el script no se minifique de forma que rompa variables (si usas un plugin de optimización, excluye este archivo en esa página).

### 4. Título de página y barras blancas

- **Ocultar título:** En el editor de la página (Elementor), en Configuración de la página → Título → Ocultar título. O con el CSS que ya incluye `AGENTIVAS-CSS-PARA-WORDPRESS.css` (oculta `.entry-header`, `.elementor-page-title`, etc.).
- **Barras blancas:** El CSS ya incluye reglas para que la sección que sigue al bloque HTML sea oscura y sin padding. Si aún ves una barra blanca, revisa que el widget HTML sea el primer contenido del contenido principal y que no haya una sección vacía entre header y el HTML.

### 5. Ancho completo

El CSS de `.exp-page-wp` ya aplica `width: 100vw` y márgenes para que el contenido llegue a los bordes. Si usas un contenedor de Elementor que limita el ancho, pon el widget HTML en una sección con “Ancho completo” o “Ancho completo del viewport” según tu tema.

## Resumen rápido

| Qué              | Dónde |
|------------------|--------|
| HTML             | Widget HTML de Elementor en la página Agentivas |
| CSS              | Apariencia → Personalizar → CSS adicional (o solo en esta página) |
| JS               | Solo en esta página (WPCode / script en footer condicionado) |
| Font Awesome     | Incluido en el HTML vía CDN |

Si la página se ve sin estilos, comprueba que el CSS adicional esté activo y que no haya otro CSS que sobrescriba `.exp-page-wp`. Si el chatbot o el formulario no reaccionan, comprueba que el JS se cargue después del HTML y que no haya errores en la consola (F12).
