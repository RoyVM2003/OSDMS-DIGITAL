# Guía: Modificar el Home en WordPress como el sitio estático

Esta guía te lleva **paso a paso** para que el home de tu WordPress quede igual al que tenemos en el proyecto estático (y a osdemsdigital.com).

---

## Antes de empezar

1. **Respaldo:** Si puedes, haz una copia de seguridad del sitio o al menos de la página de Inicio (desde el hosting o un plugin de backup).
2. **Entra a WordPress:** Inicia sesión como administrador.
3. **Abre la página de Inicio:** Ve a **Páginas → Todas las páginas** y edita la que usa como **Portada** (o la que sea tu home).

En WordPress suele usarse:
- Un **page builder** (Elementor, Gutenberg, WPBakery, etc.) o
- Bloques clásicos / HTML.

Te iré guiando por **secciones**. Puedes hacerlas en el orden que quieras, pero el orden lógico del home es el que sigue.

---

## 1. Hero (arriba del todo)

**Objetivo:** Que lo primero que se vea sea:

- **OSDEMS DIGITAL GROUP** (texto pequeño, tipo “eyebrow”)
- **Transformamos tu presencia digital** (título principal)
- **Impulsa tu marca al siguiente nivel** (subtítulo)
- **Hacemos de lo complejo algo sencillo y fácil de manejar con ideas creativas e innovadoras.**
- **Nuestra Misión:** *Somos un equipo dedicado a posicionar tu marca de forma creativa, incrementando tus ventas y mejorando tu modelo de negocio.*
- **Síguenos** (texto pequeño)
- Botón: **Contáctanos** (enlace a WhatsApp)

**En WordPress:**

- Si usas **bloques (Gutenberg):**  
  - Añade bloques de **Párrafo** y **Encabezado** para cada línea.  
  - Para el botón usa un bloque **Botón** y en “Enlace” pon tu enlace de WhatsApp (ej: `https://wa.me/523326225912?text=Hola,%20me%20interesa%20obtener%20más%20información`).
- Si usas **Elementor (u otro page builder):**  
  - Crea una sección “Hero” y dentro coloca widgets de Título, Texto y Botón con ese contenido y enlace.

Cuando tengas esta parte lista, seguimos con la siguiente.

---

## 2. Franja de tecnologías

**Objetivo:** Una banda horizontal con los nombres de tecnologías (como un marquesina):  
TypeScript, React, Python, Node.js, Go, C++, C, C#, PHP, Java, JavaScript.

**En WordPress:**

- Opción A: Un bloque de **Párrafo** o **HTML** con ese texto separado por puntos o guiones, y en CSS (o en “Estilos del bloque”) darle un aspecto de franja (fondo, padding, tipografía).
- Opción B: Si tu tema o page builder tiene un “marquee” o “texto en movimiento”, úsalo con esa lista.
- Opción C: Un bloque **HTML personalizado** con algo como:  
  `<p class="tech-strip">TypeScript · React · Python · Node.js · Go · C++ · C · C# · PHP · Java · JavaScript</p>`  
  y luego en **Apariencia → Personalizar → CSS adicional** (o en el tema) añades estilos para `.tech-strip` (tamaño, color, fondo).

---

## 3. “No vendemos código; vendemos resultados medibles”

**Objetivo:** Una sección con:

- Título: **En OSDEMS Digital no vendemos código; vendemos resultados medibles.**
- Párrafo: *Transformamos tus procesos operativos, modernizamos tu presencia digital y te entregamos las herramientas para que vendas más, trabajes menos y crezcas más rápido.*
- Párrafo: *¿Listo para hablar sobre cómo podemos impulsar tu negocio? Agenda una consultoría gratuita con nosotros hoy mismo.*
- Botón: **Agenda tu Consultoría** → enlace WhatsApp (ej: `https://wa.me/523326225912?text=Hola,%20quiero%20agendar%20una%20consultoría%20gratuita`).

**En WordPress:**  
Una sección con **Título (H2)** + dos **Párrafos** + un **Botón**. Mismo criterio que el hero: bloques o widgets según uses Gutenberg o page builder.

---

## 4. Tecnologías que impulsan el éxito

**Objetivo:** Título + subtítulo + 6 “tarjetas”:

- **Título:** Tecnologías que impulsan el **éxito**
- **Subtítulo:** Dominamos las herramientas más potentes del mercado para construir soluciones digitales robustas y escalables.

Cada tarjeta tiene: **nombre**, **descripción** y enlace “Descubre más” (puede ir a tu página de Servicios o a la sección correspondiente).

| Tecnología | Descripción corta |
|------------|-------------------|
| WordPress | Diseño y desarrollo de sitios web administrables, blogs y tiendas online con la plataforma más popular del mundo. |
| React | Desarrollo de aplicaciones web modernas y de alto rendimiento. Creamos experiencias de usuario fluidas como una app nativa. |
| Angular | Crea soluciones corporativas de alta funcionalidad con Angular. Perfecto para intranets y proyectos que requieren máximo orden y mantenimiento a largo plazo. |
| Python | El lenguaje de programación más versátil. Ideal para inteligencia artificial, análisis de datos, automatización y servidores de alto rendimiento. |
| PHP | El lenguaje de programación más popular para la web. Desarrollamos sitios dinámicos y funcionales, desde blogs hasta complejas aplicaciones. |
| Laravel | La herramienta perfecta para proyectos complejos. Laravel agiliza el desarrollo de e-commerce y sistemas empresariales de alto rendimiento. |

**En WordPress:**

