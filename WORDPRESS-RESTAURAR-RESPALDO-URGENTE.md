# Cómo restaurar un respaldo en WordPress (URGENTE)

## Si ya tienes un respaldo en WordPress (plugin o hosting)

### Opción A: Respaldo con **UpdraftPlus** (o similar)
1. Entra a **WordPress** → **Complementos** (Plugins).
2. Abre **UpdraftPlus** (o el plugin de respaldos que uses).
3. Ve a la pestaña **“Restaurar”** o **“Restore”**.
4. Pulsa **“Subir archivos de respaldo”** (o **“Upload backup files”**).
5. Sube los archivos del respaldo (por ejemplo: `.zip` que te dio UpdraftPlus).
6. Cuando termine de subir, elige **“Restaurar”** y confirma.
7. Espera a que termine. **No cierres el navegador** hasta que diga que la restauración terminó.

### Opción B: Respaldo del **hosting** (cPanel, Plesk, etc.)
1. Entra al **panel de tu hosting** (donde contrataste el sitio).
2. Busca **“Backups”**, **“Respaldos”**, **“Restore”** o **“Copias de seguridad”**.
3. Elige la **fecha del respaldo** que quieras (uno de antes de que fallara algo).
4. Restaura **solo lo necesario**:
   - Si solo falló la página: a veces puedes restaurar solo **“Archivos”** o **“Files”**.
   - Si falló todo el sitio: **“Full restore”** o **“Restauración completa”**.
5. Confirma y espera. El hosting suele enviar un correo cuando termina.

### Opción C: Solo tienes un **archivo .zip** del respaldo
- Si el .zip es de **UpdraftPlus**: usa la **Opción A** (subir en UpdraftPlus y restaurar).
- Si el .zip es del **hosting**: descomprímelo en el servidor (vía **Administrador de archivos** o **File Manager** del hosting) sobre la carpeta de WordPress, **o** usa la herramienta de “Restore” del hosting si la hay.

---

## Regla para no quedarse sin sitio

1. **Antes de tocar nada:** hacer respaldo (UpdraftPlus: “Backup now” / Respaldo ahora).
2. **Si algo sale mal:** entrar a “Restore” y restaurar el último respaldo que funcionaba bien.
3. **Cambios grandes:** si puedes, probar primero en un **entorno de pruebas** o **staging** (tu hosting o un plugin de staging).

---

## Resumen rápido

| Dónde está el respaldo | Qué hacer |
|------------------------|-----------|
| Plugin UpdraftPlus (o similar) | WordPress → Plugin → **Restore** → Subir .zip → Restaurar |
| Panel del hosting        | Hosting → Backups / Respaldos → Elegir fecha → Restaurar |
| Solo un .zip en tu PC    | Subirlo a UpdraftPlus (Restore) o al File Manager del hosting |

---

## Nota sobre este proyecto (digital hml)

Este repositorio es el **sitio estático (HTML/CSS/JS)** que se sube a **GitHub Pages**.  
Si tu sitio “que se quemó” es **WordPress** (otro dominio o mismo dominio pero en el servidor), el respaldo y la restauración se hacen **en WordPress o en el hosting**, no en GitHub Pages.  
Si me dices exactamente qué tienes (WordPress en qué hosting, o solo GitHub Pages), te digo el siguiente paso concreto (por ejemplo: “entra aquí, clic aquí”).
