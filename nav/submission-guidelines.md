---
layout: default+toc
title: Submission Guidelines
type: nav
authors: openDANES
tags: navigation bar
---

OpenDANES currently welcomes submissions for tutorials and white papers in English, but also German and Spanish.

## Submission Types: Tutorials and White Papers

### Tutorials

Tutorials are meant to be educational resources for students and scholars who wish to gain practical skills to study the ancient Near East using innovative computational methodologies and tools. Tutorials are meant to instruct the readers how to write code or use existing tools to gain new insight on ancient data and traditional research questions.

Tutorials should avoid any unnecessary jargon, be it from computer and data science or from their field of speciality in ancient Near Eastern studies. Tutorials should be accessible to both students and scholars from the humanities and from compurter and data science. Notwithstanding, tutorials can indicate their level of difficulty (beginner, intermediate, or advanced), which refers to the technical skill required. Tutorials should aim to use up-to-date packages and tools in order to lengthen the usefullness of their instructions.

### White Papers

*write what white papers should be*...

## Publication Process and Peer Review

The submission process goes through the following steps:

1. Initial submission and review (by OpenDANES editorial board)
2. Temporary online publication of manuscript
3. Peer review process
4. Final publication (with DOI)

### Initial Submission and Review

Submission are uploaded through the {% include link.html url="https://forms.gle/Y4VeAZhnegEtFQ9N6" content="the following google form" %}. Please read the full guidelines before submitting your manuscript.

