export interface LeadData {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    comments?: string;
    _hp_company?: string;
    _formTime?: number;
    [key: string]: any;
}

export function detectSpamLead(data: LeadData): { isSpam: boolean; reason?: string } {
    // 1. Honeypot check (hidden field only bots fill)
    if (data._hp_company && String(data._hp_company).trim().length > 0) {
        return { isSpam: true, reason: "Honeypot field filled" };
    }

    // 2. Form submission speed check (bots submit within < 1.2 seconds of loading)
    if (data._formTime && typeof data._formTime === "number") {
        const elapsedMs = Date.now() - data._formTime;
        if (elapsedMs > 0 && elapsedMs < 1200) {
            return { isSpam: true, reason: "Submission velocity too fast" };
        }
    }

    // 3. Email dotted spambot pattern (e.g., s.ef.e.ve.y.o.d.a6.4@gmail.com)
    const email = (data.email || "").trim().toLowerCase();
    if (email) {
        const [localPart] = email.split("@");
        if (localPart) {
            const dotCount = (localPart.match(/\./g) || []).length;
            const singleCharSegments = localPart.split(".").filter((s) => s.length === 1).length;
            if (dotCount >= 3 && singleCharSegments >= 3) {
                return { isSpam: true, reason: "Dotted spam email pattern" };
            }
        }
    }

    // 4. Random gibberish name detection (e.g., jeDVrvwIjlXDbERkBwWAlvso, OYSIjipASCcvVMlogrIERslPOL)
    const name = (data.name || "").trim();
    if (name) {
        // Long single word with excessive case transitions without spaces
        if (!name.includes(" ") && name.length > 12) {
            let caseTransitions = 0;
            for (let i = 0; i < name.length - 1; i++) {
                const isCurrentUpper = name[i] === name[i].toUpperCase();
                const isNextUpper = name[i + 1] === name[i + 1].toUpperCase();
                if (isCurrentUpper !== isNextUpper) caseTransitions++;
            }
            if (caseTransitions >= 4) {
                return { isSpam: true, reason: "Gibberish casing in name" };
            }
        }

        // Long word with virtually no vowels (e.g., ddfvrNBFKWZcMpcLz)
        const vowelCount = (name.match(/[aeiouyAEIOUY]/g) || []).length;
        if (name.length > 10 && vowelCount / name.length < 0.15) {
            return { isSpam: true, reason: "Unrealistic vowel ratio in name" };
        }
    }

    // 5. Random gibberish message detection (e.g., IZmRhUcOPKJNbacuLd, rpibMbuREXxmcMOQWLFCOEbb)
    const rawMessage = (data.message || data.comments || "").trim();
    if (rawMessage && !rawMessage.includes(" ") && rawMessage.length > 14) {
        let caseTransitions = 0;
        for (let i = 0; i < rawMessage.length - 1; i++) {
            const isCurrentUpper = rawMessage[i] === rawMessage[i].toUpperCase();
            const isNextUpper = rawMessage[i + 1] === rawMessage[i + 1].toUpperCase();
            if (isCurrentUpper !== isNextUpper) caseTransitions++;
        }
        if (caseTransitions >= 4) {
            return { isSpam: true, reason: "Gibberish casing in message" };
        }
    }

    return { isSpam: false };
}
