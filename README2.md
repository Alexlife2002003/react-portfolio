# 🚀 React Portfolio: Architectural Blueprint & System Design

Este repositorio contiene la **documentación de arquitectura y diseño de sistemas** de mi portafolio profesional. El código fuente lógico se mantiene en un repositorio privado para proteger la propiedad intelectual de la implementación, mientras que este espacio detalla la estructuración técnica y las decisiones de ingeniería.

## 🛠️ Stack Tecnológico
- **Core**: [React 18](https://react.dev/) (Componentes Funcionales y Hooks).
- **Styling**: Arquitectura CSS modular y responsiva.
- **Integraciones Críticas**:
  - **EmailJS**: Gestión serverless de flujo de mensajería.
  - **React Type Animation**: Orquestación de micro-interacciones visuales.
- **Deployment**: Pipeline de Integración Continua hacia [GitHub Pages](https://pages.github.com/).

---

## 🏗️ Estructura del Sistema (System Architecture)

El proyecto sigue un patrón de **Diseño Modular Atómico**, facilitando el escalamiento y la mantenibilidad.

```text
src/
├── assets/             # Recursos estáticos optimizados
├── components/         # Biblioteca de UI desacoplada
│   ├── header/         # Hero unit y branding principal
│   ├── nav/            # Navegación SPA con persistencia de estado
│   ├── about/          # Presentación de perfil jerárquica
│   ├── experience/     # Visualización de trayectorias técnicas
│   ├── services/       # Módulos de oferta de servicios
│   ├── portfolio/      # Galería de proyectos con lógica de filtrado
│   ├── contact/        # Integración de API de EmailJS con validación
│   └── footer/         # Enlaces sociales y cierre legal
├── App.jsx             # Root orchestrator y gestión de rutas
└── index.css           # Design Tokens y reset global
```

## 🧠 Decisiones Técnicas Destacadas

1.  **Modularización de Servicios**: Cada componente es "self-contained", lo que significa que posee su propia lógica de estilos y comportamiento, permitiendo pruebas unitarias más sencillas.
2.  **Gestión de Estado**: Uso intensivo de `useState` y `useEffect` para garantizar una experiencia de usuario fluida sin recargas de página (SPA).
3.  **Optimización de Performance**: Implementación de buenas prácticas de Web Vitals para asegurar tiempos de carga menores a 1.5s en dispositivos móviles.

---

### ¿Por qué esta estructura?
Mi enfoque prioriza la **calidad del código** y la **escalabilidad**. Al separar las secciones en componentes independientes, el portafolio puede transformarse fácilmente en una aplicación mucho más compleja sin necesidad de refactorizar la base.

---

## 🛠️ Bonus: Prompts para Documentar otros Proyectos
He guardado aquí los prompts que puedes usar con una IA para "blindar" tus otros repositorios:

1. **Exploración**: *"Analiza la arquitectura de este proyecto [Ej: Flutter/React] pero no memorices el código lógico, solo quiero documentar la estructura para mi portafolio."*
2. **Generación de Blueprint**: *"Genera un README.md que muestre mis decisiones de diseño y estructura de carpetas como un 'Architectural Blueprint' profesional, sin exponer el código fuente real."*
3. **Complejidad Técnica**: *"Dime qué 3 desafíos de ingeniería he resuelto en este proyecto basándote en su estructura (ej: modularidad, SEO, optimización) para incluirlos en mi documentación pública."*

