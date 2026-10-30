/**
 * Defensive file validation and sanitization for user uploads.
 */

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"];

const ALLOWED_MIME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
];

export function validateUploadFile(file: File): { valid: boolean; error?: string; safeName?: string } {
    if (!file) {
        return { valid: false, error: "No file selected" };
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
        return { valid: false, error: "File exceeds the maximum allowed size of 5 MB" };
    }

    const dotIndex = file.name.lastIndexOf(".");
    if (dotIndex === -1) {
        return { valid: false, error: "File must have a valid extension (.pdf, .doc, .docx, .jpg, .png)" };
    }

    const ext = file.name.slice(dotIndex).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return { valid: false, error: `Invalid file extension (${ext}). Allowed: ${ALLOWED_EXTENSIONS.join(", ")}` };
    }

    // Check MIME type if provided by browser
    if (file.type && !ALLOWED_MIME_TYPES.includes(file.type.toLowerCase())) {
        return { valid: false, error: `Invalid file type. Allowed: PDF, Word document, or Image (JPEG/PNG)` };
    }

    // Sanitize file name: remove directory traversal and non-alphanumeric chars
    const baseName = file.name.slice(0, dotIndex).replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 40);
    const safeName = `${baseName || "upload"}${ext}`;

    return { valid: true, safeName };
}
