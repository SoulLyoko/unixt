---
outline: deep
---

# vixt 的核心配置

## rootDir

- 类型：`string`
- 默认值：`process.cwd()`

项目根目录

## buildDir

- 类型：`string`
- 默认值：`'<rootDir>/.vixt'`

Vixt 的构建目录，里面包含了 `layers` , `types` 等子目录和 `index.html` , `main.ts` , `tsconfig.json` 等文件

## buildTypesDir

- 类型：`string`
- 默认值：`'<buildDir>/types'`

Vixt 的类型构建目录

## buildLayersDir

- 类型：`string`
- 默认值：`'<buildDir>/layers'`

Vixt会把项目扩展的层存放到该目录下

## srcDir

- 类型：`string`
- 默认值：`'<rootDir>/src'`

项目源码目录

## modules

- 类型：`VixtModule[]`
- 默认值：无

模块，一般不需要导入，Vixt会自动扫描 `<srcDir>/modules` 目录下的模块

## meta

- 类型：`VixtConfigLayerMeta`
- 默认值：无

一般用于配置层的名称，项目的 `vixt.config.ts` 中不需要配置

## extends

- 类型：`string[]`
- 默认值：无

项目扩展的层

## vite

- 类型：`ResolvedConfig`
- 默认值：无

Vite 的配置

## app

### head

- 类型：`object`
- 默认值：

```json
{
  "meta": [
    { "charset": "utf-8" },
    { "name": "viewport", "content": "width=device-width, initial-scale=1.0" }
  ],
  "noscript": [
    { "children": "This website requires JavaScript to function properly. Please enable JavaScript to continue." }
  ]
}
```

示例：

```js
export default {
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ],
      title: [
        // <title>Website Title</title>
        { children: 'Website Title' }
      ]
    }
  }
}
```

### baseURL

- 类型：`string`
- 默认值：`/`

应用的基础路径

### rootId

- 类型：`string`
- 默认值：`app`

应用的根元素id

### rootTag

- 类型：`string`
- 默认值：`div`

应用的根元素标签

### css

- 类型：`string[]`
- 默认值：无

全局导入的css文件

### loadingTemplate

- 类型：`string`
- 默认值：`'<rootDir>/loading.html'`

应用的加载模板路径，将被插入到 `index.html` 中

### transformMain

对 `src/main.ts` 进行转换的函数

## typescript

### references

- 类型：`string[]`
- 默认值：无

类型声明文件引用

### tsConfig

- 类型：`TSConfig`
- 默认值：

```json
{
  "tsConfig": {
    "extends": "@vue/tsconfig/tsconfig.dom.json",
    "compilerOptions": {
      "paths": {
        "@/*": ["../src/*"],
        "~/*": ["../src/*"],
        "#/*": ["./*"]
      },
      "types": ["vite/client"]
    },
    "include": [
      "./**/*"
    ]
  }
}
```

扩展 `<buildDir>/tsconfig.json` 的配置

### typeCheck

#### vueTsc

- 类型：`boolean`
- 默认值：无

启用运行时类型检查