# Servicios – Todo listo para reemplazar (con Premium)

Cuando tengas **Premium** en el plugin de snippets, usa esta guía para dejar la página Services funcionando sin errores.

---

## Archivos a usar (reemplazo directo)

| Archivo | Dónde va | Acción |
|--------|----------|--------|
| **SERVICES-HTML-PARA-WORDPRESS.html** | Widget HTML de Elementor en la página Servicios | Copiar todo y pegar (reemplaza el contenido actual del widget). |
| **SERVICES-CSS-PARA-WORDPRESS.css** | Apariencia → Personalizar → CSS adicional | Copiar todo y pegar (reemplaza o añade al CSS de Services). |
| **SERVICES-JS-PARA-WORDPRESS.js** | Plugin de snippets (Premium) | Subir como archivo y cargar con **Load as file**. |

---

## Pasos con Premium

### 1. HTML (contenido de la página)

1. Edita la página **Servicios** con Elementor.
2. Abre **SERVICES-HTML-PARA-WORDPRESS.html** y copia **todo** el contenido.
3. En la página, localiza el widget **HTML** donde está el contenido de Services.
4. Pega el contenido (reemplazando el que haya). Guarda.

### 2. CSS (estilos)

1. **Apariencia → Personalizar → CSS adicional** (o donde tengas el CSS global).
2. Si ya tienes CSS de Services, búscalo y **sustituye** por todo el contenido de **SERVICES-CSS-PARA-WORDPRESS.css**.
3. Si no, **pega** todo el contenido del archivo al final del CSS adicional. Publica.

### 3. JavaScript (Premium: Load as file)

1. Sube **SERVICES-JS-PARA-WORDPRESS.js** a tu sitio:
   - Por ejemplo a `wp-content/uploads/` o a una carpeta del tema, y anota la URL del archivo (ej. `https://tudominio.com/wp-content/uploads/SERVICES-JS-PARA-WORDPRESS.js`).
2. En el **plugin de snippets (Premium)**:
   - Crea un snippet nuevo → tipo **JavaScript**.
   - En lugar de pegar el código, usa la opción **“Load as file”** (cargar como archivo) y indica la URL del .js, **o** si el plugin permite “subir archivo”, sube el .js y así se servirá como archivo físico.
   - **Inserción:** Auto Insert.
   - **Ubicación:** Insert in Footer (o After Post).
   - **Solo en:** Página Servicios (por slug `servicios` o el que uses).
3. Activa el snippet y guarda.

Con **Load as file** el script se carga como archivo .js y no se inyecta en el HTML, evitando el error `a is not defined`.

---

## Qué incluyen estos archivos

- **Hero** con cubo animado y estadísticas.
- **Industrias:** carrusel stack (una tarjeta al frente, dos atrás a los lados), 6 industrias, flechas y puntos.
- **Soluciones Integrales:** 4 pestañas (Supervivencia, Crecimiento, Liderazgo, Mantenimiento) con contenido y CTAs.
- **Portafolio:** 6 tarjetas de servicios.
- **Ecosistema:** bloque con línea animada y botones WhatsApp / email.

---

## Comprobar que todo va bien

1. Abre la página Servicios en el navegador.
2. F12 → pestaña **Console**. No debería aparecer `a is not defined`.
3. Escribe en consola: `OSDEMS_SERVICES_JS_LOADED` → Enter. Si sale `true`, el JS de Services se cargó bien.
4. Prueba: flechas del carrusel de industrias, pestañas de Soluciones, y que se vean las tarjetas del carrusel.

---

## Resumen rápido

| Qué | Dónde reemplazar |
|-----|-------------------|
| HTML | Widget HTML de Elementor en página Servicios |
| CSS | Apariencia → Personalizar → CSS adicional |
| JS | Plugin snippets Premium → Load as file, solo página Servicios |

Con esto tienes todo listo para reemplazar cuando pases a Premium.
