# React + TypeScript + Vite

Для запуска проекта в режиме разработки:
-- Выполните команду npm run dev;
-- Перейдите по ссылке  ➜  Local:   http://localhost:5173/

Для сборки проекта:
-- Выполните команду npm run build;

Для запуска проекта в режиме продакшн:
-- Выполните сборку приложения, если ранее внесли изменения;
-- Выполните команду npm run preview;
-- Перейдите по ссылке   ➜  Local:   http://localhost:4173/

Для закрытия проекта в любом режиме:
-- Выполните команду ctrl+c;
-- yes;


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
