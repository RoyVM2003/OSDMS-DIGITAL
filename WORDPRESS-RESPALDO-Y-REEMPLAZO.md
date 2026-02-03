# Respaldo y reemplazo de página en WordPress

Guía para respaldar la página actual en WordPress y luego reemplazarla con el nuevo HTML (Product Branding / Options).

---

## 1. Respaldo antes de cambiar nada

### Opción A: Respaldo solo de esa página (rápido)

1. **Entra a WordPress** → Escritorio → Páginas.
2. **Abre la página** que corresponde a Options / Product Branding (por ejemplo la que está en `https://osdemsdigital.com/options/`).
3. **Copia todo el contenido:**
   - Si usas **editor de bloques (Gutenberg):** haz clic en los tres puntos (⋮) arriba a la derecha → **Copiar todo el contenido**. Pega en un archivo .txt o .doc y guárdalo en tu PC con nombre tipo `options-wordpress-respaldo-2026-01-28.txt`.
   - Si usas **editor clásico:** selecciona todo (Ctrl+A), copia (Ctrl+C) y pega en un archivo como arriba.
4. **Duplica la página (recomendado):**
   - En la lista de Páginas, pasa el ratón sobre la página → **Clonar** o **Duplicar** (si tienes un plugin como "Duplicate Post" o "Yoast").
   - O: crea una **página nueva**, ponle título "Options RESPALDO" o "Product Branding - Respaldo", pega el mismo contenido, y **no la publiques** (déjala en Borrador). Así siempre tendrás la versión antigua dentro de WordPress.

### Opción B: Respaldo completo del sitio (por si algo más falla)

1. **Respaldo con plugin (recomendado):**
   - Instala un plugin de respaldo, por ejemplo **UpdraftPlus**, **BackupBuddy** o **All-in-One WP Migration**.
   - Haz un respaldo completo (archivos + base de datos) y descarga la copia a tu PC o guárdala en Google Drive/Dropbox.
2. **Respaldo desde tu hosting:**
   - En el panel de tu hosting (cPanel, Plesk, etc.) suele haber **"Backups"** o **"Copias de seguridad"**.
   - Genera una copia de seguridad completa y descárgala si te lo permiten.
3. **Exportar solo el contenido desde WordPress:**
   - Escritorio → **Herramientas** → **Exportar**.
   - Elige **"Todo el contenido"** o **"Páginas"** y descarga el archivo .xml. Sirve sobre todo para recuperar páginas y entradas, no para restaurar el sitio entero.

---

## 2. Cómo reemplazar la página con tu nuevo HTML

Tu nuevo contenido está en:  
`src/pages/product-branding.html` (solo la parte del `<main>`, sin header ni footer si WordPress ya los muestra).

### Si la página en WordPress usa bloque "HTML personalizado" o "Código"

1. Entra a **Páginas** → edita la página de Options / Product Branding.
2. Añade un bloque **"HTML personalizado"** (busca "HTML" en el buscador de bloques).
3. Pega dentro **solo el HTML del contenido** (las tres secciones: Portal de pagos, Catálogo, Portal pago de clientes). No pegues `<html>`, `<head>`, `<body>` ni el menú del sitio.
4. Si ya tenías otro contenido en esa página, bórralo o reemplázalo por este bloque.
5. **Publica** o **Actualiza**.

### Si la página usa un constructor (Elementor, WPBakery, etc.)

1. Abre la página con el constructor.
2. Crea una sección/columna donde quieras el contenido nuevo.
3. Busca un widget o bloque tipo **"HTML"** / **"Código"** / **"Shortcode"** y pega ahí el HTML del contenido.
4. Ajusta estilos si el tema no carga los mismos CSS; a veces tendrás que copiar también las clases CSS a "CSS adicional" del tema o del bloque.

### Si quieres que se vea igual que tu HTML (con tus estilos)

- Tu HTML usa clases de `styles.css`. En WordPress esos estilos no se cargan por defecto.
- **Opción 1:** En la página de WordPress, en **Personalizar** → **CSS adicional** (o en el tema **CSS adicional**), pega las reglas que usan las clases `.product-branding-hero`, `.product-branding-title`, etc. (las que añadimos en `styles.css` para Product Branding).
- **Opción 2:** Subir tu `styles.css` como archivo del tema hijo o con un plugin que permita "añadir CSS" y asegurarte de que la página cargue ese CSS.
- **Opción 3:** Usar una página en **HTML estático**: en lugar de editar la página en WordPress, puedes crear una página que redirija a tu sitio estático (GitHub Pages o donde esté tu `product-branding.html`) para esa ruta.

---

## 3. Resumen rápido

| Qué quieres | Qué hacer |
|------------|-----------|
| Respaldo solo de la página | Copiar contenido a un .txt y/o duplicar la página en Borrador. |
| Respaldo por si algo sale mal | Plugin de respaldo (UpdraftPlus, etc.) o respaldo del hosting. |
| Reemplazar contenido en WordPress | Editar la página → bloque HTML personalizado (o equivalente) → pegar el HTML del `<main>` de `product-branding.html`. |
| Que se vea igual que tu diseño | Añadir el CSS de Product Branding en "CSS adicional" del tema o cargar tu `styles.css`. |

Si me dices si usas editor de bloques, clásico o un constructor (Elementor, etc.), se puede detallar solo esa opción.
