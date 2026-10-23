/**
 * Umami Analytics Event Tracking Utility
 *
 * Provides a typed helper for tracking custom events via Umami (stats.ticc.net).
 * For simple click tracking, prefer data-track attributes on elements instead
 * (see src/components/common/Analytics.astro for the delegated click handler).
 * Use this utility for complex events (scroll depth, form submissions).
 */

declare global {
  interface Window {
    umami?: {
      track: (name: string, data?: Record<string, unknown>) => void;
    };
  }
}

/** Umami rejects event names longer than 50 characters. */
const MAX_EVENT_NAME_LENGTH = 50;

/**
 * Track a custom event in Umami.
 *
 * @param name - Flat event name with context encoded (e.g., "Form Submit: Contact")
 * @param value - Optional integer sent as the event's `value` property (for monetary events, use cents).
 */
export function trackEvent(name: string, value?: number): void {
  if (typeof window === 'undefined') return;
  if (!window.umami) return;

  try {
    window.umami.track(name.slice(0, MAX_EVENT_NAME_LENGTH), value != null ? { value } : undefined);
  } catch (err) {
    console.warn('[Umami] Failed to track event:', name, err);
  }
}
