# AI知行

> 在学习中，看见更大的自己。

面向中文 AI 学习者与开发者的静态知识站，由 Nightrail9 创建。首版包含 4 篇文章、2 门教程（6 节课程）和 6 条精选资源。

## 本地开发

需要 Node.js 24 LTS 与 npm。

```bash
npm ci
npm run dev
```

完整验证：

```bash
npm run check
npm run build
npm run build:search
npm run preview
```

`npm run build:search` 使用 Pagefind Extended 为 `dist` 生成中文全文索引。正式验证也可直接运行 `npm run build:full`。

## 内容结构

- `src/content/articles/`：文章与 MDX 文章
- `src/content/courses/`：课程元数据
- `src/content/lessons/`：按 `课程/模块/课时` 组织的章节
- `src/content/resources/`：论文、开源项目与 AI 工具
- `src/content.config.ts`：Astro Content Collections 与 Zod 校验
- `docs/image-prompts.md`：ImageGen 资产、比例和最终提示词记录

草稿将 `draft` 设为 `true`，生产页面和 Pagefind 索引不会包含它。站内链接必须使用 `import.meta.env.BASE_URL` 兼容 `/aizhixing/` 基础路径。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会依次安装依赖、执行 Astro 类型检查、静态构建、Pagefind 索引，并部署 GitHub Pages。

- 仓库：<https://github.com/Nightrail9/aizhixing>
- 网站：<https://nightrail9.github.io/aizhixing/>
- Pages 来源：GitHub Actions
- Giscus：公开仓库、Discussions、`Comments` 分类及 Giscus App

## 本地状态

- 主题：`aizhixing:theme:v1`
- 阅读进度：`aizhixing:reading:v1`
- 教程完成状态：`aizhixing:tutorial-progress:v1`

这些数据只保存在当前浏览器，不含账户或云端同步。
