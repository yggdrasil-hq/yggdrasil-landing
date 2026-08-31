# Landing — local setup

**Read this when:** you're setting up or running this component locally.

## Full stack (recommended)

From the meta repo root:

```bash
./setup.sh
docker compose -f deploy/docker-compose.dev.yml up --build landing
```

Site: http://localhost:8080/ (via nginx).

The Docker dev service is self-contained and does not mount the source or
`node_modules`; rebuild it with `--build` after source or dependency changes.

## This repo only

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```
