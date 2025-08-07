
# Documentación del Proyecto: Admin Panel

## Descripción General

Este proyecto es una plantilla de panel de administración construida con Next.js, TypeScript y TailwindCSS. Su objetivo es servir como base para sistemas administrativos modernos, con componentes reutilizables, rutas protegidas y una estructura escalable.

## ¿Para qué funciona esta plantilla?
- Panel de administración para aplicaciones web.
- Gestión de usuarios, productos, reportes, proveedores y configuraciones.
- Base para proyectos SaaS, e-commerce, dashboards internos, etc.

## Creación del Proyecto
1. Se creó el proyecto con Next.js y TypeScript:
   ```bash
   npx create-next-app@latest admin-panel -ts
   ```
2. Se añadieron y configuraron dependencias como TailwindCSS, next-themes, Radix UI, sonner, etc.
3. Se organizó la estructura en carpetas: `src/app` para rutas, `src/components` para componentes reutilizables, y `src/lib` para utilidades.

## Dockerización
1. Se creó un archivo `Dockerfile` multi-stage para construir y servir la app en producción.
2. Se añadió un `.dockerignore` para evitar copiar archivos innecesarios.
3. Se modificó el script de inicio en `package.json` para usar el puerto de la variable de entorno `PORT` (requerido por Railway y otros servicios cloud).

## CI/CD con GitHub Actions
1. Se creó el archivo `.github/workflows/ci.yml` para automatizar la construcción, lint y pruebas en cada push/pull request.
2. Se ajustó la rama principal de `main` a `master` para que el workflow se ejecute correctamente.

## Despliegue en Railway
1. Se conectó el repositorio de GitHub a Railway.
2. Railway detectó el proyecto y lo desplegó automáticamente.
3. Se solucionó un error común: "Application failed to respond". Esto se debió a que la app escuchaba en el puerto 3000 fijo, pero Railway requiere que se use el puerto de la variable de entorno `PORT`. Se corrigió el script de inicio y el Dockerfile para soportar esto.

## Complicaciones y Soluciones
- **Error de puerto en Railway:** La app no respondía porque escuchaba en el puerto 3000 en vez de `$PORT`. Se solucionó modificando el script de inicio y el Dockerfile.
- **Workflow de GitHub Actions no visible:** El workflow no aparecía porque estaba configurado para la rama `main` y el repositorio usaba `master`. Se actualizó la configuración.

## Ejecución Local
- Para desarrollo: `npm run dev`
- Para producción local: `npm run build && npm start`
- Para Docker:
  ```bash
  docker build -t admin-panel .
  docker run -p 3000:3000 admin-panel
  ```

## Créditos
Plantilla creada y adaptada por el equipo de desarrollo. Basada en tecnologías modernas para facilitar la creación de paneles administrativos escalables.
