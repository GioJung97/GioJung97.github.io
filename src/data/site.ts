// All home-page content lives here. Strings with an `en`/`ko` pair switch with the language toggle;
// plain strings are shown as-is in both languages.

export type L10n = { en: string; ko?: string };
export type Link = { label: string; href: string };

export const profile = {
  name: "Gio Jung",
  tagline: { en: "Computer Vision and Machine Learning Engineer", ko: "컴퓨터 비전·머신러닝 엔지니어" },
  oneLiner: {
    en: "I evaluate vision-language models and build multimodal ML pipelines.",
    ko: "비전-언어 모델을 평가하고, 멀티모달 ML 파이프라인을 만듭니다.",
  },
  description:
    "Gio Jung is a research engineer at YouDescribe Lab and co-founder of Mosaic Cognition, working on vision-language model evaluation and multimodal ML for accessibility.",
  bio: [
    {
      en: "I'm a research engineer at <b>YouDescribe Lab</b>, an accessibility research group building video audio description to make video content accessible for blind and low-vision users. My work focuses on evaluating vision-language models as raters and describers, and building the multimodal ML pipelines that measure how well they actually perform.",
      ko: "저는 시각 및 저시력 사용자를 위해 비디오 음성 해설(audio description)을 제작하는 접근성 연구 그룹인 <b>YouDescribe Lab</b>에서 리서치 엔지니어로 일하고 있습니다. 비전-언어 모델(vision-language model)을 평가자 및 설명 생성기로 활용하는 연구에 집중하고 있으며, 이러한 모델이 실제로 얼마나 잘 작동하는지 측정하는 멀티모달 ML 파이프라인을 구축하고 있습니다.",
    },
    {
      en: "I'm also the co-founder and Founding Engineer of <b>Mosaic Cognition</b>, where we're building an authoring tool that turns stories into structured comics to help autistic learners with reading comprehension. I lead the engineering side of the product, from system architecture to data and inference pipelines to the full-stack build.",
      ko: "또한 자폐 학습자의 독해를 돕기 위해 이야기를 구조화된 만화로 변환하는 저작 도구를 만드는 <b>Mosaic Cognition</b>의 공동 창업자이자 파운딩 엔지니어(Founding Engineer)이기도 합니다. 시스템 아키텍처부터 데이터 및 추론 파이프라인, 풀스택 개발까지 제품의 엔지니어링 전반을 이끌고 있습니다.",
    },
  ] as L10n[],
  now: [
    { role: { en: "Research Engineer", ko: "리서치 엔지니어" }, org: "YouDescribe Lab" },
    { role: { en: "Co-founder & Founding Engineer", ko: "공동 창업자·파운딩 엔지니어" }, org: "Mosaic Cognition" },
  ] as { role: L10n; org: string }[],
  links: [
    { label: "GitHub", href: "https://github.com/GioJung97" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gio-jung-1623b924b" },
    { label: "Scholar", href: "https://scholar.google.com/citations?user=eGABprEAAAAJ&hl=en" },
    { label: "Email", href: "mailto:gio6141@gmail.com" },
    { label: "CV", href: "/pdf/Gio_Jung_Resume.pdf" },
  ] as Link[],
};

export const ui = {
  about: { en: "About", ko: "소개" },
  now: { en: "Now", ko: "현재" },
  pinned: { en: "Featured", ko: "대표" },
  projects: { en: "Projects", ko: "프로젝트" },
  research: { en: "Research", ko: "연구" },
  news: { en: "Latest", ko: "최근 소식" },
  experience: { en: "Experience", ko: "경력" },
  publications: { en: "Publications", ko: "논문" },
  preprints: { en: "Preprints", ko: "프리프린트" },
  posters: { en: "Posters", ko: "포스터" },
  education: { en: "Education", ko: "학력" },
  honors: { en: "Honors & Grants", ko: "수상·연구비" },
  skills: { en: "Skills", ko: "기술" },
  downloadCv: { en: "CV (PDF)", ko: "이력서 (PDF)" },
  englishOnly: { en: "", ko: "상세 내용은 영어로 작성되어 있습니다." },
  light: { en: "Light", ko: "라이트" },
  dark: { en: "Dark", ko: "다크" },
} satisfies Record<string, L10n>;

export const news: { date: string; text: L10n }[] = [
  {
    date: "2026-10-23",
    text: {
      en: 'The paper "Toward Scalable Audio Description Quality Control: A Workflow for Evaluating Human and VLM Raters" is now published in the ASSETS 2026 proceedings!',
      ko: '논문 "Toward Scalable Audio Description Quality Control: A Workflow for Evaluating Human and VLM Raters"가 ASSETS 2026 proceedings에 게재되었습니다!',
    },
  },
  {
    date: "2026-09-01",
    text: {
      en: "MOSAIC, the authoring tool we build at Mosaic Cognition, is now in use at Stanford Cardinal Academy this Fall 2026!",
      ko: "Mosaic Cognition에서 만든 저작 도구 MOSAIC가 2026년 가을 학기부터 Stanford Cardinal Academy에서 사용되고 있습니다!",
    },
  },
  {
    date: "2026-08-19",
    text: {
      en: 'The paper "Beyond Lexical Overlap: Validating Semantic Similarity Metrics for LLM-Based Video Caption Augmentation" is now published in the ICIIT 2026 proceedings!',
      ko: '논문 "Beyond Lexical Overlap: Validating Semantic Similarity Metrics for LLM-Based Video Caption Augmentation"가 ICIIT 2026 proceedings에 게재되었습니다!',
    },
  },
  {
    date: "2026-06-25",
    text: {
      en: 'The paper "Toward Scalable Audio Description Quality Control: A Workflow for Evaluating Human and VLM Raters" has been conditionally accepted to ASSETS 2026!',
      ko: '논문 "Toward Scalable Audio Description Quality Control: A Workflow for Evaluating Human and VLM Raters"가 ASSETS 2026에 조건부 승인(conditionally accepted)되었습니다!',
    },
  },
  {
    date: "2026-02-02",
    text: {
      en: 'The paper "Using Item-Response Theory to Disentangle Local vs. Global ..." is officially published at the Journal of Discourse Processes!',
      ko: '논문 "Using Item-Response Theory to Disentangle Local vs. Global ..."가 Journal of Discourse Processes에 정식으로 게재되었습니다!',
    },
  },
  {
    date: "2025-12-17",
    text: {
      en: "Officially graduated from SFSU with a Master's degree in Computer Science!",
      ko: "SFSU에서 컴퓨터공학 석사 학위를 받고 정식으로 졸업했습니다!",
    },
  },
  {
    date: "2025-12-08",
    text: {
      en: 'Passed Oral Defense with the title: "Evaluation of Vision Language Models using Item Response Theory"!',
      ko: '논문 제목 "Evaluation of Vision Language Models using Item Response Theory"로 구두 심사(Oral Defense)를 통과했습니다!',
    },
  },
];

export type Paper = { title: string; authors?: string; venue?: string; summary?: string; year?: string; links?: Link[] };

const ME = "<strong>Gio Jung</strong>";

export const publications: Paper[] = [
  {
    title: "Toward Scalable Audio Description Quality Control: A Workflow for Evaluating Human and VLM Raters",
    authors: `Lana Do, ${ME}, Juvenal Francisco Barajas, Andrew Taylor Scott, Alexander Mario Blum, Shasta Ihorn, Vassilis Athitsos, Ilmi Yoon`,
    venue: "ASSETS 2026",
    year: "2026",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/full/10.1145/3797867.3829038" },
      { label: "arXiv", href: "https://arxiv.org/abs/2602.01390" },
    ],
  },
  {
    title: "Beyond Lexical Overlap: Validating Semantic Similarity Metrics for LLM-Based Video Caption Augmentation",
    authors: `Juvenal Francisco Barajas*, ${ME}*, Manali Seth, Lana Do, Malleeswari Jagabattuni, Andrew Taylor Scott, Shasta Ihorn, Alexander Mario Blum, Vassilis Athitsos, Ilmi Yoon`,
    venue: "ICIIT 2026, Da Nang, Vietnam",
    year: "2026",
    links: [{ label: "DOI", href: "https://doi.org/10.1145/3805862.3805887" }],
  },
  {
    title:
      "Using Item-Response Theory to Disentangle Local vs. Global Processing Dispositions in Autistic Cognition: Comparing Multi-Modal Comics vs. Text-Based Narratives in a Randomized Study",
    authors: `Alexander Mario Blum, James M. Mason, Robin C. Irey, Yukie Toyama, Yunting Liu, ${ME}, Andrew Scott, JinHo Kim, David Pearson`,
    venue: "Discourse Processes Journal",
    year: "2026",
    links: [{ label: "DOI", href: "https://www.tandfonline.com/doi/abs/10.1080/0163853X.2026.2619824" }],
  },
];

