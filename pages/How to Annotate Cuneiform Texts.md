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
cuneiform text for linguistic content. Exactly what we mean by
'annotation' will be discussed shortly. The tutorial does not focus on a
particular language or a particular genre, and instead deals with
general features of the cuneiform writing system that a person will need
to deal with when annotating. A number of applications of annotating
cuneiform texts will also be discussed.

<!-- ![Tablet XI of the Standard Babylonian Epic of Gilgamesh (K.3375)]({{site.baseurl}}/images/tutorials/{{page.title}}/K3375_Gilgamesh.png)

{% include fig_legend.html content="Tablet XI of the Standard Babylonian Epic of Gilgamesh (K.3375)" %} -->

## Structure of a cuneiform text 

Cuneiform is a writing system developed in southern
[Mesopotamia](https://en.wikipedia.org/wiki/Mesopotamia){:target="_blank"} towards the end
of the fourth millennium BCE. It consists of wedge-like signs made upon
clay tablets (and other material like stone or metal), where a
particular sign can represent an entire word (i.e. a
[logogram](https://en.wikipedia.org/wiki/Logogram){:target="_blank"} or a syllable such as
*ba*, *ak*, or *ram*). Some cuneiform signs can also serve as a
[determinative](https://en.wiktionary.org/wiki/determinative){:target="_blank"} (also
known as a classifier), i.e. a special unspoken marker telling the
reader what class of objects the following word belongs to. Thus there
are determinatives indicating that the following word is a kind of
person, a human settlement, a river, an object made out of wood, or a
kind of drink. Note that the cuneiform writing system was used to
express several spoken languages of the ancient Middle East, including
[Sumerian](https://en.wikipedia.org/wiki/Sumerian_language){:target="_blank"},
[Akkadian](https://en.wikipedia.org/wiki/Akkadian_language){:target="_blank"},
[Hittite](https://en.wikipedia.org/wiki/Hittite_language){:target="_blank"},
[Elamite](https://en.wikipedia.org/wiki/Elamite_language){:target="_blank"}, and
[Hurrian](https://en.wikipedia.org/wiki/Hurrian_language){:target="_blank"}.

Because it is sometimes difficult or unnecessary to represent the exact
visual appearance of a cuneiform table in modern print media (say, via
photographs or hand drawings), we often represent the written content
using the western alphabet in what is known as *transliteration*.
Transliteration tells the reader either what a particular sign on the
tablet 'is' (i.e. what it looks like), how to pronounce the sign in
context (sometimes called the reading of the sign), or both. When a sign
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

Finally, note that when we want to express the exact pronunciation of
the words in a cuneiform text, we take the transliteration and convert
it to *normalization*. This format also uses the Latin alphabet, but it
dispenses with the dash signs telling us which signs are used to write a
word, and instead just gives us the word itself. Using the above
example, the normalization of *a-me-el šar-ri* would be *amēl šarri*. It
is a reconstructed linguistic form, based on writing standards and
scholarly conventions. Thus, for example, the macron sign above the
vowel 'e' indicates this vowel is long.

## The Purpose of Annotating

Annotation is when a human editor adds notes or other markers to a text
to indicate additional linguistic information about it, whether that
deals with semantics (i.e. meaning), morphology (the structure of
words), syntax (the structure of phrases and sentences), or phonology
(the sound of words). Generally it is understood that the editor
provides the same level of information for all the words in a text and
not just a few.

Providing annotations for a cuneiform text serves a number of uses, such
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

-   Giving the annotator themselves an opportunity to work through a
    corpus in detail, much like an editor does when preparing a new
    print edition of a text.

## The Stages of Annotating

### Preprocessing the Raw Text

Annotating a cuneiform text generally requires that it first be
available in transliteration or normalization (depending on the specific
purposes of the annotator). In what follows we will speak only of
transliterations, with the understanding that we mean both
transliterations and normalizations unless otherwise noted. If a
cuneiform text has been edited in a print journal or other scholarly
publication, it will come with a transliteration. Increasingly,
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

Here is an example of transliteration and metadata for a third
millennium BCE Sumerian economic text (DC II/2, pl. 41 no. 5), as found
in the [Database of Neo-Sumerian Texts
(BDTNS)](http://bdtns.filol.csic.es/){:target="_blank"}.

![DC II/2, pl. 41 no. 5]({{site.baseurl}}/images/tutorials/{{page.title}}/BDTNS_P109176.png)

The basic file format needed for the annotation is a plain text file
with only the transliteration (hence no HTLM markup or other meta-data).
You need to make sure that each word in the text (which may include
determinatives) is separated by spaces from the preceding and following
word, which allows the annotation program to split up the text file into
word-size units. This important preliminary step is called
*tokenization*, and the broken-up items in the text are called *tokens*.
Note that depending on your purposes, you may choose to reduce or
eliminate symbols in the text denoting unreadable signs (e.g. the symbol
'x') or other comments indicating layout of the text and tablet (such as
'rest of tablet broken').

An example of how your transliteration should look is given below. The
text [SAA 5, 114](http://oracc.org/saao/P313422/){:target="_blank"} is an Akkadian letter
from the archives of Sargon II (r. 722-705 BCE), and was published
online with other texts from the Neo-Assyrian royal archives as an
[Oracc project](http://oracc.museum.upenn.edu/){:target="_blank"}. A normalized version of
the text is also given for comparison:

> a-na LUGAL EN-ia ARAD-ka {m}gab-bu-ana-aš-šur {KUR}u₂-ra-ar-ṭa-a.a
> e-mu-qe-šu₂ ina {KUR}u₂-a-za-na up-tah-hi-ir o be₂-et pa-ni-šu₂-ni la
> aš₂-me {m}me-la-ar-ṭu-a {LU₂}A-šu₂ {m}a-ba-li-u₂-qu-nu {LU₂}EN.NAM ša
> {KUR}x x+x-pa a-di e-mu-qe-šu₂-nu x x+x x x x x x x x x KUR-MEŠ
> i-za-qu-pu LUGAL be-li₂ lu-u u₂-da LUGAL EN lu-u la i-qab-bi ma-a ki-i
> taš-mu-u-ni ma-a a-ta-a la taš-pu-ra

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
to adjust later stages of your workflow accordingly.

If you are annotating multiple cuneiform texts, a good practice to have
each text in its own file, where the file is titled in a way that you
(or the computer, if using a processing script) can easily identify what
the text is. This may mean using numerical indices in the file names
whose interpretation you record in a separate list. Alternatively, you
can often put all of the transliterations in a single file, separated by
empty lines and special comments identifying the text. Each approach has
its advantages depending on your purpose for annotating and the tools
you use.

### Making the Annotations

To create the annotation meta-data for a transliteration you need a
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
Hopefully it will also allow you to create your own set of labels as
part of a custom semantic annotation framework. The first three items
are the bread and butter of what basic linguistic annotation consists
of, and are briefly explained below.

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
away whether the noun is singular or plural, or the subject or object of
a verb, and the lemma of a verb abstracts away whether that verb appears
in present or past tense, or the first person or third, or as an
imperative or an indicative form, etc.

This admittedly vague definition of a lemma reflects its primary use as
a lexicographic tool (allowing a human or computer to group disparate
word forms under a single heading) rather than a precise morphological
one. A certain amount of language-specific convention is involved, and
if you are unsure how to lemmatize the items appearing in your cuneiform
texts, you should consult other annotation projects in the relevant
language.

Syntactic dependencies indicate grammatical dependencies among words and
phrases such as subject and object of a verb, an adjective modifying a
noun, or a conjunction connecting two full sentences. The term
'dependency' is used because it signals an asymmetric relation between
two words or phrases, one of them the *head* and the other the
*dependent*. One may think of annotating syntactic dependencies as
essentially constructing a directed graph or tree over a sentence or
larger span of text, and a good annotation tool allows you to specify
dependencies between tokens in a text by connecting them with arrows.
Nevertheless, at the level of the annotation file the program usually
encodes dependencies using numerical indices assigned to each token to
indicate their position in the sentence. Thus each token not only gets
an index telling you where it is in the sentence (first word in the
sentence, or second word, or third word, etc.) but also a second index
telling you which other token in the sentence is its head.

{: .prompt-warning } 
> You must take care when reading the annotation file that you know what such an index means, i.e. whether it signs a head token or dependent token!

Note also that we have been vague about exactly what grammatical
framework one should use when creating syntactic dependencies. This is
because there is more than one framework available, and even within one
framework, technical revisions are periodically made by experts which
entail changing the name. Because it was designed to reflect
cross-linguistic commonalities in syntactic structure, the [Universal
Dependencies](https://universaldependencies.org/){:target="_blank"} (UD) framework is
frequently used by annotators who wish their corpus to be compatible
with other projects regardless of language. You should check what other
people annotating in your language are doing before deciding upon a
framework.

![Graph showing syntactic dependencies in the Universal Dependencies (UD) format]({{site.baseurl}}/images/tutorials/{{page.title}}/UDGraph.png)

{% include fig_legend.html content="Graph showing syntactic dependencies in the Universal Dependencies (UD) format." %}

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

With these things in mind, an annotation program with a graphical
interface is practically essential for doing annotations efficiently.
One currently popular program is
[Inception](https://inception-project.github.io/){:target="_blank"}, a downloadable Java
applet that works offline through your internet browser. Besides
allowing both syntactic and morphological annotation, Inception also
allows semantic role labelling and user-defined label schemes which can
be exported in various formats. Other tools you may consider are
[Brat](https://brat.nlplab.org/){:target="_blank"},
[WebAnno](https://webanno.github.io/webanno/){:target="_blank"} (which is essentially a
web-based version of Inception), and
[WebLicht](https://www.mpi.nl/tools/elan/docs/manual/Sec_Weblicht.html){:target="_blank"},
another online annotating platform more geared towards well-documented
languages like English. All of these programs are easy to set-up and
use, though you should note the data formats they use for input and
output, as this may affect other parts of your work-flow.

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
time, no annotation scheme currently used for a cuneiform language fits
for the grammatical particularities of that language perfectly, whether
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
with others on the internet. [GitHub](github.com){:target="_blank"} is an online platform
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
website](universaldependencies.org){:target="_blank"} (which actually stores its data on
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
geared towards modern languages with large online data sets such as
English, even if they are not restricted to only those languages. No
cuneiform language comes close to the size of such corpora in terms of
raw text, let alone text that has been properly transliterated or
otherwise made suitable for annotation. This means that the challenges
of applying machine learning and developing language models for
cuneiform languages are somewhat different from someone working on
English. There are fewer pre-existing annotated corpora that one can use
to jump-start ones own annotations. Many natural language processing
packages assume that you are interested in working with a popular modern
language, and often come with large data sets from those languages
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
