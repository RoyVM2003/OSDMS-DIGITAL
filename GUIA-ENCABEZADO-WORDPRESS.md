# Encabezado (Header) para WordPress con Elementor

Mismo diseño que el proyecto estático: logo, menú con enlaces, Services e Industries con mega menú, hamburguesa en móvil.

## Pasos

### 1. Theme Builder → Header
- Elementor → Theme Builder → Header (crear o editar).
- Crea una **sección de ancho completo** con **una columna**.
- Añade **un solo widget "Código HTML"** en esa columna.

### 2. Pegar el HTML
- Copia **todo** el contenido de **HEADER-HTML-PARA-WORDPRESS.html** (desde el comentario del overlay hasta el cierre de `</header>`).
- Pégalo dentro del widget de código HTML.
- Guarda el template.

### 3. CSS adicional
- Apariencia → Personalizar → **CSS adicional**.
- Al **final** de todo el CSS que ya tengas, pega el contenido de **HEADER-CSS-PARA-WORDPRESS.css**.
- Publicar.

### 4. JavaScript del menú
El menú (hamburguesa, mega menús, overlay) necesita el script de **HEADER-JS-PARA-WORDPRESS.js**.

**Opción A – Plugin "Insert Headers and Footers" (recomendado)**  
- Instala el plugin.  
- En **Scripts in Footer**, pega el contenido de HEADER-JS-PARA-WORDPRESS.js dentro de una etiqueta `<script>`:

```html
<script>
// pegar aquí todo el contenido de HEADER-JS-PARA-WORDPRESS.js
</script>
```

**Opción B – Tema**  
- Si tu tema permite “Scripts personalizados” o “Footer”, pega el mismo bloque `<script>...</script>` ahí.

### 5. Font Awesome
El menú usa iconos Font Awesome (fas, fab). Si no se ven:
- Elementor suele cargarlos; si no, instala un plugin "Font Awesome" o añade el CDN en el tema.

### 6. Ajustar enlaces
En el HTML del header puedes cambiar:
- `/` = inicio  
- `/quienes-somos/` = About Us  
- `/servicios/` = Services  
- `/#industrias` = Industries (ancla en home)  
- `/premium/`, `/mantto-web/`, `/experiencias/`, `/options/` = según tus slugs en WordPress.

Los enlaces dentro de los mega menús (Services e Industries) están en `#`; cámbialos por las URLs de tus páginas cuando las tengas. El HTML incluye una versión resumida de los mega menús (menos ítems por categoría); si quieres el listado completo como en el proyecto estático, copia las secciones correspondientes de `index.html` (desde cada `<div class="mega-menu">` hasta su `</div>` de cierre).

## Resumen de archivos
| Archivo | Dónde va |
|--------|-----------|
| HEADER-HTML-PARA-WORDPRESS.html | Widget HTML del header en Elementor |
| HEADER-CSS-PARA-WORDPRESS.css | Apariencia → Personalizar → CSS adicional |
| HEADER-JS-PARA-WORDPRESS.js | Plugin "Insert Headers and Footers" (footer) o tema |
