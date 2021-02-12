# backend_blog

## Project setup
搭建好的后台管理项目配置，方便下次可以直接用



## 关闭烦人的eslint

```javascript


module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/typescript/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      parser: "@typescript-eslint/parser"
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": 'off',
      "semi": ["error", "always"]
    }
  };

```

根目录加 个 .eslintrc.js 

