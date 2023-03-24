---
layout: default-main
title: White Papers
---

{% for item in site.white-papers %}

  {% capture item-title %}{{ item.title }}{% endcapture %}
  {% capture item-authors %}{{ item.authors }}{% endcapture %}
  {% capture item-date %}{{ item.date }}{% endcapture %}
  {% capture item-tags %}{{ item.tags }}{% endcapture %}
  {% capture item-summary %}{{ item.summary }}{% endcapture %}
  {% capture item-url %}{{ item.url }}{% endcapture %}

  {% include card.html with title=item-title authors=item-authors date=item-date tags=item-tags summary=item-summary url=item-url %}
{% endfor %}