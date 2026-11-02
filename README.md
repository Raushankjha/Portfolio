# Raushan Kumar Jha — Portfolio

A responsive React + TypeScript portfolio built with Vite, Tailwind CSS, Framer Motion, and Lucide icons. The visual direction is inspired by the uploaded dark, violet-accented developer portfolio sample and personalized using details from the supplied resume.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal.

## Production build

```bash
npm run build
npm run preview
```

## Resume file

The resume download button uses `public/Raushan_Kumar_Jha_Resume.pdf`. Replace that file with an updated resume using the same filename if you want to update the download.

## Personalize links

Update the profile URLs in `src/data.ts`. LinkedIn, GitHub, and LeetCode URLs are generic placeholders in this version because the supplied resume lists the profiles but does not expose their full URLs in extracted text. Replace them with your exact profile links.

## Contact

The contact CTA opens the user's configured email client with a `mailto:` link. No form backend or email service is configured, so the site does not claim to submit messages from a web form.

## Notes

- Project content is sourced from resume experience; non-public work does not include fabricated demo or repository links.
- Motion respects `prefers-reduced-motion`.
- Responsive styles are included for desktop, tablet, and mobile.
