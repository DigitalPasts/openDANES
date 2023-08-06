---
layout: default+toc
title: Posters
type: nav
authors: openDANES
tags: navigation bar
mathjax: true
---

A selection of posters presented in the DANES conferences!

## DANES 2023
### Material Culture from the Middle Babylonain Period (McMiB)
Sara Arroyo Cuadra, [UNED](https://portalcientifico.uned.es/investigadores/205113/detalle).

This poster aims to show the main objectives to be developed within the project "Material culture from Middle Babylonian period (McMiB): digitalization and democratization of the access to the cultural heritage of the Ancient Near East", funded thanks to a "María Zambrano" Postdoctoral Fellowship.

To this end, the project proposes the creation of the open access website "Material culture from Middle Babylonian Period (McMiB)", which will house a digital collection of archaeological pieces from the Middle Babylonian period (1500-1100 BC). The main innovation of this collection is that it will consist exclusively of pieces containing both iconographic motifs and inscriptions, so that for each of them images (whenever possible in 3D), drawings, text translation and transdisciplinary analysis will be provided. Given the traditional separation of disciplines in this field of knowledge, this project will bring together for the first time Near Eastern Archaeology, History and Art History with Assyriology and the Digital Humanities, with the aim of achieving a holistic understanding of Middle Babylonian culture. At the same time, the transfer of this knowledge will be facilitated through open access to the Web, giving back to society the right to access both the public heritage created by past cultures and the research generated around it within public institutions.

This project will therefore involve the creation of a relational yet individualized database of Babylonian kudurru, Middle Babylonian cylinder-seals, and Middle Babylonian inscribed statues and figurines. This database will include all the information collected during the first phase of the project: numerous photographs of the pieces taken in their respective museums (with the aim of creating a virtual 3D reconstruction of as many pieces as possible through photogrammetry), drawings of the pieces, compilation of the information about each piece on the websites of the museums and other websites such as ORACC, CDLI, etc. (including the transliteration and translation of the respective inscriptions), and inclusion of the publications in which each piece is mentioned.  At the same time, a detailed transdisciplinary analysis of the pieces will be provided, highlighting both the similarities and the discrepancies between the information provided by the iconographic motifs and that derived from the inscriptions.
Finally, the information integrated in this database will be uploaded to an open access website where all this information will be available for consultation, including a specific search for related data, a "virtual visit" to the 3D digitized pieces and links to projects, websites and bibliography where information about them can be found.


![Material Culture fornt he Middle Babylonain Period (McMiB)](../images/posters/DANES2023/McMiB_Sara.jpg)

### Beloved, Brother, Friend: Comparing Dumuzi Myths using Shallow Ontologies
Franziska Pannach, [GCDH](https://www.gcdh.de/en/welcome/)
and Theresa Blaschke, [MCDCI](https://www.uni-marburg.de/de/mcdci)

Dumuzi is presented in different ways in Near Eastern myths. He is described as wild bull or man, sometimes he is part of a dedicated family structure or a separated entity. This poster presents eigth different views on the Mesopotamian deity, modelled as minimal (or shallow) ontologies, used to compare Dumuzi’s diverse representations. 

The project was undertaken as part of the DFG Mythos-Research Group 2064 STRATA at the University of Göttingen. It is a combined effort from graduate students of the field of computater science and Ancient Near Eastern Studies. 

Focus of this project is the modelling of domain knowledge – the information that a written source gives us about the world it comes from, the belief systems, the characters of the narrative and their relations. This knowledge helps us to interpret the narratives surrounding Dumuzi.

Large public data repositories and ontologies like Wikidata combine information about entities. They are a valuable resource for re-using knowledge that was gathered from different sources.1 However, for comparing myth-intrinsic information that is often contradictory, such large sources can be impractical.

For instance, “Dumuzi is a shepherd.” is a statement that appears in some narratives, but not in others. If it appears, we can assume the axiom shepherd(Dumuzi) to be true with respect to that specific source. However, if another source does not contain the information, we cannot assume that the axiom is true or false. Especially contradictory information, e.g. whether or not an entity is a deity in one narrative and a mortal human being in another, is important information for comparing myth variants. Therefore, instead of combining information into a single ontology, this project focuses on constructing small ontologies for each myth variant and comparing them in a separate step.

|Text                                   | Reference |
| ----                                  |-----------|
|Death of Dumuzi                        | Kramer (1980)
|Song of Innana and Dumuzi (J)          |ETCSL Nr. 4.08.10
|Innana-Dumuzi Lament (CUNES 53-08-060) |Cohen (2014)
|Dumuzi and Geštinanna                  |ETCSL Nr. 1.4.1.1
|Dumuzi Lament (ASJ 7, 1‒9)             |Alster (1985b)
|Innana-Dumuzi-Eršema (BM 15821)        |Cohen (1981), Ershemma No. 165
|Innana-Dumuzi-Balaĝ (BE 30/1, 7)       |Fritz (2003), 131-132
|Dumuzi-Durtur-Eršema (CT 15, pl. 20-21) |Cohen (1981), Ershemma No. 88 | 

**<center>Table 1: Textual Sources of the myth variants and their corresponding references</center>**

To compare different world views on Dumuzi, eight mythical variants in which Dumuzi and his death (listed in Table 1) are the main topic were selected. The domain knowledge we can assert from these myth variants is extracted according to the Hylistic (Zgoll, 2019) theory. Subsequently, it is modelled in shallow domain ontologies.

Important concepts and their shallow hierarchies (e.g. lord isA ruler isA person) are modelled as ontology classes. Characters, like Dumuzi or Innana, are modelled as individuals of the respective ontology. Character attributes and aliases are modelled as data properties, as shown in Figure 1. Relationships between entities of classes, like isBrotherOf() are modelled as object properties. Ontology labels are available in English and German. The individuals are linked to open data sources, Wikidata ID and Pleiades ID (for geolocations). A visualisation of a small example ontology is given in Figure: Dumuzi-Durtur-Eršema in the poster.

![Figure 1: Dumuzi individual object and data properties in myth "Dumuzi-Durtur-Eršema"](../images/posters/DANES2023/fig_2_pannach_blaschke.png)
**<center>Figure 1: Dumuzi individual object and data properties in myth “Dumuzi-Durtur-Eršema”</center>**

The resulting ontologies are freely available as ttl-files and can be used for inter-myth and intra-myth comparison – i.e. comparing variants of the same myth or comparison of different myths. In this project, two measures are applied for overall domain comparison: The class overlap can provide an answer to the question “Which kinds of entities appear in the myth variant?” The individual overlap determines which characters are part of the stories, e.g. “Is this story only about Dumuzi or does Innana appear as well?” Individuals are matched by their labels, aliases or Wikidata ID. We define class overlap as $CO = \frac{\vert C_1 \cap C_2 \vert}{\vert C_1 \cup C_2 \vert}$, where C1 and C2 are classes of ontology O1 and O2 respectively. Individual overlap is measured accordingly.

The results of these two comparisons are presented in distances matrices below. We observe the highest class overlap between the variants in “Innana-Dumuzi-Eršema (BM 15821)” and “Innana-Dumuzi Lament (CUNES 53-08-060)” with a value of 0.55. For individual overlap, i.e. the number of entities appearing in both sequences, the pair “Dumuzi-Durtur-Eršema (CT 15, pl. 20-21)” and “Innana-Dumuzi-Balaĝ (BE 30/1, 7)” have the highest value of 0.5. 

This kind of inter-myth comparison gives scholars the oppurtunity to unravel similarities and contradictions between written sources based on a quantitative method, while at the same time it invites for a close reading of already known texts from a new perspective and supports further investigations, e.g. to compare different characters which are present in myths variants based on their ontological classes and relations. Within this project, the method was applied only to a small selection of texts, but it is suitable to analyze a broad range of texts in general. This yet has to be left for further studies.

#### References
Alster, B. (1985a): Geshtinanna as Singer and the Chorus of Uruk and Zabalam. UET 6/1 22, JCS 37, 219‒228.

Alster, B. (1985b): A Dumuzi Lament in Late Copies, ASJ 7, 1‒9.

Cohen, M. E. (1981): Sumerian Hymnology: The Eršemma. Cincinnati: Hebrew Union College Press.

Cohen, M. E. (2014): A New Piece of an Inanna/Dumuzi Lamentation, in: L. Sassmannshausen (ed.), He Has Opened Nisaba's House of Learning (= CM 46), 37‒49.

Fritz, Michael M. (2003): „… und weinten um Tammuz“: Die Götter Dumuzi-Ama’ušumgal’anna und Damu (= AOAT 307). Münster: Ugarit-Verlag.

Kramer, S. N. (1980): The Death of Dumuzi: a New Sumerian Version, AnSt. 30, 5‒15.

Metilli, D./Bartalesi, V./Meghini, C. (2019): “A Wikidata-based tool for building and visualising narratives.” International Journal on Digital Libraries 20.4: 417‒432.

Zgoll, C. (2019): Tractatus mythologicus: Theorie und Methodik zur Erforschung von Mythen als Grundlegung einer allgemeinen, transmedialen und komparatistischen Stoffwissenschaft. Berlin, Boston: De Gruyter. https://doi.org/10.1515/9783110541588.

Zgoll, A. and Zgoll, C. (2020): Mythische Sphärenwechsel: Methodisch neue Zugänge zu antiken Mythen in Orient und Okzident. Berlin, Boston: De Gruyter. https://doi.org/10.1515/9783110652543.

![Pannach & Blaschke, "Beloved, Brother, Friend: Comparing..."](../images/posters/DANES2023/Poster_Pannach_Blaschke%20-%20Franzi.jpg)

### Towards Binarization of Iron Age Ostraca from Multispectral Weakly-Annotated Imaging
Ohr Dallal, [TAU](https://en.cs.tau.ac.il/computer)

Image binarization is one of the essential and preliminary steps towards many document processing tasks. We aim to binarize Iron Age Hebrew ostraca, which are of great importance to the historical study of ancient Israel and Judah. To this end, a new and unique dataset is introduced, consisting of multispectral ostraca images taken at different camera wavelengths. The data poses severe challenges such as faded text, degradations, contrast variation and characters rarity. The task is further complicated by sparse and partial labels, where only a fraction of image pixels is manually annotated by human experts. The underlined assumption of this research is that the multispectral signature of the ink differs from the one of the clay, due to material difference.  We propose to apply end-to-end deep neural networks (DNN) for exploiting complex shape and spectral cues available in the data, which allow for better discrimination of ink and background and possibly even the reconstruction of ink invisible to the naked-eye. We develop and test DNN binarization models, based on segmentation feedforward convolutional neural networks, alongside methods for pre-processing and enriching the data representation through weakly-supervised learning, semi-supervised learning and visual augmentations. These techniques are employed to deal with the available data sparsity and improve generalization performance. We show the contribution of the multispectral nature of the data and demonstrate the effectiveness of our method on Arad ostraca unearthed in the Judahite desert dated ca. 600 BCE.

![ostraca_binarization_poster_DANES_2023](../images/posters/DANES2023/ostraca_binarization_poster_DANES_2023.jpg)

### Universal dependencies for Hittite
Maria Molina, [TAU](https://en.cs.tau.ac.il/computer)

In the recent years universal dependencies (UD) became the standard for digital treebanks, they are an essential part of annotated linguistic corpora, and they are widely used for comparison of language features in linguistic research. Historical corpora develop treebanks slower than corpora of modern languages. However, there have already been published some very good examples of historical treebanks [1], including those with UD annotation, e.g., for Ancient Greek and Latin [2], Old East Slavic, Old and Middle Russian [3], Old French [4]. An attempt to build a UD treebank for Hittite was undertaken already in 2017 by G.Inglese and M.Molina [5] in the framework of the PROIEL [6]. Finally, a small UD-annotated treebank based on examples from [7] was developed and published in 2022 by E.Andersen and B.Rozonoyer [8, 9].

The authors of the [8, 9] treebank based their annotation on Inglese [11], taking into account experience and data of our PROIEL experiment [5]. The concern here is that they did not account for some certain Hittite features, such as second position clitic particles ‑(m)a, ‑(y)a, and ‑pat (using instead the discourse feature after [11]), while in recent years following the publication of [11] there have been extensive research on 2P particles in Hittite, particularly including ‑pat [12, 13, 14]. The treebank [7] does not include lemmas with both a Hittite word and a Sumerian/Akkadian heterogram in cases of variations in writing of the word (that was suggested in [8], but never realized in practice before this work). However, the biggest problem of the existing Hittite UD treebank is that it is completely taken out of context being just a set of sentences out of a tutorial [7].

The Annotated Corpus of Hittite Clauses [ACHC, 10] was first launched in 2015 on the basis of the Hittite letters and instructions (not digitalized before). It was syntactically annotated for the word order (SOV/OSV). It was also annotated as a constituency treebank, with morphological mark-up and the UD prep annotation accomplished on ca. 1500 clauses. Now the time came to develop the UD annotation in the whole corpus of letters and instructions, finally putting the Hittite grammar in context.

This paper describes the UD annotation for ACHC. It is an ongoing project, starting from previously achieved number of UD-annotated clauses. In comparison to [7], we add a layer of mark-up including separate fields for both Hittite and heterogram lemmas, and indexation for clitic chains. All the tokens are provided by glosses and translation into English. The clauses represent Hittite of letters and instructions – the closest possible genre to oral speech (for a dead cuneiform language).

UD distinguishes 17 universal part-of-speech definitions (UPOS) [18:261] – the categories widely attested in the world’s languages, and Hittite is not an exclusion, – such as noun, verb, adjective, or adverb. There are also standard morphological features, like pronoun, numeral, possessive, or gender types (cf. in [18:263]). Additional features in UD may be defined in language-specific documentation for use in individual languages. The latter is highly relevant for Hittite, as there must be language-specific tags not only for clitic chains and heterograms, but also for ergativity features and subject expressed with -za. There are also grammatical relations, including syntactic and semantic roles, that connect a head of phrase and a dependent word. In UD standard 37 types are defined for the universal use. In my paper I discuss the Hittite specific set of grammatical relations. In general, it is strongly recommended to keep universal tags as much as possible, to support the comparability of the languages, but Hittite certainly demands particular solutions discussed in this work, as well as in [8] and [15], which are planned for realization in ACHC.

#### References
1. Eva Pettersson and Beáta Megyesi (2018). The HistCorp Collection of Historical Corpora and Resources. // Proceedings of the Digital Humanities in the Nordic Countries 3rd Conference, Helsinki, Finland, March 7-9, 2018.
2. The Ancient Greek and Latin Dependency Treebank (AGLDT). http://perseusdl.github.io/treebank_data
3. UD for Old East Slavic. https://universaldependencies.org/orv/index.html
4. Sophie Prévost, Achim Stein. 2013. Syntactic Reference Corpus of Medieval French (SRCMF) [version number]. ENS de Lyon/ILR Stuttgart.
5. Guglielmo Inglese, Maria Molina, and Hanne Eckhoff. 2018. Incorporating Hittite into PROIEL: a pilot project. // Andrew U. Frank, Christine Ivanovic, Francesco Mambrini, Marco Passarotti, and Caroline Sporlede, eds., Proceedings of the Second Workshop on Corpus-based Research in the Humanities, pp. 95–104.
6. PROIEL. https://proiel.github.io
7. Harry A. Hoffner, Jr. and H. Craig Melchert. 2008. A Grammar of the Hittite Language. Part 2: Tutorial. Eisenbrauns.
8. Erik Andersen, Ben Rozonoyer. 2020. A Small Universal Dependencies Treebank for Hittite. Proceedings of the Fourth Workshop on Universal Dependencies (UDW 2020), pages 1–7. Barcelona, Spain (Online), December 13, 2020
9. UD Hittite HitTB. 2022. https://universaldependencies.org/treebanks/hit_hittb/index.html
10. Maria Molina. The Annotated Corpus of Hittite Clauses (ACHC). 2015-. http://hittitecorpus.com
11. Guglielmo Inglese. 2015. Towards a Hittite Treebank. Basic Challenges and Methodological Remarks. // M. Passarotti, F. Mambrini, and C. Sporleder, editors, Proceedings of the Workshop on Corpus-Based Research in the Humanities (CRH).
12. Molina, Maria (2016). “Emphatic enclitic =pat in Hittite: function analysis and semantics of foci”. In: Indo-European linguistics and classical philology — XX. Proceedings of the 20th Conference in Memory of Professor Joseph M. Tronsky 20–22 June 2016. St. Petersburg, 2016, 739–754. https://tronsky.iling.spb.ru/static/tronsky2016_01.pdf
13. Molina, Maria (2017). “Identificational foci in Hittite marked by =pat”. Talk at the 50th Meeting of Societas Linguistica Europea (SLE 2017), 10–13 September 2017, Zurich.
14. Molina, Maria (2018). Word order in Hittite: corpus methods and analysis from typological perspective. PhD Diss. Moscow: Institute of Linguistics, Russian Academy of Sciences.
15. Maria Molina and Alexei Molin. 2016. In a Lacuna: Building a Syntactically Annotated Corpus for a Dead Cuneiform Language (on the basis of Hittite). // Computational Linguistics and Intellectual Technologies: Proceedings of the International Conference “Dialogue 2016”.
16. Universal Dependencies. https://aclanthology.org/2021.cl-2.11.pdf,
17. UD 2.0 Specification. https://arxiv.org/pdf/2004.10643.pdf