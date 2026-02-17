# Backend (Node.js + Express)

## Port: 4000

## 🔐 Environment Variables Setup

### Local Development

1. Copy the example file:
```bash
cp .env.example .env.development
```

2. Edit `.env.development` with your values:
```bash
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

3. Install and run:
```bash
npm install
npm run dev
```

### Production (AWS)

**DO NOT create .env files in GitHub!**

Add these as environment variables in AWS CodeBuild:
- `PORT` = `4000`
- `NODE_ENV` = `production`
- `CORS_ORIGIN` = `http://54.84.37.142`

See `../AWS_CODEBUILD_ENV_SETUP.md` for detailed instructions.

---

## API Endpoints

- **GET** `/api/health` - Check backend status
- **GET** `/api/users` - Get list of users (static data)
- **POST** `/api/login` - Login with credentials

## Test Credentials

- Username: `admin`
- Password: `admin123`

---

## Files Explained

- `index.js` - Main server file
- `package.json` - Dependencies (express, cors, dotenv)
- `appspec.yml` - AWS CodeDeploy configuration
- `buildspec.yml` - AWS CodeBuild configuration
- `scripts/install.sh` - Deployment script
- `.env.example` - Template for environment variables
- `.env.development` - Local development config (not committed)
- `.env.production` - Production config (not committed)
- `.gitignore` - Prevents committing .env files

---

## No Database Required

This project uses **in-memory static data** — no MongoDB, MySQL, or any database is needed. Users and login credentials are hardcoded directly in `index.js`.

---

## EC2 Deployment Path

`/var/www/backend`
