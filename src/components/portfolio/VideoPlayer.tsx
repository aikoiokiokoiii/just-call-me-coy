import { useState } from 'react';
import { parseVideoSource } from '@/lib/video';

interface VideoPlayerProps {
  url?: string | null;
  title: string;
  className?: string;
  poster?: string | null; // cover image to use as poster/fallback
  lite?: boolean;
  aspectOverride?: string | null;
  blocked?: boolean;
}

/**
 * Responsive video player with graceful fallbacks for Facebook/Instagram.
 * - Facebook and Instagram show a poster + play overlay first (avoids embed restrictions)
 * - Clicking Play will activate the embed iframe in-place; a "Watch on" button opens the original URL in a new tab
 * - Uses `aspect` hints from the parser to preserve portrait/square/landscape ratios
 */
export function VideoPlayer({
  url,
  title,
  className = '',
  poster = null,
  lite = false,
  aspectOverride = null,
  blocked = false,
}: VideoPlayerProps) {
  const source = parseVideoSource(url);

  const aspect =
    aspectOverride ?? (source as any).aspect ?? '16/9';

  const containerStyle: React.CSSProperties = {
    aspectRatio: aspect,
  };

  const renderIframe = () => (
    <iframe
      src={(source as any).embedUrl}
      title={title}
      loading={lite ? 'lazy' : 'eager'}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  );

  // If explicitly blocked (per-project flag), show poster + external watch link only for FB/IG
  if (blocked && (source.kind === 'facebook' || source.kind === 'instagram')) {
    return (
      <div className={`relative w-full overflow-hidden rounded-sm bg-black ${className}`} style={containerStyle}>
        {poster ? (
          <img src={poster} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-black" />
        )}

        <a
          href={url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center text-white"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-white/90 text-black p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </div>
            <span className="font-mono text-sm uppercase tracking-[0.15em]">Watch on {source.kind === 'facebook' ? 'Facebook' : 'Instagram'}</span>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-sm bg-black ${className}`} style={containerStyle}>
      {(source.kind === 'youtube' || source.kind === 'vimeo' || source.kind === 'facebook' || source.kind === 'instagram') && renderIframe()}

      {source.kind === 'mp4' && (
        <video
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-contain"
        >
          <source src={(source as any).url} type="video/mp4" />
        </video>
      )}

      {source.kind === 'unknown' && (
        // show poster if available, otherwise a placeholder
        poster ? (
          <img src={poster} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-xs uppercase tracking-widest">
            Video coming soon
          </div>
        )
      )}

      {/* subtle external link for platforms */}
      {(source.kind === 'facebook' || source.kind === 'instagram') && (
        <a
          href={url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 bottom-3 inline-flex items-center gap-2 bg-black/60 text-white text-xs px-3 py-1 rounded-sm opacity-90 hover:opacity-100"
        >
          Watch on {source.kind === 'facebook' ? 'Facebook' : 'Instagram'}
        </a>
      )}
    </div>
  );
}
