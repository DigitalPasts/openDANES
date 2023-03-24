---
layout: default-main
title: White Papers
---

{% for item in site.white-papers %}
  {{ item.title }}
  {% capture url_path %}{{site.url}}{{item.url}}{% endcapture %}
  {% include card.html title=item.title authors=item.authors date=item.date tags=item.tags summary=item.summary path=url_path %}
{% endfor %}