---
layout: default+toc
type: white-paper
title: Musical Instruments in Ancient Mesopotamia (MIAM) A Semantic Media Wiki Database and Lexicon
authors:
  author1:
    name: Dahlia Shehata
    affiliation: University of Würzburg
    email: dahlia.shehata@uni-wuerzburg.de
    orcid: null
    academia: https://wue.academia.edu/DahliaShehata
    github: null
  author2:
    name: Benedetta Bellucci
    affiliation: University of Würzburg
    email: benedetta.bellucci@uni-wuerzburg.de
    orcid: null
    academia: https://uni-wuerzburg.academia.edu/BenedettaBellucci
    github: null
  author3:
    name: Tomash Shtohryn
    affiliation: University of Würzburg, Incorporated notes to this white paper
    email: null
    orcid: 0009-0000-4597-603X
    academia: null
    github: null
tags:
  - database
  - lexicon
  - music
  - open access
  - Semantic MediaWiki 
summary: A research project presentation with the scope of collecting, classifying and interpreting musical instruments, their terminology, iconography, and contexts from texts, images and original finds. Its outcome is presented in online database and lexicon based on Semantic Media Wiki-technology (SMW).
difficulty: null
submit-date: 2025-04-03
publish-date: 2025-04-08
peer-review-date: null
update-date: null
reviewers: null
doi: null
deprecated: null
---

{%- include author_card.html title=page.title item_type=page.type banner-image-source=page.banner-image-source authors=page.authors date=page.submit-date publish-date=page.publish-date peer-review-date=page.peer-review-date update-date=page.update-date tags=page.tags summary=page.summary reviewers=page.reviewers difficulty=page.difficulty doi=page.doi deprecated=page.deprecated -%}

## Introduction

[^1]: Tomash Shtohryn (University of Würzburg) incorporated notes to this white paper.


Musical instruments are cultural artefacts inextricably linked with the social, historical, religious, and political forces of their eras. They instantiate equal progress in technical and scientific knowledge and developments in trade, commerce, and society. Their production, propagation, and use in private and institutional structures testify to interconnectivity and exchange in a variety of cultural matters (Eichmann et al. 2019; Lawson 2020). All of this makes research into musical instruments a vital component for the study of the multicultural and multi-ethnic background of ancient Mesopotamia. 

The musical instruments of Mesopotamia have been addressed in numerous articles and monographs. Many of these have focused on individual questions, written corpora, artefacts, or epochs with a noticeable concentration on the 3rd and 2nd millennia BCE (e.g. Krispijn 1990; Schauensee 2002; Ziegler 2007; Dumbrill 2007; Mirelman 2014; Shehata 2014; Shehata 2021b; Cheng 2001; Gabbay 2010, 2014a/b). General overviews are provided in the works by Schmidt-Colinet (1981), Rashīd (1984), and Dumbrill (1998, 2005). In recent years, these have become outdated as a result of new finds, publications, and investigations, among these e.g. Ziegler (2007), Orlamünde (2011), Strommenger/Miglus (2010). Additionally, important aspects of Mesopotamia’s music cultures have so far been neglected; unsatisfactorily analyzed are, for example, smaller sound tools such as rattles and whistles, which remain unnoticed in important museum collections and are seldom studied (e.g. Pruß 1999). Entries on musical instruments in common dictionaries of Akkadian and Sumerian (name = musical instrument) still only contain broad and unspecific identifications (e.g. EPSD2 <sup>ŋeš</sup>dim-nun “lyre?”), inconsistencies, or, given the lack of both philological and musicological investigations, no identification at all (e.g. CAD B 134b; CDA 40a baṣillatu (ḫabaṣillatu) “a musical instrument”). 

The need to create a reference work based on Assyriological and archaeological research standards, considering the variety of philological terms and the details of their probable interpretation, while being informed by differentiated modern musicological terminology, appears evident. It further allows to carry forward basic research themes:

1. The identification of musical instruments through their names and shapes in texts and images and from physical remains;
2. The evaluation of the contexts of musical instruments and the identification of related classifications from an emic perspective;
3. A comprehensive cultural-historical outline highlighting traditions and innovations in Mesopotamia's sound and music cultures. 

An important basis for further investigations is the identification of musical instruments, which remains the primary goal of Mesopotamian music research. This provides necessary connecting points for interdisciplinary research questions. Facing this endeavor, a first evaluation of the different limitations in the available evidence strongly suggests that ancient Mesopotamian instrument designations as well as their classification are based less on organological features or playing techniques as specified by Hornbostel and Sachs (1914), but rather on other qualities such as function, status, sound, origin, or use (see e.g. Kartomi 1990; Koch/Kopal 2014; Franklin 2015). Moreover, dealing with challenges of polysemy and ambiguity necessitates systematic documentation and differentiation of contextual information, which needs to be supplemented by musically relevant data such as material and construction, music setting, sound description, ensemble type, function, symbolic value, and players. Finally, musical instruments, their shapes, names, and classifications, are, of course, subject to constant change. An evaluation of their interconnectivity within cultural traditions and changes diachronically throughout all of Mesopotamia’s history and synchronically in various regions thus constitutes the third desideratum identified above.

## MIAM: Team and Setting

