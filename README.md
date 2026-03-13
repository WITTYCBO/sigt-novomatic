# SIGT — Solicitud Pendrive Novomatic

**Automáticos Canarios · Sistema Integrado de Gestión Técnica**

Aplicación PWA para gestionar solicitudes de pendrive de actualización Novomatic desde el móvil del técnico de campo.

---

## ¿Qué hace?

Guía al técnico en 4 pasos para generar una solicitud completa:

1. **Datos de solicitud** — Local, fecha, técnico, número de puesto del error
2. **Datos de máquinas** — N.º serie, fabricación, modelo y estado de error activo por máquina
3. **Fotografías** — Placa de identificación y pantalla de error de cada máquina
4. **Envío** — Genera mensaje formateado y lo envía por WhatsApp al equipo Novomatic

---

## Instalación en el móvil (PWA)

1. Abre el enlace en Chrome (Android) o Safari (iPhone):  
   👉 **https://WITTYCBO.github.io/sigt-novomatic/**

2. En Chrome Android: menú `⋮` → *"Añadir a pantalla de inicio"*  
   En Safari iOS: botón compartir `⬆` → *"Añadir a pantalla de inicio"*

3. La app se instala como si fuera nativa y **funciona sin conexión**.

---

## Estructura

```
sigt-novomatic/
├── index.html       # Aplicación principal
├── manifest.json    # Configuración PWA
├── sw.js            # Service Worker (modo offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## Versión

`v1.1 · Marzo 2026`  
Desarrollado con SIGT · Automáticos Canarios
