# Guía: Mantto Web en WordPress

## Archivos creados

- **MANTTO-HTML-PARA-WORDPRESS.html** – Contenido principal (Hero, ¿Qué es?, Planes en pestañas, CTA)
- **MANTTO-CSS-PARA-WORDPRESS.css** – Estilos
- **MANTTO-JS-PARA-WORDPRESS.js** – Lógica de pestañas

## Cómo integrar

1. **HTML**: Pegar en un widget HTML de Elementor en la página Mantto Web.
2. **CSS**: Añadir en Apariencia > Personalizar > CSS adicional (o plugin de snippets).
3. **JS**: Cargar con tu plugin de scripts solo en la página Mantto Web (Insert After Content).

---

## Cómo añadir una nueva pestaña

### Paso 1: Añadir el botón de la pestaña

En el HTML, dentro de `<div class="tabs-header">`, añade una línea como esta **antes** del comentario "Para añadir nueva pestaña":

```html
<div class="tab-button" data-tab="tab4-mantto"><i class="fas fa-star"></i> Plan Premium</div>
```

- Cambia `tab4-mantto` por un id único (tab5-mantto, tab6-mantto, etc.).
- Cambia el icono (`fa-star`) y el texto ("Plan Premium") según necesites.

### Paso 2: Añadir el contenido de la pestaña

Después del último `</div>` de `tab-content` y **antes** del comentario "Para añadir nueva pestaña", añade:

```html
<div class="tab-content" id="tab4-mantto">
    <div class="industry-card mantto-tab-card">
        <h3>Plan Premium</h3>
        <p>Descripción del plan...</p>
        <ul class="industry-features">
            <li>Característica 1</li>
            <li>Característica 2</li>
        </ul>
        <a href="https://wa.me/523326225912?text=..." class="btn btn-mantto-cta" target="_blank"><i class="fab fa-whatsapp"></i> Cotizar Plan Premium</a>
    </div>
</div>
```

- El `id="tab4-mantto"` debe coincidir con el `data-tab="tab4-mantto"` del botón del Paso 1.

### Paso 3: Guardar

Guarda el menú / el widget HTML en Elementor. No hace falta tocar el CSS ni el JS.

---

## Franja blanca entre “¿Sabías que?” y el pie de página

El CSS ya incluye reglas para quitar esa franja (fondo oscuro y sin padding en la sección siguiente y en el footer). Si **sigue viéndose** la raya blanca:

1. **Editar con Elementor** la página Mantto Web.
2. Revisar si hay **una sección vacía** entre el bloque donde pegaste el HTML (widget HTML) y el pie de página.
3. **Opciones:**
   - **Eliminar** esa sección si está vacía (clic en la sección → icono de borrar o “Eliminar”).
   - **O dejarla** y en esa sección: pestaña **Estilo** → **Fondo** → color **#1a1a2e**; pestaña **Avanzado** → **Padding** → poner **0** en Arriba y Abajo.
4. Revisar también el **pie de página** (plantilla del footer): en la primera sección del footer, poner **Padding superior = 0** y **Margen superior = 0** si tiene espacio de más.
5. Guardar y ver la página en modo vista previa o en el front.
