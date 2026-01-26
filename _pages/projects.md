---
layout: page
title: Projects
permalink: /projects/
# description: Projects page under construction.
nav: true
nav_order: 2
horizontal: false
---

<!-- pages/projects.md (reference template) -->
<div class="projects">
<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "order" | reverse %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
</div>
