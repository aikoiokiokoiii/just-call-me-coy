import React from 'react';
import { Play } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

/** Shared cinematic ease — matches PortfolioGrid / Home entrance curves */
const EASE_CINE = 'cubic-bezier(0.22, 1, 0.36, 1)';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

const CATEGORY_LABELS: Record<Project['category'], string> = {
  'music-video': 'MUSIC VIDEO',
  commercial: 'COMMERCIAL',
  'short-film': 'SHORT FILM',
  shorts: 'SHORTS',
  documentary: 'DOCUMENTARY',
  youtube: 'YOUTUBE',
  social: 'SOCIAL',
  'motion-graphics': 'MOTION / 3D',
  'film-emulation': 'FILM EMULATION',
};

/**
 * Project card — retro chip + layered hover (subtle scale, vignette, letterbox opacity).
 * Entrance motion lives on the parent (PortfolioGrid / Home); this component is hover/micro-interaction only.
 */
export function ProjectCard({
  project,
  aspectRatio,
  showCategory = true,
  index = 0,
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';

  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/9]',
    square: 'aspect-square',
  };

  return (
    <div>
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ transitionTimingFunction: EASE_CINE }}
        className="group block relative overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-orange/60 transform-gpu transition-[transform,box-shadow] duration-[850ms] hover:scale-[1.01] hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)]"
      >
        <div
          className={cn(
            'relative overflow-hidden bg-muted transform-gpu',
            aspectRatioClasses[ratio],
          )}
        >
          {!isLoaded && <div className="absolute inset-0 bg-muted" />}

          {/* Image: minimal premium scale (GPU: transform only) */}
          <img
            src={project.coverImage}
            alt={project.title}
            style={{ transitionTimingFunction: EASE_CINE }}
            className={cn(
              'absolute inset-0 h-full w-full object-cover will-change-transform',
              'transform-gpu transition-[transform,opacity] duration-[1000ms]',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'scale-[1.015]',
              'group-hover:scale-[1.035]',
            )}
            loading={index < 4 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />

          {/* Letterbox — opacity only (no translate clipping) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[5%] max-h-7 bg-gradient-to-b from-background/82 to-transparent opacity-0 transition-opacity duration-[900ms] group-hover:opacity-[0.9]"
            style={{ transitionTimingFunction: EASE_CINE }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[7%] max-h-9 bg-gradient-to-t from-background/88 via-background/45 to-transparent opacity-0 transition-opacity duration-[900ms] group-hover:opacity-[0.94]"
            style={{ transitionTimingFunction: EASE_CINE }}
            aria-hidden
          />

          {/* Vignette — opacity-only transition (no mix-blend) */}
          <div
            className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(ellipse_at_center,transparent_42%,hsl(var(--background)/0.5)_100%)] opacity-[0.42] transition-opacity duration-[1000ms] group-hover:opacity-[0.72]"
            style={{ transitionTimingFunction: EASE_CINE }}
            aria-hidden
          />

          {/* Category chip */}
          {showCategory && (
            <div className="absolute top-3 left-3 z-10">
              <span className="retro-chip text-retro-cream bg-background/60 backdrop-blur-sm">
                {CATEGORY_LABELS[project.category]}
              </span>
            </div>
          )}

          {/* Year */}
          <div className="absolute top-3 right-3 z-10 font-mono text-xs tracking-widest text-retro-cream/80 bg-background/40 backdrop-blur-sm px-2 py-1 transition-opacity duration-[700ms] group-hover:text-retro-cream">
            {project.year}
          </div>

          {/* Overlay wash */}
          <div
            className="absolute inset-0 z-[8] bg-gradient-to-t from-background via-background/50 to-transparent opacity-[0.78] transition-[opacity,background] duration-[950ms] group-hover:from-background group-hover:via-background/62 group-hover:to-background/15 group-hover:opacity-100"
            style={{ transitionTimingFunction: EASE_CINE }}
          >
            <div className="absolute bottom-0 left-0 right-0 transform-gpu p-4 transition-opacity duration-[950ms] sm:p-5 md:p-6 space-y-2">
              <div
                className="flex items-center gap-3 opacity-90 transition-opacity duration-[800ms] group-hover:opacity-100"
                style={{ transitionTimingFunction: EASE_CINE }}
              >
                <span
                  className="inline-flex size-8 shrink-0 transform-gpu items-center justify-center rounded-full bg-retro-orange text-primary-foreground transition-transform duration-[800ms] group-hover:scale-105"
                  style={{ transitionTimingFunction: EASE_CINE }}
                >
                  <Play className="size-4 fill-current" />
                </span>
                <h3 className="headline text-lg leading-tight text-retro-cream sm:text-xl md:text-2xl">
                  {project.title}
                </h3>
              </div>
              {project.role && (
                <p
                  className="font-mono transform-gpu text-[10px] uppercase tracking-widest text-retro-cyan/90 opacity-80 transition-opacity duration-[800ms] delay-0 group-hover:opacity-100 group-hover:delay-[90ms] sm:text-[11px] md:opacity-0 md:group-hover:opacity-100"
                  style={{ transitionTimingFunction: EASE_CINE }}
                >
                  {project.role}
                </p>
              )}
              {project.tools && project.tools.length > 0 && (
                <div
                  className="font-mono transform-gpu text-[9px] uppercase tracking-widest text-retro-orange/80 opacity-70 transition-opacity duration-[800ms] delay-[60ms] group-hover:opacity-90 group-hover:delay-[180ms] sm:text-[10px] md:opacity-0 md:group-hover:opacity-90"
                  style={{ transitionTimingFunction: EASE_CINE }}
                >
                  {project.tools.join(' / ')}
                </div>
              )}
              {project.client && (
                <div
                  className="font-mono flex max-w-full transform-gpu items-center gap-2 text-[9px] uppercase tracking-widest text-retro-cream/70 opacity-70 transition-opacity duration-[800ms] delay-[90ms] group-hover:opacity-90 group-hover:delay-[240ms] sm:text-[10px] md:opacity-0 md:group-hover:opacity-90"
                  style={{ transitionTimingFunction: EASE_CINE }}
                >
                  <span className="shrink-0 text-retro-cream/45">Client</span>
                  <span className="min-w-0 truncate border-l border-retro-cream/20 pl-2">
                    {project.client}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Border accent */}
          <div
            className="pointer-events-none absolute inset-0 z-[9] border border-retro-orange/0 transition-[border-color] duration-[850ms] group-hover:border-retro-orange/30"
            style={{ transitionTimingFunction: EASE_CINE }}
          />
        </div>
      </a>
    </div>
  );
}
