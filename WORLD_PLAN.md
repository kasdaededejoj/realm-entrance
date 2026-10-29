# The Realm — world planning document

[ChatGPT] 2026-10-29. Working plan; no implementation or release authorized by this document. Adam has asked to plan the whole experience before proceeding. His decisions and proposals are separated below. The current study is a prototype, not the final world.

## 1. Purpose and confirmed direction

- ??? is a taste institution in which clothing is one of several artifacts. Curiosity connects normality, mysticism and unconventionalism; retain all three rather than treating darkness or mystery as the whole identity.
- Adam wants first-person 3D and cited the angular low-poly visual style of Need for Madness. Visitors investigate a shadowy entrance: traces and concealed artifacts lead, with a noticing presence secondary. Internal stages should connect without visible round framing.
- Story starting point: Adam chose **an existing mysterious world that the visitor investigates**. Its history, people, narrator, conflict and ending have not been decided.
- Intrigue, recognition and appreciation are working emotional aims. Recognition includes noticing connections and personal resonance; the rest of the design refinements remain tentative. No emotional sequence is mandated.
- The game's relationship to teaching and filtering remains open. A completed game cannot prove taste or affinity. End-item form and use, access mechanics and connection to the old game remain open; private operations stay outside this public repository.

## 2. Design the experience as a connected system

```text
why visit? -> enter -> notice a trace -> investigate objects
                                |             |
                           realm identity   discover a relationship
                                \             /
                                 transition -> another realm or space
                                                  -> resolution / outcome
```

The diagram is a proposal, not an approved sequence. For each realm or space, define its purpose, atmosphere, key object, interaction, sound, connection to the next space and what the visitor might feel. Decide how a person can recover from confusion without replacing discovery with a narrated tutorial.

## 3. Story and world

Questions to decide with Adam: What already exists here, and why? What is the visitor looking for, if anything? What has changed before they arrive? What is the presence and how does it behave? What is discovered versus left mysterious? How does an ending relate to brand philosophy without reducing it to a lecture?

Narrative delivery options to compare, not locked: environmental details; object relationships and traces; sparse cryptic writing; sound and changes in a space; another presence's indirect reactions. Avoid inventing real-world history or borrowing cultural symbols without establishing their meaning and provenance. Give every candidate story detail a status: founder decision, proposed fiction, sourced history, or unknown.

**Story deliverable:** one-page premise; a private truth of the world versus what a visitor can discover; three to five story beats as a provisional working range; per-beat clues and possible interpretations; an ending and unresolved questions. Number of beats is a planning aid, not a decision.

## 4. Realms and transitions

The meaning, count, arrangement, movement freedom and naming of realms are open. Three structural options for discussion:

1. **Connected spaces:** one world gradually changes, each space revealing an aspect of the same history. Strong continuity; less contrast between places.
2. **Distinct worlds:** each realm has its own visual and sonic identity, joined by clear causal transitions. Strong variety; higher asset and narrative cost.
3. **Hybrid:** a recurring hub links distinct but related spaces, with changes carrying back to the hub. Enables recognition; risks backtracking.

For each proposed realm, document working name (not final brand language), narrative role, emotional intent, visual palette/materials, anchor object, interaction, sound identity, entry/exit logic, navigation boundaries and performance cost. Do not set a realm count before the story and scope are agreed. Map both required path and optional discoveries.

## 5. Objects and visual production

Create an object register: ID; purpose (clue, transition, atmosphere, reward); shape/silhouette; visual/material references; interaction and feedback; story relation; source/provenance and usage rights; owner; technical budget; approval state. Link every important object to the visitor's next possible action, but allow quiet atmospheric objects without treating every surface as interactive.

Proposed pipeline: sketch/reference -> rough geometry -> in-engine composition review -> authored model/materials -> optimized browser export -> real-device validation. Blender and glTF are candidate tools; the approved workflow and the asset creator remain open. The first prototype's faceted object is a placeholder, not an approved asset. Specify acceptable brightness and visual readability through screenshots and device checks, not palette labels alone.

