---
layout: default-main
title: Tutorials
---

{% for item in site.pages %}
  {% if item.type == "tutorial" %}

    <div class="card">
    <a href="{{item.url}}">
      <div class="card-body">

        <h3 class="card-title">
          {{ item.title }}
        </h3>

        <div class="card-meta">
          <i class="fas fa-robot"></i>
          {% for author in item.authors %}
            {%- if forloop.length > 0 -%}
              {{ author }}{% unless forloop.last %}, {% endunless -%}
            {%- endif -%} 
          {% endfor %}
          <i class="fas fa-calendar-alt"></i>
          {{ item.date | date: "%B %d, %Y" }}

          <i class="fas fa-hashtag"></i>
          {% for tag in item.tags %}
            {%- if forloop.length > 0 -%}
              {{ tag }}{% unless forloop.last %}, {% endunless -%}
            {%- endif -%} 
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

  {% endif %}
{% endfor %}