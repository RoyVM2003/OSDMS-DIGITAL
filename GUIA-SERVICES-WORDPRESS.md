# Guía: Página Services en WordPress / Elementor

Usa estos archivos para replicar la página Services en WordPress. **Solo tienes que sustituir los textos por tu contenido** en la página que ya tienes.

## Archivos

| Archivo | Uso |
|--------|-----|
| `SERVICES-HTML-PARA-WORDPRESS.html` | Contenido principal (hero, industrias, pestañas, portafolio, ecosistema). Pégalo en Elementor. |
| `SERVICES-CSS-PARA-WORDPRESS.css` | Estilos de la página. Añádelo al CSS del sitio (Apariencia, Personalizar, CSS adicional). |
| `SERVICES-JS-PARA-WORDPRESS.js` | Cambio de pestañas en "Soluciones Integrales". Cárgalo solo en la página Services con tu plugin de scripts. |

---

## Pasos

### 1. Página Services

- En WordPress, abre la página **Services** (o "Servicios") que ya existe y edítala con **Elementor**.

### 2. Añadir el CSS

- **Apariencia → Personalizar → CSS adicional**: pega todo el contenido de `SERVICES-CSS-PARA-WORDPRESS.css`.
- Si el editor no permite cierto contenido, quita solo los comentarios del principio (líneas con `/*` y `*/`). No uses caracteres de marcado (por ejemplo `<` o `>`) dentro del CSS.

### 3. Añadir el contenido (HTML)

- En la página Services en Elementor, añade un widget **HTML**.
- Abre `SERVICES-HTML-PARA-WORDPRESS.html`, copia **todo** el contenido (incluido el `link` de Font Awesome si no lo tienes en el sitio).
- Pégalo en el widget HTML. Guarda.

### 4. Cargar el JavaScript (pestañas)

- Con tu **plugin de scripts** (WPCode, Insert Headers and Footers, etc.):
  - Crea un snippet o script que cargue `SERVICES-JS-PARA-WORDPRESS.js` (o pega el código del archivo).
  - Configura **Auto Insert** en **Footer** (o "Insert After Content") y **solo en la página Services**.

Así las pestañas "Supervivencia Digital", "Crecimiento Acelerado", etc. funcionarán al hacer clic.

---

## Qué puedes cambiar por tu contenido

- **Hero:** título, subtítulo, y los tres datos (Servicios, Industrias, ROI).
- **Industrias:** los 6 bloques tienen icono, título (h3) y párrafo. Sustituye por tus industrias.
- **Soluciones Integrales:** en cada pestaña (tab1-svc a tab4-svc) cambia títulos, descripciones, listas y enlaces de WhatsApp/email.
- **Portafolio:** cada `portfolio-card` tiene icono, título, descripción, lista de beneficios e "Impacto". Añade o quita tarjetas copiando/pegando un bloque `portfolio-card`.
- **Ecosistema:** el tag "Todo conectado", el título "Un ecosistema...", el párrafo y los dos botones (Conversemos, Agendar diagnóstico). Ajusta enlaces y textos.

Los enlaces a WhatsApp (`wa.me/...`) y email puedes dejarlos o cambiarlos por los tuyos.

---

## Nota

- La sección **Industrias** usa el **carrusel stack** (una tarjeta al frente, dos atrás). El carrusel va con su propio CSS y JS **inline** dentro del HTML, así que funciona aunque no cargues el JS externo. El JS externo (`SERVICES-JS-PARA-WORDPRESS.js`) se usa para las **pestañas** de Soluciones Integrales y el **typewriter** del título.
- Header y footer se mantienen con los archivos HEADER-* y FOOTER-* que ya uses en el sitio.

---

## Error "a is not defined" en consola

Si en la consola del navegador (F12) aparece **`Uncaught ReferenceError: a is not defined`**, suele deberse a que un plugin **minifica** el JavaScript (Autoptimize, WP Rocket, etc.) y al comprimir el archivo rompe alguna variable.

**Qué hacer:**

1. **Excluir el script de Services de la minificación**  
   En el plugin que optimiza JS (Autoptimize, WP Rocket, etc.):
   - Busca opciones como "Excluir de la optimización JS" / "Exclude from JavaScript optimization".
   - Añade el nombre o la ruta del archivo que carga `SERVICES-JS-PARA-WORDPRESS.js` (por ejemplo la URL del script o algo como `services-wp` si así lo nombra tu plugin de snippets).

2. **Probar desactivando la minificación de JS**  
   Desactiva solo la minificación de JS un momento; si el error desaparece, confirma que el problema es la minificación y mantén el script de Services excluido como en el punto 1.

Así el script se sirve sin minificar y el error no debería volver a salir.
