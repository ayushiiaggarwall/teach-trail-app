# 🚀 Bolt Hosting Deployment Guide

## 🚨 Critical Issues Fixed

Your deployment was failing due to these issues:

1. **Node.js Version Incompatibility** - Your code requires Node.js 20+
2. **ESLint Configuration Problems** - Fixed configuration loading issues
3. **Missing Environment Variables** - Supabase, Stripe, Razorpay keys needed
4. **Package Compatibility** - Updated for modern Node.js versions

## ✅ Pre-Deployment Checklist

### 1. **Environment Variables Setup**
Copy from `env.example` and set these in your Bolt dashboard:

```bash
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe (Required for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret

# Razorpay (Required for payments)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email (Required)
RESEND_API_KEY=your_resend_key

# App (Required)
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 2. **Bolt Dashboard Configuration**

**Build Settings:**
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: Set to **20.x** (CRITICAL!)

**Environment Variables:**
- Add ALL variables from the list above
- Ensure no typos in variable names

**Deploy Settings:**
- **Framework**: Next.js
- **Port**: 3000

### 3. **Local Testing**

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Check for errors
npm run type-check
npm run lint

# Test build
npm run build

# Test start (optional)
npm start
```

## 🔧 Troubleshooting Common Bolt Issues

### **Build Fails with Node.js Error**
**Solution**: Ensure Bolt is using Node.js 20.x in your project settings

### **Environment Variables Missing**
**Solution**: Check all variables are set in Bolt dashboard, no typos

### **Supabase Connection Error**
**Solution**: Verify Supabase URL and keys are correct

### **Payment API Errors**
**Solution**: Ensure Stripe/Razorpay keys are properly configured

### **Memory Limit Exceeded**
**Solution**: The `output: 'standalone'` in next.config.mjs should help

## 📁 Files Created/Modified

1. ✅ `next.config.mjs` - Enhanced compatibility
2. ✅ `bolt.json` - Bolt-specific configuration
3. ✅ `package.json` - Added Node.js requirements
4. ✅ `env.example` - Environment variables template
5. ✅ `.eslintrc.json` - Fixed configuration issues

## 🚀 Deployment Steps

1. **Commit all changes** to your repository
2. **Push to your main branch**
3. **In Bolt Dashboard:**
   - Set Node.js version to **20.x**
   - Add all environment variables
   - Set build command: `npm run build`
   - Set output directory: `.next`
4. **Trigger deployment**
5. **Monitor build logs** for any remaining issues

## 📞 If Still Failing

If deployment still fails after these fixes:

1. **Check Bolt build logs** for specific error messages
2. **Verify Node.js version** is set to 20.x
3. **Ensure all environment variables** are set correctly
4. **Contact Bolt support** with the specific error message

## 🔍 What These Fixes Address

- **Node.js Compatibility**: Your app now requires Node.js 20+
- **Build Optimization**: Better webpack configuration for deployment
- **Environment Setup**: Clear template for required variables
- **Configuration**: Bolt-specific deployment settings
- **Dependencies**: Proper package version requirements

Your app should now deploy successfully on Bolt! 🎉
