---
layout: default-main
title: Tutorials
---

{% for item in site.tutorials %}
  {{ item.title }}
  {% capture url_path %}{{site.url}}{{item.url}}{% endcapture %}
  {% include card.html title=item.title authors=item.authors date=item.date tags=item.tags summary=item.summary path=url_path %}
{% endfor %}
