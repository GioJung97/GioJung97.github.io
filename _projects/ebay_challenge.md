---
layout: page
title: eBay 2025 University Machine Learning Competition
description: 'Top 4: "Init to Win it"'
img: assets/img/3.jpg
order: 99
---

## Overview

This project documents our submission for the eBay 2025 University Machine Learning Competition. The challenge focuses on a Named Entity Recognition (NER) task where models learn from marketplace listing titles to identify and label key product attributes to enhance shopping and discovery in German language.

For the full task definition, rules, and datasets, see the official challenge page:
<a href="https://eval.ai/web/challenges/challenge-page/2508/overview">eBay 2025 University ML Competition on EvalAI</a>

## Our Approach (Top 4)

> *Due to the competition’s data usage agreement and model disclosure restrictions, we are unable to share implementation details, dataset-specific processing steps, or proprietary configurations. The description below intentionally remains high-level while reflecting the overall structure of our work.*

Our solution was developed through an iterative, system-level process rather than a single fixed design. We treated the task as a learning and refinement problem, where modeling choices were continuously guided by empirical performance and error behavior.

### Model Exploration
We evaluated a diverse set of open-source, pretrained German language models suitable for sequence labeling tasks. Instead of relying on a single architecture, we explored multiple representations to understand how different pretrained linguistic priors affected downstream performance.

### Iterative Fine-Tuning
Rather than applying a single training recipe, we explored multiple fine-tuning strategies and training configurations, including cross-validation-based training, progressive fine-tuning, validation-based early stopping, and validation-driven model selection. These variations were assessed through controlled validation, with adjustments driven by observed failure patterns rather than static assumptions.

### System-Level Optimization
We treated preprocessing, model training, and output refinement as a unified pipeline, where improvements at one stage could influence the behavior of the others. This allowed us to gradually stabilize predictions and reduce inconsistent outputs without relying on dataset-specific shortcuts.

### Refinement and Convergence
Through repeated cycles of evaluation and adjustment—including model selection, training configuration changes, and output-level refinement—the system converged to a stable configuration that balanced precision and generalization.

Using this system-oriented strategy, our team, Init to Win, was able to achieve a **Top 4 ranking with an F1 score of 0.940146**.

