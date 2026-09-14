---
title: "Attention Is All You Need"
description: "提出仅基于注意力机制的 Transformer 架构，奠定现代大语言模型的重要基础。"
publishedAt: 2017-06-12
tags: ["Transformer", "自然语言处理", "大模型"]
cover: "paper-attention"
coverAlt: "抽象注意力连线与学术纸张"
featured: true
draft: false
kind: "paper"
url: "https://arxiv.org/abs/1706.03762"
authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar"]
venue: "NeurIPS 2017"
---

## 论文摘要

论文以自注意力替代循环与卷积结构，使序列位置能够并行计算，并显著改善长距离依赖的建模效率。

## 核心发现

1. 编码器和解码器都由注意力与前馈网络堆叠而成。
2. 多头注意力让模型在不同表示子空间中同时建立关系。
3. 位置编码为不具备顺序结构的注意力机制补充位置信息。

## 阅读建议

先理解缩放点积注意力，再阅读多头注意力和完整架构。对照张量形状推导每一步，比只看结构图更有效。
