# GAT4ML Website

GAT4ML 项目的响应式单页网站，介绍项目进展、研究方向、出版物、团队和联系方式。网站使用 React、TypeScript、Vite 和 Tailwind CSS 构建。

## 环境要求

- Node.js 22（版本见 [`.mise.toml`](./.mise.toml)）
- pnpm 10.34.3（项目使用 [`pnpm-lock.yaml`](./pnpm-lock.yaml) 锁定依赖）

## 本地运行

在项目根目录执行：

```bash
pnpm install
pnpm dev
```

开发服务器默认监听 `8443` 端口，可在浏览器打开 <http://localhost:8443>。修改 `src/` 中的代码后，页面会自动热更新。按 `Ctrl+C` 可停止服务器。

如果电脑上没有全局安装 pnpm，可以用项目指定版本运行：

```bash
npm exec --yes pnpm@10.34.3 install
npm exec --yes pnpm@10.34.3 dev
```

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产版本，输出到 `dist/` |
| `pnpm preview` | 本地预览已构建的网站 |
| `pnpm format` | 使用 oxfmt 格式化代码 |

发布前可运行：

```bash
pnpm build
pnpm preview
```

预览服务器默认使用 `8443` 端口；如果开发服务器还在运行，请先停止它，或通过 `PORT` 环境变量指定其他端口，例如 `PORT=4173 pnpm preview`。

## 项目结构

```text
src/
  App.tsx       页面组装、导航和全局布局
  components/
    layout/     全站导航栏和页脚
    ui/         共用图标和区块标题
  sections/     各页面区块组件
  data/         新闻、工作包、出版物和团队数据
  index.css     全局样式、字体和 Tailwind CSS
  main.tsx      React 应用入口
public/         网站图标和图片等静态资源
index.html      HTML 页面模板
vite.config.ts  Vite、React、Tailwind CSS 和 Figma Make 配置
```

## 修改网站

- 页面整体顺序和导航在 `src/App.tsx`；各区块内容与交互分别在 `src/sections/`。
- 新闻、项目工作包、出版物和团队资料在 `src/data/`；对应区块负责渲染这些数据。
- 全站布局组件放在 `src/components/layout/`；可复用 UI 组件放在 `src/components/ui/`。
- 全局样式和字体在 `src/index.css`；页面局部样式使用 Tailwind CSS 类名。
- 图片等静态文件放在 `public/`，在页面中使用以 `/` 开头的路径引用，例如 `/gat4ml-icon.png`。

页面使用 Google Fonts 的 Manrope 字体；离线时会回退到系统 sans-serif 字体。
