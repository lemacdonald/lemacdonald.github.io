# Figure sources

This directory contains figures from public papers and individual graphics explicitly selected by the author for the website. Their sources are recorded below. The separately selected animations are documented in `../media/SOURCES.md`. Source presentations and private research documents are not included.

## Flat-minima fibre bundle

- File: `flat-minima-fibre-bundle.webp`.
- Source: Lachlan Ewen MacDonald and René Vidal, *Dynamics of Gradient Descent with Large Step Size Near a Manifold of Flat Minima*, arXiv:2607.08380v2, 6 September 2026, Figure 2.
- Public source: https://arxiv.org/abs/2607.08380v2
- Extracted from the original figure PDF's embedded raster image (1536 × 1024) and compressed as WebP. The mathematical content is unchanged.
- This is a raster figure, including in the source PDF. The caption identifies the illustrative nature and connected components.

## Convergence plots

- Files: `subcritical.svg`, `critical.svg`, `supercritical.svg`.
- Source: the same public preprint, Figures 3, 4 and 5 respectively.
- Converted from the original public-version vector PDFs to SVG, with plot text represented by paths. Captions and alternative descriptions supply readable context.
- The later revised plots and nonlinear experiments are not included.

## Lie-group equivariance

- File: `lie-group-equivariance.webp`.
- Source: Lachlan E. MacDonald, Sameera Ramasinghe and Simon Lucey, *Enabling Equivariance for Arbitrary Lie Groups*, CVPR 2022, Figure 1.
- Public source: https://openaccess.thecvf.com/content/CVPR2022/papers/MacDonald_Enabling_Equivariance_for_Arbitrary_Lie_Groups_CVPR_2022_paper.pdf
- Extracted from the publicly available paper's embedded image and compressed as WebP. The mathematical content is unchanged.
- The caption dates the comparison to the paper, rather than implying that "existing" describes the current literature.

## Portraits

The existing repository files `me.jpg` and `me.jpeg` are preserved. The preview uses `me.jpg` at modest display sizes.

## Skip connections and normalisation layers

- Files: `skip-jacobians.svg` and `skip-training.svg`.
- Source: Lachlan E. MacDonald, Jack Valmadre, Hemanth Saratchandran and Simon Lucey, *On skip connections and normalisation layers in deep optimisation*, NeurIPS 2023, Figures 2 and 3 (PDF page 9).
- Public source: https://proceedings.neurips.cc/paper_files/paper/2023/file/2f4d6f8e0f4f543db12260696b2a3551-Paper-Conference.pdf
- Cropped directly from the original vector PDF, with labels preserved as paths. Surrounding paper text and the original captions are excluded; explanatory captions are provided in the page.

## Edge-of-stability observations

- File: `cohen-edge-of-stability.webp`.
- Source: Jeremy M. Cohen, Simran Kaur, Yuanzhi Li, J. Zico Kolter and Ameet Talwalkar, *Gradient Descent on Neural Networks Typically Occurs at the Edge of Stability*, ICLR 2021.
- Public source: https://arxiv.org/abs/2103.00065
- The original chart image was extracted from slide 14 of the author's 2026 large-step talk (`ppt/media/image29.png`), as explicitly requested. It is unchanged apart from WebP compression.

## ResNet18 training and test accuracy

- File: `resnet18-cifar10-accuracy.webp`.
- Source: the author's experiment shown on slide 13 of the 2026 large-step talk (`ppt/media/image27.png`).
- Selected by the author for the website. The graphic is unchanged apart from WebP compression; its labels and legend remain intact. The caption describes these runs, without presenting the relationship between step size and test accuracy as universal.

## Centre manifold and stable foliation

- File: `centre-manifold-stable-foliation.webp`.
- Source: the individual image in Figure 2 of the author's mathematics research statement, PDF page 2 (1448 × 1086 pixels).
- The author explicitly requested this illustration for the optimisation page. Only the image was extracted, then compressed as WebP. The research statement itself is not included.
- The caption identifies the illustration as a low-dimensional cartoon: blue solution manifold, red centre manifold and green stable foliation.

## Classification and self-stabilisation