The project titled Musical Instruments in Ancient Mesopotamia-—in short, MIAM—-started in April 2024 as a four-year project and is funded by the *Deutsche Forschungsgesellschaft* (DFG). The project is hosted at the University of Würzburg in close collaboration between the department of [Ancient Near Eastern Studies](https://www.phil.uni-wuerzburg.de/altorientalistik/){:target="_blank"} and the [Centre for Philology and Digitality “Kallimachos”](https://www.uni-wuerzburg.de/zpd/){:target="_blank"} (in short ZPD). As a central academic institution, bridging the gap between the Humanities and Computer Sciences, the ZPD was founded in 2023 with the aim to provide the best possible support for developing digital topics in humanities research.

MIAM’s core team consists of an archaeologist (Benedetta Bellucci), a philologist (Dahlia Shehata), and a part-time IT-specialist (Tomash Shtohryn), as well as student helpers (Konstanze Hofbauer and Bilind Shushe). The project further counts on several associated researchers in Würzburg as well as international researchers; among them Christian Reul who supervises the digital background at the ZPD, the musicologists Oliver Wiener (Würzburg) and Salah ed-Din Maraqa (Freiburg), as well as representatives of the main discipline of Ancient Near Eastern Studies, Uri Gabbay (Jerusalem), Sam Mirelman (London), and Ricardo Eichman (Berlin). Equally included as research advisors due to their specialized practical knowledge are instruments builders and practical musicians, e.g. Ralf Gehler (Schwerin) at the *Zentrum für Traditionelle Musik*, specialized in recreating ancient musical instruments.

### Research Objectives

As given in its full title, *Musical Instruments in Ancient Mesopotamian Records: Terminology, Iconography, and Context*, the project’s main focus are musical instruments, their shapes, types, organology, names and terminology as well as their cultural and historical setting. Given the above sketched desiderata in the study of ancient Mesopotamia’s music cultures, MIAM’s main goal is to unlock previously unanswered questions based on the following investigative concerns:

1. How far are we able to correlate and identify musical instruments from their given names, their depiction, and original sound tools (i.e. musical instruments and other sound-producing artefacts)?
2. What kind of typologies and classification systems may be developed and identified for Mesopotamia’s musical instruments, both from emic and etic perspectives? 
3. What are the geographical distribution and historical developments of individual as well as groups of musical instruments?

In view of the generally limited evidence for musical instruments in Mesopotamia, the only possible basis for addressing the presented research questionnaire is the creation of a collection of primary sources that is as comprehensive as possible, and on which the contextual and historical evaluation can take place. The project’s objectives are three-stepped and take their start from compilation work:

1. **Compilation**: Creating a comprehensive collection of records on musical instruments in texts, images and sound tools.

2. **Analysis and evaluation**: Interpreting and correlating archaeological and philological data with regard to terminology, iconography, and context.

3. **Presentation:** Feeding the results from steps (1) and (2) into an online open-access digital database and lexicon.

The project’s primary objective is to provide a comprehensive collection of records with any sort of reference to musical instruments. Most importantly, there is no restriction to the record’s type: MIAM collects information on musical instruments detected in cuneiform manuscripts (texts), from iconography (images), and as original finds of sound tools. 

As to the texts and their content, references to musical instruments are detectable in all text genres. In contrast to *Lexical Lists*, which provide a differentiated terminology yet not fully deciphered and understood, Akkadian or Sumerian *narratives* may contain extended descriptions of music performances with information on the instruments’ handling, their players, or the sounds produced.

Depending on the type of the visual medium, images can provide information about the players, the contexts, and, in the case of fine visual works, also about organological features of a musical instrument. Already at this early stage of the project, new as well as previously unknown or unnoticed representations of musical instruments have been discovered, which significantly revise our previous understanding of, for example gender distribution of the instrumentalists or the construction of single instruments. Equally first-step research into sound tools has revealed that the majority of original instrument finds are clay rattles which are found in all regions of Mesopotamia with an astonishing consistency in shape and type.

The analyses and (re-)evaluations of each single record collected will further include new editions and publications of hitherto unknown as well as re-examined material in different PR journals. 

Lastly, the results from these examinations and evaluations will feed a database and a lexicon with individual entries to ancient Sumerian and Akkadian lemmas, as well as modern instrument names and related terminology, created and presented as an online and open access Wiki-platform (Figure 1).


![Figure 1]({{site.baseurl}}/images/white-papers/{{page.title}}/Figure_1.png)

{% include fig_legend.html content="Figure 1: Start page of MIAM created based on <i>MediaWiki</i> and <i>Semantic MediaWiki</i>-frameworks." %}

### Scope and interdisciplinarity

A special and innovative feature of MIAM is its primary thematic focus, which sets it aside from digital and online editing projects aimed at a specific corpus or genre of texts or visual media. Since MIAM primarily pursues content-related research objectives, its research material is not limited to a specific type of image or text genre but merges all types of records and, thus, heterogeneous source material. This approach is key for linking and correlating archaeological and philological data of various types and genres, combining the different contextual information to obtain as comprehensive a picture as possible of the examined material. 

The collection of sources will cover the archaic and early Uruk periods (ca. 3900–3500 BCE) to the Seleucid period (320-63 BCE). In geographical terms, it will be limited to Akkadian and Sumerian sources, mainly from the Sumerian and later Babylonian and Assyrian spheres of influence, which include Mesopotamia and parts of Syria. Within these boundaries, we aim to present all hitherto published textual and iconographic material referencing musical instruments. However, the detection and edition of new and previously undetected sources is limited to sifting through and researching the collections of a selection of important museums in Europe and the United States.

Recent investigations, among them Gabbay (2014a/b), Mirelman (2014), Shehata (2017, 2021a/b), and Sánchez Muñoz (2021) have demonstrated that the treatment of questions of terminology, identification, and typology requires an interdisciplinary approach based on a well-founded study of textual as well as archaeological primary sources. MIAM is therefore inevitably interdisciplinary. Not only does it digitally exploit and present philological and archaeological research connecting different analyzing methods. The evaluation and interpretation of this specialized area of ancient Near Eastern history further requires the knowledge of music experts from music history, ethnomusicology, or music archaeology. The core team, therefore, constantly exchanges results and questions with external specialists, which leads to the project’s widespread networking and perception.


## The MIAM online database and lexicon

### Semantic Media Wiki

MIAM’s electronic and online database and lexicon were created based on *MediaWiki* and *Semantic MediaWiki* (SMW)-frameworks. Since its initial release in 2005, *Semantic MediaWiki* has been under active development with more than 1600 active Wikis today. It is ideally suited for the implementation of semantic database projects and offers numerous ready-to-use components to be easily adjusted to the special needs of the project.

![Figure]({{site.baseurl}}/images/white-papers/{{page.title}}/Figure_2.png)

{% include fig_legend.html content="Figure 2: Pros and limitations of SMWs" %}

There are many advantages to *MediaWiki* in bundle with *SemanticMediaWiki*: the foremost is its widespread community connected to long-term support and maintenance. A basic *MediaWiki*-Instance is quickly and easily installed making it usable out of the box. Once the basis is installed, which is equally achieved with ready-to-go forms and page formats, entering data takes its start. Particularly valuable for our project is the high flexibility in organizing different datasets and page hierarchies, which can be changed at any time and thus adapted at regular intervals to the requirements of the constantly growing material and emerging questions.

Every entering field within a set of data may be individually defined and adjusted to the needs of its contents, e.g. whether it is mandatory, needs special characters, free text, or prescribed values such as time periods, collections or provenances. Additional components for enhancing data management, usability and the overall design are dropdowns, uploads of images and other visual data, and tokens. Other features are downloads, either of single pages, files or a specific selection of a record or lexicon information. It is also possible to define the templates that change the overall frontend of respective pages. Accordingly, this allows the previously entered data to be wrapped in numerous design containers, which improve the design and usability of the Wiki. Various ready-to-use extensions may be additionally implemented, for example, to visualize different statistics and developments, such as the temporal distribution of a particular instrument or the spatial distribution of an instrument type using a map. *SemanticMediaWiki* thus enables data recording and managing, enriched with semantic attributes and categories, and can be imagined as a large network which is visualized and may be explored through special queries.

However, working with the Wiki throughout the project’s first year has already revealed problematic issues and limitations. Even though the input of transliterations of cuneiform text with all the necessary specifications, such as line numbering and scores, is perfectly feasible, there are no solutions for implementing annotated text, such as ATF (Annotated text Format), as is provided, e.g., in ORACC or eBL. The final presentation of the texts will, therefore, rely on linking and cross-references to the major text editing projects to enable the user single word-based exploration. The great benefit from including different extensions for visualization and advanced search are offset by inconsistencies that may appear in their implementation and the data modelling. Gladly, thanks to the great support community it was so far always possible to find alternative solutions out of the many predefined *SemanticMediaWiki* features and extensions. Lastly, due to the ready-to-use characteristics of SMW, special design features cannot be integrated. All this must be taken into consideration when developing a WIKI-project which is optimally adapted to the needs of the question.

Since MIAM's goals are primarily content-related and the focus is on analyzing and interpreting the records, the project’s output is not diminished by omitting annotation and lemmatization of images or texts. On the contrary, collaboration with other projects within the ever-growing digital ANE community allows for solutions to be developed more effectively. Ultimately, collaboration also prevents the loss of time due to repeating work steps that have already been successfully completed by third-party research projects. Priority was given to simple programming and design to avoid complications caused by complexity and data volume while at the same time facilitating interactions and links with other digital formats through simplicity.

### Setting and entering of meta data

In creating appropriate and necessary data sets we were initially facing the challenge of including an input mask that works for all types of records, be them **texts**, i.e. cuneiform manuscripts of all types and contents; **images**, as there are depictions on various supports; or original musical instruments, the **sound tools**. 

![Figure 3]({{site.baseurl}}/images/white-papers/{{page.title}}/Figure_3.png)

{% include fig_legend.html content="Figure 3: Sketch of meta data sets sorted to three tabs headed “View”, “Subject”, and “Object data”" %}

The main category **Record** therefore provides input fields that suit all source types (Figure 3) and is presented under three different *tabs*. The first “View” tab presents primary information, such as the place of the first publication, but most importantly all data that are the concern of the project’s main focus, e.g. “instruments”, “technical terms”, “professions” in music or “ensemble size”. The “View” further includes detailed photographs from different perspectives, also in RTI-format, as well as technical designs, and—where deemed necessary—3D-scans of objects examined during several museum visits. Copyright issues are clarified with each museum before publication and launching on the MIAM-website. The second tab, “Subject”, presents the detailed content and discussion of the record, while additional general information is provided under “Object data”.

While some of the entry fields are mandatory for reasons of the database’s hierarchical organization, such as “Signature”, an internal MIAM-numbering, or the “Type” of a record, others disappear when left empty (marked in grey in Figure 3). This is for example the case for most iconographic records where the field “Text transliteration” is blanked out in the page’s final presentation.

The activated “Visual editor” offers a menu with all kinds of special characters and formatting options for facilitating text input. Even though the corresponding rendering in the “wiki editor” looks complex, it gives access to the HTML coding and allows individual adjustments.

<table>
  <tr>
   <td><strong>Sound tools (ca. 464)</strong>
   </td>
   <td><strong>4<sup>th</sup>/3<sup>rd</sup> mill. BCE</strong>
   </td>
   <td><strong>Late 3<sup>rd</sup> mill. BCE</strong>
   </td>
   <td><strong>2<sup>nd</sup> mill. BCE</strong>
   </td>
   <td><strong>1<sup>st</sup> mill. BCE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Chordophones</strong>
   </td>
   <td>10
   </td>
   <td> 
   </td>
   <td> 
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td><strong>Idiophones</strong>
   </td>
   <td>8
   </td>
   <td>30
   </td>
   <td>100
   </td>
   <td>250
   </td>
  </tr>
  <tr>
   <td><strong>Aerophones</strong>
   </td>
   <td>4
   </td>
   <td>10
   </td>
   <td>20
   </td>
   <td>30
   </td>
  </tr>
  <tr>
   <td><strong>Membranophones</strong>
   </td>
   <td>2
   </td>
   <td> 
   </td>
   <td> 
   </td>
   <td> 
   </td>
  </tr>
</table>

<br>

<table>
  <tr>
   <td><strong>Images (ca. 332)</strong>
   </td>
   <td><strong>4<sup>th</sup>/3<sup>rd</sup> mill. BCE</strong>
   </td>
   <td><strong>Late 3<sup>rd</sup> mill. BCE</strong>
   </td>
   <td><strong>2<sup>nd</sup> mill. BCE</strong>
   </td>
   <td><strong>1<sup>st</sup> mill. BCE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Seals</strong>
   </td>
   <td>20
   </td>
   <td>5
   </td>
   <td>15
   </td>
   <td>10
   </td>
  </tr>
  <tr>
   <td><strong>Figurines and Statues</strong>
   </td>
   <td>2
   </td>
   <td>60
   </td>
   <td>70
   </td>
   <td>60
   </td>
  </tr>
  <tr>
   <td><strong>Reliefs</strong>
   </td>
   <td>10
   </td>
   <td>25
   </td>
   <td>30
   </td>
   <td>25
   </td>
  </tr>
  <tr>
   <td><strong>In total</strong>
   </td>
   <td>32
   </td>
   <td>90
   </td>
   <td>115
   </td>
   <td>95
   </td>
  </tr>
</table>

{% include fig_legend.html content="Table 1: Extrapolation of relevant <b>Records</b>, different types of sources with references to musical instruments" %}

Of the approximately 1450 records projected for the 2023 application (Table 1), 615, thus ca. 40%, have now been entered and transferred into **Record** pages in the MIAM online database. One year into the project, slight shifts in the distribution of sources are evident. This is particularly noticeable in the “Sound tools”, especially within the group of idiophones: Clay rattles, which have been widespread throughout the ancient Near East since the Neolithic period, are a veritable mass product. Contrary to previous estimates, their number already exceeds all other source groups in our project. Similarly, the number of images is increasing due to hitherto unnoticed objects in recent excavation reports and private collections. The number of texts remains stable, so far supplemented only by a few newly discovered manuscripts with textual parallels.

The input mask, adjusted and defined individually for MIAM, can ultimately be seen as a cumulation of general information, such as collected for example by museum websites for all types of archaeological artifacts, but additionally presenting artefact-type-specific data, such as text transliterations or detailed image descriptions, which results in a collection of single full editions including substantive discussions.

### Lexicon of Akkadian and Sumerian terms and names

![Image placeholder]({{site.baseurl}}/images/white-papers/{{page.title}}/Figure_4.png)

{% include fig_legend.html content="Figure 4: Provisional presentation of a <b>Lexicon</b> entry in MIAM" %}

The research output achieved from collecting end (re-)editing **Records** as well as the insights gained from their systematic evaluation and interpretation will feed into the compilation of the **Lexicon** of Sumerian and Akkadian **Instruments** names as well as **Technical Terms** related to musical instruments, such as their parts (e.g. Sumerian a<sub>2</sub> “arm” for the instrument’s neck), materials (e.g. Sumerian siki “wool”), their handling and sound, and additional accessories (e.g. plectrum). Lexical entries present name variants, spellings and plausible identifications, next to a general description and an outline giving historical developments, playing contexts and uses (Figure 4). This comprehensive presentation is rounded off by a bibliography, a list of attestations and a visualization of their geographical distribution using a map.

Even though many terms are attested in both Sumerian and Akkadian ‘counterparts’, still where such equivalents vary and are not recognizable as uniform translations, separate entries are created for each of the Sumerian and Akkadian terms and related through internal links. Also here, changes in the meaning of names and their possible identification are evident, which is why a precise differentiation of each term, also with regard to linguistic evidence and its diversity, may indicate such developments.

### Navigating tools and Glossaries

MIAM is not only aimed at specialists in ANE studies but is intended to be equally understandable and navigable for non-specialist scientists, as well as non-experts, be they musicians, instrument makers or undergraduates. The SMW-website therefore provides different tools to facilitate search, browsing, and visualization. 

Among these tools are different **Glossaries**, presenting proper names, places, and professions, **maps** displaying the distribution of instrument types in images and names in text sources. Different **searching** tools, such as a drop-down menu and single-word-searches that enable browsing and searching for individual modern and ancient terms, authors, or abbreviated publications. A comprehensive Bibliography contains all titles referred to on the site as well as literature relevant for all kinds of Mesopotamian instrument studies.

![Image placeholder]({{site.baseurl}}/images/white-papers/{{page.title}}/Figure_5.png)

{% include fig_legend.html content="Figure 5: Provisional overview page for <b>Records</b> in MIAM" %}

Each overview page presents the collection of page entries, be it in **Records** or **Lexicon**, in the form of tables displaying the basic and relevant information of a data and enhancing browsing through an alphabetical list (Figure 5). 

All data, whether entries in the **Lexicon** or text translations and discussions in **Records** are linked internally to Glossaries and the Bibliography, and externally to online Assyriological corpora including Archibab, BDTNS, CDLI, ETCSL, ORACC, SEAL, eBL, EPSD2, eSAD and CAD for quick access to further information.

## Conclusion

The Project *Musical Instruments of Ancient Mesopotamia* (MIAM) makes an important contribution to the cultural history of ancient Mesopotamia by unlocking previously unanswered quarrels and questions. It addresses these research gaps by drawing on the widest possible range of source materials. This will be achieved by preparing a comprehensive edition of previously unknown materials in museum collections on the one hand and the merging and evaluation of already known but mostly neglected data on the other. We expect the insights to be gained from the evaluation of these materials to contribute to a better understanding of Mesopotamia’s history and cultural development in that they will enhance collaborative research between academics in several associated fields, such as music history, anthropology, and music ethnology, as well as musicians and instrument builders. The results from this research will be presented in an online and open-access digital database created based on *Semantic MediaWiki*-frameworks. This MIAM webpage is designed to equally address ANE scholars as well as non-experts, undergraduate students, lecturers and teachers.

As to the form of the online presentation of the project, including general and commonly understandable but also specific knowledge, MIAM could provide a prototype for *topic-related* digital data collecting and managing, including varied source types and genres, rather than conventional single-source-type related databases and online editions. 

The MIAM webpage’s launch is scheduled for spring 2028. Maintenance is guaranteed by the *Center for Philology and Digitality “Kallimachos”* in Würzburg with IT support that cares for updates and minor adjustments. In case the project is extended, we aim at including further collections as well as peripheral territories, such as Anatolia and the Levant, at the same time creating a scholarly community that takes care of keeping the database up-to-date.

## Bibliography and Abbreviations

Archibab = Archives Babyloniennes XXe – XVIIe siècles av. J.-C. ([http://www.archibab.fr](http://www.archibab.fr/){:target="_blank"}).

BDTNS = Database of Neo-Sumerian Texts (BDTNS) ([http://bdtns.filol.csic.es/](http://bdtns.filol.csic.es/){:target="_blank"}).

CAD = A. L. Oppenheim et al., *The Assyrian Dictionary of the Oriental Institute of the University of Chicago*, Glückstadt: J. J. Augustin and Chicago: Oriental Institute, Chicago, 1956–2010.

CDLI = Cuneiform Digital Library Initiative ([https://cdli.mpiwg-berlin.mpg.de/](https://cdli.mpiwg-berlin.mpg.de/){:target="_blank"}).

Cheng, J., 2001, *Assyrian Music as Represented and Representations of Assyrian Music*, Cambridge, Mass. Harvard Univ., Diss.

Dumbrill, R. J., 1998, *The Musicology and Organology of the Ancient Near East*, London: Tadema Press.

–– 2005, *The Archaeomusicology of the Ancient Near East*, Bloomington: Trafford Publishing.

–– 2007, *Idiophones of the ancient Near East in the collections of the British Museum*, Morrisville, NC: British Museum.

eBL = electronic Babylonian Literature ([https://www.ebl.lmu.de/](https://www.ebl.lmu.de/){:target="_blank"}).

Eichmann, R., M. Howell & G. Lawson, 2019, Introduction: Music, Social Identity, Political Cohesion, in: R. Eichmann, M. Howeel, G. Laswon (eds.), *Music and politics in the Ancient World: exploring identity, agency, stability and change through the records of Music Archaeology*, Berlin, Edition Topoi, 15–30.

EPSD2 = The Pennsylvania Sumerian Dictionary ([http://oracc.museum.upenn.edu/epsd2/](http://oracc.museum.upenn.edu/epsd2/){:target="_blank"}).

eSAD = Supplement to the Akkadian Dictionaries ([https://www.gkr.uni-leipzig.de/altorientalisches-institut/forschung/supplement-to-the-akkadian-dictionaries](https://www.gkr.uni-leipzig.de/altorientalisches-institut/forschung/supplement-to-the-akkadian-dictionaries){:target="_blank"}).

ETCSL = The Electronic Text Corpus of Sumerian Literature ([http://etcsl.orinst.ox.ac.uk/](http://etcsl.orinst.ox.ac.uk/){:target="_blank"}).

Franklin, J. C., 2015, *Kinyras: The Divine Lyre*, Hellenistic Studies 70, Washington DC: Center for Hellenistic Studies, trustees for Harvard University.

Gabbay, U., 2014a, The Balaĝ Instrument and its Role in the Cult of Ancient Mesopotamia, in: J. Goodnick-Westenholz, Y. Maurey, and E. Seroussi (eds.), *Music in Antiquity: The Near East and the Mediterranean*, Yuval – Studies of the Jewish Music Research Centre 8, 129-147.

–– 2014b, *Pacifying the Hearts of the Gods: Sumerian Emesal Prayers of the First Millennium BC*, Heidelberger Emesal-Studien 1, Wiesbaden: Harrassowitz.

Galpin. F. W., 1936, *The Music of the Sumerians and their Immediate Successors the Babylonians and Assyrians: Described and Illustrated from Original Sources*, 1<sup>st</sup> edition, Cambridge University Press. Following editions: 1955 and 1972: Verlag Valenton Koerner: Baden-Baden.

von Hornbostel, E. M. & C. Sachs, 1914, Systematik der Musikinstrumente, in: *Zeitschrift für Ethnologie* 46, Heft 4-5, 553–590.

Kartomi, M., 1990, *On Concepts and Classifications of Musical Instruments*, Chicago: University of Chicago Press.

Kilmer, A. D., 1993-1997, Musik. A.I. In Mesopotamia, in: *Reallexikon der Assyriologie und Vorderasiatischen Achäologie* (RlA) 8, Berlin, New York: De Gruyter, 463–482.

Koch, L.-C. & R. Kopal, 2014, Klassifikation von Musikinstrumenten – Zum 100-jährigen Bestehen der Hornbostel-Sachs-Systematik, *Zeitschrift für Ethnologie*, Band 139, Heft 2, 281–302.

Krispijn, Th. J. H., 1990, Beiträge zur altorientalischen Musikforschung. 1. Šulgi und die Musik, in: *Akkadica* 70, 1–27.

Lawson, G., 2020, The Mammoth in the Room. Did Musical Necessity Drive Innovation in Ancient Technology? In: G. Kolltveit, R. Rainio (eds.), *The Archaeology of Sound, Acoustics & Music. Studies in Honour of Cajsa S. Lund*, Berlin: ēkhō, 117–150.

Mirelman, S., 2014, The Ala-instrument: Its Identification and Role, in: J. Goodnick-Westenholz, Y. Maurey, & E. Seroussi (eds.), *Music in Antiquity: The Near East and the Mediterranean*, Yuval – Studies of the Jewish Music Research Centre 8, 148–171.

ORACC = The Open Richly Annotated Cuneiform Corpus ([http://oracc.museum.upenn.edu/](http://oracc.museum.upenn.edu/){:target="_blank"}).

Orlamünde, J., 2011, *Die Obeliskenfragmente aus Assur*, Wissenschaftliche Veröffentlichungen der Deutschen Orient-Gesellschaft 135, Wiesbaden: Harrassowitz.

Pruß A., 1999, Glöckchen, Rasseln, Pfeifen. Musikinstrumente aus Ton, *Hallesche Beiträge zur Orientwissenschaft* 28/140, 56−87.

Rashīd, S. A., 1984, *Musikgeschichte in Bildern, Mesopotamien*, Band 2, Leipzig: Dt. Verl. für Musik.

Sánchez Muñoz, D. 2021. Encore des percussions! Observations sur /tigi/ et /adab/, *Pallas* 115, 149–170.

Schauensee, M. de, 2002, *Two Lyres from Ur*. Philadelphia: University of Pa. Museum of Archaeology and Anthropology.

Schmidt-Colinet, C., 1981, *Die Musikinstrumente in der Kunst des Alten Orients: Archäologisch-Philologische Studien*, Bonn: Bouvier.

SEAL = Sources of Early Akkadian Literature ([http://www.seal.uni-leipzig.de/](http://www.seal.uni-leipzig.de/){:target="_blank"})

Shehata, D., 2014, Sounds from the Divine: Religious Musical Instruments in the Ancient Near East, in: J. Goodnick-Westenholz, Y. Maurey and E. Seroussi (eds.), *Music in Antiquity: The Near East and the Mediterranean,* Yuval – Studies of the Jewish Music Research Centre 8, 102–128.

–– 2017, Eine Mannshohe Leier im altbabylonischen Ištar-Ritual aus Mari (FM 3, no. 2), *Altorientalische Forschungen* 44/1 (2018), 68–81.

–– 2021a, En marge d’ARCHIBAB, 36: à propos des instruments de musique halhallatum de CUSAS 40 1963. *Nouvelles assyriologiques brèves et utilitaires* 4 (103).

–– 2021b, Musikinstrumente im Lederarchiv von Isin, in: C. Bühring et al. (eds.), *Klänge der Archäologie. Festschrift für Ricardo Eichmann.* Wiesbaden: Harrassowitz, 2021, 417–429.

Strommenger, E & P.A. Miglus, 2010, *Altorientalische Kleinfunde*, Wissenschaftliche Veröffentlichungen der Deutschen Orient-Gesellschaft 126, Wiesbaden: Harrassowitz.

Ziegler, N., 2007, *Les musiciens et la musique d’après les archives de Mari*, FM IX / Mémoires de N.A.B.U. 10, Paris: SEPOA.