---
title: "Language Models are Few-Shot Learners"
description: "展示语言模型随规模增长产生的上下文学习能力，以及少样本提示带来的任务泛化。"
publishedAt: 2020-05-28
tags: ["语言模型", "In-Context Learning", "GPT-3"]
cover: "paper-few-shot"
coverAlt: "示例卡片流向蓝色模型球体"
featured: true
draft: false
kind: "paper"
url: "https://arxiv.org/abs/2005.14165"
authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder"]
venue: "NeurIPS 2020"
---

## 论文摘要

研究通过扩大模型规模，观察到模型无需参数更新便可根据自然语言指令和少量示例完成多类任务。

## 核心发现

1. 模型规模扩大后，少样本学习能力整体增强。
2. 自然语言提示可以让同一模型适配多种任务形式。
3. 不同任务的规模收益并不均衡，需要逐项评估。
4. 能力增长同时伴随偏差、成本与可控性问题。

## In-Context Learning

上下文学习把示例放入提示词中，让模型从当前输入推断任务形式。它不是传统意义上的参数训练，更像一次临时的模式适配。

## 实验结论

论文推动了通用语言模型范式，也提醒我们必须同时评估能力、效率、公平性和误用风险。
