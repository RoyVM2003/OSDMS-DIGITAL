# Página Premium (Contactanos) – Todo listo para reemplazar

Usa estos archivos en la **pestaña/página Premium** (Contactanos) de tu sitio WordPress.

---

## Archivos

| Archivo | Dónde va | Acción |
|--------|----------|--------|
| **PREMIUM-HTML-PARA-WORDPRESS.html** | Widget HTML de Elementor en la página **Premium** | Copiar todo el contenido y pegar en el widget (reemplaza lo que haya). |
| **PREMIUM-CSS-PARA-WORDPRESS.css** | Apariencia → Personalizar → CSS adicional | Pegar todo el contenido (o añadir al final del CSS existente). |
| **PREMIUM-JS-PARA-WORDPRESS.js** | Opcional | Solo si quieres enlazar el formulario por JS. Si usas Contact Form 7 u otro plugin de formularios, no hace falta. |

---

## Pasos para reemplazar

### 1. HTML (contenido de la página Premium)

1. En WordPress, abre la página **Premium** (o "Contactanos") y edítala con **Elementor**.
2. Localiza el widget **HTML** donde está el contenido de esa página.
3. Abre **PREMIUM-HTML-PARA-WORDPRESS.html**, copia **todo** (desde el comentario hasta el cierre de `</main>`).
4. Pega en el widget HTML, reemplazando el contenido actual. Guarda.

### 2. CSS (estilos de la página Premium)

1. Ve a **Apariencia → Personalizar → CSS adicional**.
2. Si ya tienes estilos de la página Premium, **sustituye** ese bloque por todo el contenido de **PREMIUM-CSS-PARA-WORDPRESS.css**.
3. Si no, **pega** todo el contenido del archivo al final del CSS adicional. Publica.

### 3. Enlaces del menú lateral

En el HTML, el menú lateral usa enlaces como `/`, `/about-us/`, `/services/`, `/mantto-web/`, `/experiencias/`.  
Ajusta las URLs a las que uses en tu sitio (por ejemplo `/servicios/`, `/quienes-somos/`, etc.).

### 4. Formulario de contacto

- **Opción A:** Sustituir el `<form>...</form>` del HTML por el shortcode de **Contact Form 7** (o WPForms, etc.) y configurar el envío en el plugin.
- **Opción B:** Dejar el form actual y conectar el envío por WordPress (acción AJAX o página de destino). El archivo **PREMIUM-JS-PARA-WORDPRESS.js** es opcional para eso.

---

## Qué incluye

- Título **Contactanos**
- **Formulario:** nombre, correo, empresa, teléfono, select (servicio), mensaje, botón Enviar
- **Columna contacto:** texto intro, Guadalajara, lista (email, teléfonos, dirección), redes sociales
- **Sidebar:** menú (Home, About Us, Services, Mantto Web, Agentivas), horario de oficina, tarjetas aceptadas (Visa, Mastercard, Amex)

---

## Resumen

| Qué | Dónde reemplazar |
|-----|-------------------|
| HTML | Widget HTML en la página **Premium** (Elementor) |
| CSS | Apariencia → Personalizar → CSS adicional |
| JS | Opcional; solo si enlazas el form por script |

Con esto puedes reemplazar todo el contenido de la pestaña Premium y seguir editando desde Elementor cuando quieras.
