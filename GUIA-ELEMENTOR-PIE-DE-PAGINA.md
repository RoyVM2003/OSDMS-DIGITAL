# Guía: Pie de página (Footer) en Elementor – común a todas las pestañas

El footer es **común a todas las páginas**. En Elementor se edita una sola vez y se muestra en todo el sitio.

---

## Paso 1: Dónde editar el footer en Elementor

Depende de tu versión y tema:

### Si tienes Elementor Pro (Theme Builder)
1. En el escritorio de WordPress ve a **Elementor → Theme Builder**.
2. En la lista verás **Header**, **Footer**, **Single**, etc.
3. Haz clic en **Footer** (o en “Crear” si aún no tienes pie de página).
4. Elige una plantilla en blanco o la que ya tengas y pulsa **Editar con Elementor**.

### Si usas solo Elementor (sin Theme Builder)
- El footer suele venir del **tema** (Appearance → Customize → Footer / Widgets del pie).
- Si tu tema permite “Footer con Elementor” o “Footer builder”, actívalo y edita desde ahí.
- O bien: **Plantillas → Elementor** y crea una plantilla tipo “Pie de página”; luego en **Apariencia → Personalizar** (o en el tema) asignas esa plantilla como footer.

Cuando tengas abierto el **editor de la plantilla del Footer**, sigue la estructura de abajo.

---

## Paso 2: Estructura del pie (4 columnas + copyright)

En el editor de Elementor:

1. Añade una **Sección** (una fila).
2. En esa sección pon **4 columnas** (por ejemplo 25% / 25% / 25% / 25%, o que se adapten en móvil).

En cada columna vas a meter lo siguiente.

---

## Columna 1: OSDEMS Digital + redes

**Contenido:**

- **Título (H3):** `OSDEMS Digital`
- **Texto (párrafo):**  
  `Transformamos la supervivencia digital en crecimiento transformador. Somos tu socio estratégico en la revolución digital para empresas de todos los tamaños y sectores.`
- **Iconos sociales** (enlaces):
  - Facebook → `https://facebook.com/osdemsdigital`
  - Instagram → `https://instagram.com/osdemsdigital`
  - YouTube → `https://youtube.com/osdemsdigital`
  - LinkedIn → `https://linkedin.com/company/osdemsdigital`
  - WhatsApp → `https://wa.me/523326225912`

**En Elementor:**  
- Widget **Título** para “OSDEMS Digital”.  
- Widget **Editor de texto** (o **Texto**) para el párrafo.  
- Widget **Iconos sociales** (o **Redes sociales**): añade cada red y pega la URL. Si no tienes ese widget, usa varios **Icono** o **Botón** con enlace.

---

## Columna 2: Enlaces rápidos (menú del sitio)

**Título (H3):** `Enlaces Rápidos`

**Lista de enlaces** (texto del enlace → a dónde va):

| Texto del enlace           | Enlace (ajusta si tu sitio usa otras URLs) |
|----------------------------|--------------------------------------------|
| Home                      | Tu URL de inicio (ej: `/` o `/inicio`)     |
| About Us                  | Página “Quiénes somos” / About             |
| Services                  | Página Servicios                           |
| Industries                | `#industrias` o la página que tengas       |
| Premium                   | Página Premium                             |
| Mantto Web                | Página Mantenimiento Web                   |
| Agentivas + Conversión Web| Página Experiencias / Agentivas            |
| Product Branding          | Página Product Branding                    |

**En Elementor:**  
- Widget **Título** → “Enlaces Rápidos”.  
- Widget **Lista de iconos** o **HTML** para los ítems con enlace, **o** un widget **Menú de navegación** y creas en **Apariencia → Menús** un menú solo para el footer con esos enlaces. Luego en la columna arrastras “Nav Menu” y eliges ese menú.

---

## Columna 3: Contacto

**Título (H3):** `Contacto`

**Lista (cada ítem con enlace donde aplique):**

- **Sitio web:** osdemsdigital.com → `https://osdemsdigital.com`
- **Email:** hola@osdemsdigital.com → `mailto:hola@osdemsdigital.com`
- **Teléfono 1:** +52 (33) 2622 5912 → `tel:+523326225912`
- **Teléfono 2:** +52 (33) 1174 4584 → `tel:+523311744584`
- **Dirección (con enlace a mapa):**  
  Blvd. Puerta de Hierro 5153 Fracc. Plaza Andares Zapopan, Jalisco 45116 Piso 2  
  → `https://www.google.com/maps/search/?api=1&query=Blvd.+Puerta+de+Hierro+5153+Fracc.+Plaza+Andares+Zapopan+Jalisco+45116`

