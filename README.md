# Vue 3 企业级项目模板

> 基于 Vue 3.5 + TypeScript 5.8 + Vite 6 构建的现代化前端项目模板，集成完整的企业级开发架构。

## 📖 目录

- [技术栈](#-技术栈)
- [核心架构](#-核心架构)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [功能模块详解](#-功能模块详解)
- [开发指南](#-开发指南)
- [构建部署](#-构建部署)
- [配置说明](#-配置说明)

---

## ✨ 技术栈

| 分类 | 技术 | 版本 | 说明 |
|------|------|------|------|
| **核心框架** | Vue 3 | 3.5.17 | Composition API + `<script setup>` |
| **开发语言** | TypeScript | 5.8.3 | 严格模式，完整类型推断 |
| **构建工具** | Vite | 6.3.5 | 毫秒级 HMR，极速开发体验 |
| **状态管理** | Pinia | 3.0.3 | 轻量级状态管理，支持持久化 |
| **路由系统** | Vue Router | 4.5.1 | 文件系统路由 + 布局系统 |
| **UI 框架** | Element Plus | 2.10.2 | 按需加载，自动导入 |
| **HTTP 请求** | Axios | 1.10.0 | 统一封装，拦截器支持 |
| **CSS 方案** | Tailwind CSS 4 | 4.1.10 | 原子化 CSS |
| **CSS 预处理器** | SCSS | 1.89.2 | 样式变量和混入 |
| **图标系统** | unplugin-icons | 22.1.0 | 自动导入，按需使用 |
| **代码规范** | ESLint 9 | 9.29.0 | 统一代码风格 |
| **格式化** | Prettier | - | 代码自动格式化 |
| **Git Hooks** | Husky 9 | 9.1.7 | 提交前自动检查 |

---

## 🏗️ 核心架构

### 架构分层

```
┌─────────────────────────────────────────┐
│           Pages (页面层)                │
│     页面组件，自动路由生成               │
├─────────────────────────────────────────┤
│         Layouts (布局层)                │
│     布局组件，统一页面结构               │
├─────────────────────────────────────────┤
│       Components (组件层)               │
│     全局公共组件，业务组件               │
├─────────────────────────────────────────┤
│      Composables (组合式函数)           │
│     可复用的逻辑函数                     │
├─────────────────────────────────────────┤
│        Features (业务模块)               │
│     按业务功能组织的模块                 │
│  ┌───────┬─────────┬──────────┐        │
│  │ API   │ Store   │ Types    │        │
│  │ 接口  │ 状态    │ 类型定义  │        │
│  └───────┴─────────┴──────────┘        │
├─────────────────────────────────────────┤
│        Services (服务层)                │
│     HTTP 请求封装，拦截器                │
├─────────────────────────────────────────┤
│         Utils (工具层)                  │
│     通用工具函数，验证函数               │
├─────────────────────────────────────────┤
│      Shared (共享资源)                  │
│     全局样式，常量，配置                 │
└─────────────────────────────────────────┘
```

### 技术特性

#### 1. 自动导入系统
- ✅ Vue API 自动导入（ref, computed, reactive 等）
- ✅ 组件自动导入（Element Plus + 自定义组件）
- ✅ 图标自动导入（Iconify 图标库）
- ✅ Composables 自动导入
- ✅ Utils 工具函数自动导入

#### 2. 文件系统路由
- 📂 基于 `src/pages` 目录自动生成路由
- 🔧 支持动态路由（`[id].vue`）
- 🎭 支持嵌套路由
- 🛡️ 统一路由守卫

#### 3. 布局系统
- 🎨 基于 `src/layouts` 的布局组件
- 🔄 布局与页面自动组合
- � 支持多布局切换

#### 4. HTTP 服务封装
- 🌐 统一的 Axios 实例
- 🔌 请求/响应拦截器
- 🎯 TypeScript 类型支持
- � 统一的错误处理

#### 5. 状态管理
- 📦 Pinia 轻量级状态管理
- 💾 持久化插件集成
- 🎯 完整的类型推断

#### 6. 代码质量保障
- 📝 ESLint + Prettier 代码规范
- 🔍 TypeScript 严格模式
- 🪝 Git Hooks 提交前检查
- 🧪 类型检查（vue-tsc）

---

## � 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 / yarn >= 1.22.0 / pnpm >= 8.0.0

### 1. 安装依赖

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

### 2. 配置环境变量

复制环境变量文件并配置：

```bash
# 开发环境（默认）
cp .env.example .env

# 测试环境
cp .env.example .env.test

# 生产环境
cp .env.example .env.prod
```

编辑 `.env` 文件：

```bash
# API 基础地址
VITE_BASE_URL=https://api.example.com

# CDN 地址
VITE_BUCKET_URL=https://cdn.example.com
```

### 3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 http://localhost:5173

### 4. 类型检查

```bash
# 开发环境类型检查
npm run build:dev

# 测试环境类型检查
npm run build:test

# 生产环境类型检查
npm run build:prod
```

### 5. 构建项目

```bash
# 开发环境构建
npm run build:dev

# 测试环境构建
npm run build:test

# 生产环境构建
npm run build:prod
```

### 6. 预览构建结果

```bash
npm run preview
```

---

## 📁 项目结构

```
project/
├── .vscode/                    # VSCode 配置
│   └── extensions.json         # 推荐插件
├── public/                     # 静态资源目录
│   └── vite.svg               # 网站图标
├── src/
│   ├── app/                   # 应用核心配置
│   │   ├── App.vue           # 根组件
│   │   ├── pinia.ts          # Pinia 初始化
│   │   ├── router.ts         # 路由初始化
│   │   ├── setup.ts          # 应用启动流程
│   │   └── router-guards/    # 路由守卫
│   │       ├── index.ts      # 守卫入口
│   │       └── auth.guard.ts # 认证守卫
│   │
│   ├── assets/               # 资源文件
│   │   └── readme.md         # 资源说明
│   │
│   ├── components/           # 全局组件
│   │   ├── Message/          # 消息组件
│   │   │   └── index.ts      # 消息方法导出
│   │   ├── demo.vue          # 示例组件
│   │   └── index.ts          # 组件导出
│   │
│   ├── composables/          # 组合式函数
│   │   └── readme.md         # 使用说明
│   │
│   ├── features/             # 业务功能模块
│   │   └── demo/             # 示例模块
│   │       ├── api.ts        # API 接口
│   │       ├── constant.ts   # 常量定义
│   │       ├── store.ts      # 状态管理
│   │       ├── types.ts      # 类型定义
│   │       └── useDemo.ts    # 组合式函数
│   │
│   ├── layouts/              # 布局组件
│   │   └── *.vue             # 布局文件
│   │
│   ├── pages/                # 页面组件（自动路由）
│   │   └── Demo/
│   │       └── index.vue     # /demo 页面
│   │
│   ├── services/             # HTTP 服务层
│   │   ├── client.ts         # Axios 实例
│   │   ├── http.ts           # HTTP 方法封装
│   │   ├── interceptors.ts   # 拦截器配置
│   │   └── index.ts          # 服务导出
│   │
│   ├── shared/               # 共享资源
│   │   └── styles/           # 全局样式
│   │       ├── element/      # Element Plus 样式定制
│   │       ├── index.scss    # 样式入口
│   │       ├── reset.css     # 样式重置
│   │       ├── resetElement.scss
│   │       └── tailwind.css  # Tailwind CSS
│   │
│   ├── types/                # TypeScript 类型
│   │   ├── auto-imports.d.ts # 自动导入类型
│   │   ├── components.d.ts   # 组件类型
│   │   ├── layout.d.ts       # 布局类型
│   │   └── vite-plugin-pages.d.ts
│   │
│   ├── utils/                # 工具函数
│   │   └── validates.ts      # 表单验证
│   │
│   ├── main.ts               # 应用入口
│   └── vite-env.d.ts         # Vite 类型声明
│
├── .editorconfig             # 编辑器配置
├── .env                      # 开发环境变量
├── .env.test                 # 测试环境变量
├── .env.prod                 # 生产环境变量
├── .gitignore                # Git 忽略配置
├── .prettierrc               # Prettier 配置
├── eslint.config.js          # ESLint 配置
├── index.html                # HTML 入口
├── package.json              # 项目依赖
├── postcss.config.js         # PostCSS 配置
├── tailwind.config.ts        # Tailwind CSS 配置
├── tsconfig.json             # TypeScript 配置
├── tsconfig.node.json        # Node 环境 TS 配置
└── vite.config.ts            # Vite 配置
```

---

## 🎯 功能模块详解

### 1. 自动导入系统

项目配置了强大的自动导入功能，无需手动 import：

#### Vue API 自动导入
```vue
<script setup lang="ts">
// 直接使用，无需 import
const count = ref(0)
const doubled = computed(() => count.value * 2)
const router = useRouter()
const route = useRoute()
</script>
```

#### 组件自动导入
```vue
<template>
  <!-- Element Plus 组件 -->
  <el-button type="primary">按钮</el-button>
  <el-input v-model="text" />
  
  <!-- 自定义组件（src/components） -->
  <demo />
  
  <!-- 图标 -->
  <icon-ep-edit />
  <icon-ep-user />
</template>
```

#### Composables 自动导入
```vue
<script setup lang="ts">
// src/composables 下的函数自动导入
const { data, loading } = useFetch('/api/data')
</script>
```

#### 工具函数自动导入
```vue
<script setup lang="ts">
// src/utils 下的函数自动导入
const isValid = validateMobile('13800138000')
</script>
```

### 2. 文件系统路由

在 `src/pages` 目录下创建组件即可自动生成路由：

```
src/pages/
├── index.vue              # -> / (首页)
├── Demo/
│   └── index.vue          # -> /demo
├── User/
│   ├── index.vue          # -> /user
│   ├── [id].vue           # -> /user/:id (动态路由)
│   └── settings.vue       # -> /user/settings
└── About/
    └── index.vue          # -> /about
```

#### 路由元信息

```vue
<!-- src/pages/User/index.vue -->
<route lang="yaml">
meta:
  title: 用户管理
  requiresAuth: true
  layout: default
</route>

<template>
  <div>用户列表</div>
</template>
```

### 3. 布局系统

#### 创建布局

```vue
<!-- src/layouts/default.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="app-layout">
    <header class="header">
      <nav>导航栏</nav>
    </header>
    
    <main class="main">
      <slot />
    </main>
    
    <footer class="footer">
      <p>页脚</p>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: 20px;
}
</style>
```

#### 在页面中使用布局

```vue
<!-- src/pages/Demo/index.vue -->
<route lang="yaml">
layout: default
</route>

<template>
  <div>Demo 页面</div>
</template>
```

### 4. HTTP 服务

#### 基础使用

```typescript
import { GET, POST, PUT } from '@/services'

// GET 请求
interface UserData {
  id: number
  name: string
}

const user = await GET<UserData>('/api/user', { id: 1 })

// POST 请求
interface ApiResponse {
  code: number
  data: any
  msg: string
}

const result = await POST<ApiResponse>('/api/user', {
  name: 'John',
  age: 25
})

// PUT 请求
const updated = await PUT<ApiResponse>('/api/user/1', {
  name: 'Jane'
})
```

#### 拦截器配置

```typescript
// src/services/interceptors.ts

// 请求拦截器
client.interceptors.request.use((config) => {
  // 添加 token
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
client.interceptors.response.use(
  (response) => {
    const { code, data, msg } = response.data
    if (code !== 200) {
      // 处理业务错误
      ElMessage.error(msg)
      return Promise.reject(new Error(msg))
    }
    return data
  },
  (error) => {
    // 处理 HTTP 错误
    if (error.response?.status === 401) {
      // 未授权，跳转登录
      router.push('/login')
    } else {
      ElMessage.error(error.message)
    }
    return Promise.reject(error)
  }
)
```

### 5. 状态管理（Pinia）

#### 创建 Store

```typescript
// src/features/user/store.ts
import { defineStore } from 'pinia'

interface UserState {
  id: number
  name: string
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: 0,
    name: '',
    token: ''
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token,
    userName: (state) => state.name || '未登录'
  },
  
  actions: {
    setToken(token: string) {
      this.token = token
    },
    
    async login(username: string, password: string) {
      const { POST } = await import('@/services')
      const { data } = await POST<ApiResponse>('/api/login', {
        username,
        password
      })
      this.setToken(data.token)
    },
    
    logout() {
      this.token = ''
      this.name = ''
    }
  },
  
  // 启用持久化
  persist: {
    key: 'user-store',
    storage: localStorage,
    paths: ['token']
  }
})
```

#### 在组件中使用

```vue
<script setup lang="ts">
const userStore = useUserStore()

// 访问 state
console.log(userStore.name)

// 访问 getter
console.log(userStore.isLoggedIn)

// 调用 action
await userStore.login('admin', '123456')
</script>
```

### 6. 路由守卫

```typescript
// src/app/router-guards/auth.guard.ts
import type { Router } from 'vue-router'
import { useUserStore } from '@/features/user/store'

export function setupAuthGuard(router: Router) {
  router.beforeEach(async (to) => {
    const userStore = useUserStore()
    
    // 需要认证的路由
    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
      return {
        name: 'login',
        query: { redirect: to.fullPath }
      }
    }
  })
}
```

### 7. 工具函数

#### 表单验证

```typescript
import { validateMobile, validateEmail, validatePassword } from '@/utils/validates'

// 在表单中使用
const rules = {
  mobile: [
    { validator: validateMobile('请输入正确的手机号'), trigger: 'blur' }
  ],
  email: [
    { validator: validateEmail('请输入正确的邮箱'), trigger: 'blur' }
  ],
  password: [
    { validator: validatePassword(), trigger: 'blur' }
  ]
}
```

#### 消息提示

```typescript
import { success, error, warning, info } from '@/components/Message'

success('操作成功')
error('操作失败')
warning('警告信息')
info('提示信息')
```

---

## 💻 开发指南

### 代码规范

#### 命名规范

```typescript
// 组件文件：PascalCase
// src/components/MyComponent.vue

// 组合式函数：use 前缀 + camelCase
// src/composables/useFetch.ts

// Store：use + 模块名 + Store
// src/features/user/store.ts -> useUserStore

// 工具函数：camelCase
// src/utils/formatDate.ts

// 类型接口：PascalCase + 描述性后缀
interface UserData {}
interface ApiResponse {}
```

#### 组件开发

```vue
<script setup lang="ts">
// 1. 导入依赖
import { ref, computed } from 'vue'
import { useUserStore } from '@/features/user/store'

// 2. 定义 Props
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

// 3. 定义 Emits
interface Emits {
  (e: 'update', value: number): void
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

// 4. 状态管理
const userStore = useUserStore()
const localCount = ref(props.count)

// 5. 计算属性
const doubled = computed(() => localCount.value * 2)

// 6. 方法
function handleClick() {
  emit('update', localCount.value)
}
</script>

<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <p>{{ doubled }}</p>
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<style scoped>
.my-component {
  padding: 20px;
}
</style>
```

### 业务模块开发

按功能模块组织代码：

```
src/features/
└── user/                    # 用户模块
    ├── api.ts              # API 接口定义
    ├── constant.ts         # 常量定义
    ├── store.ts            # 状态管理
    ├── types.ts            # TypeScript 类型
    └── useUser.ts          # 组合式函数
```

#### API 接口

```typescript
// src/features/user/api.ts
import { GET, POST } from '@/services'

export interface User {
  id: number
  name: string
  email: string
}

export interface LoginParams {
  username: string
  password: string
}

export const userApi = {
  login: (data: LoginParams) => POST<User>('/api/login', data),
  getUserInfo: (id: number) => GET<User>(`/api/user/${id}`),
  updateUser: (id: number, data: Partial<User>) => POST<User>(`/api/user/${id}`, data)
}
```

#### 组合式函数

```typescript
// src/features/user/useUser.ts
export function useUser() {
  const userStore = useUserStore()
  
  const login = async (username: string, password: string) => {
    try {
      await userStore.login(username, password)
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }
  
  const logout = () => {
    userStore.logout()
  }
  
  return {
    user: computed(() => userStore),
    isLoggedIn: computed(() => userStore.isLoggedIn),
    login,
    logout
  }
}
```

### 样式开发

#### 使用 Tailwind CSS

```vue
<template>
  <div class="flex items-center justify-center h-screen">
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-gray-800">标题</h1>
      <p class="mt-2 text-gray-600">内容</p>
    </div>
  </div>
</template>
```

#### 使用 SCSS

```vue
<style scoped lang="scss">
.container {
  $primary-color: #409eff;
  
  padding: 20px;
  background-color: $primary-color;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
  }
}
</style>
```

---

## 📦 构建部署

### 开发构建

```bash
npm run build:dev
```

输出到 `dist` 目录，包含 source map。

### 测试构建

```bash
npm run build:test
```

使用测试环境配置。

### 生产构建

```bash
npm run build:prod
```

优化后的生产版本：
- 代码压缩
- Tree-shaking
- Source map 移除
- Console 语句移除

### 预览构建

```bash
npm run preview
```

本地预览生产构建。

### 部署

将 `dist` 目录部署到服务器或 CDN：

```bash
# 构建
npm run build:prod

# 部署到服务器
scp -r dist/* user@server:/var/www/html

# 或使用 CI/CD 工具自动部署
```

---

## ⚙️ 配置说明

### Vite 配置

[`vite.config.ts`](vite.config.ts)

主要插件：
- `@vitejs/plugin-vue` - Vue 3 支持
- `vite-plugin-pages` - 文件系统路由
- `vite-plugin-vue-layouts` - 布局系统
- `unplugin-auto-import` - 自动导入
- `unplugin-vue-components` - 组件自动注册
- `unplugin-icons` - 图标自动导入

### TypeScript 配置

[`tsconfig.json`](tsconfig.json)
- 严格模式
- 路径别名 `@/*`
- 模块解析 Node

[`tsconfig.node.json`](tsconfig.node.json)
- Node 环境配置
- Vite 配置支持

### ESLint 配置

[`eslint.config.js`](eslint.config.js)
- 基于 `eslint-config-love`
- Vue 3 + TypeScript 支持
- 浏览器环境

### Prettier 配置

[`.prettierrc`](.prettierrc)
- 代码格式化规则

### Tailwind CSS 配置

[`tailwind.config.ts`](tailwind.config.ts)
- 自定义主题
- 工具类配置

### PostCSS 配置

[`postcss.config.js`](postcss.config.js)
- Tailwind CSS 插件
- Autoprefixer

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目模板。

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 许可证

MIT License

---

## 📞 联系方式

如有问题，请提交 Issue 或联系维护者。
