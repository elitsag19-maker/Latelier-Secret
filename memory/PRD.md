# L'atelier Secret - Document de Référence du Projet (PRD)

## Problème Original
Migration et recréation du site web www.lateliersecret.ca - Centre esthétique professionnel au Québec (LeMoyne). L'utilisateur n'avait plus accès au développeur original du site PHP custom et souhaitait une optimisation complète.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Backend**: FastAPI (Python) - minimal, pour futures extensions
- **Base de données**: MongoDB (prête pour CMS/admin)
- **Hébergement cible**: Vercel/Netlify (statique) ou tout hébergeur compatible React

## Design Actuel (Mise à jour Janvier 2026)
- **Polices**: Cormorant Garamond (titres) + Montserrat (corps)
- **Couleur principale**: Taupe/Beige #b5a48b
- **Style**: Élégant, minimaliste, pas d'italique
- **Boutons**: Rectangulaires (rounded-none)

## Personas Utilisateurs
1. **Clientes potentielles** (25-55 ans, Québec) - Recherchent des soins esthétiques de qualité
2. **Clientes existantes** - Réservation de rendez-vous, consultation des prix
3. **Étudiantes en esthétique** - Inscriptions aux formations

## Exigences Critiques (Respectées ✅)

### SEO Local
- ✅ NAP identique dans footer: L'atelier Secret, 2475 Saint-Georges Street, LeMoyne, QC J4R 2T4, +1 438 882 2165
- ✅ Schema.org LocalBusiness dans index.html
- ✅ Meta tags préservés (title, description)
- ✅ Structure sémantique H1/H2 conservée
- ✅ robots.txt créé
- ✅ sitemap.xml créé

### Design (Mise à jour)
- ✅ Police beige/taupe (pas noire)
- ✅ Pas d'italique
- ✅ Boutons rectangulaires
- ✅ Couleur #b5a48b cohérente

### URLs (Redirections 301 prêtes)
- ✅ /about.php → /about
- ✅ /booking.php → /booking
- ✅ /laser-hair.php → /laser-hair
- ✅ Toutes les anciennes URLs .php supportées

## Ce qui a été implémenté (Décembre 2025)

### Pages Principales
1. **Accueil (/)** - Hero "Exprimez votre beauté naturelle", Services (6 populaires), À propos, Témoignages, Galerie, Académie, CTA
2. **À propos (/about)** - Histoire, Stats, Fonctionnalités
3. **Réservation (/booking)** - Formulaire 3 étapes (infos, service, date/heure)
4. **Contact (/contact)** - Formulaire + NAP + Carte
5. **Galerie (/gallery)** - Grille d'images avec lightbox

### Pages Soins (12 soins - Complété ✅)
1. **/epilation-laser** - Épilation laser
2. **/facial-de-luxe** - Facial de Luxe
3. **/soin-anti-age** - Soin Anti-Âge Sothys
4. **/irregularites-pigmentaires** - Soin Irrégularités Pigmentaires
5. **/facial-desincrustant** - Facial Désincrustant
6. **/peeling-charbon** - Peeling au Charbon
7. **/peeling-algues** - Peeling aux Algues
8. **/traitement-raffermissant** - Traitement Raffermissant (LED)
9. **/microdermabrasion** - Microdermabrasion
10. **/microneedling** - Microneedling
11. **/soin-silhouette** - Soin Silhouette (Lipocavitation)
12. **/soin-lumineux** - Soin Lumineux (Pico Laser)

### Pages Tarifs
- /hair-removal-price - Tarifs épilation (24 zones)
- /facial-treatments-price - Tarifs soins visage
- /eyelash-extensions-price - Tarifs extensions cils
- /body-care-price - Tarifs soins corps

### Pages Académie
- /aesthetic-advance - Formation avancée
- /aesthetic-beginner - Formation débutant
- /aesthetic-beginner-plus - Formation intermédiaire
- /eyelash-extension - Formation extensions cils
- /classic-volume-lifting - Formation lash lift

## Backlog Priorisé

### P0 (Critique - À faire avant mise en production)
- [x] Implémenter les 12 soins du site Wix de référence ✅
- [x] Corriger la mise en page mobile de la page Épilation Laser ✅ (Mars 2026)
- [x] Corriger typo "laser diod" → "laser diode" ✅ (Mars 2026)
- [ ] Ajouter Google Analytics ID (GA_TRACKING_ID)
- [ ] Configurer Google Search Console
- [ ] Tester Core Web Vitals après déploiement
- [ ] Vérifier indexation Google post-migration

### P1 (Important)
- [ ] Intégration avis Google sur la page d'accueil (API Google Places)
- [ ] Système de réservation avec backend (envoi emails, calendrier)
- [ ] Panel admin pour modifier contenus/prix
- [ ] Notifications email pour nouvelles réservations

### P2 (Nice to have)
- [ ] Multi-langue (français/anglais)
- [ ] Programme de fidélité
- [ ] Chat en direct
- [ ] Blog pour SEO

## Prochaines Étapes
1. **Intégrer Google Analytics** - Ajouter ID dans index.html (demander ID à l'utilisateur)
2. **Intégrer Google Search Console** - Vérifier propriété et soumettre sitemap
3. **Intégrer les avis Google** - Afficher les avis sur la page d'accueil
4. **Déploiement** - Déployer sur Vercel/Netlify
5. **DNS** - Pointer lateliersecret.ca vers nouveau site
6. **Tests** - Vérifier 404s et indexation après migration

## Intégrations Complétées
- ✅ **Go Rendez-vous** (Mars 2026) - Widget de réservation intégré sur les pages "Prendre Rendez-vous" et "Contactez-nous"
  - Company ID: 138849
  - Widget embarqué avec script officiel Go Rendez-vous

---
*Dernière mise à jour: Mars 2026*
