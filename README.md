# MJ Elite Creatives — Portfolio

Personal portfolio site, built as a single-page React app with scroll-triggered reveal animations, dark mode, and sections for process, skills, projects, and testimonials.

**Live:** [mjelite.vercel.app](https://mjelite.vercel.app/)

## Sections

- **Hero** — intro and marquee
- **About** — who I am and how I work
- **Process** — how a project runs from brief to delivery
- **Skills** — Frontend (HTML5, CSS3, JavaScript ES6+, React), Styling (Tailwind CSS, Grid, Flexbox, responsive design), Tools (Git/GitHub, Canva, VS Code, AI-assisted workflows)
- **Projects** — selected work
- **Testimonials**
- **Contact**

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React (Create React App) |
| Styling | Tailwind CSS |
| Dark mode | Custom `useDarkMode` hook, persisted preference |
| Animation | IntersectionObserver-driven scroll reveals |

## Running locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
```
