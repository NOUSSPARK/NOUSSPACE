# ObsidianUI

Animated, interactive React components built with Tailwind CSS + motion. shadcn-compatible registry.

- Site: https://www.obsidianui.dev/components
- Registry: https://www.obsidianui.dev/r/registry.json
- Agent instructions: https://www.obsidianui.dev/agent-instructions.md
- License: MIT

## Integration

- shadcn initialized (`components.json`).
- `lib/utils.ts` provides `cn()`.
- Components land in `src/components/block/` and `src/components/ui/`.

## Added so far

- **Discover Button** → `src/components/block/discover-button.tsx` (used on homepage).

## How to add more

```bash
npx shadcn@latest add "https://www.obsidianui.dev/r/{name}.json" --overwrite
```

Then wire into pages and build with `npm run build -- --webpack`.
