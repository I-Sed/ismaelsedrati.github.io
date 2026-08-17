# ismaelsedrati.github.io

Site perso — Cinematographer / Director. HTML/CSS/JS pur, aucun build, compatible GitHub Pages tel quel.

## Structure

```
index.html          → page Cinematographer (accueil, showreel + grille)
director.html        → page Director (3 films)
projects.html         → page Projects (recherche technique : DCTL, prévisualisation, sociologie des sciences)
about.html            → page About / Contact
project.html          → page détail générique (utilisée par les 3 sections)
css/style.css         → tous les styles
js/main.js            → nav, hover preview, rendu des grilles/pages projet
data/projects-cinema.js    → ⭐ liste des projets Cinematographer (à éditer)
data/projects-director.js  → ⭐ liste des projets Director (à éditer)
data/projects-research.js  → ⭐ liste des projets Projects/Recherche (à éditer)
assets/img/…, assets/video/… → tes images et vidéos
```

Le site a 4 onglets : **Cinematographer**, **Director**, **Projects**, **About / Contact**.

## Comment ajouter/éditer un projet

Tu n'as **jamais besoin de toucher au HTML**. Tout se passe dans les deux fichiers
`data/projects-cinema.js` et `data/projects-director.js` : chaque projet est un objet,
avec des commentaires qui expliquent chaque champ. Duplique un objet, change les valeurs,
c'est tout — la grille et la page détail se génèrent automatiquement.

## Ajouter tes médias

- **Showreel** : dépose ton fichier dans `assets/video/showreel.mp4` (même nom).
  Tant qu'il n'est pas là, la page affiche proprement "Showreel — coming soon".
- **Stills / preview au survol** : dépose tes fichiers dans `assets/img/cinema/` et
  `assets/img/director/` avec les noms indiqués dans les fichiers `data/*.js`
  (ou change les chemins dans le data file pour qu'ils pointent vers tes fichiers).
  Tant qu'une image n'existe pas, un placeholder texturé s'affiche à la place —
  rien n'est cassé visuellement.

## Remplacer les fichiers dans ton repo GitHub existant

Ton repo `I-Sed/ismaelsedrati.github.io` est déjà lié à GitHub Pages (branche `main`,
racine du repo) — donc il suffit de remplacer le contenu et de push, rien à reconfigurer.

```bash
# 1. Clone ton repo (si tu ne l'as pas déjà en local)
git clone https://github.com/I-Sed/ismaelsedrati.github.io.git
cd ismaelsedrati.github.io

# 2. Supprime l'ancien contenu (sauf .git) pour repartir propre
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 3. Copie tous les fichiers du nouveau site que je t'ai fourni dans ce dossier
#    (glisse-dépose le contenu du zip ici, ou :)
cp -r /chemin/vers/le/site-telecharge/* .

# 4. Vérifie que tout est là
ls

# 5. Commit et push
git add .
git commit -m "Nouveau site portfolio"
git push origin main
```

GitHub Pages redéploie automatiquement en 1–2 minutes. Ton site reste à la même adresse :
`https://ismaelsedrati.github.io`

## Tester en local avant de push

Ouvre simplement `index.html` dans un navigateur, ou lance un petit serveur local
(recommandé, car `project.html` charge des fichiers JS via `fetch`-like `<script src>` qui
peuvent être bloqués par certains navigateurs en `file://`) :

```bash
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## À faire avant mise en ligne définitive

- [ ] Remplacer les 4 projets placeholder dans `data/projects-cinema.js` par tes vrais projets
- [ ] Compléter les synopsis marqués `// EDIT` dans `data/projects-director.js`
      (We Are Proud of You Loubnan, Rage Against the Machines)
- [ ] Affiner les descriptions dans `data/projects-research.js` (DCTL, sociologie des sciences)
- [ ] Ajouter `assets/video/showreel.mp4`
- [ ] Ajouter tes photos/stills dans `assets/img/` (dont `assets/img/research/` pour la page Projects)
- [ ] Remplacer les liens `#` (Instagram, Vimeo, email, CV) dans `about.html`, `index.html`, `director.html`
- [ ] Remplacer la photo placeholder dans `about.html`