export const preprints: Paper[] = [
  {
    title: "MOSAIC: Supporting Collaborative Storytelling and Creative Authorship for Adults with Intellectual Disabilities",
    summary:
      "An AI-powered tool that combines narrative scaffolding, collaborative writing, and comic creation to support accessible storytelling, used in a comic literacy course at Stanford's Cardinal Academy. Built at Mosaic Cognition.",
    authors: "Lana Do*, <strong>Gio Jung</strong>*, Alexander Mario Blum",
    venue: "Under review at IUI 2027",
    links: [
      { label: "Paper", href: "/pdf/mosaic_iui2027_paper.pdf" },
      { label: "Poster", href: "/pdf/mosaic_iui2027_poster.pdf" },
    ],
  },
  {
    title: "Making AI Drafts Count: A Quality Threshold in Audio Description Workflows",
    authors: `Lana Do, Shasta Ihorn, Charity M. Pitcher-Cooper, Sanjay Mirani, ${ME}, Hyunjoo Shim, Zhenzhen Qin, Kien T. Nguyen, Vassilis Athitsos, Ilmi Yoon`,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2605.05348" }],
  },
  {
    title: "ADx3: A Collaborative Workflow for High-Quality Accessible Audio Description",
    authors: `Lana Do, Shasta Ihorn, Charity Pitcher-Cooper, Juvenal Francisco Barajas, ${ME}, Xuan Duy Anh Nguyen, Sanjay Mirani, Ilmi Yoon`,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2602.02684" }],
  },
  {
    title: "Evaluation of Vision Language Models with Item Response Theory",
    authors: `Andrew Scott, ${ME}, Alexander Mario Blum, Juvenal Francisco Barajas, Manali Seth, Shasta Ihorn, Vassilis Athitsos, Ilmi Yoon`,
  },
];

