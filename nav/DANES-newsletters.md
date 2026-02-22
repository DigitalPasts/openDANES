---
layout: default-main
title: DANES Newsletters
type: nav
authors: openDANES
tags: navigation bar
---

The purpose of this newsletter is to aggregate relevant articles, conferences, and general updates about the world of digital ancient Near Eastern studies, so that we are informed as a community of each other’s research.

A new newsletter is published at the beginning of each month or every other month. To get updated when a new newsletter is published, send an email to <digpasts@gmail.com> to join the DANES mailing list!

All the newsletters can be browsed on this platform:

<ul>
{% assign newsletters = site.pages | where_exp: "item", "item.dir == '/newsletter/'" | sort: "date" | reverse %}
{% for item in newsletters %}
  <li>
    <a href="{{ site.baseurl }}{{ item.url }}">{{ item.date | date: "%B %Y" }}</a>
  </li>
{% endfor %}
</ul>

Each newsletter includes some or all of the following sections: 

- **DANES network updates**: such as additions to the [DANES Resources](/nav/DANES-resources.html) page, publications of tutorials and white papers, and other announcements from the OpenDANES board.
- **Recent Academic Publications**: peer reviewed articles, conference proceedings, and books which were published since the last newsletter. 
- **Highlighted Academic Publications**: peer reviewed articles, conference proceedings, and books that were published in the past and are particularly relevant to the field.
- **Special Mention**: academic and popular publications that may not be directly related to ancient Near Eastern studies, but are relevant to the broader fields of computer science, digital humanities, or computational humanities.
- **Datasets Published**: new datasets that were published since the last newsletter.
- **Events**
    - **Talks and Conferences**: upcoming opportunities to meet or listen to talks to relevant to the field, some take place online, others are in person around the globe.
    - **Training Opportunities**: summer school and workshops for gaining digital and computational skills.
    - **Call for Papers**: calls for papers for upcoming conferences and other events.
    - **Fellowships, Scholarships, and Job Opportunities**: opportunities for funding and employment in the field.
