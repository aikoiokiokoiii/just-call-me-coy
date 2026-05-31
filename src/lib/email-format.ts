import { DISPOSABLE_BASE_DOMAINS } from "@/lib/disposable-domains";

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function extractDomainFromEmail(email: string): string | null {
  const normalized = normalizeEmail(email);
  const at = normalized.lastIndexOf("@");
  if (at < 1 || at === normalized.length - 1) return null;
  return normalized.slice(at + 1);
}

export function isDisposableEmailDomain(domain: string): boolean {
  const d = domain.toLowerCase();
  for (const base of DISPOSABLE_BASE_DOMAINS) {
    if (d === base || d.endsWith("." + base)) return true;
  }
  return false;
}

/** Plausible domain segment: not empty, has a dot, reasonable lengths */
export function hasPlausibleEmailDomain(email: string): boolean {
  const domain = extractDomainFromEmail(email);
  if (!domain || domain.length > 253) return false;
  if (!domain.includes(".")) return false;
  const labels = domain.split(".");
  if (labels.length < 2) return false;
  const tld = labels[labels.length - 1];
  if (tld.length < 2 || tld.length > 63) return false;
  return true;
}
