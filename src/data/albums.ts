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
    coverImage: "/cd-cover/36.jpg"
  },
  {
    id: 2,
    year: "2014",
    composer: "Zaufke & Lund",
    title: "Jedermann",
    performers: [
      "UdK-Musicalstudenten und Orchester der Neuk. Oper",
      "H.-Peter Kirchberg, Mus. Leitung + Klavier"
    ],
    orderInfo: "Best.-Nr. 089 (soundofmusic.de + NKO)",
    coverImage: "/cd-cover/35.jpg"
  },
  // ... Add all other albums here in chronological order
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
    coverImage: "/cd-cover/24.jpg"
  }
];