export const posters: Paper[] = [
  {
    title: "ADx3: A Collaborative Workflow for High-Quality Accessible Audio Description",
    authors: `Lana Do, Shasta Ihorn, Charity Pitcher-Cooper, Juvenal Francisco Barajas, ${ME}, Xuan Duy Anh Nguyen, Sanjay Mirani, Ilmi Yoon`,
    venue: "NeurIPS 2025 Poster Presentation",
    year: "2025",
  },
  {
    title: "GPT-4o vs. Humans in Rating Image Descriptions",
    authors: `${ME}, Ilmi Yoon`,
    venue: "GMiS CAHSI Research Poster Competition",
    year: "2024",
    links: [{ label: "Poster", href: "https://drive.google.com/file/d/1B2hbqAiHKpWgwQDh_sW-kZO6IcyxV2XH/view" }],
  },
];

export type Role = { title: string; org: string; years: string; summary?: string; points?: string[] };

export const experience: Role[] = [
  {
    title: "Research Assistant",
    org: "YouDescribe Lab",
    years: "2024 – Present",
    summary:
      "Accessibility research lab advancing video audio description (AD) for blind and low-vision users; leading systematic model evaluation to validate VLMs as raters and describers.",
    points: [
      "Leading key frame selection research to improve VLM-based evaluation and description of video AD.",
      "Validated 100+ VLMs as raters across image captioning and video AD by building end-to-end evaluation pipelines with Hugging Face and LangChain-based API integrations, supporting 2 ongoing research submissions.",
      "Uncovered model-specific strengths and failure patterns across 7 quality rating dimensions by applying Item Response Theory (IRT) to compare VLM and human rater performance.",
    ],
  },
  {
    title: "SpaceTimeGPT",
    org: "NAIRR Pilot · Pittsburgh Supercomputing Center",
    years: "2025",
    summary: "NAIRR Pilot–funded project scaling a video captioning model (TimeSformer × GPT-2).",
    points: [
      "Prepared and transferred 60K+ VATEX video clips to PSC HPC clusters, preprocessing frames for efficient distributed data loading at scale.",
      "Co-trained a 400M+ parameter video captioning model across 16 NVIDIA H100 GPUs (2 nodes) using DeepSpeed Pipeline Parallelism, achieving CIDEr 63 on the VATEX benchmark.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Astro Information Security",
    years: "2025",
    summary: "Information security startup; built internal email automation tooling.",
    points: ["Designed an email classification MCP pipeline to process 1K+ messages with automated rule-based filtering."],
  },
  { title: "Tutor", org: "TASC, San Francisco State University", years: "2023 – 2025" },
  { title: "Grader / Teaching Assistant", org: "Department of Mathematics, San Francisco State University", years: "2023 – 2025" },
];

export const education: Role[] = [
  {
    title: "Master of Science in Computer Science",
    org: "San Francisco State University",
    years: "2024 – 2025",
    summary: 'Thesis: "Evaluation of Vision Language Models using Item Response Theory"',
  },
  { title: "Bachelor of Arts in Mathematics", org: "San Francisco State University", years: "2016 – 2023", summary: "Minor in Computer Science" },
];

export const honors: { year: string; items: string[] }[] = [
  { year: "2025", items: ["National Science Foundation (NSF), 3K"] },
  { year: "2024", items: ["NAIRR Pilot Resource", "Google CAHSI IRP Grant"] },
  { year: "2017", items: ["Jessie F. L. York Scholarship, 1K"] },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming & Data", items: ["Python", "SQL", "Bash", "pandas", "NumPy", "data curation", "batch inference"] },
  { group: "ML & Multimodal Systems", items: ["PyTorch", "Hugging Face Transformers", "multimodal pipelines", "fine-tuning", "RAG", "APIs"] },
  {
    group: "Evaluation & MLOps",
    items: ["Item Response Theory (IRT)", "Kendall's tau", "BLEU", "CIDEr", "METEOR", "CLIPScore", "frame sampling", "DeepSpeed", "Weights & Biases"],
  },
];

export const snapshots = [
  { file: "half_marathon_2025.jpg", alt: "SF Half Marathon 2025", caption: "Finished the 2025 San Francisco Half Marathon with friends!" },
  { file: "biking_parkmerced.jpg", alt: "Biking at Parkmerced", caption: "Biking through Parkmerced on a sunny afternoon." },
  { file: "math_cup.jpg", alt: "Math mug", caption: "My favorite math mug." },
];
