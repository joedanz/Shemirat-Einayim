/**
 * Fathom Analytics Event Tracking Utility
 *
 * Provides a typed helper for tracking custom events via Fathom Analytics.
 * For simple click tracking, prefer data-track attributes on elements instead
 * (see src/components/common/Analytics.astro for the delegated click handler).
 * Use this utility for complex events (scroll depth, form submissions).
 */

declare global {
  interface Window {
    fathom?: {
      trackEvent: (name: string, opts?: { _value?: number }) => void;
    };
  }
}

/**
 * Track a custom event in Fathom Analytics.
 *
 * @param name - Flat event name with context encoded (e.g., "Form Submit: Contact")
 * @param valueCents - Optional integer value for Fathom's _value field. For monetary events, use cents (100 = $1.00). For non-monetary events, use any meaningful integer scale.
 */
export function trackFathomEvent(name: string, valueCents?: number): void {
  if (typeof window === 'undefined') return;
  if (!window.fathom) return;

  try {
    window.fathom.trackEvent(name, valueCents != null ? { _value: valueCents } : undefined);
  } catch (err) {
    console.warn('[Fathom] Failed to track event:', name, err);
  }
}
