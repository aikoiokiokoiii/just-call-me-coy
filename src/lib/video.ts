/**
 * Lightweight helpers for video URL handling.
 * Supports YouTube, Vimeo, Facebook, Instagram Reel, and direct mp4 URLs.
 */

export type VideoSource =
  | { kind: 'youtube'; embedUrl: string; thumbnailUrl: string }
  | { kind: 'vimeo'; embedUrl: string }
  | { kind: 'facebook'; embedUrl: string; aspect?: string }
  | { kind: 'instagram'; embedUrl: string; aspect?: string }
  | { kind: 'mp4'; url: string }
  | { kind: 'unknown' };

/** Extract the YouTube video ID from common URL shapes. */
export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1) || null;
    }
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v');
      const parts = u.pathname.split('/').filter(Boolean);
      // /embed/ID or /shorts/ID
      if (parts[0] === 'embed' || parts[0] === 'shorts') return parts[1] ?? null;
    }
  } catch {
    // ignore
  }
  return null;
}

export function getVimeoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('vimeo.com')) {
      const parts = u.pathname.split('/').filter(Boolean);
      const id = parts[parts.length - 1];
      if (/^\d+$/.test(id)) return id;
    }
  } catch {
    // ignore
  }
  return null;
}

export function getFacebookVideoUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const hostname = u.hostname.toLowerCase();
    if (hostname.includes('facebook.com') || hostname.includes('fb.watch')) {
      return url;
    }
  } catch {
    // ignore
  }
  return null;
}

export function getInstagramReelId(url: string): string | null {
  try {
    const u = new URL(url);
    const hostname = u.hostname.toLowerCase();
    if (!hostname.includes('instagram.com')) return null;
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts[0] === 'reels' && parts[1]) return parts[1];
    if ((parts[0] === 'p' || parts[0] === 'tv') && parts[1]) return parts[1];
  } catch {
    // ignore
  }
  return null;
}

export function parseVideoSource(url?: string | null): VideoSource {
  if (!url) return { kind: 'unknown' };
  const yt = getYouTubeId(url);
  if (yt) {
    return {
      kind: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`,
      thumbnailUrl: `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`,
    };
  }

  const vm = getVimeoId(url);
  if (vm) {
    return {
      kind: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vm}`,
    };
  }

  const fb = getFacebookVideoUrl(url);
  if (fb) {
    return {
      kind: 'facebook',
      embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(fb)}&show_text=0&width=560`,
      aspect: '16/9',
    };
  }

  const ig = getInstagramReelId(url);
  if (ig) {
    return {
      kind: 'instagram',
      embedUrl: `https://www.instagram.com/reel/${ig}/embed/`,
      aspect: '9/16',
    };
  }

  if (/\.mp4($|\?)/i.test(url)) {
    return { kind: 'mp4', url };
  }

  return { kind: 'unknown' };
}
