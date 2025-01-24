import { Album } from "@/types/album";

export const albums: Album[] = [
  {
    id: 1,
    year: "2015",
    composer: "Zaufke & Lund",
    title: "Grimm!",
    performers: [
      "UdK-Musicalstudenten und Orchester der Neuk. Oper",
      "H.-Peter Kirchberg, Mus. Leitung + Klavier"
    ],
    orderInfo: "Best.-Nr. 090 (soundofmusic.de + NKO)",
    coverImage: "cd-cover/36.jpg"
  },
  // ... all other albums in chronological order
  {
    id: 36,
    year: "1990",
    composer: "Prokofjew",
    title: "Romeo und Julia",
    performers: [
      "Deutsch-Sowjetische Junge Philharmonie",
      "Musikal. Assistenz / Orgel: H.-Peter Kirchberg",
      "Dirigent: Mstislaw Rostropowitsch"
    ],
    orderInfo: "Archiv-Produktion, live-Mitschnitt 20.07.90",
    coverImage: "cd-cover/24.jpg"
  }
];