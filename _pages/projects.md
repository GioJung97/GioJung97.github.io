---
layout: page
title: Work
title_ko: 작업물
permalink: /projects/
# description: Projects page under construction.
nav: true
nav_order: 1
horizontal: false
---

{% assign pinned_projects = site.projects | where: "pinned", true | sort: "order" | reverse %}
{% assign other_projects = site.projects | where_exp: "p", "p.pinned != true" | sort: "order" | reverse %}

<div class="work-grid">
  {% for project in pinned_projects %}
    {% include projects.liquid %}
  {% endfor %}
  {% for project in other_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
