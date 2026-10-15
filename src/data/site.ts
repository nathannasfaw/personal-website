export interface SiteLink {
  /** Visible label. Reads on its own, out of context. */
  label: string;
  href: string;
  /** External links open in a new tab; mailto and local files do not. */
  external?: boolean;
}

export const site = {
  name: 'Nathan Asfaw',
  tagline: 'Building technology that understands people first.',
  description:
    'Computer Science student at the University of Georgia, building ethical and transparent technology. Projects in agentic AI, data science, and FinTech.',
  email: 'nathanrasfaw@gmail.com',
  /** Hero headline, shown lowercase by design. */
  greeting: "hi, i'm nathan!",
  /** One-line intro under the greeting; a "read more" link follows it. */
  intro: "i'm a computer science student at uga building technology that understands people first.",
  resume: '/resume.pdf',
};

export const links: SiteLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/nathannasfaw',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nathannasfaw',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
  },
  {
    label: 'Resume (PDF)',
    href: site.resume,
  },
];

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
