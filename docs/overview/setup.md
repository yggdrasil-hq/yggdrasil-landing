# Landing — local setup

**Read this when:** you're setting up or running this component locally.

## Full stack (recommended)

From the meta repo root:

```bash
./setup.sh
docker compose -f deploy/docker-compose.dev.yml up --build landing
```

Site: http://localhost:8080/ (via nginx).

## This repo only

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```
