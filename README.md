# Vue 3 企业级项目模板

基于 Vue 3 + TypeScript + Vite 构建的现代化前端项目模板，集成主流技术栈，提供完整的开发工作流和最佳实践，开箱即用。

## ✨ 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 核心框架 | Vue 3 | 3.5.17 |
| 开发语言 | TypeScript | 5.8.3 |
| 构建工具 | Vite | 6.3.5 |
| UI 组件库 | Element Plus | 2.10.2 |
| 状态管理 | Pinia | 3.0.3 |
| 路由管理 | Vue Router | 4.5.1 |
| CSS 方案 | Tailwind CSS / SCSS | 4.1.10 |
| HTTP 客户端 | Axios | 1.10.0 |
| 代码规范 | ESLint + Prettier | 9.29.0 |
| Git Hooks | Husky + Lint-staged | 9.1.7 |

## 🚀 核心特性

### 开发体验
- ⚡️ **Vite 极速构建** - 毫秒级 HMR 热更新，开发体验丝滑
- � **自动导入** - Vue API、组件、工具函数自动导入，告别繁琐的 import
- 🎯 **TypeScript 严格模式** - 完整的类型检查，减少运行时错误
- 🔥 **Composition API** - 使用最新的 `<script setup>` 语法

### 工程化
- 🎨 **组件按需加载** - Element Plus 组件自动按需导入
- 🌈 **原子化 CSS** - Tailwind CSS 4.x，快速构建界面
- 📡 **HTTP 封装** - 统一的请求/响应拦截器，简化 API 调用
- 🔧 **多环境配置** - 支持 dev/test/prod 环境变量管理
- 🎭 **图标自动导入** - unplugin-icons 支持，海量图标即用即取

### 代码质量
- 📝 **代码规范** - ESLint + Prettier 统一代码风格
- 🪝 **Git Hooks** - 提交前自动检查和格式化代码
- 🏗️ **项目架构** - 清晰的目录结构，易于维护和扩展
- 💾 **状态持久化** - Pinia 集成持久化插件

### 路由系统
- 🗂️ **文件路由** - 基于文件系统的自动路由生成
- 🛡️ **路由守卫** - 统一的路由拦截和权限控制

## 📋 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 / yarn >= 1.22.0 / pnpm >= 8.0.0

## 🎯 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 配置环境变量

项目支持多环境配置，根据需要修改对应文件：

```bash
.env       # 开发环境（默认）
.env.test  # 测试环境
.env.prod  # 生产环境
```

环境变量示例：

```bash
# API 基础地址
VITE_BASE_URL=https://api.example.com

# CDN 地址
VITE_BUCKET_URL=https://cdn.example.com
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 4. 构建项目

```bash
# 开发环境构建
npm run build:dev

# 测试环境构建
npm run build:test

# 生产环境构建
npm run build:prod
```

### 5. 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
.
├── public/                    # 静态资源目录
│   └── vite.svg              # 网站图标
├── src/
│   ├── app/                  # 应用核心配置
│   │   ├── App.vue          # 根组件
│   │   ├── pinia.ts         # Pinia 状态管理配置
│   │   ├── router.ts        # 路由配置
│   │   ├── router-guards/   # 路由守卫
│   │   └── setup.ts         # 应用初始化
│   ├── assets/              # 资源文件（图片、字体等）
│   ├── components/          # 全局公共组件
│   │   ├── Message/        # 自定义消息提示组件
│   │   ├── demo.vue        # 示例组件
│   │   └── index.ts        # 组件导出
│   ├── composables/         # 组合式函数（Composables）
│   ├── features/            # 业务功能模块
│   │   └── demo/           # 示例功能模块
│   ├── pages/               # 页面组件（自动路由）
│   │   └── Demo/           # 示例页面
│   ├── services/            # HTTP 服务层
│   │   ├── client.ts       # Axios 实例
│   │   ├── http.ts         # HTTP 方法封装（GET/POST/PUT）
│   │   ├── interceptors.ts # 请求/响应拦截器
│   │   └── index.ts        # 服务导出
│   ├── shared/              # 共享资源
│   │   └── styles/         # 全局样式
│   │       ├── element/    # Element Plus 样式定制
│   │       ├── index.scss  # 样式入口
│   │       └── tailwind.css # Tailwind CSS
│   ├── types/               # TypeScript 类型定义
│   ├── utils/               # 工具函数
│   ├── main.ts              # 应用入口
│   └── vite-env.d.ts        # Vite 环境类型声明
├── .editorconfig             # 编辑器配置
├── .env                      # 环境变量（开发）
├── .env.test                 # 环境变量（测试）
├── .env.prod                 # 环境变量（生产）
├── .gitignore                # Git 忽略文件
├── .prettierrc               # Prettier 配置
├── eslint.config.js          # ESLint 配置
├── index.html                # HTML 入口
├── package.json              # 项目依赖
├── postcss.config.js         # PostCSS 配置
├── tailwind.config.ts        # Tailwind CSS 配置
├── tsconfig.json             # TypeScript 配置
├── tsconfig.node.json        # Node TypeScript 配置
└── vite.config.ts            # Vite 配置
```

## 💡 开发指南

### 自动导入

项目配置了自动导入，无需手动 import：