- Con **Gutenberg:** usa una **Cuadrícula** o **Columnas** (por ejemplo 3 columnas x 2 filas) y en cada celda: título (H3), párrafo y enlace “Descubre más”.
- Con **Elementor:** sección con **Columnas** y dentro widgets de **Icono + título + texto + botón/enlace** por tecnología.

---

## 5. Migración de WordPress a React

**Objetivo:** Una sección con:

- Etiqueta: **Servicio Especializado**
- Título: **Migración de WordPress a React**
- Pregunta: *¿Tu sitio en WordPress se ha quedado lento y limitado? Te lo modernizamos.*
- 4 “beneficios” en cajas o iconos:
  - Rendimiento 10X Más Rápido
  - Diseño Únicos y Modernos
  - Mejor SEO Técnico
  - Conversiones Mejoradas

**En WordPress:**  
Una sección con título (H2) y subtítulo/párrafo, y debajo 4 bloques o columnas (Icono + texto) para cada beneficio.

---

## 6. Sistemas de Gestión y Ventas

**Objetivo:**

- Título: **Sistemas de Gestión y Ventas**
- Subtítulo: *Integramos todo el ecosistema de tu negocio en una sola plataforma.*
- 4 tarjetas:
  - **CRMs Personalizados** – No te adaptes a un CRM genérico. Te creamos el tuyo propio, que se moldea a tus procesos de venta específicos para que tu equipo sea más productivo.
  - **Sistemas de Cotización** – Genera propuestas profesionales en segundos, con cálculos automáticos de costos y descuentos, y envíalas directamente al cliente por email.
  - **Bases de Datos Centralizadas** – Integramos toda tu información (clientes, inventario, ventas) en un solo lugar, eliminando errores y duplicidad de trabajo.
  - **Paneles de Control** – Toma decisiones con datos, no con suposiciones. Te entregamos paneles visuales en tiempo real.

**En WordPress:**  
Igual que la sección de tecnologías: título, subtítulo y 4 columnas o tarjetas (título + párrafo).

---

## 7. ¡Estamos aquí para ti!

**Objetivo:**

- Título: **¡ Estamos aquí para ti !**
- Subtítulo en cursiva: *¡Donde tú estés, nosotros estaremos!*
- Párrafo: *Estamos a un clic de distancia. Encuéntranos fácilmente en nuestra oficina, por WhatsApp o en nuestras redes sociales, y estaremos siempre disponibles para asistirte.*
- Botón: **Enviar Mensaje** → WhatsApp (ej: `https://wa.me/523326225912?text=Hola%20OSDEMS%20Digital,%20necesito%20más%20información`).

**En WordPress:**  
Una sección con título (H2), dos párrafos (uno en cursiva) y un botón.

---

## 8. Ubicación

**Objetivo:**

- Título: **Ubicación**
- Etiqueta: **Dirección**
- Dirección: *Blvd. Puerta de Hierro 5153, Fracc. Plaza Andares — 45116 Piso 2, Zapopan, Jalisco*
- Dos botones: **Waze** y **Google Maps** con estos enlaces:
  - Waze: `https://waze.com/ul?ll=20.7092339,-103.4134115&navigate=yes`
  - Google Maps: `https://www.google.com/maps/place/OSDEMS+Digital/@20.7095831,-103.4158221,17z`

**En WordPress:**  
Título, párrafo con la dirección y dos botones con esos enlaces. Si tu tema tiene bloque “Mapa”, puedes añadirlo después.

---

## 9. Contactanos (formulario + datos)

**Objetivo:**

- Título: **Contactanos**
- Texto: *En Osdems Digital será un placer atenderte; escríbenos por cualquiera de nuestros medios.*
- **Formulario** con campos:
  - Tu nombre (obligatorio)
  - Correo empresarial (obligatorio)
  - Nombre de la empresa
  - Número telefónico
  - Selector: Branding, Diseño web, Diseño gráfico, UI/UX, Experiencial, Logotipo, Recursos de marca, Decks, Otros
  - Mensaje (área de texto)
  - Botón **Enviar**
- **Datos de contacto:** Guadalajara, hello@osdemsdigital.com, teléfonos, dirección, enlaces a redes (Facebook, Instagram, YouTube, TikTok).

**En WordPress:**

- **Formulario:** Usa el plugin **Contact Form 7** (o el que ya tengas). Crea un formulario con esos campos y el shortcode pégalo en la página donde quieras “Contactanos”. Configura el envío por email a hello@osdemsdigital.com (o el que uses).
- **Datos y redes:** Una columna o bloque al lado (o debajo) del formulario con párrafos y enlaces para correo, teléfonos, dirección y redes.

---

## Orden recomendado al editar

1. Hero (sección 1)  
2. Franja de tecnologías (2)  
3. Resultados medibles (3)  
4. Tecnologías que impulsan el éxito (4)  
5. Migración WP a React (5)  
6. Sistemas de Gestión y Ventas (6)  
7. Estamos aquí para ti (7)  
8. Ubicación (8)  
9. Contactanos (9)  

---

## Siguiente paso

Cuando quieras, dime:

- **Con qué estás editando** (Gutenberg, Elementor, otro page builder o tema).
- **En qué sección vas** (por ejemplo: “estoy en el Hero” o “voy a hacer las tarjetas de tecnologías”).

y te voy guiando **bloque por bloque** o **widget por widget** con instrucciones concretas para tu caso (por ejemplo: “añade un bloque Encabezado, pon este texto, luego un bloque Párrafo…”).

Si ya tienes una página de Inicio con contenido antiguo, podemos decidir si la vacías y empiezas desde cero o si vas reemplazando sección por sección; dime cómo la tienes ahora y lo adaptamos.
