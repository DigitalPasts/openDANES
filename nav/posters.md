---
layout: default+toc
title: Posters
type: nav
authors: openDANES
tags: navigation bar
---

A selection of posters presented in the DANES conferences!

## DANES 2023
### Material Culture fornt he Middle Babylonain Period (McMiB)
Dr. Sara Arroyo Cuadra, Universidad Nacional de Educación a Distancia (UNED).

This poster aims to show the main objectives to be developed within the project "Material culture from Middle Babylonian period (McMiB): digitalization and democratization of the access to the cultural heritage of the Ancient Near East", funded thanks to a "María Zambrano" Postdoctoral Fellowship.

To this end, the project proposes the creation of the open access website "Material culture from Middle Babylonian Period (McMiB)", which will house a digital collection of archaeological pieces from the Middle Babylonian period (1500-1100 BC). The main innovation of this collection is that it will consist exclusively of pieces containing both iconographic motifs and inscriptions, so that for each of them images (whenever possible in 3D), drawings, text translation and transdisciplinary analysis will be provided. Given the traditional separation of disciplines in this field of knowledge, this project will bring together for the first time Near Eastern Archaeology, History and Art History with Assyriology and the Digital Humanities, with the aim of achieving a holistic understanding of Middle Babylonian culture. At the same time, the transfer of this knowledge will be facilitated through open access to the Web, giving back to society the right to access both the public heritage created by past cultures and the research generated around it within public institutions.

This project will therefore involve the creation of a relational yet individualized database of Babylonian kudurru, Middle Babylonian cylinder-seals, and Middle Babylonian inscribed statues and figurines. This database will include all the information collected during the first phase of the project: numerous photographs of the pieces taken in their respective museums (with the aim of creating a virtual 3D reconstruction of as many pieces as possible through photogrammetry), drawings of the pieces, compilation of the information about each piece on the websites of the museums and other websites such as ORACC, CDLI, etc. (including the transliteration and translation of the respective inscriptions), and inclusion of the publications in which each piece is mentioned.  At the same time, a detailed transdisciplinary analysis of the pieces will be provided, highlighting both the similarities and the discrepancies between the information provided by the iconographic motifs and that derived from the inscriptions.
Finally, the information integrated in this database will be uploaded to an open access website where all this information will be available for consultation, including a specific search for related data, a "virtual visit" to the 3D digitized pieces and links to projects, websites and bibliography where information about them can be found.


![Material Culture fornt he Middle Babylonain Period (McMiB)](../images/posters/DANES2023/McMiB_Sara.jpg)

### Beloved, Brother, Friend: Comparing Dumuzi Myths using Shallow Ontologies
Franziska Pannach (Göttingen Centre for Digital Humanities), Theresa Blaschke (Marburg Center for Digital Culture and Infrastructure)

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

**Table 1: Textual Sources of the myth variants and their corresponding references**

To compare different world views on Dumuzi, eight mythical variants in which Dumuzi and his death (listed in Table 1) are the main topic were selected. The domain knowledge we can assert from these myth variants is extracted according to the Hylistic (Zgoll, 2019) theory. Subsequently, it is modelled in shallow domain ontologies.

Important concepts and their shallow hierarchies (e.g. lord isA ruler isA person) are modelled as ontology classes. Characters, like Dumuzi or Innana, are modelled as individuals of the respective ontology. Character attributes and aliases are modelled as data properties, as shown in Figure 1. Relationships between entities of classes, like isBrotherOf() are modelled as object properties. Ontology labels are available in English and German. The individuals are linked to open data sources, Wikidata ID and Pleiades ID (for geolocations). A visualisation of a small example ontology is given in Figure: Dumuzi-Durtur-Eršema in the poster.

![Figure 1: Dumuzi individual object and data properties in myth “Dumuzi-Durtur-Eršema ](../images/posters/DANES2023/fig_2_pannach_blaschke.png)

The resulting ontologies are freely available as ttl-files and can be used for inter-myth and intra-myth comparison – i.e. comparing variants of the same myth or comparison of different myths. In this project, two measures are applied for overall domain comparison: The class overlap can provide an answer to the question “Which kinds of entities appear in the myth variant?” The individual overlap determines which characters are part of the stories, e.g. “Is this story only about Dumuzi or does Innana appear as well?” Individuals are matched by their labels, aliases or Wikidata ID. We define class overlap as

$CO = \frac{|C₁∩C₂|}{C₁∪C₂}$, where C1 and C2 are classes of ontology O1 and O2 respectively. Individual overlap is measured accordingly.

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