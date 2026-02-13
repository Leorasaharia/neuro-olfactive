export interface PerfumeProfile {
    id: string;
    name: string;
    tagline: string;
    description: string;
    notes: {
        top: string[];
        heart: string[];
        base: string[];
    };
    accord: string;
    neuroScore: number; // 0-100 match score
}

const ADJECTIVES = ['Ethereal', 'Dark', 'Luminous', 'Velvet', 'Cryptic', 'Solar', 'Lunar', 'Abyssal', 'Neon', 'Static'];
const NOUNS = ['Void', 'Bloom', 'Echo', 'Drift', 'Pulse', 'Oud', 'Santal', 'Vapor', 'Dust', 'Signal'];

const NOTES_DB = {
    top: ['Bergamot', 'Saffron', 'Pink Pepper', 'Yuzu', 'Aldehydes', 'Cardamom', 'Sea Salt'],
    heart: ['Iris', 'Jasmine Sambac', 'Rose Oxide', 'Violet Leaf', 'Osmanthus', 'Tuberose', 'Black Tea'],
    base: ['Sandalwood', 'Iso E Super', 'Ambroxan', 'Vetiver', 'Oud', 'White Musk', 'Cashmeran', 'Labdanum']
};

export function generatePerfume(mood: string): PerfumeProfile {
    // Deterministic random behavior based on time for "uniqueness" per session but consistent if needed
    // For now, true random for "per-session uniqueness" as requested

    // Pick random name
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const name = `${adj} ${noun}`;

    // Pick notes
    const pick = (arr: string[], count: number) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const top = pick(NOTES_DB.top, 2);
    const heart = pick(NOTES_DB.heart, 2);
    const base = pick(NOTES_DB.base, 2);

    // Generate score
    const neuroScore = 85 + Math.floor(Math.random() * 14); // High match for luxury feeling (85-99%)

    return {
        id: Math.random().toString(36).substring(7),
        name,
        tagline: `A ${mood.toLowerCase()} interpretation of ${adj.toLowerCase()} energy.`,
        description: `Constructed from your neurological response to ${mood} stimuli. ${name} blends ${top[0]} with ${base[0]} to create a scent that bypassed cognitive processing to trigger pure emotion.`,
        notes: { top, heart, base },
        accord: mood,
        neuroScore
    };
}
