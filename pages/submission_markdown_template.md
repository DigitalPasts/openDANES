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

## Types of Headings

# Heading 1

It is not recommended to use heading 1 as that will automatically be the title of your submission, and it will not be added to the table of contents. Please use Heading 2 and onwards.

## Heading 2

In markdown syntax:

```markdown
## Heading 2
```

### Heading 3

In markdown syntax:

```markdown
## Heading 3
```

#### Heading 4

In markdown syntax:

```markdown
## Heading 4
```

##### Heading 5

In markdown syntax:

```markdown
## Heading 5
```

###### Heading 6

In markdown syntax:

```markdown
## Heading 6
```

## Lists

Ordered list:

1. first item
2. second item
3. third item

In markdown syntax:

```markdown
1. first item
2. second item
3. third item
```

Unordered list:

* item
* item
* item

In markdown syntax:

```markdown
* item
* item
* item
```

## Blockquotes

> This is a blockquote

In markdown syntax:

```markdown
> This is a blockquote
```

## Prompts

{: .prompt-tip }
> this is a tip prompt

In markdown syntax:

```markdown
{: .prompt-tip }
> this is a tip prompt
```

{: .prompt-info }
> this is an info prompt

In markdown syntax:

```markdown
{: .prompt-info }
> this is an info prompt
```

{: .prompt-warning }
> this is a warning prompt

In markdown syntax:

```markdown
{: .prompt-warning }
> this is a warning prompt
```

{: .prompt-danger }
> this is a danger prompt

In markdown syntax:

```markdown
{: .prompt-danger }
> this is a danger prompt
```

## Links

Showing Link: Go to <https://digitalpasts.github.io/openDANES/index.html>.

In markdown syntax:

{% raw %}
```rb
<https://digitalpasts.github.io/openDANES/index.html>.
```
{% endraw %}

Link Embedded in text: Go to the {% include link.html url="https://digitalpasts.github.io/openDANES/index.html" content="OpenDANES journal" %}.

In markdown syntax:

{% raw %}
```rb
{% include link.html url="https://digitalpasts.github.io/openDANES/index.html" content="OpenDANES journal" %}.
```
{% endraw %}

All period, commas, etc., must appear inside the content parameter, not outside of it.

## Footnotes

This is a sentence with a footnote in the end.[^1] This is another sentence with a footnote in the end.[^2]

[^1]: This is the footnote of the first sentence.
[^2]: This is the footnote of the second sentence.

In markdown syntax:

```markdown
This is a sentence with a footnote in the end.[^1] This is another sentence with a footnote in the end.[^2]

[^1]: This is the footnote of the first sentence.
[^2]: This is the footnote of the second sentence.
```

## Tables

| Heading 1 | Heading 2 | Heading 3 |
|-----------|-----------|-----------|
| value 1   | value 4   | value 7   |
| value 2   | value 5   | value 8   |
| value 3   | value 6   | value 9   |

In markdown syntax:

```markdown
| Heading 1 | Heading 2 | Heading 3 |
|-----------|-----------|-----------|
| value 1   | value 4   | value 7   |
| value 2   | value 5   | value 8   |
| value 3   | value 6   | value 9   |
```

## Inline code and code blocks

This is `inline code`.

In markdown syntax:

```markdown
This is `inline code`.
```

This is a python codeblock:

```python
pip install cltk
```

In markdown syntax:

````markdown
```python
pip install cltk
```
````

For other programming languages, change `python` to the the appropriate language.

## Figures and legends

![Image placeholder]({{site.baseurl}}/images/tutorials/Preprocessing Ancient Texts with the Classical Language Toolkit (CLTK)/image-1.jpg)

{% include fig_legend.html content="Figure 1: This is the logo of CLTK" %}

When referencing an image, please only change the name and type of your image ("image-1.jpg" below).

In markdown syntax:

{% raw %}
```markdown
![Image placeholder]({{site.baseurl}}/images/tutorials/{{page.title}}/image-1.jpg)
```
{% endraw %}

When adding a legend, please change only the content variable ("Figure 1: This is the logo of CLTK") below.

In markdown syntax:

{% raw %}
```rb
{% include fig_legend.html content="Figure 1: This is the logo of CLTK" %}
```
{% endraw %}

## Notes