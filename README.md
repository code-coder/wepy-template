# 微信小程序项目模板

## INFO

- Version: 1.0.0
- Framework&Libs&Language:
  - wechat mina
  - wepy
  - wepy-redux
  - redux
  - redux-actions
  - redux-saga
  - scss

## 快速开始

- environment

```
npm i wepy-cli -g
```

`cd`到项目目录

```
npm i
```

- dev

```shell
npm run start
```

- prod

```
npm run build
```

## Rules

### 文件规范

- 文件名统一小写，多个单词使用连字符连接。_e.g.:_ **personal-profile.wpy**

### JS Rules

- 命名尽量语义化，提高代码自解释性，所有命名不得以\$开头
- 网络数据统一根据使用情况放入 redux，如果只是纯展示性（不需要维护数据状态）就不放入 redux
- 如果没有复杂的 api 调用逻辑，就不使用 redux-saga
- 尽量采用 ES6+语法，涉及异步时尽量`promise`/`async func`
- 最小化变量作用域，声明关键词优先级 `const`>`let`>`var`

### SCSS Rules

- 命名尽量语义化，提高代码自解释性
- 选择器为小写字符，有多个单词时用连字符命名
- scss 选择器嵌套规则尽量不超过三层
- 颜色、字体、边距、边框等等属性值尽量使用 variables.scss 中声明的变量，特殊情况除外
- 组件样式内多次使用的样式值声明为变量
- 长度大小统一用 _rpx | %_, 特殊情况除外
- 布局
  - 统一使用 flex 布局，样式类 class.scss 文件已引入全局
  - 减少定位属性的使用，不惜一切代价避免 float
  - `box-sizing: border-box;`
- 属性书写顺序
  - 位置属性(position, top, right, z-index, display, float 等)
  - 大小(width, height, padding, margin)
  - 背景(background, border 等)
  - 文字系列(font, line-height, letter-spacing, color- text-align 等)
  - 其他(animation, transition 等)

### Template Rules

- 所有依赖组件必须以在`components={}`中注册的 id 进行引用，遵循首字母大写的驼峰命名。
- 事件绑定采用优化后的语法@tap="handler"，etc.

### Tips

- [代码高亮设置](https://tencent.github.io/wepy/document.html#/?id=%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE)
- [小程序工具开发前设置](https://tencent.github.io/wepy/document.html#/?id=%E9%87%8D%E8%A6%81%E6%8F%90%E9%86%92)

- 当页面引入两个相同 ID 的组件时，这两个组件共用同一个实例与数据。则需要分配多个组件 ID 和实例来避免这个问题

```javascript
components = {
  Child: Child,
  AnotherChild: Child
};
```

- 组件交互

  - 基于 props 的交互

    - 静态 props，只支持 String，无同步
    - 动态 props
      - 支持多种类型数据，无同步
      - .sync，父组件数据会同步至子组件
      - twoWay，双向同步

  - 基于事件机制的交互(交互事件需在 events obj 中注册)
    - `$broadcast('eventName', ...args)`
    - `$emit('eventName', ...args)`
    - `$invoke('component-relative-path','eventName', ...args)`

- computed VS watch

  - computed
    多用于 dom 宽高以及位置变化
  - watch
    多用于监听数据源变化

- 异步操作后需要调用`this.$apply()`

### DOCS

- [wepy](https://tencent.github.io/wepy/document.html#/)
- [wepy-redux](https://github.com/Tencent/wepy/blob/HEAD/packages/wepy-redux/README.md)
- [redux](https://redux.js.org/)
- [redux-actions](https://redux-actions.js.org/)
- [redux-saga](https://redux-saga.js.org/)
