import type { PhotographerInfo } from '@/types';
import portraitImg from '@/assets/Portrait_Image.jpg';

export const photographerInfo: PhotographerInfo = {
  name: "Andrew Sañosa",

  tagline: "Video Editor & Filmmaker",

  heroIntroduction:
    "I create story driven edits for brands, creators, and filmmakers. From social content to short films, I focus on pacing, emotion, and clean visual storytelling.",

  biography:
    "I'm a video editor and student filmmaker based in Metro Manila. For the past nine years, I've worked on short films, commercial content, music projects, and social media videos. I was previously a Video Editor at Paladin Society and became 1st Runner Up at CineEscuela 2023. My goal is simple: create edits that keep audiences engaged and make every frame count.",

  yearsExperience: 4,

  awards: [
    "CineEscuela 2023 — 1st Runner Up",
    "Former Video Editor — Paladin Society",
  ],

  services: [
    {
      title: "Short Form Content",
      description:
        "TikTok, Reels, Shorts, and social media content optimized for engagement.",
    },
    {
      title: "YouTube Editing",
      description:
        "Long form content with pacing, sound design, motion graphics, and storytelling.",
    },
    {
      title: "Commercial & Brand Videos",
      description:
        "Professional promotional content for businesses and products.",
    },
    {
      title: "Short Films & Creative Projects",
      description:
        "Narrative editing for student films, independent films, and passion projects.",
    },
    {
      title: "Motion Graphics & Visual Effects",
      description:
        "Titles, animated graphics, transitions, visual effects, and creative enhancements that elevate the final edit.",
    },
    {
      title: "Cinematic Trailers & Highlight Reels",
      description:
        "High impact trailers, event recaps, showreels, and montage edits designed to create emotion and showcase key moments.",
    },
  ],

  skills: [
    "Video Editing",
    "Color Grading",
    "Sound Design",
    "Motion Graphics",
    "Storytelling",
    "3D Animation",
  ],

  tools: [
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Blender",
    "Capcut",
  ],
  pricing: [
    {
      name: 'Starter',
      tagline: 'For social cuts & quick turnarounds',
      price: '₱2,000',
      turnaround: '2–3 days',
      revisions: '2 revisions',
      deliverables: [
        'Up to 60 seconds final runtime',
        'Vertical or horizontal export',
        'Basic color & sound mix',
        'Royalty-free music & SFX',
      ],
    },
    {
      name: 'Standard',
      tagline: 'For YouTube, ads & creator content',
      price: '₱4,500',
      turnaround: '5–7 days',
      revisions: '3 revisions',
      deliverables: [
        'Up to 5 minutes final runtime',
        'Cinematic color grade',
        'Sound design & mix',
        'Motion graphics & lower thirds',
        'Two export formats',
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      tagline: 'For films, music videos & launches',
      price: '₱10,000+',
      turnaround: '10–14 days',
      revisions: 'Unlimited within scope',
      deliverables: [
        'Full short-film or music-video edit',
        'Custom motion graphics & 3D',
        'Advanced color grading',
        'Full sound design + mastering',
        'All deliverable formats',
        'Behind-the-scenes process file',
      ],
    },
  ],
 location: "Metro Manila, Philippines",

  email: "andrewnicolesanosa@gmail.com",

  phone: "09457008789",

  availability: "Available for freelance projects.",

  socialLinks: {
    instagram: "https://www.instagram.com/iendeduplikethis/",
    youtube:
      "https://youtube.com/@iendeduplikethis?si=o18KpTY1k7Ke2I50",
  },
  // Short overlay text displayed on the portrait image in the About page
  overlayText: 'just call me coy',

  portraitImage: portraitImg,
};
