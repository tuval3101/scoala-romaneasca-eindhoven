export type StreamWorkshop = {
  title: string;
  team: string;
  photo: string;
  logo: string;
  website?: string;
  photoFit?: "cover" | "contain";
};

const workshopBase = "/images/stream/workshops";

export const streamWorkshops: StreamWorkshop[] = [
  {
    title: "Experiment Station",
    team: "Team Silvia",
    photo: `${workshopBase}/experiment-station-photo.png`,
    logo: `${workshopBase}/experiment-station-logo.png`,
    website: "https://www.uu.nl/staff/SMihaila",
  },
  {
    title: "Body Scratch",
    team: "Team Alvin",
    photo: `${workshopBase}/body-scratch-photo.png`,
    logo: `${workshopBase}/body-scratch-logo.png`,
    website: "https://bodyscratch.academy/",
  },
  {
    title: "Talk to MiroBot",
    team: "Team Jing",
    photo: `${workshopBase}/mirobot-photo.jpg`,
    logo: `${workshopBase}/mirobot-logo.png`,
    website: "https://www.researchgate.net/profile/Jing-Li-734",
  },
  {
    title: "Code & Create",
    team: "Team Olivia",
    photo: `${workshopBase}/code-create-logo.png`,
    logo: `${workshopBase}/code-create-logo.png`,
    website: "https://commitglobal.org/en",
    photoFit: "contain",
  },
  {
    title: "Building Constructions",
    team: "Team Rene",
    photo: `${workshopBase}/building-constructions-logo.png`,
    logo: `${workshopBase}/building-constructions-logo.png`,
    website: "https://en.makerdays.nl/",
    photoFit: "contain",
  },
  {
    title: "Do your math",
    team: "Team Ella",
    photo: `${workshopBase}/do-your-math-logo.jpg`,
    logo: `${workshopBase}/do-your-math-logo.jpg`,
    photoFit: "contain",
  },
  {
    title: "Number of the Day",
    team: "Team Susanne",
    photo: `${workshopBase}/number-of-day-logo.jpg`,
    logo: `${workshopBase}/number-of-day-logo.jpg`,
    website: "https://www.edsnaps.org/",
    photoFit: "contain",
  },
  {
    title: "Origami Dino",
    team: "Team Masami",
    photo: `${workshopBase}/origami-dino-photo.jpg`,
    logo: `${workshopBase}/origami-dino-logo.jpg`,
    website: "https://www.nihongoeindhoven.com/",
  },
  {
    title: "Eat Your Art",
    team: "Team Sophia",
    photo: `${workshopBase}/eat-your-art-logo.png`,
    logo: `${workshopBase}/eat-your-art-logo.png`,
    website: "https://www.foodieboulevard.com/eat-your-art-stream-festival-2026",
    photoFit: "contain",
  },
  {
    title: "Language games",
    team: "Team Audrey",
    photo: `${workshopBase}/language-games-audrey-photo.jpg`,
    logo: `${workshopBase}/language-games-audrey-logo.jpg`,
    website: "https://www.rug.nl/staff/a.rousse-malpat/?lang=en",
  },
  {
    title: "Language games",
    team: "Team Sharon & Pim",
    photo: `${workshopBase}/language-games-sharon-photo.png`,
    logo: `${workshopBase}/language-games-sharon-logo.jpg`,
    website: "https://kletskoppenfestival.nl/",
  },
  {
    title: "The Story Hat",
    team: "Team Simona",
    photo: `${workshopBase}/story-hat-photo.jpg`,
    logo: `${workshopBase}/story-hat-logo.jpg`,
    website: "https://cartipentrumatei.ro/",
  },
  {
    title: "Art between words",
    team: "Team Alina",
    photo: `${workshopBase}/art-between-words-photo.jpg`,
    logo: `${workshopBase}/art-between-words-logo.jpg`,
    website: "https://www.instagram.com/alina_allen_art",
  },
  {
    title: "Woven Stars",
    team: "Team Olga from Ukraine",
    photo: `${workshopBase}/woven-stars-photo.jpg`,
    logo: `${workshopBase}/woven-stars-logo.jpg`,
  },
  {
    title: "Face painting",
    team: "Team Ana",
    photo: `${workshopBase}/face-painting-photo.jpg`,
    logo: `${workshopBase}/face-painting-photo.jpg`,
  },
  {
    title: "Romanian embroidery",
    team: "Team Monica",
    photo: `${workshopBase}/romanian-embroidery-photo.jpg`,
    logo: `${workshopBase}/romanian-school-logo.png`,
  },
  {
    title: "Bubble Trouble",
    team: "Team Geogiana",
    photo: `${workshopBase}/bubble-trouble-photo.png`,
    logo: `${workshopBase}/romanian-school-logo.png`,
  },
  {
    title: "Robot Hand",
    team: "Team Lucretia",
    photo: `${workshopBase}/robot-hand-photo.jpg`,
    logo: `${workshopBase}/romanian-school-logo.png`,
  },
  {
    title: "Micro world",
    team: "Team Dida",
    photo: `${workshopBase}/micro-world-photo.jpg`,
    logo: `${workshopBase}/romanian-school-logo.png`,
  },
];
