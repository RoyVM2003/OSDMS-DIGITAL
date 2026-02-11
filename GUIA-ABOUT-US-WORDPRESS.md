# Guía: Página About Us en WordPress / Elementor

Usa estos archivos para replicar la página About Us de tu sitio estático en WordPress con el mismo diseño. **Solo tienes que sustituir los textos por tu contenido.**

## Archivos

| Archivo | Uso |
|--------|-----|
| `ABOUT-US-HTML-PARA-WORDPRESS.html` | Contenido principal (hero, trayectoria, cierre). Pégalo en Elementor. |
| `ABOUT-US-CSS-PARA-WORDPRESS.css` | Estilos de la página. Añádelo al CSS del sitio o en un widget HTML. |
| `ABOUT-US-JS-PARA-WORDPRESS.js` | Efecto máquina de escribir en el título y transición de color del gradiente. |

---

## Pasos en WordPress / Elementor

### 1. Crear la página About Us

- En WordPress: **Páginas → Añadir nueva**. Título ej. "About Us" o "Quiénes Somos".
- Editar con **Elementor**.
- El encabezado y pie de página ya los tienes con los archivos HEADER-* y FOOTER-*.

### 2. Añadir el CSS global

- **Apariencia → Personalizar → CSS adicional**, o con un plugin (e.g. "CSS adicional").
- Copia todo el contenido de `ABOUT-US-CSS-PARA-WORDPRESS.css` y pégalo ahí.

Si prefieres cargarlo solo en About Us:

- Sube `ABOUT-US-CSS-PARA-WORDPRESS.css` al tema o con un plugin.
- En la plantilla o página About Us, asegúrate de encolar esa hoja de estilos (por código o con un plugin de "scripts/estilos por página").

### 3. Añadir el contenido (HTML)

- En la página About Us en Elementor, añade un widget **HTML** (o varios, uno por sección si lo prefieres).
- Abre `ABOUT-US-HTML-PARA-WORDPRESS.html`, copia **todo** el contenido (incluida la línea del `link` de Font Awesome si no lo tienes ya en el sitio).
- Pégalo en el widget HTML.

### 4. Cargar el JavaScript (con plugin de scripts)

Tienes plugins para scripts; así puedes usarlos:

**Opción A – Plugin “Insert Headers and Footers” (o similar)**  
- Sube `ABOUT-US-JS-PARA-WORDPRESS.js` a **Medios** o a la carpeta del tema (ej. `/wp-content/themes/tu-tema/js/`).  
- Anota la URL del archivo (ej. `https://tudominio.com/wp-content/uploads/2025/01/ABOUT-US-JS-PARA-WORDPRESS.js` o la ruta del tema).  
- En el plugin, añade un script **solo en el pie (Footer)** y, si el plugin lo permite, **solo en la página About Us**.  
- Código a insertar:
  ```html
  <script src="URL_DEL_ARCHIVO_JS"></script>
  ```
  Sustituye `URL_DEL_ARCHIVO_JS` por la URL real del archivo.

**Opción B – Plugin “WPCode” / “Code Snippets”**  
- Crea un snippet de tipo **Script** (o “JavaScript”).  
- Pega **todo** el contenido de `ABOUT-US-JS-PARA-WORDPRESS.js` en el snippet (no hace falta subir el archivo).  
- Configura el snippet para: **Footer** y, si hay opción, **solo en la página About Us** (o por slug `about-us`).  
- Activa el snippet.

**Opción C – Cargar solo en About Us**  
- Si tu plugin permite “scripts por página”, asocia el script (por URL o pegando el código) solo a la página About Us y en **Footer**, para que el HTML del widget ya esté en el DOM cuando se ejecute.

Si ya usas Font Awesome en el sitio, no hace falta volver a cargarlo en el HTML del About.

---

## Cambiar el contenido por el tuyo

Todo el texto está en el HTML para que lo edites directamente en el widget HTML de Elementor (o en el archivo y luego vuelvas a pegarlo).

### Hero (arriba)

- **Título (h1):** Sustituye  
  `Donde la Visión se Convierte en Experiencia Digital`  
  por tu frase. Este es el que se anima con efecto máquina de escribir.
- **Párrafo:** Sustituye el párrafo largo por tu descripción.

### Sección "Trayectoria"

- **Título de sección (h2):** "Una Trayectoria de Innovación" → tu título.
- **Subtítulo:** El párrafo debajo del h2 → tu texto.
- **Cada ítem de la línea de tiempo:**
  - `timeline-year`: año (ej. 2022, 2024, 2026).
  - `h3`: título del hito (ej. "Los Cimientos", "Expansión Global").
  - Los dos `p`: descripción y, si quieres, una línea en cursiva (inspiración).
- Puedes **añadir o quitar** bloques `timeline-item`: copia uno de los `<div class="timeline-item">...</div>` y cambia año, h3, p e icono (`<i class="fas fa-..."></i>`). Iconos: [Font Awesome](https://fontawesome.com/icons).

### Cierre (frase final)

- Las tres líneas:
  - `story-closing-line-1`: "Tu visión."
  - `story-closing-line-2`: "Nuestro compromiso."
  - `story-closing-line-3`: "Resultados que **transforman**." (la palabra "transforman" usa la clase `story-closing-highlight`).
- Cambia esos textos por los tuyos. Si quieres otra palabra resaltada, envuélvela en  
  `<span class="story-closing-highlight">tu palabra</span>`.

---

## Comportamiento

- **Máquina de escribir:** al cargar la página, el título del hero se escribe letra a letra.
- **Transición de color:** el gradiente del título y de la palabra resaltada al final (“transforman”) se anima en bucle (script en `ABOUT-US-JS-PARA-WORDPRESS.js`).

Si quieres, el siguiente paso puede ser adaptar la página de Services o de Contact con la misma estructura (archivos HTML/CSS/JS para WordPress).
