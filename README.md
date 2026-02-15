# mujaj.dev

Personal site monorepo with a single frontend app.

## Structure

- `frontend/`: Vite + React app (TanStack Router, Tailwind CSS)
- `pnpm-workspace.yaml`: workspace definition
- `package.json`: root scripts that proxy into `frontend/`

## Quick start

```sh
pnpm install
pnpm dev
```

## Scripts (run from repo root)

- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- `pnpm test`
- `pnpm deploy`

All scripts run the equivalent command inside `frontend/`.
