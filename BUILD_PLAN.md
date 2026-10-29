# Realm entrance — Terra build brief

[ChatGPT] 2026-10-29. Status: implementation plan; no playable build yet.

## Authority and repository boundary

Adam selected `kasdaededejoj/realm-entrance` as the home for the 3D version and asked for a plan for Terra before beginning. Source: direct human message in the vizar'dd chat, `01a14cc0-863d-7ff0-b048-4d168700372c`, 2026-10-29. This document does not claim approval of every proposed encounter detail or deployment. Start with the bounded prototype below when Adam starts execution; do not revive the old boss batches.

Baseline inspected: `4ec45d5`, containing only README.md. No renderer, packages, assets or runtime were present. Future 3D implementation belongs here. The old game stays in whack-a-mole; no runtime imports, shared storage or dependency on that checkout. The earlier Shift+D integration is deferred: this prototype opens directly at its own local URL. Any later link from the old game is a separate change.

## Product and design intent

- First-person 3D; angular low-poly geometry is the relevant Need for Madness reference, not racing mechanics.
- Invite investigation: traces and concealed artifacts lead; a noticing presence is secondary.
- Internal stages may exist, but visitors encounter a continuous world with causally connected transitions, not round labels.
- Brand remains `???`. Curiosity connects normality, mysticism and unconventionalism. Avoid defaulting to a horror temple or generic monumental science fiction.
- Intrigue, recognition and appreciation are working emotional aims. Recognition includes noticing connections and personal resonance. Other parked design details remain tentative.
- Brand-facing writing is lowercase, collective, cryptic and without selling language. Keep mechanical input/accessibility information distinct from narrative explanations; do not hide basic escape controls.
- The generated three-panel image is a mood reference, not an approved setting, a mesh or a literal reconstruction target.

## First playable slice — proposal

A small, quiet chamber and a short passage, taking roughly two to three minutes to explore. This duration is a design target, not a measured result.

1. Arrival: the visitor can look and move within a bounded space. A restrained trace is visible from the arrival position.
2. Investigation: the trace leads to a faceted object with a recognizable interruption in its surface. Inspecting it reveals a concealed mark.
3. Recognition: that mark repeats at a nearby seam. The object response visibly carries toward the seam, opening a passage. Avoid an unexplained remote door unlock.
4. Continuation: entering the passage reaches a distinct landing where the same mark appears in a new context. End the prototype here, without inventing access rewards or final lore.

All object forms, marks, room dimensions and interaction gestures above are replaceable test choices. Do not imply historical provenance for invented symbols. Presence effects are optional after the main chain reads clearly.

## Proposed implementation

Use Three.js with vanilla JavaScript modules and Vite. Begin with code-built geometry; introduce Blender-authored GLB assets only after spatial composition is approved. No framework, physics engine or backend is needed for this first slice by default.

Separate renderer/lifecycle, input/controller, scene construction, interactions, and progression state. Suggested progression: arrived -> inspected -> passageOpen -> reachedLanding. Reset must restore the entire scene. Use elapsed time, static collision boundaries, range-limited line-of-sight interactions and one owned animation loop. Keep materials, colors, fog, camera speed and interaction distances in a small tuning configuration.

Desktop keyboard/mouse is a provisional prototype target, not a product-wide device decision: WASD movement, mouse look, click interaction, Escape to release/pause. Suppress actions while unlocked or unfocused, clear held keys on blur, and keep movement level. No head bob by default. Provide reduced-motion behavior and an honest unsupported-device/rendering fallback. Mobile controls and real-device validation require their own batch before mobile support is claimed.

## Batches and review gates

| Batch | Deliverable | Evidence required before moving on |
| --- | --- | --- |
| B1 — foundation | Lockfile, local dev/build scripts, first-person graybox, collision, pause/resume/reset and rendering fallback | Production build passes; browser can enter, move, escape, resume and reset without console errors or duplicate input/loops. |
| B2 — visual study | One composed room, artifact and passage; tuned faceted materials, restrained black/purple/crimson palette, legible lighting | Capture arrival/object/passage views; Adam reviews silhouette, atmosphere, brightness and movement before expensive asset work. |
| B3 — connected encounter | Trace -> inspect -> response -> passage -> landing with explicit progression | Complete and reset twice; interaction through walls/out of range fails; repeated clicks cannot duplicate transitions; tab switching cannot skip progression. |
| B4 — validation and handover | Reviewable local build, screenshots, known issues and measured performance record | Walkthrough and focused state-transition checks; list pass/fail/not-tested separately. Adam reviews whether the connection is discoverable without explanation. |

B1 and B2 form the first review delivery. Do not automatically run all later batches through an unresolved founder review gate. A failed check stops its dependent batch.

Provisional performance target: aim for stable 60 fps on the actual test desktop at 1920x1080 with capped device pixel ratio. Record browser, hardware, viewport, frame-time distribution, cold transfer size and loading conditions; do not infer broad device support. Use a provisional 5 MB compressed initial asset budget. Revisit the budgets from measured evidence rather than degrading readability to satisfy them.

## Deferred decisions and exclusions

The exact setting, final movement model, phone controls, total stage count, final item, persistent progress and final access flow remain open. Combat, Conformarult, QR/invites, analytics, commerce and old-game repairs are outside this slice. Completion is not evidence of a visitor's taste; the teaching-versus-filtering tension remains unresolved. No public deployment is included.

Keep sensitive operations, garment R&D, credentials and private documents outside this repository. Do not copy the old context directory wholesale. Pull before editing, preserve others' changes, and stop on merge conflicts. Tag handovers/commits [ChatGPT], identify agent messages as agent messages, and never treat them as new founder approval. Save each completed batch with evidence in HANDOVER.md and context/project.md. Roll back a faulty batch with a targeted revert, never a destructive reset over others' work.

## Executor start prompt

Read README.md, this plan, context/project.md and newest HANDOVER.md. Verify current source and original founder execution scope. Work only in realm-entrance. Implement the authorized batches, report actual browser evidence separately from build/test results, and stop at the first unresolved review gate. Do not claim a model switch, successful Blender pipeline or pixel-exact image match without evidence.

## Technical references

Opened 2026-10-29: [Three.js PointerLockControls](https://threejs.org/docs/pages/PointerLockControls.html) documents first-person pointer lock controls; [Vite guide](https://vite.dev/guide/) documents the dev server and production build workflow. Technical description confidence: 9/10. Stack fit is a recommendation (8/10), not a project benchmark. Check installed runtime/package requirements during B1.
