import type { Project } from '@/types';
import thumb1 from '@/assets/thumbnails/1.jpg';
import thumb2 from '@/assets/thumbnails/2.png';
import thumb3 from '@/assets/thumbnails/3.jpg';
import thumb4 from '@/assets/thumbnails/4.jpg';
import thumb5 from '@/assets/thumbnails/5.png';
import thumb6 from '@/assets/thumbnails/6.jpg';

/**
 * Andrew's video project portfolio.
 *
 * `videoUrl` accepts:
 *   - YouTube URLs (youtu.be/... or youtube.com/watch?v=...)
 *   - Vimeo URLs (vimeo.com/...)
 *   - Facebook video/reel permalinks
 *   - Instagram Reel URLs
 *   - Direct .mp4 URLs
 *
 * Replace placeholder `videoUrl` values with the real Plumeria / project links.
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Plumeria: A Musical Poetry',
    category: 'short-film',
    year: '2023',
    slug: 'plumeria-a-musical-poetry',
    coverImage: thumb1,
    description:
      'A short lyrical film that pairs spoken poetry with a slow, breathing edit. Built around silence, light, and the shape of a single feeling.',
    client: 'Personal Project',
    role: 'Director / Editor / Colorist',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    location: 'Metro Manila',
    featured: true,
    // Original Facebook upload for Plumeria
    videoUrl:
      'https://www.facebook.com/thesophianpaladin/videos/%F0%9D%90%82%F0%9D%90%88%F0%9D%90%8D%F0%9D%90%84%F0%9D%90%92%F0%9D%90%82%F0%9D%90%94%F0%9D%90%84%F0%9D%90%8B%F0%9D%90%80-%F0%9D%90%84%F0%9D%90%8D%F0%9D%90%93%F0%9D%90%91%F0%9D%90%98-%F0%9D%90%8D%F0%9D%90%8E-%F0%9D%9F%8F%F0%9D%9F%8E-%F0%9D%90%8F%F0%9D%90%8B%F0%9D%90%94%F0%9D%90%8C%F0%9D%90%84%F0%9D%90%91%F0%9D%90%88%F0%9D%90%80-%F0%9D%90%80-%F0%9D%90%8C%F0%9D%90%94%F0%9D%90%92%F0%9D%90%88%F0%9D%90%82%F0%9D%90%80%F0%9D%90%8B-%F0%9D%90%8F%F0%9D%90%8E%F0%9D%90%84%F0%9D%90%93%F0%9D%90%91%F0%9D%90%98-%F0%9D%9F%8F%F0%9D%9F%90-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%86%F0%9D%90%80%F0%9D%90%98%F0%9D%90%8E%F0%9D%90%8Da-bond-shattered-with/1825125391257177/',
    // Facebook sometimes blocks embedding for this post; show external fallback
    embedBlocked: true,
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1080&q=80',
        alt: 'Cinematic still — soft window light',
        aspectRatio: 'landscape',
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1518930259200-3e5c9836a42b?auto=format&fit=crop&w=1080&q=80',
        alt: 'Cinematic still — silhouette and warm tones',
        aspectRatio: 'portrait',
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1080&q=80',
        alt: 'Cinematic still — flowers in shallow focus',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '2',
    title: 'TPBC: Miting de Avance',
    category: 'shorts',
    year: '2023',
    slug: 'tpbc-miting-de-avance',
    coverImage: thumb2,
    description:
      'A fast-paced, color-driven music video cut to the rhythm of a synth-pop track. Hard cuts, neon palettes, and a healthy dose of motion blur.',
    client: 'The Paladin Society',
    role: 'Editor',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    location: 'Metro Manila',
    featured: true,
    videoUrl:
      'https://www.facebook.com/thesophianpaladin/videos/the-day-has-come-sophians-its-now-our-time-to-decide-who-will-be-the-next-studen/269788912467910/',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1080&q=80',
        alt: 'Neon-lit street scene',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '3',
    title: 'Math ISAAL Coverage',
    category: 'documentary',
    year: '2024',
    slug: 'math-isaal-coverage',
    coverImage: thumb3,
    description:
      'A 30-second documentary spot for a local educational initiative. Warm tones, tactile sound design, and a cut that builds toward the morning ritual.',
    client: 'The Paladin Society',
    role: 'Editor',
    tools: ['Premiere Pro', 'After Effects', 'Blender'],
    location: 'Metro Manila',
    featured: true,
    videoUrl:
      'https://www.facebook.com/thesophianpaladin/videos/with-57-private-schools-competing-head-to-head-in-mathematics-inter-school-acade/443905531321742/',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1080&q=80',
        alt: 'Coffee being poured',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '4',
    title: 'PATIENCE',
    category: 'film-emulation',
    year: '2024',
    slug: 'patience',
    coverImage: thumb4,
    description:
      'CineEscuela 2023 — 1st Runner Up. A quiet short about memory, distortion, and the noise we keep in our heads.',
    client: 'Personal Project',
    role: 'Director, Editor, Colorist',
    tools: ['DaVinci Resolve'],
    location: 'Metro Manila',
    featured: true,
    videoUrl: 'https://www.instagram.com/p/DBx4PL1vN1r/',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1080&q=80',
        alt: 'Soft focus portrait still',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '5',
    title: 'PARADISE',
    category: 'film-emulation',
    year: '2025',
    slug: 'paradise',
    coverImage: thumb5,
    description:
      'Long-form YouTube edits for a creator series. Tight pacing, clean B-roll layering, and retention-first structure.',
    client: 'Personal Project',
    role: 'Director, Editor, Colorist',
    tools: ['Davinci Resolve'],
    location: 'Palawan',
    featured: true,
    videoUrl: 'https://www.instagram.com/reels/DRqywteD0qd/',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1080&q=80',
        alt: 'YouTube creator workspace',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '6',
    title: 'RIVERSIDE',
    category: 'film-emulation',
    year: '2026',
    slug: 'riverside',
    coverImage: thumb6,
    description:
      'A short 3D motion piece built in Blender — abstract shapes drifting through a dim, retro-lit room. Personal exploration of mood and texture.',
    client: 'Personal Project',
    role: 'Director, Editor, Colorist',
    tools: ['Blender', 'After Effects', 'Premiere Pro'],
    location: 'Personal Studio',
    featured: true,
    videoUrl: 'https://www.instagram.com/p/DXBQXINj1SV/',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1080&q=80',
        alt: '3D abstract render',
        aspectRatio: 'landscape',
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured).slice(0, 4);

export const getAdjacentProjects = (
  currentSlug: string
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next:
      currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
