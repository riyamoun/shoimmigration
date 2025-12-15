# 🚀 Backend Setup Instructions

## Step 1: Create Supabase Project (FREE - 2 mins)

1. Go to **[supabase.com](https://supabase.com)**
2. Click **"Start your project"** → Sign up with GitHub (free)
3. Create new project called **"ShoImmigration"**
4. Wait for project to be created (~2 mins)

---

## Step 2: Get Database Connection String (2 mins)

1. In Supabase dashboard, go to **Settings > Database**
2. Look for **"Connection pooling"** section
3. Change mode to **"Transaction"** (if not already)
4. Copy the connection string
5. **Replace password** in the URL with your database password

Example format:
```
postgres://postgres:YOUR_PASSWORD@aws-0-xxxx.pooler.supabase.com:6543/postgres?pgbouncer=true
```

---

## Step 3: Get API Keys (2 mins)

1. Go to **Settings > API**
2. Copy these values:
   - `Project URL` → NEXT_PUBLIC_SUPABASE_URL
   - `anon key` → NEXT_PUBLIC_SUPABASE_ANON_KEY

---

## Step 4: Add Environment Variables (1 min)

Edit `.env.local` in your project root:

```env
DATABASE_URL="postgres://postgres:PASSWORD@aws-0-xxxx.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgres://postgres:PASSWORD@aws-0-xxxx.pooler.supabase.com:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_ANON_KEY"
NEXTAUTH_SECRET="generate-random-string-here"
```

**Generate NEXTAUTH_SECRET in PowerShell:**
```powershell
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((1..32 | ForEach-Object { [char](Get-Random -Min 33 -Max 126) }) -join '')) | Out-String
```

---

## Step 5: Push Database Schema (1 min)

In your project terminal:

```bash
npx prisma db push
```

This creates the `Lead` and `User` tables in your Supabase database.

---

## Step 6: Test It! (2 mins)

1. Start dev server:
```bash
npm run dev
```

2. Go to **http://localhost:3000**

3. Fill out the contact form and submit

4. Check **http://localhost:3000/admin/dashboard**
   - You should see your lead appear in the table!

---

## 📊 What Just Got Created

✅ **Leads Table** - Stores customer inquiries
✅ **Users Table** - For future login system  
✅ **API Endpoint** - `/api/leads` (POST form data)
✅ **Admin Dashboard** - View all leads (at `/admin/dashboard`)

---

## 🔒 Next Steps (Security)

1. Add password protection to `/admin/dashboard` (login required)
2. Add email notifications (Resend integration)
3. Add client portal for tracking application status

---

## ❌ If You Get Errors

**Error: "Cannot connect to database"**
- ✅ Check PASSWORD in DATABASE_URL is correct
- ✅ Check NEXT_PUBLIC_SUPABASE_URL doesn't have trailing slash
- ✅ Restart dev server after adding env vars

**Error: "Prisma migration failed"**
- ✅ Make sure DIRECT_URL is set (different from DATABASE_URL)
- ✅ Port should be 5432, not 6543 (for migrations)

**Error: "Form submission 500 error"**
- ✅ Check if prisma client is initialized correctly
- ✅ Look at server terminal for database connection error

---

## 💾 Backup Your Data

Supabase automatically backs up daily. You can also:
1. Go to **Settings > Backups** in Supabase
2. Download backup anytime

---

Done! Your production database is live. 🎉
