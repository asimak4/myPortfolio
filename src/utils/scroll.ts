export type SectionType = 'home' | 'about' | 'projects' | 'experience' | 'skills';

export const SECTIONS: SectionType[] = ['home', 'about', 'projects', 'experience', 'skills'];

export const scrollToSection = (section: SectionType) => {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
