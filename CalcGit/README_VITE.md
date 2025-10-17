# Calculadora TypeScript - Rama vite-rxjs

Esta rama demuestra cómo usar **RxJS con TypeScript** usando herramientas modernas:
- **Vite** como bundler y servidor de desarrollo
- **Resolución automática** de módulos de node_modules
- **Hot Module Replacement** para desarrollo rápido

## Configuración

### Dependencias
```json
{
  "dependencies": {
    "rxjs": "^7.x.x"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^7.x.x"
  }
}
```

### Scripts disponibles
```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build optimizado para producción
npm run preview  # Preview del build de producción
npm start        # Alias para npm run dev
```

## Características de esta configuración

### ✅ Ventajas
- **Zero config** - Funciona sin configuración adicional
- **Hot Module Replacement** - Cambios instantáneos sin recargar página
- **Resolución automática** de módulos de node_modules
- **TypeScript nativo** - No necesita compilación manual
- **Build optimizado** - Tree-shaking automático
- **Experiencia como Angular** - Import directo sin configuración

### 🚀 Beneficios para desarrollo
- **Velocidad**: Cambios se ven al instante
- **Simplicidad**: No necesitas pensar en import maps
- **Productividad**: Workflow moderno y eficiente

## Cómo funciona

### 1. Desarrollo (npm run dev)
- Vite sirve archivos TypeScript directamente
- Compilación TypeScript en memoria (súper rápida)
- Resolución automática de `import { fromEvent } from 'rxjs'`
- Hot reload cuando cambias código

### 2. Producción (npm run build)
- Compilación optimizada con esbuild
- Tree-shaking automático (solo incluye código usado)
- Minificación y optimización
- Genera archivos estáticos en `dist/`

## Uso de RxJS

En el código TypeScript:
```typescript
import { fromEvent, debounceTime, map } from 'rxjs';

// ¡Funciona automáticamente! Sin import maps ni configuración
const keyboardEvents$ = fromEvent<KeyboardEvent>(document, 'keydown');
```

## Comandos para esta rama

```bash
# Instalar dependencias
npm install

# Desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Configuración Vite

El archivo `vite.config.js` es mínimo:
```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',           // Carpeta fuente
  build: {
    outDir: '../dist',   // Carpeta de salida
    emptyOutDir: true
  },
  server: {
    open: false          // No abrir navegador automáticamente
  }
})
```

## Comparación con lite-server

### Lo que Vite resuelve automáticamente:
- ❌ **No necesitas** import maps
- ❌ **No necesitas** compilar manualmente con `tsc`
- ❌ **No necesitas** copiar archivos estáticos
- ❌ **No necesitas** configurar resolución de módulos
- ✅ **Obtienes** hot reload gratis
- ✅ **Obtienes** optimización automática
- ✅ **Obtienes** experiencia de desarrollo moderna

### Experiencia de desarrollo:
1. **Cambias código TypeScript** → Se ve inmediatamente en el navegador
2. **Añades import de RxJS** → Funciona automáticamente
3. **Guardas archivo** → Página se actualiza sin perder estado

**Conclusión**: Vite elimina la fricción y te permite concentrarte en el código, no en la configuración.
