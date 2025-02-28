import { convert } from "html-to-text";

export function stripHtml(html: string): string {
    return convert(html, {
        wordwrap: false,
        ignoreHref: true,
        ignoreImage: true,
        selectors: [{ selector: "a", format: "inline" }],
    }).trim();
}


