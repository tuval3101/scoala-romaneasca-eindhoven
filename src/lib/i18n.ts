export type Locale = "ro" | "nl";

export const defaultLocale: Locale = "ro";
export const locales: Locale[] = ["ro", "nl"];

export const dictionary = {
  ro: {
    register: "Inscriere",
    contact: "Contact",
    events: "Evenimente",
    volunteer: "Voluntariaza",
  },
  nl: {
    register: "Inschrijven",
    contact: "Contact",
    events: "Evenementen",
    volunteer: "Vrijwilliger",
  },
} as const;
