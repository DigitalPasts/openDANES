---
layout: default-main
title: White Papers
---

{% for item in site.white-papers %}

  {% capture item-title %}{{ item.title }}{% endcapture %}
  {% capture item-date %}{{ item.date }}{% endcapture %}
  {% capture item-summary %}{{ item.summary }}{% endcapture %}
  {% capture item-url %}{{ item.url }}{% endcapture %}

  {% capture item-authors %}
    {% for author in item.authors %}
      {%- if forloop.length > 0 -%}
        {{ author }}{% unless forloop.last %}, {% endunless -%}
      {%- endif -%}
    {% endfor %}
  {% endcapture %}

  {% capture item-tags %}
    {% for tag in item.tags %}
      {%- if forloop.length > 0 -%}
        {{ tag }}{% unless forloop.last %}, {% endunless -%}
      {%- endif -%}
    {% endfor %}
  {% endcapture %}

  

  {% include card.html title=item-title authors=item-authors date=item-date tags=item-tags summary=item-summary url=item-url %}
{% endfor %}