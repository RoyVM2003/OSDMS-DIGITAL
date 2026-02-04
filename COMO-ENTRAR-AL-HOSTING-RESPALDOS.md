# Cómo llegar al hosting para buscar respaldos

## 1. ¿Dónde está tu hosting?

El hosting es **donde contrataste** que tu página WordPress esté en internet. Suele ser una de estas:

- **Donde compraste el dominio** (ej. GoDaddy, Namecheap, Google Domains, etc.)
- **Una empresa de hosting** (ej. HostGator, SiteGround, Bluehost, Hostinger, Don Web, Webempresa, Raiola, etc.)
- **Tu propio proveedor** si alguien más montó la página (pregunta a quien la configuró)

---

## 2. Cómo entrar al panel del hosting

### Opción A: Tienes el correo de bienvenida
Cuando contrataste el hosting te mandaron un **correo** con:
- **URL para entrar** (ej. `https://panel.tuproveedor.com` o `https://tudominio.com:2083` para cPanel)
- **Usuario** (a veces tu correo o un nombre de usuario)
- **Contraseña**

Busca en tu correo palabras como: "hosting", "cuenta creada", "bienvenido", "acceso al panel", "cPanel", "Plesk".

### Opción B: No encuentras el correo
1. **Revisa quién te cobra** el hosting cada mes o año (tarjeta, PayPal, factura). Ahí suele salir el nombre del proveedor.
2. Entra a la **página oficial** de ese proveedor (ej. hostgator.com, siteground.com).
3. Busca **“Iniciar sesión”** / **“Login”** / **“Mi cuenta”** / **“Client area”**.
4. Inicia sesión con el **correo y contraseña** con los que te registraste. Si no recuerdas la contraseña, usa **“¿Olvidaste tu contraseña?”**.

---

## 3. Una vez dentro del panel, ¿dónde están los respaldos?

Depende del tipo de panel:

### Si ves **cPanel** (muy común)
- Busca una sección que diga **“Archivos”** o **“Files”**.
- Ahí suele haber **“Backup”** / **“Backup Wizard”** / **“Copias de seguridad”**.
- O busca en el **buscador del panel** (arriba) la palabra **“backup”** o **“respaldo”**.

### Si ves **Plesk**
- En el menú lateral busca **“Backup”** o **“Copias de seguridad”**.
- Ahí puedes ver respaldos por fecha y **restaurar** uno.

### Si es un panel propio del proveedor (ej. Hostinger, SiteGround, etc.)
- Busca en el menú: **“Backups”**, **“Respaldos”**, **“Restore”**, **“Website backup”**.
- Suele estar en la sección de tu **dominio** o **sitio web**, no en “Correo” ni “Dominios”.

---

## 4. Resumen rápido

| Paso | Qué hacer |
|------|-----------|
| 1 | Saber **quién es tu proveedor** (correo de bienvenida o quién te cobra el hosting). |
| 2 | Entrar a la **web del proveedor** → Iniciar sesión (Mi cuenta / Login). |
| 3 | Dentro del panel, buscar **“Backup”** / **“Respaldo”** / **“Restore”**. |
| 4 | Elegir una **fecha anterior** a cuando falló la página y pulsar **Restaurar**. |

---

## 5. Si no tienes acceso

- Si **otra persona** contrató el hosting, pídele que entre al panel y busque Backups, o que te pase el usuario y contraseña (o que restaure él el respaldo).
- Si **no recuerdas** el proveedor, revisa el **dominio** de tu página: a veces el **NS (nameservers)** o el **WHOIS** del dominio indican el hosting; puedes buscarlo en who.is poniendo tu dominio.

Cuando sepas el **nombre de tu hosting** (ej. Hostinger, cPanel de Don Web, etc.), se puede afinar: “entra aquí → clic aquí → Restaurar”.
