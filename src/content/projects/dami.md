---
title: "Dami"
title_ko: "Dami"
summary: "Offline Korean–English dictation for macOS, with Whisper running on-device"
summary_ko: "Whisper를 기기 안에서 돌리는 macOS용 오프라인 한·영 받아쓰기 앱"
kind: App
kind_ko: 앱
year: 2026
cover: "../../assets/images/projects/dami/dami-demo-still.png"
order: 7
pinned: false
tags:
  - Swift
  - WhisperKit
  - On-device ASR
---

<img src="/media/dami-demo.gif" alt="Holding the shortcut in a notes window: Dami records, shows a check, and the sentence appears at the cursor. A second dictation mixes Korean and English." width="800" height="450" />

**Status:** v1.0.0 released, in active development · [GitHub](https://github.com/GioJung97/dami)

## Overview

Dami is a dictation app for macOS. Hold a key, speak, and the text is pasted at your cursor. Speech recognition runs entirely on the Mac with [WhisperKit](https://github.com/argmaxinc/WhisperKit), so there is no account, no subscription, and the voice never leaves the machine.

It is built for people who switch between English and another language mid-sentence. English words inside a Korean sentence stay in English instead of being transliterated. The name comes from the Korean 담다, "to hold, to put in": it holds what you say.

## My Role

Solo project: product design, the native Swift app, the speech pipeline, and the evaluation harness used to choose its configuration.

## How It Works

- **On-device recognition.** Whisper large-v3-turbo (632 MB) runs through WhisperKit on Apple Silicon. The network is used only once, to download the model.
- **Language-adaptive prompting.** Forcing the wrong language makes Whisper translate rather than transcribe, so Dami never forces one. Whisper detects the language first, restricted to the two the user speaks; English gets the user's vocabulary list as a prompt, Korean gets a short mixed-language sample. If Korean was detected but no Hangul came out, it re-runs without a prompt.
- **Light cleanup.** Narrow, language-specific rules remove fillers such as "um" and "음", collapse some repeated words, and keep self-corrections ("3, no, 4" becomes "4"). A Raw mode pastes exactly what Whisper wrote.
- **Learning from fixes, with approval.** Dami does not retrain Whisper; it learns around it. When the user fixes a dictation, in History or directly in the app they pasted into, Dami proposes a replacement rule and shows which past dictations it would touch. Nothing changes until the user approves. Korean rules match through particles, so a rule for "클라우드" also fixes "클라우드에서도" but not "클라우드펀딩".
- **Privacy by default.** Text history stays local, audio is saved only if the user opts in, and the clipboard is restored after pasting.

## Evaluation

Before building the app, I benchmarked configurations on 30 of my own recordings (English, Korean, and mixed Korean–English) to pick the recognition setup. Word error rate (WER) is used for English and character error rate (CER) for Korean and mixed speech.

| Configuration | EN WER | KO CER | Mixed CER | English words kept in mixed speech | Median latency |
| --- | --- | --- | --- | --- | --- |
| Whisper turbo, no prompting | 4.6% | 1.4% | 41.9% | 35.7% | 0.55 s |
| **Language-adaptive (shipped)** | **1.3%** | 5.1% | **11.7%** | **82.1%** | 0.74 s |

Adaptive prompting cut the mixed-language error rate from 41.9% to 11.7% and kept far more English words in English, for about 0.2 s of extra latency. Most of the higher Korean CER is not real error: colloquial forms that were actually spoken (뭘, 거, 될) and loanwords written in English. The test set is small and from a single speaker, so these numbers guided design choices rather than serving as a general benchmark.

## Tech Stack

- Swift, SwiftUI, AppKit (menu bar app, global shortcut, Accessibility-based paste)
- WhisperKit (Whisper large-v3-turbo, Core ML)
- GRDB / SQLite for local history and learned rules
- Python benchmark scripts for WER/CER, latency, and memory
