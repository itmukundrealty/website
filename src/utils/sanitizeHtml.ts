/**
 * HTML Sanitizer for user-provided / CMS rich text content.
 * Prevents Cross-Site Scripting (XSS) by stripping dangerous tags, event handlers,
 * and malicious protocol schemes (e.g. javascript:).
 */
export function sanitizeHtml(rawHtml: string): string {
    if (!rawHtml || typeof rawHtml !== "string") {
        return "";
    }

    let sanitized = rawHtml;

    // 1. Remove dangerous executable tags and their inner content
    const dangerousTagsWithContent = [
        "script",
        "iframe",
        "object",
        "embed",
        "applet",
        "frame",
        "frameset",
    ];

    for (const tag of dangerousTagsWithContent) {
        const regex = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
        sanitized = sanitized.replace(regex, "");
        // Remove self-closing or unclosed variants
        const selfClosing = new RegExp(`<${tag}[^>]*\\/?>`, "gi");
        sanitized = sanitized.replace(selfClosing, "");
    }

    // 2. Remove dangerous standalone tags
    const dangerousStandaloneTags = ["meta", "link", "form", "base"];
    for (const tag of dangerousStandaloneTags) {
        const regex = new RegExp(`<${tag}[^>]*\\/?>`, "gi");
        sanitized = sanitized.replace(regex, "");
    }

    // 3. Remove inline event handlers (on* attributes: onclick, onerror, onload, etc.)
    sanitized = sanitized.replace(/\s+on[a-zA-Z]+\s*=\s*(["'][^"']*["']|[^\s>]+)/gi, "");

    // 4. Remove javascript: and vbscript: URLs in href and src
    sanitized = sanitized.replace(/(href|src)\s*=\s*["']?\s*(javascript|vbscript|data\s*:\s*text\/html):[^"'>\s]*/gi, '$1="#"');

    return sanitized;
}
