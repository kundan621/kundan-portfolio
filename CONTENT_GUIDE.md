# Content Management Guide

This guide explains how to update your portfolio content using the GitHub CMS approach.

## 📂 Content Structure

All content is stored in TypeScript files in the `src/data/` directory:

- `personal.ts` - Personal information, bio, and contact details
- `experience.ts` - Work experience, education, and achievements
- `skills.ts` - Technical skills and technology stack
- `projects.ts` - Portfolio projects and showcases

## 🔧 How to Update Content

### 1. Personal Information (`src/data/personal.ts`)

Update your basic information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your bio description...",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  leetcode: "https://leetcode.com/yourusername",
  youtube: "YourChannelName",
  avatar: "/images/your-photo.jpg",
  resume: "/your-resume.pdf"
};
```

### 2. Work Experience (`src/data/experience.ts`)

Add new positions or update existing ones:

```typescript
{
  id: "unique-company-id",
  company: "Company Name",
  position: "Your Position",
  location: "City, Country",
  period: "Start Date - End Date",
  description: "Brief role description...",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    // Add more achievements
  ],
  technologies: ["Tech1", "Tech2", "Tech3"]
}
```

### 3. Skills (`src/data/skills.ts`)

Update your technical skills by category:

```typescript
{
  category: "Category Name",
  skills: [
    "Skill 1",
    "Skill 2",
    // Add more skills
  ]
}
```

Update your tech stack priorities:

```typescript
export const techStack = {
  primary: ["Your", "Main", "Technologies"],     // 95% proficiency
  secondary: ["Other", "Technologies"],          // 85% proficiency
  learning: ["Technologies", "You're", "Learning"] // 70% proficiency
};
```

### 4. Projects (`src/data/projects.ts`)

Add new projects or update existing ones:

```typescript
{
  id: "unique-project-id",
  title: "Project Name",
  description: "Brief description for cards",
  longDescription: "Detailed description for featured projects",
  technologies: ["React", "Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/username/repo", // Optional
  liveUrl: "https://your-demo.com", // Optional
  imageUrl: "/images/project-screenshot.jpg", // Optional
  featured: true, // Show in featured section
  category: "Web Application" // Project category
}
```

## 🚀 Publishing Changes

1. **Edit the files**: Make your changes to the content files
2. **Commit changes**: 
   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```
3. **Push to GitHub**:
   ```bash
   git push origin main
   ```
4. **Auto-deploy**: If connected to Vercel, changes will deploy automatically

## 📸 Adding Images

1. Place images in the `public/images/` directory
2. Reference them in your content files as `/images/filename.jpg`
3. Supported formats: JPG, PNG, WebP, SVG

## 💡 Tips

### SEO Optimization
- Update meta descriptions in `src/app/layout.tsx`
- Use descriptive project titles and descriptions
- Include relevant keywords in your bio and project descriptions

### Performance
- Optimize images before adding them
- Keep descriptions concise but informative
- Use meaningful file names for images

### Content Best Practices
- Use action verbs in achievement descriptions
- Quantify results when possible (e.g., "Improved performance by 30%")
- Keep technology lists current and relevant
- Update contact information regularly

## 🔄 Content Validation

The TypeScript compiler will catch errors in your content files. Run these commands to validate:

```bash
# Type check
npm run build

# Development server (shows errors in real-time)
npm run dev
```

## 📱 Preview Changes

1. Run the development server: `npm run dev`
2. Open http://localhost:3000 in your browser
3. Check all sections for proper display
4. Test on different screen sizes
5. Verify all links work correctly

## 🎨 Customization Options

### Themes
- Light/dark mode is automatic
- Customize colors in `tailwind.config.ts`

### Layout
- Modify component files in `src/components/`
- Adjust spacing and sizing with Tailwind classes

### Animations
- Framer Motion animations can be customized in component files
- Adjust timing and effects as needed

## 🆘 Troubleshooting

### Common Issues

1. **TypeScript Errors**: Check for typos in property names
2. **Images Not Loading**: Verify file paths and ensure images are in `public/`
3. **Build Failures**: Run `npm run build` locally to see detailed errors
4. **Deployment Issues**: Check Vercel logs for specific error messages

### Getting Help

- Check the console for error messages
- Verify TypeScript types match the interfaces
- Ensure all required fields are filled
- Test locally before pushing changes

---

Need help? Create an issue in the GitHub repository or contact kundan621@gmail.com
