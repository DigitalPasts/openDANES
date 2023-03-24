---
layout: default-main
title: Tutorials
---

<!-- Loop through all posts in the 'posts' directory -->
{% for item in site.tutorials %}
  <!-- Include the 'card' template for each post -->
  {% include 'card.html' title=item.title authors=item.authors date=item.date tags=item.tags summary=item.summary %}
{% endfor %}