Upon submission, the manuscript goes through an initial review process by the OpenDANES [editorial board]({{site.baseurl}}/nav/about.html#editorial-board). Three board members of relevant speciality will assess whether the tutorial or white paper's scope are fitting to OpenDANES and are of sufficient academic rigor. Authors will be notified of board rejection or approval within a month from day of submission.

### Temporary online publication

One aspect of OpenDANES' vision is that manuscripts, especially tutorials, are published while going through peer review process, in order for the authors to get possible feedback from experts as well as readers. Therefore, once the piece is approved by the editorial board, it will be made available online while going through peer review. However, it will not receive a DOI or be publicized until the peer review is completed. It will be clearly marked as going under peer review on the website.

For this temporary online publication, authors may be requested to correct the formatting style of their pieces, in case of errors. On the formatting guidelines, [see further below](#manuscript-formatting). Furthermore, tutorials which include code or programs will be validated by the OpenDANES [editorial team]({{site.baseurl}}/nav/about.html#editorial-team), and if it is not reproducible on other machines and operating systems, the author(s) will be notified and will need to correct their manuscript accordingly. For the tutorial validation process, [see further below](#tutorial-validation). If these are not corrected by the author upon request from the editorial team within a reasonable span of time, the manuscript will not be accepted for publication. Until these corrections are made, the peer review process does not begin as well.

### Peer Review Process

Each piece will be peer-reviewed by two experts in the field. OpenDANES employes an open peer-review process, meaning the peer-reviewers will know the author(s) and vice versa. The peer reviewers's names will also appear on the published submission. Peer reviewers are given three months to review a manuscript.

For the peer review process OpenDANES uses {% include link.html url="https://web.hypothes.is/" content="hypothes.is" %}, a web-based open source annotation tool. This annotation tool is implemented within the OpenDANES website, so that no installation or plugin is required. Peer reviewers and authors will be invited to the "OpenDANES Reviews" hypothes.is group, where the peer reviewers will be able to mark their comments and corrections on the web version of the piece, and the author will be able to then comment using hypothes.is and implement the changes requested. The "OpenDANES Reviews" hypothes.is group will be open for any who are interested to join it.

After both peer reviewers have completed their review, if the manuscript is approved for publication, the corresponding author(s) will be notified via email and receive a month to comment and implement any corrections. Extension can be given if requested. Comments to the peer reviews should be made through hypothes.is, including justification for not applying changes that may have been suggested. If need be, some comments can be shared only with the OpenDANES editorial team and board through the resubmission form. Authors need to submit their corrected manuscript {% include link.html url="https://forms.gle/BZV1yg6CFsYPU4W59" content="through this resubmission form" %}.

### Final Publication

Following resubmission, the updated manuscript will be uploaded to the website by the editorial team. It will also receive a DOI, and be publicized in the DANES mailing list, DANES Discord channel, Twitter, and other relevant avenues.

After this final submission, some tutorials may need to be updated as packages or programs change or cease to be functional. In such cases, the author(s) may contact the editorial team at the Digital Pasts Lab email (<digpasts@gmail.com>), or the editorial team may contact the authors if there is feedback from readers that the tutorial is no longer functional. In the latter case, the author(s) may choose to update their code or, if that is unfeasable, impossible, or unwanted, the tutorial will become depracted: it will still be published on the website but there will be a warning that the tutorial is out of date.

## Formatting Guidelines

### Manuscript Structure

We do not request submission in a specific structure. You can organize the content of your submission however you wish. 

However, we recommend for tutorials to have a clear structure, such as:

- Introduction
- Prerequisites (see further under Code Validation)
- Instructions (main body of tutorial)
- Caveats and/or Further Research
- Further Reading
- References and Notes

### Manuscript Formatting

Submissions are accepted in either **markdown** or **google doc** files. No other file formats are accepted. Images need to be uploaded separately in the submission form: please prepare them accordingly ahead of time.

We ask authors to follow certain guidelines when formatting their manuscripts, such as using particular syntax for codeblocks, links, figures and legends, etc., as well as filling up the YAML frontmatter, for both markdown and google doc submissions. This ensures the submissions will be displayed correctly on the OpenDANES journal website. Following these guidelines will significantly speed up the publication process and will be greatly appreciated.

#### General Syntax Instructions

To assist the process of preparing the manuscript, there are templates available for [markdown]({{site.baseurl}}/assets/docs/submission_markdown_template.txt) and {% include link.html url="https://docs.google.com/document/d/e/2PACX-1vR6iQY97y0PKApP9eMZGPYFpgDezxVzr8ToCvt1KNBSuwscPG5Qx-G6wBXVRp8qqInqrn4vyu0PbpNv/pub" content="google doc" %}. These templates include examples of all the formatting types that may be needed (headings, lists, codeblocks, prompts, etc.). How they are then displayed can be viewed [through this link]({{site.baseurl}}/pages/submission_markdown_template.html), where you can also copy the required syntax.

#### YAML Frontmatter

In both the markdown and google doc templates, there is a YAML frontmatter which authors should fill up before submission according to these guidelines. The YAML frontmatter template is as follows:

```yaml
---
layout: default+toc
type: white-paper OR tutorial
title: Write the title of your submission here
authors:
  author1:
    name: Your Name
    affiliation: affiliation
    email: email
    orcid: orcid number OR null
    academia: link to academia page OR null
    github: link to github OR null
tags:
  - tag 1
  - tag 2
  - tag 3
summary: a 1-2 sentences summary of the content of your submission.
difficulty: null OR beginner OR intermediate OR advanced
submit-date: YYYY-MM-DD
publish-date: null
peer-review-date: null
update-date: null
reviewers: null
doi: null
---
```

The following fields should be left as is: `layout`, `publish-date`, `peer-review-date`, `update-date`, `reviewers`, and `doi`. They will be updated by the editorial team as the submission progresses through the publication process.

The following fields need to be changed by the author(s):

`type`: please leave either white-paper or tutorial (not both).

`title`: replace "Write the title of your submission here" with the title of your submission. 

`authors`: please fill up all author information. For multiple authors, add additional `author2`, `author3`, etc. Make sure to include all additional information (`name`, `affiliation`, `email`, `orcid`, `academia`, `github`) for each author.

`name`, `affiliation`, and `email` is mandatory. If one of the authors is an indepedent scholar, you can write after `affiliation` "Indepedent Scholar".

`orcid`, `academia`, and `github` are not mandatory. If you do not have accounts in these sites, or you do not wish to share those, please leave them as `null`. For `orcid` please enter just your ORCID number (not the full URL). If you wish to include additional ways to contact you or view your works, you may contact the editorial team at the Digital Pasts Lab email (<digpasts@gmail.com>) and we will make those arrangements.

`tags`: please provide **at least** three hashtags that are relevant for the content of you submission. More can be added as well. When choosing your hashtags, please consult the existing hashtags which can be viewed on the [Tutorials]({{base.url}}/nav/tutorials.html) and [White Papers]({{base.url}}/nav/white-papers.html) pages. The editorial team may adapt your chosen hashtags to fit one of the hashtags already used on the website. A general guideline is having at least one hashtag give a clear indication of the language or time period of the data you are working with (e.g. cuneiform, egyptian, bronze-age), and at least one hashtag which is a digital humanities methodology or topic you are using or referring to (e.g. python, R, visualization).

`summary`: please replace the text with a short summary of the main points of your submission. This will be displayed on the website in search result cards and on the [Tutorials]({{base.url}}/nav/tutorials.html) and [White Papers]({{base.url}}/nav/white-papers.html) pages.

`difficulty`: if you are submitting a white paper, please leave here `null`. If you are submitting a tutorial, please indicate the level of difficulty of this tutorial, either `beginner`, `intermediate`, or `advanced`.

`submit-date`: please enter the date in which you submitted your manuscript in YYYY-MM-DD formula.

#### Style Guidelines

The OpenDANES journal follows the style guidelines of XXX. Please consult their manual and instructions for general English style guidelines.

##### Footnotes, Links, and Citations

If you are citing academic publications (articles, books, etc.), please include a `References` section at the end of you submission before the `Notes` (footnotes) section. The references should be fully formatted according to the guidelines of XXX.

If you are citing online resources (github repositories, online databases, etc.) which do not have an academic citation, those can be referenced through a link. However, do **give proper credit**, when relevant, to the writers of the resource you are citing in the body of your text or in a footnote. In addition, please as much as possible **use permenant links** (URIs, DOIs) as opposed to temporary ones.

Please avoid using too many footnotes, unless absolutely necessary (especially for tutorials).

### Tutorial Validation

If you are submitting a tutorial, before initial publication on the OpenDANES journal your code or instructions will be validated by the OpenDANES editorial team.

Ideally, tutorial instructions should be functional on Mac, Linux, or Windows operating systems. However. if your tutorial uses programs or code that are available in only some of those operating systems, you will need to declare it in the submission form so that the editorial team will only check your code on relevant operating system.

**If your tutorial uses code that requires any dependencies and/or particular versions, please state so at the beginning of your tutorial** in a `Prerequisites` section. Also, if any installation is required, please guide the reader through the installation process or refer to a credible source with installation guidelines (including for multiple operating systems, when relevant).

Unless told otherwise, the editorial team will validate the tutorial on a Windows computer, Mac, and through Google Colab (when relevant). If the editorial team is unable to follow the instructions, they will send a report to the author(s) and the manuscript will not be published until those are addressed.