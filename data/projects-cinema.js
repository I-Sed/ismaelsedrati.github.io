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
    title: "TITRE DU PROJET",
    director: "Nom du réalisateur",
    credits: "Court métrage — Kodak 5219",
    still: "assets/img/cinema/Carnet1.png",
    preview: "assets/img/cinema/project-one-preview.mp4",
    slate: {
      "Directed by": "Nom du réalisateur",
      "Cinematographer": "Ismael Sedrati",
      "Colorist": "—",
      "Shot on": "—"
    },
    gallery: [
      "assets/img/cinema/Carnet1.png",
      "assets/img/cinema/Carnet1.png"
    ]
  },
  {
    slug: "project-two",
    title: "TITRE DU PROJET",
    director: "Nom du réalisateur",
    credits: "Publicité — Kodak Vision3",
    still: "assets/img/cinema/project-two-still.jpg",
    preview: "assets/img/cinema/project-two-preview.mp4",
    slate: {
      "Directed by": "Nom du réalisateur",
      "Cinematographer": "Ismael Sedrati",
      "Colorist": "—",
      "Shot on": "—"
    },
    gallery: [
      "assets/img/cinema/project-two-01.jpg",
      "assets/img/cinema/project-two-02.jpg"
    ]
  },
  {
    slug: "project-three",
    title: "TITRE DU PROJET",
    director: "Nom du réalisateur",
    credits: "Clip musical — 16mm",
    still: "assets/img/cinema/project-three-still.jpg",
    preview: "assets/img/cinema/project-three-preview.mp4",
    slate: {
      "Directed by": "Nom du réalisateur",
      "Cinematographer": "Ismael Sedrati",
      "Colorist": "—",
      "Shot on": "—"
    },
    gallery: [
      "assets/img/cinema/project-three-01.jpg",
      "assets/img/cinema/project-three-02.jpg"
    ]
  },
  {
    slug: "project-four",
    title: "TITRE DU PROJET",
    director: "Nom du réalisateur",
    credits: "Documentaire — Digital",
    still: "assets/img/cinema/project-four-still.jpg",
    preview: "assets/img/cinema/project-four-preview.mp4",
    slate: {
      "Directed by": "Nom du réalisateur",
      "Cinematographer": "Ismael Sedrati",
      "Colorist": "—",
      "Shot on": "—"
    },
    gallery: [
      "assets/img/cinema/project-four-01.jpg",
      "assets/img/cinema/project-four-02.jpg"
    ]
  }
];
