export interface BusinessWord {
    id: number;
    word: string;
    meaning: string;
    category: string;
    frequency: {
        type: string;
        color: string;
    };
    defEn: string;
    defAr: string;
};

export type TableTitles = [
    "Term", "Meaning", "Definition (AR)", "Definition (EN)"
];