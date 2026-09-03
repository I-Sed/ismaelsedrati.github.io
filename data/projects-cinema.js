/**
 * CINEMATOGRAPHY PROJECTS
 * ------------------------------------------------------------
 * This is the ONLY file you need to edit to update the
 * "Cinematographer" grid on index.html and its project pages.
 *
 * To add a project: copy one object below, change every field.
 *   slug         — unique, url-safe id, e.g. "asics-move-your-mind"
 *   title        — project title
 *   director     — director's name (shown as "Dir. Name")
 *   credits      — short line under the title on the grid (mono font)
 *   still        — path to the poster image (jpg/png), e.g.
 *                  "assets/img/cinema/asics-still.jpg"
 *   preview      — path to a short muted looping clip (mp4) that
 *                  plays on hover, e.g. "assets/img/cinema/asics-preview.mp4"
 *                  Leave "" if you don't have one yet — the still
 *                  will just stay static on hover.
 *   slate        — technical credits shown on the project detail page
 *   gallery      — list of extra still image paths for the detail page
 *
 * If "still" or "preview" files don't exist yet, the site shows a
 * clean placeholder pattern instead of a broken image — nothing to
 * worry about, just drop the real files in when ready.
 */
window.CINEMA_PROJECTS = [
  {
    slug: "project-one",
    title: "Carnet de Notes sur un Rat des Villes",
    director: "Younes Zaoui",
    credits: "Court métrage — FX3 Zeiss T2.1",
    still: "assets/img/cinema/Carnet/Light.jpg",
    preview: "assets/img/cinema/project-one-preview.mp4",
    slate: {
      "Directed by": "Younes Zaoui",
      "Cinematographer": "Ismael Sedrati",
      "Colorist": "_",
      "Shot on": "Sony FX3 Zeiss T2.1"
    },
    gallery: [
      "assets/img/cinema/Carnet/trio_piqueur.jpg",
      "assets/img/cinema/Carnet/trio_rigolo.jpg",
      "assets/img/cinema/Carnet/cours.jpg",
      "assets/img/cinema/Carnet/chatelet1.jpg",
      "assets/img/cinema/Carnet/chatelet2.jpg",
      "assets/img/cinema/Carnet/marche_large.jpg",
      "assets/img/cinema/Carnet/keuf.jpg",
      "assets/img/cinema/Carnet/cornflakes.jpg",
      "assets/img/cinema/Carnet/trio_chill.jpg",
      "assets/img/cinema/Carnet/papa.jpg"
    ]
  },
  {
    slug: "project-two",
    title: "MARINE",
    director: "Cléa Cervellera & Ismael Sedrati",
    credits: "Documentaire — Sony FX6",
    still: "assets/img/cinema/Marine/Lacets_compr.jpg",
    preview: "assets/img/cinema/project-two-preview.mp4",
    slate: {
      "Directed by": "Cléa Cervellera & Ismael Sedrati",
      "Cinematographer": "Ismael Sedrati",
      "Shot on": "Sony FX6"
    },
    gallery: [
      "assets/img/cinema/Muscu.png",
      "assets/img/cinema/Visage.png",
      "assets/img/cinema/Lacets.png",
      "assets/img/cinema/Discussion.png",
    ]
  },
  {
    slug: "project-three",
    title: "A Room with a View",
    director: "Cléa Cervellera",
    credits: "Court Métrage — Sony Venice 2",
    still: "assets/img/cinema/fondvert/Fondvert_large_compr_1.2.1.jpg",
    preview: "assets/img/cinema/project-three-preview.mp4",
    slate: {
      "Directed by": "Cléa Cervellera",
      "Cinematographer": "Ismael Sedrati",
      "Colorist": "Ismael Sedrati",
      "Shot on": "Sony Venice 2 - Cooke S4"
    },
    gallery: [
      "assets/img/cinema/Fondvert_large.png",
      "assets/img/cinema/Fondvert_visage.png",
      "assets/img/cinema/Fondvert_dos.png",
      "assets/img/cinema/Fondvert_vitre.png",
      "assets/img/cinema/Fondvert_casse.png"
    ]
  },
  {
    slug: "project-four",
    title: "Khalti Fatna",
    director: "Younes Zaoui",
    credits: "Short — Digital",
    still: "assets/img/cinema/KF/voiture.jpg",
    preview: "assets/img/cinema/project-four-preview.mp4",
    slate: {
      "Directed by": "Younes Zaoui",
      "Cinematographer": "Ismael Sedrati"
    },
    gallery: [
      "assets/img/cinema/KF/voiture.jpg",
      "assets/img/cinema/KF/massage.jpg",
      "assets/img/cinema/KF/pied_biche.jpg",
      "assets/img/cinema/KF/visage.jpg"
    ]
  },
  {
    slug: "project-five",
    title: "Drinking at the edge",
    director: "Ismael Sedrati & Margaux Isaia",
    credits: "Short — Digital",
    still: "assets/img/cinema/LumCorps/Jour.jpg",
    preview: "assets/img/cinema/project-four-preview.mp4",
    slate: {
      "Directed by": "Ismael Sedrati & Margaux Isaia",
      "Cinematographer": "Ismael Sedrati"
    },
    gallery: [
      "assets/img/cinema/LumCorps/Jour.jpg",
      "assets/img/cinema/LumCorps/Nuit.jpg"
    ]
  },
  {
    slug: "project-six",
    title: "Amélie",
    director: "Ismael Sedrati",
    credits: "Short — Digital",
    still: "assets/img/cinema/Amelie/Visage.jpg",
    preview: "assets/img/cinema/project-four-preview.mp4",
    slate: {
      "Directed by": "Ismael Sedrati",
      "Cinematographer": "Ismael Sedrati"
    },
    gallery: [
      "assets/img/cinema/Amelie/Visage.jpg",
      "assets/img/cinema/Amelie/Dos.jpg",
      "assets/img/cinema/Amelie/Plan1.jpg"
    ]
  }
  
];
