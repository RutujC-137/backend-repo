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
MONGODB_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your-dev-secret
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
- `MONGODB_URI` = your production database URI
- `JWT_SECRET` = strong random string (32+ chars)
- `CORS_ORIGIN` = `http://54.84.37.142`

See `../AWS_CODEBUILD_ENV_SETUP.md` for detailed instructions.

---

## API Endpoints

- **GET** `/api/health` - Check backend status
- **GET** `/api/users` - Get list of users
- **POST** `/api/login` - Login with credentials
- **GET** `/api/env` - Show environment info (debug only)

## Test Credentials

- Username: `admin`
- Password: `admin123`

---

## Files Explained

- `index.js` - Main server file
- `package.json` - Dependencies
- `appspec.yml` - AWS CodeDeploy configuration
- `buildspec.yml` - AWS CodeBuild configuration
- `scripts/install.sh` - Deployment script
- `.env.example` - Template for environment variables
- `.env.development` - Local development config (not committed)
- `.env.production` - Production config (not committed)
- `.gitignore` - Prevents committing .env files

---

## EC2 Deployment Path

`/var/www/backend`

---

## Deployment Flow

1. Push to GitHub
2. CodePipeline triggers
3. CodeBuild creates `.env` from environment variables
4. CodeBuild runs `npm install`
5. CodeDeploy copies to `/var/www/backend`
6. `install.sh` runs `pm2 restart backend`
7. Backend is live!

---

## Troubleshooting

**Environment variables not loading:**
```bash
# Check if dotenv is installed
npm list dotenv

# Verify .env file exists
ls -la .env*

# Check PM2 logs
pm2 logs backend
```

**Cannot connect to database:**
```bash
# Test MongoDB connection
mongosh "your-mongodb-uri"

# Check environment variable
echo $MONGODB_URI
```

**CORS errors:**
```bash
# Check CORS_ORIGIN matches frontend URL
curl http://localhost:4000/api/env
```
