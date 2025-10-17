# Comparación: lite-server vs Vite para TypeScript + RxJS

Este proyecto tiene dos ramas que demuestran diferentes aproximaciones para usar RxJS con TypeScript:

## 🌿 Ramas disponibles

### `lite-server-rxjs` - Configuración tradicional
- TypeScript Compiler (tsc) manual
- lite-server para servir archivos
- Import maps para resolver módulos RxJS

### `vite-rxjs` - Configuración moderna
- Vite como bundler y servidor de desarrollo
- Resolución automática de módulos
- Hot Module Replacement

## 📊 Comparación detallada

| Aspecto | lite-server-rxjs | vite-rxjs |
|---------|------------------|-----------|
| **Configuración inicial** | Compleja - Requiere import maps | Simple - Zero config |
| **Resolución de módulos** | Manual con import maps | Automática |
| **Compilación TypeScript** | Manual con `tsc` | Automática en memoria |
| **Hot reload** | ❌ No | ✅ Sí |
| **Velocidad de desarrollo** | Lenta - rebuild manual | Rápida - cambios instantáneos |
| **Build para producción** | Manual con scripts | Optimizado automáticamente |
| **Curva de aprendizaje** | Educativa - ves cada paso | Productiva - te enfocas en código |
| **Tamaño de configuración** | Media - tsconfig + import maps | Mínima - solo vite.config.js |

## 🎯 Propósito educativo

### Para estudiantes - Empezar con `lite-server-rxjs`
**¿Por qué?** Te enseña:
- Cómo funciona la compilación TypeScript por debajo
- Qué problemas resuelven los bundlers
- Por qué existen los import maps
- La diferencia entre desarrollo y producción

### Para productividad - Usar `vite-rxjs`
**¿Por qué?** Te da:
- Experiencia de desarrollo moderna
- Workflow similar a Angular/React
- Menos fricción, más código
- Herramientas que usan profesionales

## 🚀 Comandos para cambiar entre ramas

```bash
# Ver ramas disponibles
git branch -a

# Cambiar a configuración tradicional
git checkout lite-server-rxjs
npm install
npm run build
npm start

# Cambiar a configuración moderna
git checkout vite-rxjs
npm install
npm start
```

## 📝 Archivos clave en cada rama

### lite-server-rxjs
```
├── src/
│   ├── index.html          # Con import maps
│   ├── index.ts           # Código TypeScript
│   └── styles.css
├── tsconfig.json          # Configuración TypeScript
├── bs-config.json         # Configuración lite-server
├── package.json           # Scripts tradicionales
└── README_LITE_SERVER.md  # Documentación específica
```

### vite-rxjs
```
├── src/
│   ├── index.html          # Sin import maps
│   ├── index.ts           # Mismo código TypeScript
│   └── styles.css
├── tsconfig.json          # Configuración TypeScript
├── vite.config.js         # Configuración Vite mínima
├── package.json           # Scripts modernos
└── README_VITE.md         # Documentación específica
```

## 🎓 Flujo de aprendizaje recomendado

### 1. Empezar con lite-server-rxjs
- Entender cada paso del proceso
- Ver cómo se resuelven los módulos
- Apreciar la complejidad que manejan las herramientas modernas

### 2. Migrar a vite-rxjs
- Experimentar la diferencia en velocidad
- Notar la simplicidad de configuración
- Entender por qué la industria usa bundlers

### 3. Reflexionar sobre las diferencias
- ¿Qué problemas resuelve Vite?
- ¿Cuándo usarías cada aproximación?
- ¿Cómo afecta esto a la productividad?

## 💡 Conceptos clave que se aprenden

### Con lite-server-rxjs:
- Compilación TypeScript explícita
- Resolución de módulos en el navegador
- Import maps y su propósito
- Separación entre desarrollo y build

### Con vite-rxjs:
- Bundling moderno
- Hot Module Replacement
- Optimización automática
- Developer Experience (DX) moderna

## 🎯 Conclusión

Ambas aproximaciones son válidas y enseñan conceptos importantes:

- **lite-server-rxjs**: Te enseña los fundamentos y cómo funcionan las cosas por debajo
- **vite-rxjs**: Te muestra las herramientas modernas y cómo ser productivo

La progresión natural es entender primero los fundamentos (lite-server) y luego adoptar las herramientas modernas (Vite) con una comprensión profunda de lo que hacen por ti.
