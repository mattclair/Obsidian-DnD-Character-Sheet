# Copilot / AI Agent Guidance — Obsidian D&D Character Sheet

Short, actionable instructions to help an AI editing this repo safely and productively.

1) Big picture
- **What this repo is**: an Obsidian vault implementing a D&D character sheet using Dataview, Meta Bind and small JS snippets. The UI is driven by frontmatter (YAML) in character notes and the JS in `z_Assets/Code` renders and persists that frontmatter.
- **Where core logic lives**: `z_Assets/Code/Character_Sheet.js` and the sibling files (`Character_Auto_Updater.js`, `Character_Class_Features.js`, `Character_Eldritch_Invocations.js`, `Character_Feats.js`, `Character_Purse_Tracking.js`). See the main renderer and persistence entry in [z_Assets/Code/Character_Sheet.js](z_Assets/Code/Character_Sheet.js#L1-L120).

2) Important runtime assumptions
- The code runs inside Obsidian with the Dataview plugin. `dv.current()` is used extensively — changes must preserve early-return checks (e.g., `if (!dv.current() || !dv.current().file) return;`). See [z_Assets/Code/Character_Sheet.js](z_Assets/Code/Character_Sheet.js#L1-L12).
- The repository expects CLI-converted content under `3. Mechanics/CLI`. The frontmatter key `BASE_FOLDER` points at that folder and is used to build paths like `${BASE_FOLDER}/spells`. See README quick-start: [README.md](README.md#L1-L40).

3) Persistence & state patterns (do not break)
- Per-file in-memory state is stored on `window` using keys derived from the file path (`window.__char_pendingStateByFile[...]`). Edits in the UI update this pending state; `commitPendingChanges()` writes those pending values back to frontmatter via `app.fileManager.processFrontMatter(file, fm => { ... })`. Keep the pattern of structuredClone and per-field checks when adding or persisting fields. Example: [z_Assets/Code/Character_Sheet.js#L60-L140](z_Assets/Code/Character_Sheet.js#L60-L140).
- The commit function explicitly maps many keys (health, inventory, Spells, Wild_Shape, feats, spell_slot, stats, etc.). If you add or rename a frontmatter key, update the mapping in `commitPendingChanges()` to preserve save behavior. See the large list of persisted keys in [z_Assets/Code/Character_Sheet.js](z_Assets/Code/Character_Sheet.js#L180-L380).

4) Frontmatter conventions and casing
- Frontmatter is the source of truth — maintain exact key names used across code (examples: `health`, `Spells`, `Eldritch_Invocations`, `spell_slot`, `BASE_FOLDER`). Prefer adding new keys that match existing naming/casing conventions instead of changing existing ones.

5) Safe change checklist for contributors / agents
- Preserve early-return checks for Dataview readiness and `BASE_FOLDER` lookup.
- When changing persisted keys, update `commitPendingChanges()` mapping and search for other references across `z_Assets/Code`.
- Avoid global renames of frontmatter keys without also updating example character notes under `1. The Party` and the README.
- Unit/automated tests: none present — validate changes manually by opening Obsidian, enabling Dataview, and opening a character note created from `1. The Party/_Base Character Template/Base Character Sheet.md`.

6) Examples to copy/paste (small snippets)
- Read base folders from frontmatter (don't hardcode):
  - `const BASE_FOLDER = c.BASE_FOLDER;` then build `SPELLS_FOLDER = `${BASE_FOLDER}/spells`` — found in [z_Assets/Code/Character_Sheet.js](z_Assets/Code/Character_Sheet.js#L20-L40).
- Persist a single field safely:
  - `if (pendingState.health?.max != null) fm.health = structuredClone(pendingState.health);`

7) Developer workflow notes
- How to test: open this repo as a vault in Obsidian, ensure Dataview & Meta Bind are installed and trusted, copy CLI output into `3. Mechanics/CLI`, open a note created from `1. The Party/_Base Character Template/Base Character Sheet.md`, and interact with the UI. The README contains setup steps: [README.md](README.md#L1-L40).
- No build step / CI for the JS — changes are live when notes are re-rendered by Dataview.

8) Files worth inspecting when making changes
- Renderer & persistence: [z_Assets/Code/Character_Sheet.js](z_Assets/Code/Character_Sheet.js#L1-L120)
- Auto-updates: [z_Assets/Code/Character_Auto_Updater.js](z_Assets/Code/Character_Auto_Updater.js)
- Feature data split across: `Character_Class_Features.js`, `Character_Eldritch_Invocations.js`, `Character_Feats.js`

9) What I could not infer
- No automated tests or CI config present — assume manual verification in Obsidian required.
- Runtime host is Obsidian; do not attempt to run the JS as a standalone Node app without adapting APIs like `app.fileManager` and `dv`.

If you'd like, I can adjust tone/length, add a short example PR checklist, or merge any existing agent docs you prefer kept. What should I change?