**En Elementor:**  
- Widget **Título** → “Contacto”.  
- Widget **Lista de iconos** (icono + texto + enlace) o varios **Editor de texto** con enlaces. Puedes usar iconos de teléfono, correo, mapa si el widget lo permite.

---

## Columna 4: Horarios + CTA

**Título (H3):** `Horarios`

**Lista (solo texto, sin enlace):**

- Lunes a Viernes: 9:00 - 19:00  
- Sábados: 10:00 - 14:00  
- Soporte 24/7 para clientes  
- Citas previa cita  

**Bloque CTA (llamada a la acción):**

- **Título (H4):** `¡Transforma tu negocio hoy!`
- **Botón:** texto `Consultoría Gratuita`, enlace:  
  `https://wa.me/523326225912?text=Hola%20OSDEMS%20Digital,%20quiero%20una%20consultoría%20gratuita`  
  (opcional: icono de WhatsApp).

**En Elementor:**  
- **Título** “Horarios”.  
- **Lista de iconos** o **Texto** para los horarios.  
- **Título** (H4) “¡Transforma tu negocio hoy!”.  
- **Botón** con el texto y la URL de WhatsApp; si puedes, añade el icono de WhatsApp.

---

## Paso 3: Franja de copyright (debajo de las 4 columnas)

**Fuera** de las 4 columnas (otra sección debajo, ancho completo):

**Línea 1:**  
`© 2026 OSDEMS Digital - Todos los derechos reservados. | "Primero se sobrevive, después se aumenta" - Transformación Digital Integral para Empresas`

**Línea 2 (texto más pequeño):**  
`Sitio web desarrollado con tecnología de punta por OSDEMS Digital - Experiencia optimizada para conversión`

**En Elementor:**  
- Nueva **Sección** de una columna, fondo oscuro o igual que el footer.  
- Widget **Editor de texto** o **Texto** con esas dos líneas. La segunda en `<small>` o con tamaño de fuente más pequeño en el estilo del widget.

---

## Paso 4: Ajustes rápidos de estilo (opcional)

- **Fondo del footer:** color oscuro (ej. `#0a0a1a` o similar al resto del sitio).  
- **Texto:** claro (blanco o gris claro).  
- **Enlaces:** mismo color que el resto del sitio; hover un poco más claro o subrayado.  
- **Responsive:** en móvil conviene que las 4 columnas pasen a 1 o 2 columnas (Elementor lo hace con el orden de columnas en tablet/móvil).

---

## Resumen del contenido a copiar/pegar

**Columna 1 – Título:** OSDEMS Digital  
**Columna 1 – Párrafo:**  
Transformamos la supervivencia digital en crecimiento transformador. Somos tu socio estratégico en la revolución digital para empresas de todos los tamaños y sectores.

**Columna 2 – Título:** Enlaces Rápidos  
**Columna 2 – Enlaces:** Home | About Us | Services | Industries | Premium | Mantto Web | Agentivas + Conversión Web | Product Branding

**Columna 3 – Título:** Contacto  
**Columna 3 – Datos:** web, hola@osdemsdigital.com, +52 (33) 2622 5912, +52 (33) 1174 4584, dirección con enlace a Google Maps

**Columna 4 – Título:** Horarios  
**Columna 4 – Texto:** Lunes a Viernes 9:00–19:00, Sábados 10:00–14:00, Soporte 24/7, Citas previa cita  
**Columna 4 – CTA:** ¡Transforma tu negocio hoy! + botón Consultoría Gratuita (WhatsApp)

**Copyright:**  
© 2026 OSDEMS Digital - Todos los derechos reservados. | "Primero se sobrevive, después se aumenta" - Transformación Digital Integral para Empresas  
Sitio web desarrollado con tecnología de punta por OSDEMS Digital - Experiencia optimizada para conversión

---

Cuando tengas el footer así en Elementor, ya será común a todas las pestañas. Si me dices en qué paso te quedas (por ejemplo “no encuentro Theme Builder” o “no tengo widget de iconos sociales”), te digo el siguiente clic concreto.
