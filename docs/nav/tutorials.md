---
layout: default-main
title: Tutorials
---

<!-- Loop through all posts in the 'posts' directory -->
{% for page in site.docs/tutorials %}
  <!-- Include the 'card' template for each post -->
  {% include 'card.html' with {
    title: page.title,
    author: page.author,
    date: page.date,
    tags: page.tags,
    summary: page.summary
  } %}
{% endfor %}
