# Transforma · sitio web

Sitio de Transforma (mejora y tecnología) construido con React + Vite, a partir del mockup `mockup_sitio_web_transforma 3.html`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run lint
```

## Estructura

- `src/pages/` — una página por ruta: Inicio, Quiénes somos, Servicios, Oracle ERP Fusion, Sectores, Temas clave, Contáctanos y 404.
- `src/data/` — todo el contenido editable: `config.js` (navegación, oferta de diagnóstico, política de datos), `services.js` (9 servicios) y `content.js` (valores, sectores, temas, textos de Oracle).
- `src/components/layout/` — barra superior, header con megamenú de servicios, footer y botón fijo en celulares.
- `src/components/ui/` — piezas reutilizables (botones, títulos de sección, banda CTA, etc.).
- Rutas por hash (`#/servicios/analitica`) con `src/hooks/useHashRoute.js`, sin dependencias extra.

## Formulario de contacto

`src/pages/Contact.jsx` envía a `/api/contact` (`api/contact.py`, FastAPI en Vercel Functions), que guarda en Postgres (`DATABASE_URL`).
La tabla está en `sql/schema.sql`; si la base ya existía con la versión anterior, ejecute las sentencias `ALTER TABLE` del mismo archivo.

En `npm run dev` la API no está disponible (el formulario muestra el mensaje de error); para probarla use `vercel dev`.

## Pendientes de contenido

- `privacyPolicyUrl` en `src/data/config.js` (enlace a la política de tratamiento de datos).
- Frases de los valores, retos por sector y resúmenes de los temas en `src/data/content.js` (marcados con `TODO`).
- Cita de un cliente en la página de Oracle (Fase II).
