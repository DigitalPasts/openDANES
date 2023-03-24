---
layout: default-main
title: Tutorials
---

{% for item in site.tutorials %}

  <div class="card">
  <a href="{{site.url}}{{item.url}}">
    <div class="card-body">

      <h1 class="card-title">
        {{ item.title }}
      </h1>

      <div class="card-meta">
        <i class="fas fa-robot"></i>
        {% for author in authors %}
          {{ item.author }}, 
        {% endfor %}
        <i class="fas fa-calendar-alt"></i>
        {{ item.date | date: "%B %d, %Y" }}
        <i class="fas fa-hashtag"></i>
        {% for tag in tags %}
          {{ item.tag }}, 
        {% endfor %}
      </div>

      <div class="card-summary">
        <p>
          {{ item.summary }}
        </p>
      </div>

    </div>
  </a>
  </div>

{% endfor %}
