# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# HerUX Website 🎨

Sitio web oficial de **HerUX**, la primera comunidad de Mujeres Profesionales apasionadas por la Experiencia del Usuario en Guayaquil-Ecuador.

## 🚀 Tecnologías

Este proyecto está construido con las siguientes tecnologías modernas:

- **React** `19.1.0` - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** `5.8.3` - Superset tipado de JavaScript
- **Vite** `7.0.4` - Herramienta de construcción y desarrollo rápido
- **Tailwind CSS** `4.1.11` - Framework de CSS utilitario
- **DaisyUI** `5.0.46` - Biblioteca de componentes para Tailwind CSS

## 🎨 Diseño y Tema

### Paleta de Colores
- **Primario**: `#A0388B` (Morado HerUX)
- **Secundario**: `#4B662C` (Verde)
- **Acento**: `#6B255D` (Morado oscuro)
- **Error**: `#BA1A1A` (Rojo)
- **Base**: Tonos blancos y grises neutros

### Tema Personalizado
El proyecto utiliza un tema personalizado de DaisyUI llamado `herux_ligth` configurado en `src/index.css` con los colores oficiales de la marca.

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd website-herux
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 📁 Estructura del Proyecto

```
website-herux/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Barra de navegación fija
│   │   └── HeroSection.tsx     # Sección principal con carousel
│   ├── assets/
│   ├── App.tsx                 # Componente principal
│   ├── App.css                 # Estilos globales
│   ├── index.css               # Configuración de Tailwind y tema DaisyUI
│   └── main.tsx                # Punto de entrada
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎯 Características

### ✨ Componentes Implementados

#### Navbar
- **Posición fija** en la parte superior
- **Logo** de HerUX con diseño personalizado
- **Enlaces de navegación**: Contáctanos, Eventos
- **Iconos sociales**: LinkedIn, Instagram, TikTok, YouTube
- **Botón CTA**: "Quiero ser voluntario"
- **Menú responsive** para dispositivos móviles
- **Efecto backdrop blur** con transparencia

#### Hero Section
- **Carousel/Slider** con múltiples slides
- **Fondo morado** con color primario de la marca
- **Contenido centrado** y responsive
- **Botones de acción**: "Únete a la comunidad" y "Conoce más"
- **Navegación**: Flechas laterales e indicadores
- **Animaciones suaves** entre transiciones

### 📱 Responsive Design
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: Adaptación automática para tablet y desktop
- **Componentes flexibles**: Se ajustan a diferentes tamaños de pantalla

## 🎨 Personalización del Tema

El tema personalizado se encuentra en `src/index.css`:

```css
@plugin "daisyui/theme" {
  name: "herux_ligth";
  default: true;
  --color-primary: #A0388B;
  --color-secondary: #4B662C;
  /* ... más configuraciones */
}
```

## 🚀 Despliegue

### Construcción para Producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Previsualización Local
```bash
npm run preview
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

Desarrollado con ❤️ para la comunidad **HerUX** - Mujeres Profesionales en UX/UI de Guayaquil, Ecuador.

---

### 🔗 Enlaces Útiles

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI Components](https://daisyui.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

**¿Tienes preguntas o sugerencias?** ¡Contáctanos a través de nuestros canales oficiales! 💜