- Files: `classification-self-stabilisation-landscape.svg` and `classification-logistic-damping.svg`.
- Source: Salma Tarmoun, Lachlan Ewen MacDonald, Konstantinos Emmanouilidis, Ziqing Xu and René Vidal, *Classification with Large-Step Gradient Descent: Unifying Self-Stabilization and Convergence Rates*, arXiv:2611.17459v1, 12 November 2026.
- Public source: https://arxiv.org/abs/2611.17459v1
- Licence: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), as linked from the public preprint.
- The landscape is the left-hand panel of Figure 1, PDF page 4. It depicts the warm-up loss `exp(-x) y^2`, which has zero loss on its invariant line. The website distinguishes this example from separable logistic regression, whose loss decreases along its reference line without a finite minimiser.
- The damping plot is the upper panel of Figure 3, PDF page 9, showing the orthogonal component for a spanning symmetric logistic-regression model. The lower stability-product panel is omitted; the shared iteration tick labels and axis title are retained beneath the upper panel. The caption identifies the paper's theta-perpendicular label with the website's coordinate `y`.
- Both graphics are cropped from the public vector PDF and converted to SVG with labels preserved as paths. Surrounding text and the original captions are excluded. Plot content and notation are unchanged; the page supplies explanatory captions, attribution, source and licence links.

## Scalar tubular coordinates

- File: `scalar-tubular-coordinates-talk.webp`.
- Source: the author's 2026 large-step talk, `largestep_GD_long_compact.pptx`, slide 32 (displayed slide number 30), titled "Assumption (a): tubular coordinates".
- The author explicitly requested this talk's illustration to replace the adapted 2025-paper diagram. PowerPoint exported the slide read-only at 2880 × 1620 pixels; the source deck's SHA256 was unchanged after export.
- The illustration was cropped at pixel rectangle `(130,350,1355,1540)` and compressed as WebP at quality 94, giving 1225 × 1190 pixels. The crop retains the raster plot and PowerPoint's native equation labels, arrows and coordinate annotations. Slide title, institutional branding and surrounding slide text are excluded. The whole slide and presentation remain outside the served site.
- The figure depicts the positive solution branch `w_1 w_2 = 1`, its tubular neighbourhood, a base point `x`, unit normal `nu(x)`, signed displacement `y` and coordinate map `Phi(x,y)`. The normal-coordinate labels were changed from `z` to `y` in a private editable copy of the slide before export. The plot geometry and other annotations are preserved. The original talk is unchanged, and the caption identifies the illustration as adapted.
- A red marker at the flat minimum `(w_1,w_2)=(1,1)` was added in PowerPoint during export. Its dimensions and outline weight match the existing `x` point. The original presentation and private slide copy were not saved with this addition; the marker is reproducible with the private export helper.

## Equivariant networks: feature spaces and exponential coordinates

- Files: `equivariant-feature-spaces.webp` and `lie-algebra-exponential-map.webp`.
- Source: the author's 2025 `talk.pptx`, *Some mathematical perspectives on deep learning*, slides 21 and 22 respectively. The author requested that the architecture exposition follow this talk's story and illustrations.
- PowerPoint exported the slides read-only at 2400 × 1350 pixels, preserving native mathematical labels and arrows. The original presentation's SHA-256 was unchanged after export. Only the individual illustrations are included in the website; full slides and the source deck remain outside it.
- The feature-space diagram is cropped at `(95,230,2265,755)`, giving 2170 × 525 pixels. It retains the original layer maps, feature-space labels and model brace. Its caption explains the pointwise-nonlinearity notation and the generalisation from image inputs to an input manifold.
- The exponential-map illustration is cropped at `(1330,380,2165,1100)`, giving 835 × 720 pixels. It retains the group, tangent space, identity and exponential-map annotations. Institutional headers and surrounding slide text are excluded.
- Both crops are compressed as WebP at quality 94. Mathematical content and geometry are unchanged.

## Reeb foliation and holonomy

- Files: `reeb-foliation-thesis.webp` and `holonomy-thesis.webp`.
- Source: the author's *Characteristic Classes of Foliated Manifolds in Noncommutative Geometry*, doctoral thesis, University of Wollongong, 2019. [Public thesis record](https://ro.uow.edu.au/articles/thesis/Characteristic_Classes_of_Foliated_Manifolds_in_Noncommutative_Geometry/27665679).
- The author requested these illustrations and supplied the local thesis in the research-materials folder. Figure 2.2, printed p. 16 (PDF page 28), depicts interior leaves of the Reeb foliation of a solid torus. Figure 3.1, printed p. 43 (PDF page 55), depicts transport of nearby transverse points along a leafwise path.
- Only the illustrations are included. They are rendered from their exact PDF image rectangles, retaining the PDF's native image transformations, original labels, colours and geometry. Surrounding page text, captions and headers are excluded; the website supplies captions and source links. Empty white margins are trimmed.
- The resulting lossless WebP assets are 1438 × 896 and 1434 × 1396 pixels respectively. Both source pages and final images were visually inspected. The original thesis is unchanged and remains outside the served site.
