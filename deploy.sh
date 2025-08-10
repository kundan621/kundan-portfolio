#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to Vercel

echo "🚀 Starting portfolio deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Type checking..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type checking failed. Please fix TypeScript errors."
    exit 1
fi

# Run linting
echo "🧹 Linting code..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found. Consider running 'npm run lint:fix'"
fi

# Build the project
echo "🏗️  Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix build errors."
    exit 1
fi

echo "✅ Build successful!"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Vercel CLI not found. Installing globally..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo "📱 Your portfolio should be live shortly."
