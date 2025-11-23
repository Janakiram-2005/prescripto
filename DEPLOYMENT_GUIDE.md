# Vercel Deployment Guide for MediChain+

## MongoDB Connection String
```
MONGODB_URI=mongodb+srv://vemulaharshith1476_db_user:3Fy7SLnYqk6SKblw@medichain.btuitho.mongodb.net/?appName=medichain
```

## Deployment Steps

### 1. Backend Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New Project**
3. Import your Git repository or upload the `backend` folder
4. Configure:
   - **Root Directory**: `prescripto-full-stack/backend` (or `backend` if uploading separately)
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`

5. **Environment Variables** - Add these in Vercel:
   ```
   MONGODB_URI=mongodb+srv://vemulaharshith1476_db_user:3Fy7SLnYqk6SKblw@medichain.btuitho.mongodb.net/?appName=medichain
   JWT_SECRET=your_jwt_secret_here
   PORT=4000
   CURRENCY=INR
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your_admin_password
   ```
   
   *(Add any other env vars you use: STRIPE_SECRET_KEY, RAZORPAY_KEY_ID, CLOUDINARY keys, SMTP keys if needed)*

6. Click **Deploy**

7. After deployment, copy your backend URL (e.g., `https://your-backend.vercel.app`)

---

### 2. Frontend Deployment

1. Create a new project in Vercel
2. Import your Git repository
3. Configure:
   - **Root Directory**: `prescripto-full-stack/frontend` (or `frontend` if uploading separately)
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables** - Add:
   ```
   VITE_BACKEND_URL=https://your-backend.vercel.app
   ```
   *(Replace with your actual backend Vercel URL)*

5. Click **Deploy**

---

### 3. Admin Panel Deployment (Optional - separate project)

1. Create another project in Vercel
2. Configure:
   - **Root Directory**: `prescripto-full-stack/admin`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Environment Variables**:
   ```
   VITE_BACKEND_URL=https://your-backend.vercel.app
   ```

4. Deploy

---

## Important Notes

- **Backend uses serverless functions**: The `api/index.js` file exports Express app for Vercel
- **CORS**: Backend already has CORS enabled, but make sure your frontend URL is allowed
- **File uploads**: For production, ensure Cloudinary is configured in backend env vars
- **Database**: MongoDB connection string is set above
- **Environment Variables**: Never commit `.env` files. Set them in Vercel dashboard

---

## Troubleshooting

- If backend gives 404: Check that `api/index.js` exists and routes are correct
- If frontend can't connect: Verify `VITE_BACKEND_URL` matches your backend Vercel URL
- MongoDB connection issues: Double-check the connection string has no extra spaces

