# OSDEMS Digital – Sitio web

Sitio estático del ecosistema de servicios OSDEMS Digital (inicio, about, servicios, experiencias agentivas, mantto web, premium, product branding).

## Publicar en GitHub Pages

1. **Crear un repositorio en GitHub**
   - Entra en [github.com/new](https://github.com/new).
   - Nombre del repo (ej.: `osdems-digital` o `digital-hml`).
   - Público, sin README ni .gitignore (ya los tienes en el proyecto).

2. **Inicializar Git y subir el código** (en la carpeta del proyecto):

   ```bash
   git init
   git add .
   git commit -m "Sitio listo para GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
   git push -u origin main
   ```

   Sustituye `TU_USUARIO` y `NOMBRE_REPO` por tu usuario de GitHub y el nombre del repositorio.

3. **Activar GitHub Pages**
   - En el repo: **Settings** → **Pages**.
   - En **Source** elige **Deploy from a branch**.
   - **Branch**: `main`, carpeta **/ (root)**.
   - Guarda.

4. **Ver el sitio**
   - En unos minutos estará en:  
     `https://TU_USUARIO.github.io/NOMBRE_REPO/`  
   - La página de inicio será:  
     `https://TU_USUARIO.github.io/NOMBRE_REPO/index.html`

## Estructura para GitHub Pages

- En la **raíz del repo** están los HTML y la carpeta `assets/` (CSS y JS) para que GitHub Pages sirva el sitio desde la raíz.
- La carpeta `src/` es la fuente de trabajo; si editas ahí, vuelve a copiar los archivos a la raíz y actualiza las rutas antes de hacer commit (o mantén solo la raíz como fuente si prefieres).

## Requisitos

- Navegador actual.
- Cuenta en GitHub para publicar.
