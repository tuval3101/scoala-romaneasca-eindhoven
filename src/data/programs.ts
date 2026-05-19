export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  ageGroups: string[];
  mode: string;
};

export const programs: Program[] = [
  {
    slug: "romanian-language",
    title: "Limba si cultura romana",
    summary: "Cursuri de weekend pentru copii, cu accent pe comunicare, lectura si identitate.",
    description: "Un program cald si structurat pentru familiile romanesti din Eindhoven si imprejurimi.",
    image: "/images/programs/romanian-language.jpg",
    ageGroups: ["4-6 ani", "7-10 ani", "11+ ani"],
    mode: "Prezenta si optiune online",
  },
  {
    slug: "stream",
    title: "STREAM / Science",
    summary: "Ateliere interdisciplinare care aduc impreuna stiinta, tehnologia, lectura si arta.",
    description: "Activitati practice pentru curiozitate, colaborare si gandire creativa.",
    image: "/images/programs/stream-meaning.png",
    ageGroups: ["Scoala primara", "Gimnaziu"],
    mode: "Ateliere si festival",
  },
  {
    slug: "library",
    title: "Biblioteca romaneasca",
    summary: "Carti in limba romana, recomandari de lectura si intalniri pentru copii si parinti.",
    description: "Un spatiu de imprumut si descoperire pentru pastrarea limbii romane acasa.",
    image: "/images/programs/library-books.jpg",
    ageGroups: ["Toate varstele"],
    mode: "In timpul intalnirilor de weekend",
  },
];
