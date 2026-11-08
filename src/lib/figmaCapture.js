// Optional: lets Figma's html-to-design capture this page.
// Only loads when the URL carries a #figmacapture=… hash, so it never runs for visitors.
// Use with ?static to freeze motion, and ?static&view=p-<id> / n-<id> to capture a detail page.

export function maybeLoadFigmaCapture() {
  if (!/figmacapture=/.test(location.hash)) return;
  const s = document.createElement('script');
  s.src = 'https://mcp.figma.com/mcp/html-to-design/capture.js';
  s.async = true;
  document.head.appendChild(s);
}
