# AI知行图像资产记录

全部图片于 2026-09-14 使用内置 ImageGen 默认模式独立生成。设计预览图只用于统一构图、配色和质感；生成物未使用外部图库、品牌、文字、水印、真实代码或浏览器界面。原始生成文件保留在本次 Codex 任务的 `generated_images` 目录，入站副本位于 `src/assets/images/`，构建时由 Astro 输出响应式格式。

所有提示词共享的视觉约束：明亮通透的蓝白山湖数字插画；冰川蓝、深蓝、青色与少量暖黄色；清晨柔光、轻薄雾气、干净的编辑设计质感；桌面和移动裁切安全；不含文字、Logo、商标、水印、浏览器 UI 和可辨识代码。

| 资产 | 规格 | 最终提示词（含共享约束） | 项目路径 |
| --- | --- | --- | --- |
| 首页主视觉 | 21:9，2520×1080 | 广阔雪山与冰川湖，右侧近景是木质学习桌、打开的笔记本电脑和暖色台灯；左侧约 45% 保持平静的湖面与天空作为标题安全区，关键主体远离边缘。 | `src/assets/images/hero-home.png` |
| 栏目横幅 | 3:1，2400×800 | 连续雪山、针叶林与平静湖面形成横向全景；中心与左侧保留低细节、可读的文字区域，视觉重心略偏右。 | `src/assets/images/banner-sections.png` |
| AI 学习文章 | 16:9，1600×900 | 湖边学习者面对笔记本与发光知识节点，远处雪山和向上的路径表达从 ChatGPT 到 Agent 的学习进阶。 | `src/assets/images/article-agent-learning.png` |
| 学习计划文章 | 16:9，1600×900 | 打开的学习手账、卡片、路线与里程碑符号，背景为清晰山径与湖泊，表达可执行的阶段计划。 | `src/assets/images/article-learning-plan.png` |
| RAG 文章 | 16:9，1600×900 | 抽象文档卡片、向量节点和检索光路汇入中心知识核心，山湖环境保持柔和且不出现文字。 | `src/assets/images/article-rag.png` |
| 工程部署文章 | 16:9，1600×900 | 模块化服务节点、管线、云端与稳定运行的光路跨越山谷，表达从原型到生产部署。 | `src/assets/images/article-deployment.png` |
| Python 教程 | 16:9，1600×900 | 湖边开发学习桌、笔记本电脑、抽象编程积木与逐级上升的学习台阶，不显示代码或 Python 商标。 | `src/assets/images/tutorial-python.png` |
| LangChain 教程 | 16:9，1600×900 | 多个模型、文档、工具节点由发光链路组合成应用工作流，背景为层叠雪山与湖面。 | `src/assets/images/tutorial-langchain.png` |
| Attention 论文视觉 | 4:5，1200×1500 | 抽象学术纸张、注意力连线、矩阵与简洁图表意象，版式原创，不仿制真实论文首页。 | `src/assets/images/paper-attention.png` |
| Few-shot 论文视觉 | 4:5，1200×1500 | 抽象论文排版、少量示例卡片汇聚为语言模型知识结构，带图表意象，不出现可读文本。 | `src/assets/images/paper-few-shot.png` |
| 开源项目分类视觉 | 1:1，1200×1200 | 抽象代码模块、分支、连接管线与协作节点形成开放的工程生态，不出现品牌或真实代码。 | `src/assets/images/resource-project.png` |
| AI 工具分类视觉 | 1:1，1200×1200 | 中心对话智能球体连接写作、分析、学习和开发等抽象功能节点，构图适合方形卡片裁切。 | `src/assets/images/resource-tool.png` |
