# 会议室预订系统 - 前端

一个基于 React + TypeScript + Ant Design 的现代化会议室预订管理系统前端应用。

## 🚀 项目简介

本系统提供了完整的会议室预订管理功能，包括用户认证、会议室搜索、预订管理、历史记录查看等核心功能。采用现代化的前端技术栈，提供流畅的用户体验。[后端项目在这](https://github.com/cyan0714/meeting_room_booking_system_backend) ，[管理端前端在这](https://github.com/cyan0714/meeting_room_booking_system_frontend_admin)

## ✨ 主要功能

### 👤 用户管理
- **用户注册** - 支持邮箱验证码注册
- **用户登录** - 安全的身份认证
- **个人信息管理** - 修改个人资料、头像上传
- **密码管理** - 安全的密码修改功能

### 🏢 会议室管理
- **会议室列表** - 查看所有可用会议室
- **智能搜索** - 按名称、容量、设备等条件筛选
- **实时状态** - 显示会议室预订状态
- **详细信息** - 查看会议室位置、设备、描述等

### 📅 预订管理
- **创建预订** - 选择时间段进行会议室预订
- **预订历史** - 查看个人预订记录
- **预订操作** - 取消预订功能
- **时间冲突检测** - 防止重复预订

## 🛠️ 技术栈

- **前端框架**: React 18.3.1
- **开发语言**: TypeScript 4.9.5
- **UI 组件库**: Ant Design 5.17.0
- **路由管理**: React Router Dom 6.23.0
- **HTTP 客户端**: Axios 1.6.8
- **日期处理**: Day.js
- **构建工具**: Create React App 5.0.1

## 📦 项目结构

```
src/
├── index.tsx                 # 应用入口文件
├── index.css                 # 全局样式
├── interface/
│   └── interfaces.tsx        # API 接口定义和 HTTP 客户端配置
└── page/                     # 页面组件
    ├── index/                # 首页
    ├── login/                # 登录页面
    ├── register/             # 注册页面
    ├── menu/                 # 导航菜单
    ├── meeting_room_list/    # 会议室列表页面
    │   ├── MeetingRoomList.tsx
    │   └── CreateBookingModal.tsx
    ├── booking_history/      # 预订历史页面
    ├── update_info/          # 个人信息修改
    │   └── HeadPicUpload.tsx
    ├── update_password/      # 密码修改
    └── error_page/           # 错误页面
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 使用 npm
npm start

# 或使用 yarn
yarn start
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

构建文件将输出到 `build` 目录。

### 运行测试

```bash
# 使用 npm
npm test

# 或使用 yarn
yarn test
```

## ⚙️ 配置说明

### API 配置

后端 API 服务地址配置在 `src/interface/interfaces.tsx` 文件中：

```typescript
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3005/',  // 后端服务地址
  timeout: 3000,
})
```

### 环境变量

项目支持以下环境变量配置：

- `REACT_APP_API_BASE_URL` - API 服务器地址
- `REACT_APP_TIMEOUT` - 请求超时时间

## 🔐 认证机制

系统采用 JWT Token 认证方式：

- **Access Token** - 用于 API 请求认证
- **Refresh Token** - 用于刷新 Access Token
- **自动刷新** - Token 过期时自动刷新，无需用户重新登录
- **安全退出** - Token 失效时自动跳转登录页面


