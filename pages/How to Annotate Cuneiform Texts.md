---
layout: default+toc
type: tutorial
title: How to Annotate Cuneiform Texts
authors:
  author1:
    name: Matthew Ong
    affiliation: UC Berkeley
    email: matthewcong@gmail.com
    orcid: 0000-0003-2566-9205
    academia: https://independent.academia.edu/MatthewOng4
    github: https://github.com/megamattc
tags:
  - cuneiform
  - annotation
  - linguistics
summary: A high level overview of how to annotate a cuneiform text for linguistic content. 
difficulty: beginner
submit-date: 2023-10-02
publish-date: 2023-10-06
peer-review-date: null
update-date: null
reviewers: null
doi: null
difficulty: beginner
deprecated: null
---

{%- include author_card.html authors=page.authors date=page.submit-date publish-date=page.publish-date peer-review-date=page.peer-review-date update-date=page.update-date tags=page.tags summary=page.summary reviewers=page.reviewers difficulty=page.difficulty doi=page.doi deprecated=page.deprecated -%}

## Lesson Overview

This tutorial presents a high level overview of how to annotate a
cuneiform text for linguistic content. In general, annotation is an important first step if one wants to make a written language corpus amenable to more sophisticated linguistic analysis than just key word searches. It is also usually necessary to annotate the corpus if one wants to train a language model on it which can parse new sentences according to the language's grammar. Exactly what we mean by 'annotation', and other reasons why one might want to make annotations of a corpus, will be discussed shortly. The tutorial will then go through an illustrative example to show the important aspects of annotation.

This tutorial uses examples from Akkadian, but the general techniques can adapted to other ancient language corpora. 

<!-- ![Tablet XI of the Standard Babylonian Epic of Gilgamesh (K.3375)]({{site.baseurl}}/images/tutorials/{{page.title}}/K3375_Gilgamesh.png)

{% include fig_legend.html content="Tablet XI of the Standard Babylonian Epic of Gilgamesh (K.3375)" %} -->

## Basic facts about cuneiform

