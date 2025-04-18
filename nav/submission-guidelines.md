---
layout: default+toc
title: Submission Guidelines
type: nav
authors: openDANES
tags: navigation bar
---

OpenDANES currently welcomes submissions for tutorials and white papers in English, but also German and Spanish.

<a target="blank" class="image-link" href="https://commons.wikimedia.org/wiki/File:Th%C3%A8bes._Hypog%C3%A9es._Manuscrit_sur_papyrus_en_caract%C3%A8res_hi%C3%A9roglyphiques._Premi%C3%A8re_partie_(NYPL_b14212718-1268002).jpg">![]({{site.baseurl}}/images/decoration/Thèbes._Hypogées._Manuscrit_sur_papyrus_en_caractères_hiéroglyphiques._Première_partie_(NYPL_b14212718-1268002).jpg){: .not-enlarge}</a>

## Submission Types: Tutorials and White Papers

### Tutorials

Tutorials are meant to be an [open educational resource](https://en.wikipedia.org/wiki/Open_educational_resources){:target="_blank"} for students and scholars who wish to gain practical skills studying the ancient Near East using computational methodologies and tools. Tutorials are meant to instruct the readers how to write code or use existing tools to gain new insight on ancient data and traditional research questions.

Tutorials should avoid any unnecessary jargon, be it from computer and data science or from their field of specialty in ancient Near Eastern studies. Tutorials should be accessible to both students and scholars from the humanities and from computer and data science. Notwithstanding, tutorials will include their level of difficulty (beginner, intermediate, or advanced), which refers to the technical skill required. Authors should aim to use up-to-date packages and tools. Updates will be allowed on a case-by-case basis, and especially in the event of deprecated code or tools.

### White Papers

White papers are meant to inform a broader public on the status of different sub-fields in digital ancient Near Eastern studies, such as NLP and OCR for ancient languages and scripts, or the computational analysis of artefacts, landscapes and art. This is done in order to help students, experts, GLAM and industry practitioners develop best practice and instigate policy making on the intersection of ancient cultures and AI.

Papers can be written in a popular style, but rely on high quality up-to-date data and literature. These can include, for example, papers on the state of studies and research in non-western parts of the world, such as the global south, or the take of different levels of students and scholars on using programming to study ancient cultures. For possible structure please consult the [following paper](https://www.turing.ac.uk/news/publications/challenges-and-prospects-intersection-humanities-and-data-science){:target="_blank"}.

## Publication Process and Peer Review

The submission process goes through the following steps:

1. Initial submission and review (by OpenDANES editorial board)
2. Temporary online publication of manuscript
3. Peer review process
4. Final publication (with DOI)

![submission-process]({{site.baseurl}}/images/submission-process.png)

### Initial Submission and Review

Submissions are uploaded through the [the following google form](https://forms.gle/Y4VeAZhnegEtFQ9N6){:target="_blank"}. Please read the full guidelines before submitting your manuscript.

Upon submission, the manuscript goes through an initial review process by the OpenDANES [editorial board]({{site.baseurl}}/nav/about.html#editorial-board). Three board members of relevant specialty will assess whether the tutorial or white paper's scope are fitting to OpenDANES and are of sufficient academic rigor. Authors will be notified of board rejection or approval within a month from day of submission.

### Pre-Peer Review Publication

One aspect of OpenDANES' vision is that manuscripts, especially tutorials, are published while undergoing the peer review process, in order for the authors to get feedback from experts as well as readers. Therefore, once the piece is approved by the editorial board, it will be made available online in preprint stage while under peer review. However, it will not receive a DOI or be publicized in social media until the peer review is completed. It will be clearly marked as under peer review on the website.

This is a temporary online publication, and authors may be requested to correct the formatting style of their piece. For the formatting guidelines, [see further below](#manuscript-formatting). Furthermore, tutorials which include code or programs will be validated by the OpenDANES [editorial team]({{site.baseurl}}/nav/about.html#editorial-team), and if they are not reproducible on other machines and operating systems, the author(s) will be notified and will need to correct their manuscript accordingly. For the tutorial validation process, [see further below](#tutorial-validation). If these are not corrected by the author upon request from the editorial team within a reasonable span of time, it will significantly delay the publication of the manuscript. Until these corrections are made, the peer review process does not begin as well.

### Peer Review Process

Each piece will be peer-reviewed by two experts in the field. OpenDANES employes an open peer review process, meaning the peer-reviewers will know the author(s) and vice versa. The peer-reviewers' names will appear on the published submission. Typical review period will be three months.

For the peer review process OpenDANES uses [hypothes.is](https://web.hypothes.is/){:target="_blank"}, a web-based open source annotation tool. This annotation tool is implemented within the OpenDANES website, so that no installation or plugin is required. Peer-reviewers and authors will be invited to the "OpenDANES Reviews" hypothes.is group, where the peer-reviewers will be able to mark their comments and corrections on the web version of the piece, and the author will be able to then comment using hypothes.is. The "OpenDANES Reviews" hypothes.is group will be open for any who are interested to join it.

After both peer-reviewers have completed their review, if the manuscript is approved for publication, the corresponding author(s) will be notified via email and receive a month to comment and implement any corrections. Extension can be given if requested. Comments to the peer-reviews should be made through hypothes.is, including justification for not applying changes that may have been suggested. If need be, some comments can be shared only with the OpenDANES editorial team and board through the resubmission form. Authors need to submit their corrected manuscript [through this resubmission form](https://forms.gle/BZV1yg6CFsYPU4W59){:target="_blank"}.

### Final Publication

Following resubmission, the updated manuscript will be uploaded to the website by the editorial team. It will also receive a DOI, and be publicized in the DANES mailing list, DANES Discord channel, Twitter, etc.

After this final submission, some tutorials may need to be updated as packages or programs change or cease to be functional. In such cases, the author(s) may contact the editorial team at the Digital Pasts Lab email (<digpasts@gmail.com>), or the editorial team may contact the authors if there is feedback from readers that the tutorial is no longer functional. In the latter case, the author(s) may choose to update their code or, if that is unfeasible, impossible, or unwanted, the tutorial will become deprecated: it will still be published on the website but there will be a warning that the code or tools used are out of date.

## Formatting Guidelines

### Manuscript Structure

We do not request submission in a specific structure. However, we recommend for tutorials to have a clear structure, such as:

- Introduction
- Prerequisites (see further under Code Validation)
- Instructions (main body of tutorial)
- Caveats and/or Further Research
- Further Reading
- References and Notes

### Manuscript Formatting

Submissions are accepted in either **markdown** or **Google Doc** files. No other file formats are accepted. Images need to be uploaded separately in the submission form: please prepare them accordingly ahead of time.

We ask authors to follow certain guidelines when formatting their manuscripts, such as using particular syntax for codeblocks, links, figures and legends, etc., as well as filling up the YAML frontmatter,[^1] for both markdown and google doc submissions. This ensures the submissions will be displayed correctly on the OpenDANES website. Following these guidelines would significantly speed up the publication process and is greatly appreciated.

Furthermore, during submission, authors are requested to add a small image that will be displayed with their contribution on the Tutorials / White Papers pages and in the search results. It is recommended to find a small image that is mostly square. If an appropriate image cannot be found by the author(s), the OpenDANES editorial team will help find one together with the author(s).

[^1]: [YAML](https://en.wikipedia.org/wiki/YAML){:target="_blank"} frontmatter defines variables and metadata that is necessary to display correctly the published submission on the website.

#### General Syntax Instructions

To assist the process of preparing the manuscript, there are templates available for [markdown]({{site.baseurl}}/assets/docs/submission_markdown_template.txt) and [Google Doc](https://docs.google.com/document/d/1vEN10AzFCHdKRRkDYXInWEWKYjQINlsNfoLSkMvsYzA/edit?usp=sharing){:target="blank"}. In order to write in the Google Doc, make a local copy by going to file > Make a copy. These templates include examples of all the formatting types that may be needed (headings, lists, codeblocks, prompts, etc.). How they are then displayed on the OpenDANES platform can be viewed [through this link]({{site.baseurl}}/pages/submission_markdown_template.html), where you can also copy the required syntax.

For mathematical formulae, please use LaTeX syntax that is supported by [mathjax](https://www.mathjax.org/){:target="_blank"}. The syntax can be consulted through the tables [in the following link](https://en.wikipedia.org/wiki/List_of_mathematical_symbols_by_subject){:target="_blank"}. 

#### YAML Frontmatter

In both the markdown and google doc templates, there is a YAML frontmatter which authors are required to fill out before submission according to these guidelines. The YAML frontmatter template is as follows (it also appears in the templates provided above):

```yaml
---
layout: default+toc
type: white-paper OR tutorial
title: Write the title of your submission here
banner-image-source: link to source OR null
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

The following fields **need to be changed** by the author(s):

`type`: please leave either white-paper or tutorial (not both).

`title`: replace "Write the title of your submission here" with the title of your submission.

`banner-image-source`: publications in OpenDANES appear alongside a thumbnail image that you will be asked to upload with your submission. To properly accredit the image source, please provide a link in this field to where you found the image and/or its copyright information. We recommend using images from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page){:target="blank"}. If you are using an image from elsewhere, please ensure you have the copyright to use the image. The displayed thumbnail will be linked to the URL provided. If you own the copyright for your image, you can leave this field with `null`. If you would like to specify a license for the reuse of your image, please provide a URL with the license details. Unless specified otherwise, content and images are published on OpenDANES with a [CC-BY 4 license](https://creativecommons.org/licenses/by/4.0/deed.en){:target="blank"}. 

`authors`: please fill out all author information. For multiple authors, add additional `author2`, `author3`, etc. Make sure to include all additional information (`name`, `affiliation`, `email`, `orcid`, `academia`, `github`) for each author.

`name`, `affiliation`, and `email` is mandatory. If one of the authors is an independent scholar, you can write after `affiliation` "Independent Scholar".

`orcid`, `academia`, and `github` are not mandatory. If you do not have accounts in these sites, or you do not wish to share them, please leave as `null`. For `orcid` please enter just your ORCID number (not the full URL). If you wish to include additional ways to contact you or view your work, you may contact the editorial team at the Digital Pasts Lab email (<digpasts@gmail.com>).

`tags`: please provide **at least** three keywords that are relevant for the content of you submission. More can be added as well. When choosing your keywords, please consult the existing keywords which can be viewed on the [Tutorials]({{site.baseurl}}/nav/tutorials.html) and [White Papers]({{site.baseurl}}/nav/white-papers.html) pages. The editorial team may adapt your chosen keywords to fit ones that are already in use. A general guideline is having at least one keyword give a clear indication of the language or time period of the data you are working with (e.g. cuneiform, Egyptian, bronze-age), and at least one keyword which is a digital humanities methodology or topic you are using or referring to (e.g. python, R, visualization).

`summary`: please replace the text with a short summary of the main points of your submission. This will be displayed on the website in search results and on the [Tutorials]({{site.baseurl}}/nav/tutorials.html) and [White Papers]({{site.baseurl}}/nav/white-papers.html) pages.

`difficulty`: if you are submitting a white paper, please leave here `null`. If you are submitting a tutorial, please indicate the level of difficulty of this tutorial, either `beginner`, `intermediate`, or `advanced`. This may be changed at the discretion of the editorial board.

`submit-date`: please enter the date in which you submitted your manuscript in YYYY-MM-DD formula.

#### Style Guidelines and Citations

The OpenDANES platform follows the style guidelines of the Programming Historian. Please consult their Specific Writing Guidelines section in their [author guidelines](https://programminghistorian.org/en/author-guidelines#b-specific-writing-guidelines){:target="_blank"}.

If you are citing academic publications (articles, books, etc.), please include a `References` section at the end of you submission before the `Notes` (footnotes) section. The references should be fully formatted according to the Programming Historian guidelines linked above.

If you are citing online resources (github repositories, online databases, etc.) which do not have an academic citation, those can be referenced through a link. However, do **give proper credit**, when relevant, to the writers of the resource you are citing in the body of your text or in a footnote. Please **use permenant links** (URIs, DOIs) as much as possible, and refrain from using temporary links, such as private websites, blogs, etc.

Please avoid using too many footnotes, unless absolutely necessary (especially for tutorials).

### Tutorial Validation

If you are submitting a tutorial, your code or instructions will be validated by our editorial team prior to the peer review process.

Ideally, tutorial instructions should be functional on Mac, Linux, or Windows operating systems. However, if your tutorial uses programs or code that are available in only some operating systems, please state this clearly.

**If your tutorial uses code that requires any dependencies and/or particular versions, please state so at the beginning of your tutorial** in the `Prerequisites` section. Also, if any installation is required, please guide the reader through the installation process *or* refer to a credible source with installation guidelines (including for multiple operating systems, when relevant).

The editorial team will validate the tutorial on a Windows computer, Mac, and through Google Colab (when relevant). If the editorial team is unable to follow the instructions, they will send a report to the author(s) and the manuscript will not be published until the issues are addressed.

We thank you for your cooperation and appreciate the hard work of all those who wish to contribute to the OpenDANES platform!

## Notes