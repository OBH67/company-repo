# Company - Sitio Web

Proyecto: sitio web corporativo (Next.js + Tailwind + TypeScript) que muestra los servicios de una empresa tecnológica.

## Descripción
Este repositorio contiene una landing page moderna construida con Next.js (App Router), Tailwind CSS y TypeScript. Incluye componentes para Hero, Servicios, Portafolio, Contacto y una ilustración/hero de robot para la sección principal.

Se ha integrado una imagen `public/robot-hero.png` para el hero y algunas animaciones CSS con utilidades de Tailwind.

## Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Estructura principal
- `app/` - Rutas del App Router
- `components/` - Componentes React reutilizables
- `public/` - Imágenes y activos públicos
- `styles/` o `app/globals.css` - Estilos globales (Tailwind)

## Requisitos
- Node.js 18+ recomendado
- npm o yarn

## Instalación y ejecución (desarrollo)

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador:

```
http://localhost:3000
```

## Construcción y producción

```bash
npm run build
npm start
```

## Notas importantes
- La imagen hero principal está en `public/robot-hero.png`.
- Si vas a trabajar con n8n u otros servicios externos, agrega la configuración/credenciales en variables de entorno (no subir archivos `.env` al repositorio).

## Servicio de contacto (envío de correos)

Se añadió un endpoint serverless para enviar correos cuando alguien use el formulario de contacto:

- `POST /api/contact` — recibe JSON: `{ name, email, message }`.

Providers soportados:
- **SendGrid**: configura `SENDGRID_API_KEY` y `CONTACT_EMAIL` (destino). Opcional `FROM_EMAIL` y `FROM_NAME`.
- **SMTP (fallback)**: configura `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` y `CONTACT_EMAIL`.

Ejemplo con `fetch` desde el cliente:

```js
await fetch('/api/contact', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ name: 'Juan', email: 'juan@example.com', message: 'Hola!' })
});
```

Entorno recomendado en Vercel (Environment Variables):

- `CONTACT_EMAIL` = tu-email@dominio.com
- `SENDGRID_API_KEY` = <tu_sendgrid_api_key> (opcional si usas SendGrid)
- `FROM_EMAIL` = no-reply@tudominio.com (opcional)

Si usas SMTP como fallback:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Nota: Si usas nodemailer (SMTP) instala la dependencia en el proyecto: `npm install nodemailer`.

## Contribuciones
1. Haz un fork y crea una rama: `feature/tu-cambio`
2. Añade cambios y commitea: `git add . && git commit -m "feat: descripción"`
3. Push a tu fork y crea Pull Request.

## Licencia
Añade la licencia que prefieras (por ejemplo MIT) en `LICENSE`.

---

Si quieres, puedo agregar secciones adicionales (deploy en Vercel, scripts útiles, chequeos de CI, o un `CONTRIBUTING.md`).
