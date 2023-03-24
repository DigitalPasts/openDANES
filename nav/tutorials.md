---
layout: default-main
title: Tutorials
---

<!-- Loop through all tutorials in the 'tutorials' directory -->
{% for item in site.tutorials %}
  <!-- Include the 'card' template for each post -->
  {{ item.title }}
  {% include 'card.html' title=item.title authors=item.authors date=item.date tags=item.tags summary=item.summary %}
{% endfor %}
