# Cartify — Deploy to Vercel (one repo, two projects)

Your repo has two separate apps in it — `frontend` (Vite/React) and
`backend` (Express/MongoDB). Vercel deploys one "root directory" per
project, so the standard, reliable way to ship a MERN app like this
from **one GitHub repo** is to create **two Vercel projects** that both
point at that same repo, just with different root directories. This is
the normal pattern for MERN-on-Vercel — you're not doing anything
unusual.

You do **not** need two repos. You push once, and both Vercel projects
redeploy automatically on every push.

---

## 0. Before you push

- Never commit `backend/.env` or `frontend/.env` — both are already in
  `.gitignore`. Use the `.env.example` files as your template.
- Make sure you have a MongoDB Atlas cluster (not `localhost`) — Vercel
  can't reach a database on your own laptop. Free tier is fine:
  https://www.mongodb.com/cloud/atlas/register
  - Create a database user + password.
  - In Atlas → Network Access, allow access from anywhere (`0.0.0.0/0`)
    so Vercel's serverless functions can connect.
  - Copy the connection string (`mongodb+srv://...`).

## 1. Push the repo to GitHub

```bash
cd mernProject
git init
git add .
git commit -m "Cartify: add admin section, prep for Vercel"
git branch -M main
git remote add origin https://github.com/<your-username>/cartify.git
git push -u origin main
```

If `.git` already exists from before, just `git add . && git commit`
and push as usual.

## 2. Deploy the backend

1. Go to https://vercel.com/new and import your GitHub repo.
2. When asked for the **Root Directory**, click "Edit" and select
   `backend`.
3. Framework Preset: "Other" (Vercel will use the `backend/vercel.json`
   you already have, which tells it to run `server.js` as a Node
   serverless function).
4. Add these **Environment Variables** (Project Settings → Environment
   Variables), for all environments:
   - `MONGO_URL` → your Atlas connection string
   - `JWT_SECRET` → a long random string (don't reuse the sample one)
   - `ADMIN_EMAIL` → the email you'll log into `/admin/login` with
   - `ADMIN_PASSWORD` → a strong password
5. Deploy. Once it's live, copy the URL Vercel gives you, e.g.
   `https://cartify-backend.vercel.app`.
6. Sanity check: open `https://cartify-backend.vercel.app/` in a
   browser — you should see `{"message":"Cartify API is running"}`.

## 3. Deploy the frontend

1. Go to https://vercel.com/new again, import the **same** repo a
   second time.
2. Root Directory → select `frontend`.
3. Framework Preset: Vercel auto-detects **Vite** — leave the default
   build command (`vite build`) and output directory (`dist`).
4. Add an environment variable:
   - `VITE_API_URL` → `https://cartify-backend.vercel.app/api`
     (your backend URL from step 2, with `/api` on the end)
5. Deploy. You'll get something like
   `https://cartify-frontend.vercel.app`.

## 4. Test it

- Visit your frontend URL, sign up / log in as a normal shopper —
  should work end-to-end against the live backend.
- Go to `/admin/login` and log in with the `ADMIN_EMAIL` /
  `ADMIN_PASSWORD` you set in step 2. You should land on
  `/admin/products` and be able to add/edit/delete products.
- Try hitting `/admin/products` directly without logging in — you
  should get bounced to `/admin/login`.

## 5. Redeploying later

Just `git push` — both Vercel projects watch the same repo and branch,
and each only rebuilds when files under its own root directory
(`frontend/` or `backend/`) change.

---

### Troubleshooting

- **CORS errors in the browser console** — double check `VITE_API_URL`
  on the frontend project matches your backend's actual Vercel URL,
  including `/api` at the end, and that you redeployed the frontend
  after adding the env var (Vercel only picks up new env vars on the
  next deploy).
- **"Invalid admin credentials" even though you're sure they're
  right** — check the backend project's env vars were saved *before*
  the last deploy; env var changes need a redeploy to take effect.
- **Products page is empty right after deploy** — that's expected,
  the database is empty. Log into `/admin/login` and add a product.
- **404 on page refresh** (e.g. refreshing `/product/123`) — this is
  what `frontend/vercel.json` fixes; make sure it made it into your
  git push.
