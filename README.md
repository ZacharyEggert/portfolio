# Portfolio

A portfolio website to show various projects

## Table of Contents

- [Todos](#todos)

## Todos

1. **Setup Project**
   - [x] Install Node.js and npm
   - [ ] Create a new Next.js project

     ```sh
     npx create-next-app@latest my-portfolio --typescript
     cd my-portfolio
     ```

   - [x] Initialize a Git repository

     ```sh
     git init
     git add .
     git commit -m "Initial commit"
     ```

2. **Project Structure**
   - [ ] Organize the project structure
     - [ ] Create `components` directory for reusable components
     - [ ] Create `app` directory for different pages and layouts
     - [ ] Create `styles` directory for CSS/SCSS files

3. **Basic Pages**
   - [ ] Create Home page (`app/page.tsx`)
   - [ ] Create About page (`app/about/page.tsx`)
   - [ ] Create Projects page (`app/projects/page.tsx`)
   - [ ] Create Contact page (`app/contact/page.tsx`)

4. **Navigation**
   - [ ] Create a Navbar component (`components/Navbar.tsx`)
   - [ ] Add links to Home, About, Projects, and Contact pages in the Navbar
   - [ ] Include the Navbar in the main layout (`app/layout.tsx`)

5. **Styling**
   - [ ] Setup global styles (`styles/globals.css`)
   - [ ] Add CSS modules for component-specific styles
   - [ ] Use a CSS framework (optional, e.g., Tailwind CSS)

     ```sh
     npm install tailwindcss
     npx tailwindcss init
     ```

6. **Content**
   - [ ] Add content to the Home page (e.g., introduction, welcome message)
   - [ ] Add content to the About page (e.g., bio, skills)
   - [ ] Add content to the Projects page (e.g., list of projects with descriptions and links)
   - [ ] Add content to the Contact page (e.g., contact form, social media links)

7. **Projects Section**
   - [ ] Create a ProjectCard component (`components/ProjectCard.tsx`)
   - [ ] Fetch project data from a JSON file or an API
   - [ ] Display project cards on the Projects page

8. **Contact Form**
   - [ ] Create a ContactForm component (`components/ContactForm.tsx`)
   - [ ] Implement form validation
   - [ ] Setup form submission (e.g., using a service like Formspree or a custom backend)

9. **SEO and Performance**
   - [ ] Add meta tags for SEO
   - [ ] Optimize images
   - [ ] Implement lazy loading for images
   - [ ] Use Next.js built-in performance optimizations

10. **Deployment**
    - [ ] Choose a hosting provider (e.g., Vercel, Netlify)
    - [ ] Deploy the Next.js app
    - [ ] Setup a custom domain (optional)

11. **Additional Features (Optional)**
    - [ ] Add dark mode support
    - [ ] Add animations and transitions
    - [ ] Implement a blog section
    - [ ] Add unit and integration tests
