// src/data/sections.ts
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  College: 'college',
  Contact: 'contact',
  Medals: 'medals',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];