```vue
<script setup lang="ts">
// ✅ Vue API 自动导入
const count = ref(0)
const doubled = computed(() => count.value * 2)
const router = useRouter()
const route = useRoute()

// ✅ 工具函数自动导入（src/utils）
// ✅ Composables 自动导入（src/composables）
</script>

<template>
  <!-- ✅ Element Plus 组件自动导入 -->
  <el-button type="primary">按钮</el-button>
  
  <!-- ✅ 图标自动导入 -->
  <icon-ep-edit />
  
  <!-- ✅ 自定义组件自动导入（src/components） -->
  <demo />
</template>
```

### 路径别名

使用 `@` 作为 `src` 目录的别名：

```typescript
import { GET, POST } from '@/services'
import MyComponent from '@/components/MyComponent.vue'
import { formatDate } from '@/utils/date'
```

### 文件路由

页面组件放在 `src/pages` 目录下，会自动生成路由：

```
src/pages/
├── index.vue           → /
├── about.vue           → /about
├── users/
│   ├── index.vue      → /users
│   └── [id].vue       → /users/:id
└── [...all].vue       → /* (404 页面)
```

路由元信息配置（在页面组件中）：

```vue
<route lang="yaml">
meta:
  title: 页面标题
  requiresAuth: true
</route>

<script setup lang="ts">
// 页面逻辑
</script>
```

### HTTP 请求

使用封装好的 HTTP 方法：

```typescript
import { GET, POST, PUT } from '@/services'

// GET 请求
const users = await GET<User[]>('/api/users')

// POST 请求
const result = await POST<Result>('/api/users', {
  name: 'John',
  email: 'john@example.com'
})

// PUT 请求
const updated = await PUT<User>('/api/users/1', {
  name: 'Jane'
})

// 带参数的 GET 请求
const filtered = await GET<User[]>('/api/users', {
  page: 1,
  size: 10
})
```

### 状态管理

使用 Pinia 进行状态管理：

```typescript
// stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: null as UserInfo | null
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  
  actions: {
    setToken(token: string) {
      this.token = token
    },
    
    async fetchUserInfo() {
      const data = await GET<UserInfo>('/api/user/info')
      this.userInfo = data
    }
  },
  
  // 开启持久化
  persist: true
})
```

在组件中使用：

```vue
<script setup lang="ts">
const userStore = useUserStore()

// 访问状态
console.log(userStore.token)

// 调用 action
userStore.setToken('new-token')
</script>
```

### 请求/响应拦截器

在 `src/services/interceptors.ts` 中配置：

```typescript
import { client } from './client'

// 请求拦截器
client.interceptors.request.use(
  (config) => {
    // 添加 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
client.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    return response.data
  },
  (error) => {
    // 统一错误处理
    if (error.response?.status === 401) {
      // 跳转登录页
    }
    return Promise.reject(error)
  }
)
```

### 环境变量使用

在代码中访问环境变量：

```typescript
// 获取 API 基础地址
const baseURL = import.meta.env.VITE_BASE_URL

// 判断环境
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD

// 获取模式
const mode = import.meta.env.MODE // 'dev' | 'test' | 'prod'
```

### 代码规范

项目集成了 ESLint 和 Prettier，提交代码时会自动检查和格式化：

```bash
# 手动检查
npx eslint src/**/*.{ts,vue,js}

# 自动修复
npx eslint src/**/*.{ts,vue,js} --fix
```

## 🔧 构建优化

生产构建时自动进行以下优化：

- ✅ 移除 `console` 和 `debugger`
- ✅ 代码压缩和混淆（Terser）
- ✅ 静态资源分类输出
- ✅ 文件名添加 hash 指纹
- ✅ CSS 提取和压缩
- ✅ 图片资源优化

构建产物目录结构：

```
dist/
├── index.html
└── static/
    ├── js/
    │   ├── index-[hash].js
    │   └── vendor-[hash].js
    ├── css/
    │   └── index-[hash].css
    └── [ext]/
        └── [name]-[hash].[ext]
```

## 🛠️ IDE 推荐

### VS Code 插件

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 官方语言支持
- [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - Vue 文件 TS 支持
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind 智能提示

### Volar Takeover 模式（推荐）

启用 Takeover 模式可以获得更好的性能：

1. 打开命令面板（Cmd/Ctrl + Shift + P）
2. 运行 `Extensions: Show Built-in Extensions`
3. 找到 `TypeScript and JavaScript Language Features`
4. 右键选择 `Disable (Workspace)`
5. 重新加载窗口

## ❓ 常见问题

### 端口被占用

修改 `vite.config.ts`：

```typescript
export default defineConfig({
  server: {
    port: 3000, // 修改端口
    open: true  // 自动打开浏览器
  }
})
```

### 类型声明问题

删除自动生成的类型文件并重启：

```bash
rm src/types/auto-imports.d.ts src/types/components.d.ts
npm run dev
```

### 构建后白屏

检查 `vite.config.ts` 中的 `base` 配置：

```typescript
export default defineConfig({
  base: './', // 相对路径
  // 或
  base: '/your-app/', // 绝对路径
})
```

### Element Plus 样式问题

确保在 `main.ts` 中导入了样式：

```typescript
import 'element-plus/dist/index.css'
```


---