Cuneiform is a writing system developed in southern
[Mesopotamia](https://en.wikipedia.org/wiki/Mesopotamia){:target="_blank"} towards the end
of the fourth millennium BCE. It uses [logograms](https://en.wikipedia.org/wiki/Logogram){:target="_blank"}, [syllabograms](https://en.wikipedia.org/wiki/Syllabogram){:target="_blank"} and [determinatives](https://en.wiktionary.org/wiki/determinative){:target="_blank"}. Cuneiform was used to express several spoken languages of the ancient Middle East, including
[Sumerian](https://en.wikipedia.org/wiki/Sumerian_language){:target="_blank"},
[Akkadian](https://en.wikipedia.org/wiki/Akkadian_language){:target="_blank"},
[Hittite](https://en.wikipedia.org/wiki/Hittite_language){:target="_blank"},
[Elamite](https://en.wikipedia.org/wiki/Elamite_language){:target="_blank"}, and
[Hurrian](https://en.wikipedia.org/wiki/Hurrian_language){:target="_blank"}. The most common way to represent cuneiform signs
in modern publications is via transliteration. When a sign
is transcribed using capital letters, it means we are only commenting on
what the sign looks like. When lower case letters are used, it indicates
how the sign is to be pronounced. If we write within square or curly
brackets, it means the sign is either broken or a determinative,
respectively.

For example, the sign transcribed as KUR looks like three triangle
wedges arranged in the shape of a mountain. But this sign can be
pronounced different ways depending on context. It can be read 'mat',
'kur', 'nat', and 'šad', among other things. When we write {KUR}, we
mean that the KUR sign functions as a determinative signaling that the
word following it is a type of land or mountainous area.

![Drawing of the KUR sign]({{site.baseurl}}/images/tutorials/{{page.title}}/KUR.png)

{% include fig_legend.html content="Drawing of the KUR sign" %}

We usually use dashes between transliterated signs to indicate they
belong to the same word. Thus the sequence *a-me-el šar-ri* represents
two words, and in Akkadian it means 'man of the king'.

Normalization takes transliteration and expresses the actual phonological forms behind it. 
It dispenses with dashes and uses macrons to indicate vowel length. Using the above
example, the normalization of *a-me-el šar-ri* would be *amēl šarri*. The macron sign above the vowel 'e' indicates this vowel is long.

## The Purpose of Annotating

Annotation allows a human editor to add information to a text that indicates its linguistic structure, whether that
deals with semantics, morphology, syntax, or phonology. Generally it is understood that the editor provides the same level of information for all the words in a text and
not just a few.

Providing such linguistic information about a text via annotation has a number of uses, such
as

-   Providing linguistic data for [machine
    learning](https://en.wikipedia.org/wiki/Machine_learning){:target="_blank"} algorithms
    seeking to model properties of the underlying language.

-   Illustrating for students of the language how to grammatically
    analyze a text, or as a check against the students' own analyses.

-   Providing empirical data to a researcher who wants to ask questions
    involving the systematic recording of all the linguistic data in a
    large number of texts, or questions involving linguistic patterns
    that emerge only upon processing the data by a machine.

-   Giving the annotators themselves an opportunity to work through a
    corpus in detail, much like an editor does when preparing a new
    print edition of a text.

## The Stages of Annotating

### Preprocessing the Raw Text

Annotating a cuneiform text generally requires that it first be
available in transliteration or normalization (depending on the specific
purposes of the annotator). If a
cuneiform text has been edited in a print journal or other scholarly
publication, it will be represented in transliteration. Increasingly,
transliterations of cuneiform texts are also available online as part of
a digital database. Sometimes the database simply displays the text to
you in your browser (i.e. as part of an HTML file) and you will have to
[scrape](https://doi.org/10.46430/phen0065){:target="_blank"} the transliteration from the
site using a variety of data processing tools. But often times the
database also allows you to download the transliteration in a text file.
In fact, you should check if the database has their entire collection of
transliterations available for download as a ZIP archive (see [OpenDANES
resources](https://digitalpasts.github.io/openDANES/nav/DANES-resources.html){:target="_blank"}
for downloadable datasets), as annotation is usually a process applied
to an entire group of texts rather than just one.

Some online cuneiform corpora, such as those found on [Oracc](http://oracc.museum.upenn.edu/){:target="_blank"}, also include normalized versions of cuneiform texts which can be obtained through suitable preprocessing. In what follows we will use a normalized text for illustration. 

The basic file format needed for the annotation is a plain text file
with only the normalized text (hence no HTLM markup or other meta-data).
You need to make sure that each word in the text is separated by spaces from the preceding and following
word, which allows the annotation program to split up the text file into
word-size units. This important preliminary step is called
*tokenization*, and the broken-up items in the text are called *tokens*.
Note that depending on your purposes, you may choose to reduce or
eliminate symbols in the text denoting unreadable signs (e.g. the symbol
'x') or other comments indicating layout of the text and tablet (such as
'rest of tablet broken').

An example of how your normalized text should look is given below. The
text [SAA 5, 114](http://oracc.org/saao/P313422/){:target="_blank"} is an Akkadian letter
from the archives of Sargon II (r. 722-705 BCE), and was published
online with other texts from the Neo-Assyrian royal archives as an
[Oracc project](http://oracc.museum.upenn.edu/){:target="_blank"}. 

> ana šarri bēlīya urdaka Gabbu-ana-Aššur Urarṭaya emūqēšu ina Wazana
> uptahhir o bēt pānīšūni lā ašme Melarṭua māršu Abaliuqunu pāhutu ša
> {KUR}x x+x-pa adi emūqēšunu x x+x x x x x x x x x mātāti izaqqupu
> šarru bēlī lū ūda šarru bēlī lū lā iqabbi mā kî tašmûni mā atâ lā
> tašpura

Note in this example that we have removed all special marks and comments
describing breakage in the tablet or reconstructed parts of the text. 
This makes later stages of the annotation and machine learning process
simpler. We should understand, however, that this is a choice we need to
explain when presenting the results of our annotations. If your project
needs treat these features of online editions differently, you may have
to adjust later stages of your workflow accordingly. Note also that unclear signs or partial words are still left in transliterated form with dashes and brackets. You may wish to remove these tokens according to your needs.

If you are annotating multiple cuneiform texts, a good practice to have
each text in its own file, where the file is titled in a way that you
(or the computer, if using a processing script) can easily identify what
the text is. This may mean using numerical indices in the file names
whose interpretation you record in a separate list. Alternatively, you
can often put all of the texts in a single file, separated by
empty lines and special comments identifying the text. Each approach has
its advantages depending on your purpose for annotating and the tools
you use.

### Making the Annotations

To create the annotation metadata for a text you need a
program that will allow you to view the text and add special symbols and
notation to it. By now there are a number of free programs aimed at
humanists seeking to add all sorts of meta-data to digitized texts,
freely available for download or use online as a web application. Some
of these programs are mainly used for highlighting thematic relations
between passages or phrases in a text or for connecting entities
mentioned in the text to an external specialized vocabulary such as a
database of maps or biographies. In our case (doing linguistic
annotations), you want to make sure your tool can annotate *lemmas*,
*syntactic dependencies*, and *morphological features* at the minimum.

One very reasonable annotator program we recommend for Akkadian is [Inception](https://inception-project.github.io/){:target="_blank"}. It is freely downloadable as a Java
applet that works directly through your internet browser. It is capable of handling lemmas, syntactic dependencies, and morphological feature specification in a fairly intuitive manner. The following screen shot shows what it looks like when annotating the normalized version of SAA 5, 114 introduced above.

![Annotating SAA 5, 114 in Inception]({{site.baseurl}}/images/tutorials/{{page.title}}/Inception_ex1.png)

{% include fig_legend.html content="Annotating SAA 5, 114 in Inception." %}

Lemmas, roughly speaking, are the basic stems of words which remain
after one removes prefixes and suffixes used to denote things like
plurality and grammatical case (in the case of nouns) or person and
tense (in the case of verbs). In English, the lemma of *cats* is *cat*
because we removed the -s ending signalling plurality. For similar
reasons, the lemma of the verb *liked* is *like*. Note that in general
we are not seeking to do a full etymological reduction of a word to a
basic root (such as *prevention* -\> '*vent*' or *skyscraper* -\>
*scrape*), but rather seek the basic form of a word abstracted from all
the ways it can appear in different grammatical contexts while still
being regarded as the 'same' word. Thus the lemma of a noun abstracts
away whether the noun is singular or plural, or the subject or object of a verb, and the lemma of a verb abstracts away whether that verb appears in present or past tense, or the first person or third, or as an imperative or an indicative form, etc.

This admittedly vague definition of a lemma reflects its primary use as
a lexicographic tool (allowing a human or computer to group disparate
word forms under a single heading) rather than a precise morphological
one. A certain amount of language-specific convention is involved, and
if you are unsure how to lemmatize the items appearing in your cuneiform
texts, you should consult other annotation projects in the relevant
language.

In the example figure above, the lemma for a given token is given in the orange box right above the token. For instance, the lemma for the form *uptahhir* is *pahāru*. You can manually specify the lemma for a given token by selecting the Lemma layer in the upper right and clicking on the token you want to lemmatize.

In terms of syntax, Inception uses the [Universal
Dependencies](https://universaldependencies.org/){:target="_blank"} (UD) framework because it is well-suited for working with many different languages. Unlike other grammatical formalisms, UD is based on the idea of *syntactic dependency*.
Syntactic dependencies indicate grammatical dependencies among words and
phrases such as subject and object of a verb, an adjective modifying a
noun, or a conjunction connecting two full sentences. Overall, one makes semantically 'light' terms  like prepositions and particles dependent on semantically more important terms like nouns and verbs. Syntactic dependencies are asymmetric relations between
two words or phrases, one of them being the *head* and the other the
*dependent*. One may think of annotating the syntactic dependencies of a sentence as
essentially constructing a directed graph or tree, where the dependencies between tokens in a text are expressed by directed arrows.

In the second sentence within the example figure, there is an arrow going from the verb *uptahhir* to the noun *Urarṭaya* 'the Urartian'. The arrow's direction indicates that the noun is dependent on the verb, and the label 'nsubj' indicates the noun is the nominal subject of the verb. Creating such a dependency is a simple manner of selecting the Syntax layer and drawing an arrow from the head token to the dependency token. You select the label for the dependency in the lower right. 


Morphological feature labelling is the task of identifying certain
morphemes, or parts of a word, conveying specific grammatical and
semantic information. The goal is to itemize aspects of the shape of the
word with what it means. Annotators generally think in terms of
feature-value pairs, whereby a feature is a certain category such as
grammatical number or gender, verb tense, or definiteness, and a value
is what variant of the category the word expresses via a particular
morpheme. Thus in the English word *cats*, the plural suffix -s signals
the value 'plural' within the category of grammatical number. In
*liked*, the -d suffix indicates the value 'past' in the category of
tense. When one uses an annotation tool, feature-value pairs are often
encoded via a specific label set involving an equal sign, such as
'Gender=Masculine' or 'Tense=Past', or simply a plus sign (e.g. '+Past'
means a verb in the past tense). Nevertheless, in the context of
languages written in cuneiform, there are still no exact conventions for
how to represent these features and their values in a label set for
annotation. Thus if you wish your annotation scheme to be compatible
with other projects, you should check to see what they use and match
their schema before beginning annotation.

In the second sentence of the example figure, you can see the Features window showing the morphological feature specification of the form *uptahhir*. It begins 'Gender=Masc\|Mood=Ind\|...', which means the form is masculine and in the indicative mood. The vertical bars separate the feature-value pairs, and the left side of the equation always specifies the feature, while the right side the value of that particular feature. You can manually specify the feature string for a token by selecting the Morphology layer, clicking on the token, and typing in the feature string.


### The Output File

After you have finished annotated a text in Inception you need to output the results to a file. Although Inception allows for a number of output formats, the most convenient is CONLLU-format. This format convenient represents the lemmas, syntactic dependencies, and morphological features. It is a text file where each row represents a single token, and with ten tab-separated columns each of which specifies linguistic information about that token. The details of the encoding are found at the [Universal
Dependencies](https://universaldependencies.org/){:target="_blank"} website. 

The CONLLU file for the annotation of SAA 5, 114 looks like:

![CONLLU file for SAA 5, 114]({{site.baseurl}}/images/tutorials/{{page.title}}/Conllu_ex.png)

{% include fig_legend.html content="CONLLU file for SAA 5, 114." %}

Note that the CONLLU format encodes token position within a sentence in the first column. Dependency relations are given in the seventh column, and dependency type in the eighth. Thus for the second sentence, the fourth row represents the token *Wazana*, while the fifth row represents *uptahhir*. The seventh column of the fourth row has value 5 and the eight column is 'obl'. That means the token *Wazana* is syntactically dependent on token *uptahhir* and the dependency relation is oblique.

{: .prompt-warning } 
> You must take care when reading a CONLLU file that you remember the seventh column represents the syntactic head, not the dependent. These are easy to confuse!


### Issues to Consider When Annotating

If you have not previously annotated a cuneiform text in the specific
language at hand, it would be good to check how others have annotated in
that language, both in the hopes of making your work compatible with
theirs, as well as becoming familiar with the difficulties they faced in
applying their annotation scheme. Unless you are highly experienced with
the language using modern linguistic categories, you may find that your
initial label set for morphological features turns out to be
inefficient, or your understanding of a certain syntactic structure
turns out to be wrong (or at least problematic). Looking at what others
have done may save you time and effort in the long run. At the same
time, no annotation scheme currently used for a cuneiform language fits the grammatical particularities of that language perfectly, whether
at the level of theoretical description or practical implementation.
Depending on the type of text you are working with, you may find
deviating from the conventions of other annotators or even needing to
invent conventions yourself. What is most important is that you have
reasons you can cite for what you do and that you explain those reasons
somewhere in the documentation that accompanies your work. Not only will
this make it easier for others to understand what you did, it will also
help you to remember your own policies and be consistent in your work.


Here are some examples of projects that use linguistic annotations in different languages written in cuneiform: on Anatolian languages like Luwian and Hittite see the [eDiAna project](https://www.ediana.gwi.uni-muenchen.de/corpus.php){:target="_blank"} and [Hittite Festival Rituals](https://www.hethport.uni-wuerzburg.de/HFR/annotation.php){:target="_blank"}, respectively; for Akkadian, Sumerian, Persian and Urartian see the [ORACC lemmatization guidlines](http://oracc.museum.upenn.edu/doc/help/lemmatising/index.html){:target="_blank"}, and for Sumerian specifically see the [ETCSL project conventions](https://etcsl.orinst.ox.ac.uk/edition2/lemmatisation.php){:target="_blank"}.

A second issue is whether to approach annotation sub-task by sub-task or
document by document. If you intend to annotate many documents for
several features (e.g. syntactic dependencies *and* morphological
dependencies *and* lemmatization), you can either annotate all of the
documents for a single feature first, and then go back and go over the
documents for the second feature, etc., or you can do all of the
features for a single document while it is still in front of you before
going on to the second document, etc. Depending on the tools and
knowledge you bring to your work, one method may be more efficient than
the other. If the syntactic dependencies of a corpus are particularly
difficult to do, you may opt to first go through and do the morphology
before tackling the syntax alone. If you are working with someone who
does not know the grammar of the language well but can find the lemmas
for all the tokens in the text on their own, you could delegate the task
of lemmatization to them while you do the dependencies and morphology.
While these kinds of considerations are relevant to annotating many
sorts of languages beyond cuneiform ones, in the case of cuneiform
languages there is one thing to keep in mind. Unless the type of text
you are annotating is particularly simple morphosyntactically, it will
likely take you some effort to understand what the text is saying even
in transliteration (or normalization). Thus going over the text multiple
times for different annotation tasks may be less efficient that doing
everything at once while the meaning of the text is still fresh in your
mind.

Finally, be aware of accompanying datasets or machine learning tools
that can accelerate your work. If your transliterations come from an
online database, they may also come with lemmatization data as part of a
JSON file or separate glossary. If you already had to extract the raw
text from such a JSON file, it is only a little more work to grab the
lemmas that go with the tokens as well. Similarly, if you are making
annotations of a corpus to train a natural language processing model on it (say a syntactic parser or morphologizer), you can actually start training your model on the portion of the corpus you have annotated early on and then
apply its predictions to the rest of the corpus. Going through and
correcting the model's predictions is often faster than going through
the whole raw corpus unaided. This technique, known as *bootstrapping*,
is particularly effective when repeated multiple times, early on, for a
large corpus.

### Choosing How to Present Results

Unless you are annotating cuneiform texts for private purposes and do
not want to share you data, you should consider how to share your work
with others on the internet. [GitHub](https://github.com/){:target="_blank"} is an online platform
mainly designed for people writing code they wish to share with others
in a controlled, version-specific way. As an annotator, you can use it
as a convenient place to store your data and any associated processing
scripts, keeping your data project private, open to all, or only to
invited users. The system is designed to synchronize with particular
folders on your local computer, so that the process of backing up data
or uploading newer versions is easy and allows you to compare current
and older versions of files. GitHub is a good place to provide your data
if you envision yourself working on multiple projects in the future, or
if you have scripts or other associated code that you need to present
alongside the annotations themselves.

If you have annotated your texts in the Universal Dependencies format,
you can also make your data available on the [UD
website](https://universaldependencies.org){:target="_blank"} (which actually stores its data on
GitHub) alongside annotated corpora from dozens of other languages. You
do need to make sure your annotations conform to their format
specifications. This website already features corpora of Akkadian,
Biblical Hebrew, and Hittite.

## Final Observations

While annotating itself has some immediate uses, it is often done as
part of a larger language processing task, research program, or
pedagogical project. We mentioned some of these uses earlier on, among
which were applications to machine learning and language model
development. It is worth noting that many of the cutting-edge computer
algorithms and research efforts in natural language processing are
geared towards modern languages with large online datasets such as
English, even if they are not restricted to only those languages. No
cuneiform language comes close to the size of such corpora in terms of
raw text, let alone text that has been properly transliterated or
otherwise made suitable for annotation. This means that the challenges
of applying machine learning and developing language models for
cuneiform languages are somewhat different from someone working on
English. There are fewer pre-existing annotated corpora that one can use
to jump-start ones own annotations. Many natural language processing
packages assume that you are interested in working with a popular modern
language, and often come with large datasets from those languages
built-in, without clearly explaining how to apply their code to a
low-resource language starting from the ground up. Unless you are an
experienced programmer, you will likely find it very helpful to have
guidance from someone more experienced in natural language processing or
data science, or to look at some of the online proceedings from NLP
workshops aimed at humanists and specialists in less common languages.
One recent workshop at [Princeton](https://newnlp.princeton.edu/){:target="_blank"}
illustrates how to develop an NLP project for new languages using
[spacy](https://spacy.io/){:target="_blank"}. On a broader level, one may also consider
the [Digital Humanities Summer Institute](https://dhsi.org/){:target="_blank"} with its
various course offerings. What may be the most helpful in the beginning,
however, is finding someone else who has begun an annotation project in
your language by searching GitHub and getting guidance from them.
