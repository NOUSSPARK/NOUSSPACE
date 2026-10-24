# Stack

## Current

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Runtime:** Node.js v22
- **Version control:** Git + GitHub (`NOUSSPARK/NOUSSPACE`)

## Notes

- Native SWC binary is partially corrupt on this machine; builds use `--webpack` and fall back to WASM. Reinstall `@next/swc-darwin-arm64` when network is stable.
- Geist font removed from layout (offline build); using system fonts.

## Candidates to explore

- Astro (original idea) — still worth evaluating for content-heavy pages.
- MDX for blog/content.
