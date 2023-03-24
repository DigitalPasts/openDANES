---
layout: default-main
title: White Papers
---

{% for item in site.pages %}
  {% if item.type == "tutorial" %}

    {% capture item-title %}{{ item.title }}{% endcapture %}
    {% capture item-date %}{{ item.date }}{% endcapture %}
    {% capture item-summary %}{{ item.summary }}{% endcapture %}
    {% capture item-url %}{{ item.url }}{% endcapture %}
    {% capture item-authors %}{{ item.authors }}{% endcapture %}
    {% capture item-tags %}{{ item.tags }}{% endcapture %}

    {{ item.title }}
    {{ item.date }}
    {{ item.summary }}
    {{ item.url }}
    {{ item.authors }}
    {{ item.tags }}

    {{ item-title }}
    {{ item-date }}
    {{ item-summary }}
    {{ item-url }}
    {{ item-authors }}
    {{ item-tags }}

    {% include card.html title=item-title authors=item-authors date=item-date tags=item-tags summary=item-summary url=item-url %}
  
  {% endif %}
{% endfor %}