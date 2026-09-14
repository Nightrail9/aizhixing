---
title: "从零实现一个简单的 RAG 应用"
description: "理解检索增强生成的最小闭环：切分、索引、召回、生成与可追溯引用。"
publishedAt: 2026-08-28
category: "开发实践"
tags: ["RAG", "Python", "大模型"]
cover: "article-rag"
coverAlt: "书籍与蓝色知识卡片组成检索网络"
featured: false
views: 1980
draft: false
---

## RAG 解决什么问题

大模型的参数知识有时间边界，也无法天然了解你的私有资料。RAG 在生成前先从可信语料中找出相关片段，再把片段和问题一起交给模型。

## 最小数据流

```python
documents = load_documents("notes/")
chunks = split(documents, size=500, overlap=80)
index = embed_and_store(chunks)

context = index.search(question, top_k=4)
answer = model.generate(question=question, context=context)
```

## 切分与召回

切分单位应尽量保留语义完整性。固定字符数是起点，但标题、段落和代码块边界通常更重要。评估召回时，不要只看最终回答，要检查正确证据是否进入前几条结果。

## 让回答可验证

在提示词中要求模型只依据给定资料回答，并为关键结论附上来源。没有足够证据时，明确返回“不确定”比生成流畅的猜测更有价值。

## 下一步

先用十几篇你熟悉的文档构建原型，手工准备一组问题与标准证据。只有在召回质量稳定之后，再考虑重排序、混合检索和复杂 Agent 流程。
