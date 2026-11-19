# Animation sources

The author selected these animations for the website on 17 November 2026. Only the individual clips and still previews are included. The source presentations remain outside the website. The author approved these selected media for publication.

## Earlier deep-learning talk

Source: the author's `talk.pptx`, *Some mathematical perspectives on deep learning*. The three animations occur together in the deep-learning-pipeline slides (11, 24, 38 and 52).

- `optimisation.mp4`: the gradient-descent trajectory near a curve of minima; embedded `ppt/media/image24.gif`. 500 × 500 pixels, 6.4 seconds.
- `architecture.mp4`: a geometrically transformed handwritten digit; embedded `ppt/media/image26.gif`. 128 × 128 pixels, 3.2 seconds. The original GIF has no frame delays; this conversion uses 10 frames per second. Pixelated rendering preserves the small source image rather than suggesting higher-resolution detail.
- `statistical-learning.mp4`: an evolving orange approximation to a blue step function; embedded `ppt/media/image25.gif`. 600 × 600 pixels, 10 seconds. The caption describes the illustration without attributing a particular algorithm or experimental result to it.

These GIFs were converted to silent H.264 MP4 files at their original pixel dimensions, with web-streaming metadata at the beginning of each file. Their `*-poster.webp` still previews were taken from the original animations.

## Recent large-step gradient-descent talk

- `foliations.mp4`: the nonlinear invariant curve and stable foliation of the plane, embedded on slide 53 of `largestep_GD_long_compact.pptx` as `ppt/media/media5.mp4`.
- The video is copied byte-for-byte from the presentation: H.264, 2040 × 1080 pixels, 24 frames per second, approximately 3.83 seconds, no audio.
- SHA-256: `1ec2bd15be39ab5ab472cf6de4b4c4abda45b193e7ffe5f8a1a5e95acb3e6459`.
- `foliations-poster.webp` is a still at 1.5 seconds.
- The caption identifies this as an illustration from the dynamics talk. It is not presented as a depiction of the noncommutative-geometric invariants discussed on the project page.

All videos play automatically, silently and on a loop, with native pause controls. A reduced-motion preference disables automatic playback. Still previews remain available while loading, when playback is paused or if the browser blocks autoplay.

## Additional animations for the optimisation exposition

The author subsequently requested these two illustrations from the same 2026 long talk:

- `quadratic-stability.mp4`: slide 11's `ppt/media/image25.gif`, converted to silent H.264 at its original 1500 × 500 resolution, 50 frames per second, 3.2 seconds. The three panels show contraction, neutral oscillation and expansion for GD on a quadratic, relative to the threshold `2 / lambda`.
- `scalar-gd-regimes.mp4`: slide 16's `ppt/media/media1.mp4`, also used on slides 20, 26, 47 and 65. Copied byte-for-byte from the presentation, at 1500 × 500 pixels, 25 frames per second, 6.44 seconds. All three two-layer scalar-factorisation regimes are already combined in this single video, in one row.
- Scalar clip SHA-256: `daec9cf83f2c8f123ed5e034884445d3aec0905325a10e3bbefcf9eebe143115`.
- Each clip has a corresponding WebP still preview. Both streams were decoded completely to verify them. The page retains their full three-panel layout.

## Sine-network fitting and local smoothness

- Files: `sine-step-lipschitz.mp4` and `sine-step-lipschitz-poster.webp`.
- Source: `ppt/media/image125.gif` on slide 42 of the earlier `talk.pptx`.
- The author requested the animation illustrating how the global and average local Lipschitz quantities behave as fitting capacity grows. This complete four-panel version shows the sine-activated network and step target, absolute error, generalisation gap and the two Lipschitz quantities together. The smaller step-fitting animation used in the Research overview remains unchanged.
- Converted from the original 1600 × 400, 100-frame GIF to silent H.264, at 10 frames per second for 10 seconds, preserving all four panels. The WebP poster is the middle source frame. The entire video stream was decoded successfully.
- The caption treats the plot as an illustration and distinguishes its local quantities from the finite-radius neighbourhood constants in the theorem. No claim is made that finite-radius local constants stay bounded for every approximation family.

## Translation equivariance

- Files: `translation-equivariance.mp4` and `translation-equivariance-poster.webp`.
- Source: the paired animations `ppt/media/image44.gif` and `ppt/media/image45.gif` on slide 14 of the author's 2025 `talk.pptx`, *Some mathematical perspectives on deep learning*. They show a translating digit and its translating convolutional filter response.
- The two 128 × 128, 32-frame sources are placed side by side in their original frame order, giving a 256 × 128 silent H.264 clip. The source GIFs have no frame delays; the conversion uses 10 frames per second for 3.2 seconds, as for the existing perspective-transformation animation.
- A fixed fourfold display-intensity gain is applied to the response panel to make its faint features visible at website size. This contrast adjustment is disclosed in the page caption; input motion and response geometry are unchanged. The page uses pixelated rendering to preserve the original small image scale.
- The poster is a frame at 0.8 seconds. The entire video stream was decoded successfully. Playback loops silently with native controls, and respects the site's reduced-motion behaviour.
- The architecture page also reuses the existing `architecture.mp4` perspective-transformation animation, which appears again on slide 19 of this talk. No additional transformation footage is generated.

## Cross-entropy exposition: self-stabilisation in the toy model

- Files: `classification-toy-self-stabilisation.mp4` and `classification-toy-self-stabilisation-poster.webp`.
- Source: `ppt/media/image13.gif` on slide 5, “Self-stabilization in a toy example”, of the author's supplied `EoS_NeurIPS2026_talk_Penn.pptx`. The author requested replacing the static toy-landscape picture in the cross-entropy section with this animation.
- The complete 1300 × 560 animation is retained, including the GD trajectory, coordinate plots, transverse stability quantity and all explanatory annotations. The model is `ell(x,y) = exp(-x) y^2`. No chart is redrawn, cropped or recoloured, and no surrounding slide material is included.
- Converted to silent H.264 MP4 with variable frame timing, retaining all 63 frames and the original 18.03-second duration, including the pauses. The full video stream decodes successfully. The poster is the last original GIF frame, converted to WebP at quality 94.
- Playback loops silently with native controls and the site's existing reduced-motion behaviour. The caption distinguishes this model's line of zero-loss minima from the decreasing loss along the reference line for separable logistic regression.
- The source presentation remains outside the served website and is unchanged by this extraction.
