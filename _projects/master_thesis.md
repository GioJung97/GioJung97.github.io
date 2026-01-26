---
layout: page
title: Master's Thesis
description: 'Title: "Evaluation of Vision Language Models using Item Response Theory"'
img: assets/img/gio_images/thesis/research-diagram.png
order: 100
---

## Thesis Defense

You can view the thesis defense presentation here:
<a href="https://docs.google.com/presentation/d/15v04nGq77L9Mta_bNxzx3euX5QGEc5mwiEoBsoTyyN4/edit?usp=sharing">Thesis Defense Slides</a>

## Abstract

Evaluating the performance of generative Artificial Intelligence (AI) systems remains a central challenge in computer science. Traditional evaluation metrics such as F1, accuracy, BLEU, METEOR, or CIDEr, treat all items as equally difficult and often fail to capture nuanced differences in model performance. This limitation is especially apparent when assessing Vision Language Models (VLMs), whose outputs must be judged for quality, coherence, and human alignment. Although Item Response Theory (IRT) is widely used in psychometrics to measure human ability and item difficulty, it has not been systematically applied in machine learning evaluation. This thesis advances IRT as both a rigorous approach and a promising direction for evaluating VLMs as raters, offering a measurement-based framework that improves both the validity and interpretability of evaluation results.

Three case studies ground this work. The first examines VLMs rating image captions, comparing model ratings to human judgments using the Validated Image Caption Rating (VICR) dataset. The second extends IRT to visual reading comprehension, where VLMs and human participants interpret comic-based narratives requiring both local and global inference. The third investigates video audio description rating, a complex, multi-dimensional task critical for accessibility, where VLMs are assessed alongside human raters across seven evaluation dimensions. In all cases, Wright Map analyses provide interpretable visualizations that reveal meaningful differences between models, show which models approximate human raters most closely, and tells which items are easy or hard to be rated.

This thesis contributes a generalizable framework for evaluating AI models as human-like raters. By applying IRT to VLM evaluation, I demonstrate how psychometric tools can provide valuable insights beyond traditional metrics, enhancing our ability to assess interpretability, reliability, fairness, and alignment. Ultimately, this work positions IRT as both an effective methodology and a forward-looking direction for evaluating VLMs as judges within broader AI workflows.

## Thesis

<div class="pdf-embed">
  <iframe
    src="{{ '/assets/pdf/thesis_report.pdf' | relative_url }}#toolbar=1&navpanes=0&scrollbar=1"
    title="Master's Thesis PDF"
    loading="lazy"
  ></iframe>
</div>

If the PDF does not render, you can check it directly:
<a href="{{ '/assets/pdf/thesis_report.pdf' | relative_url }}">thesis.pdf</a>