## 6. Sound and silence

Design layers: realm ambience, movement/interaction feedback, object-specific cues, transitional cues, music, and intentional silence. For each cue record trigger, location, duration, volume relationship, emotional purpose, source/license, format, owner and whether it is required for comprehension. Consider both a continuous atmospheric bed and intermittent sounds; neither is approved.

Browser playback must start only after a user gesture when required. Plan mute and independent volume controls, captions or equivalent visual cues for information conveyed by audio, safe level changes and graceful behavior when audio is unavailable. Test transitions, overlap, pause/resume, memory and actual headphones/speakers; a successful build does not establish listening quality. The earlier separate audio AI's ownership/delivery is unconfirmed for this new world; coordinate before assigning or reusing its work.

## 7. Interactions, rules and progression

Decide movement freedom, interaction vocabulary, clue visibility, whether objects can be manipulated, revisit behavior, checkpoints, failure/recovery, session length and ending. Avoid locking visitors out due to undiscoverable input. Distinguish functional input instructions from explanation of fictional meaning. Map every proposed interaction as: visible invitation -> action -> perceptible response -> next lead. Determine accessible equivalents for motion, vision, hearing and input as target devices are selected.

The current prototype is desktop-first. Mobile interaction, save behavior and performance on named devices remain undecided and unverified. Instrument performance only with appropriate privacy decisions; no analytics plan is implied.

## 8. Production stages and review

1. **Creative foundation:** settle narrative premise, realm structure, desired experience, device priorities and what stays unresolved. Deliver a founder-approved creative brief.
2. **World map:** develop realm cards, narrative beats, object relationships and transitions. Review continuity and scope before asset production.
3. **Sound and visual boards:** compare sample silhouettes, materials, brightness, sound direction and silence. Confirm ownership and rights. Founder approves the direction, not just labels.
4. **Vertical slice:** specify one end-to-end encounter in enough detail to test discovery, controls, legibility and sound together. Separate it from the final game. Build only on explicit scope authorization.
5. **Measure and revise:** test actual devices, frame times, load times, interactions, accessibility and listening; distinguish observed pass, fail, unsupported and untested. Resolve low frame rate by measurement before claiming a cause.
6. **Expand and integrate:** after slice acceptance, sequence realm production, accessibility and persistence; decide whether/how the old game, completion and any access flow connect. No release or audience change follows automatically.

Each stage ends in a decision or an explicitly recorded open question. No batch count, date, budget, external creative commission or final aesthetic is assumed.

## 9. Decision queue

1. Realm structure: connected spaces, distinct worlds, hybrid, or another idea?
2. What is the visitor drawn to investigate, and what should they discover? Should the world have a known private truth or remain open even to us?
3. Which relationship to the previous arcade game and Conformarult should the 3D experience have, if any?
4. What should the player do most: observe, explore, solve, manipulate objects, face challenges, or a combination?
5. Sound direction: environmental/minimal, musical, reactive, or a mixture? Any references Adam wants to provide?
6. Priority devices, accessibility needs, expected session length and scope. Is the earlier weird end item still intended?
7. After Adam reviews the current study: what should stay, change, or be discarded? Its lighting and speed changes remain unmeasured.

## 10. Records and sources

This plan uses Adam's direct statements and the historical [entrance direction](https://github.com/kasdaededejoj/whack-a-mole/blob/main/context/projects/realm-entrance-direction.md) and [brand basis](https://github.com/kasdaededejoj/whack-a-mole/blob/main/context/projects/realm-brand-basis.md). Historical access/prototype arrangements do not override the separate repository. Founder-stated direction: 10/10 confidence where explicit; proposed structures and production steps are design judgments, not measured outcomes.

Technical context opened 2026-10-29: [MDN autoplay guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay) describes browser restrictions affecting audio and Web Audio (9/10); [Khronos glTF](https://www.khronos.org/gltf/) describes a format for delivering 3D scenes and models (9/10). Neither establishes this project's finished sound or asset pipeline.
