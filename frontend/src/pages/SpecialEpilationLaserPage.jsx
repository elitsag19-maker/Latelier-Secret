import './specials.css';

// Liens de réservation GoRendezVous — un même lien "Promo Laser" pour les 2
// packs (confirmés par la cliente le 2026-09-13), un lien générique pour la consultation.
const LIEN_PACK_1 = 'https://www.gorendezvous.com/bookingwidget/?companyId=138849&stype=PROMOTON%3A%20%C3%89pilation%20su%20laser';
const LIEN_PACK_2 = 'https://www.gorendezvous.com/bookingwidget/?companyId=138849&stype=PROMOTON%3A%20%C3%89pilation%20su%20laser';
const LIEN_CONSULTATION = 'https://www.gorendezvous.com/bookingwidget/?companyId=138849&stype=CONSUITATION%20GRATUITE';

const FAQ = [
  {
    q: 'Combien de séances faut-il vraiment ?',
    a: "La majorité des clientes obtiennent d'excellents résultats en 6 à 8 séances. Nos packs en couvrent 6, ce qui correspond au cycle complet de croissance du poil.",
  },
  {
    q: 'Est-ce que c\'est douloureux ?',
    a: 'La sensation est variable ; la plupart de nos clients décrivent un pincement sur la peau. Notre appareil refroidit la zone en continu, ce qui rend les séances très tolérables.',
  },
  {
    q: 'Le dépôt de 100 $ est-il remboursable ?',
    a: "Il est entièrement appliqué sur le montant de votre pack. Il sert simplement à confirmer votre place dans l'horaire.",
  },
  {
    q: 'Puis-je changer les zones de mon pack ?',
    a: 'Les zones sont fixées au moment de la réservation, mais on ajuste ensemble en consultation avant votre première séance.',
  },
];

// Photos officielles Épilation Laser fournies par la cliente (2026-09-09), optimisées pour le web.
const PHOTO_HERO = '/images/epilation-laser/epilation-laser-hero.jpg';
const PHOTO_DEROULEMENT = '/images/epilation-laser/epilation-laser-deroulement.jpg';

const SpecialEpilationLaserPage = () => {
  return (
    <div className="special-page">
      {/* Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', alignItems: 'stretch', minHeight: 560, borderBottom: '1px solid #EDE3DA' }}>
        <div style={{ padding: '84px clamp(24px, 5vw, 64px) 76px clamp(24px, 5vw, 40px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 26, justifyContent: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 15px 7px 11px', borderRadius: 999, background: '#F8E7DC', color: '#A85630', fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59D79', display: 'inline-block' }} />Offre limitée
          </span>
          <h1 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(38px, 5vw, 62px)', lineHeight: 1.04, margin: 0, letterSpacing: '-0.01em' }}>
            Épilation laser :<br />6 séances pour<br /><em style={{ color: '#C9714B', fontStyle: 'italic' }}>le prix de 5</em>
          </h1>
          <p style={{ margin: 0, maxWidth: 470, fontSize: 18, lineHeight: 1.6, fontWeight: 300, color: '#6B5C54' }}>
            Une peau lisse, sans rasage ni cire. Nos packs saisonniers regroupent vos zones favorites à prix réduit — jusqu'à 375 $ d'économie.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 6 }}>
            <a href="#packs" className="sp-hover-terra-to-dark" style={{ padding: '17px 32px', borderRadius: 999, background: '#C9714B', color: '#FFF', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Voir les packs</a>
            <a href={LIEN_CONSULTATION} target="_blank" rel="noopener noreferrer" className="sp-hover-outline-to-dark" style={{ padding: '17px 30px', borderRadius: 999, border: '1px solid #D8C9BE', color: '#2B2320', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Consultation gratuite</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 30px', paddingTop: 14, fontSize: 13, color: '#A29086', letterSpacing: '0.04em' }}>
            <span>Top 3 Google Maps</span><span>·</span><span>Technicienne certifiée</span><span>·</span><span>Tous types de peau</span>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: 520, overflow: 'hidden' }}>
          <img src={PHOTO_HERO} alt="Peau lisse après épilation laser chez L'atelier Secret" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Bandeau dépôt */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px 44px', padding: '16px clamp(20px, 4vw, 40px)', background: '#2B2320', color: '#F3E4DA', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', flexWrap: 'wrap' }}>
        <span>Dépôt de 100 $ à la réservation</span><span style={{ color: '#6E5B52' }}>/</span><span>Appliqué sur votre forfait</span><span style={{ color: '#6E5B52' }}>/</span><span>Places limitées</span>
      </div>

      {/* Packs */}
      <section id="packs" style={{ padding: 'clamp(56px, 7vw, 92px) clamp(24px, 4vw, 40px) 96px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 44 }}>
            <div>
              <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9714B' }}>Nos spéciaux</span>
              <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(30px, 3.4vw, 42px)', lineHeight: 1.12, margin: '12px 0 0' }}>Choisissez votre pack</h2>
            </div>
            <p style={{ margin: 0, maxWidth: 380, fontSize: 15.5, lineHeight: 1.65, fontWeight: 300, color: '#7A6B63' }}>Chaque pack comprend 6 séances au prix de 5, planifiées aux 6 à 8 semaines pour suivre le cycle pilaire.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 22, alignItems: 'start' }}>

            {/* Pack 1 */}
            <article style={{ position: 'relative', background: '#FFF', border: '1px solid #EDE3DA', borderRadius: 4, padding: '38px 34px 34px', display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A29086' }}>Pack 1</span>
                <span style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9714B' }}>−307,50 $</span>
              </div>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(24px, 2vw, 28px)', lineHeight: 1.2, margin: 0 }}>Aisselles, bikini &amp; demi-jambes</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(36px, 3.4vw, 46px)', lineHeight: 1, whiteSpace: 'nowrap' }}>1 290 $</span>
                <span style={{ fontSize: 17, color: '#A29086', whiteSpace: 'nowrap', textDecoration: 'line-through', paddingBottom: 8 }}>1 597,50 $</span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15, fontWeight: 300, color: '#5C4E47', borderTop: '1px solid #F0E7DF', paddingTop: 20 }}>
                <li>6 séances pour le prix de 5</li>
                <li>3 zones incluses</li>
                <li>Évaluation de peau à la 1<sup>re</sup> visite</li>
                <li>215 $ / séance</li>
              </ul>
              <a href={LIEN_PACK_1} target="_blank" rel="noopener noreferrer" className="sp-hover-dark-to-terra" style={{ marginTop: 'auto', textAlign: 'center', padding: '16px 24px', borderRadius: 999, background: '#2B2320', color: '#FBF6F1', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Réserver le pack 1</a>
            </article>

            {/* Pack 2 (mis en évidence) */}
            <article style={{ position: 'relative', background: '#2B2320', border: '1px solid #2B2320', borderRadius: 4, padding: '38px 34px 34px', display: 'flex', flexDirection: 'column', gap: 22, color: '#F7EFE9', boxShadow: '0 28px 60px -34px rgba(43,35,32,0.55)' }}>
              <span style={{ position: 'absolute', top: -12, left: 34, padding: '6px 14px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Plus populaire</span>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B7A196' }}>Pack 2</span>
                <span style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F59D79' }}>−375 $</span>
              </div>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(24px, 2vw, 28px)', lineHeight: 1.2, margin: 0, color: '#FFF' }}>Jambes complètes + 1 petite zone</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(36px, 3.4vw, 46px)', lineHeight: 1, color: '#FFF', whiteSpace: 'nowrap' }}>1 410 $</span>
                <span style={{ fontSize: 17, color: '#9E877C', whiteSpace: 'nowrap', textDecoration: 'line-through', paddingBottom: 8 }}>1 785 $</span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15, fontWeight: 300, color: '#E4D6CC', borderTop: '1px solid #40332E', paddingTop: 20 }}>
                <li>6 séances pour le prix de 5</li>
                <li>Jambes complètes + petite zone au choix</li>
                <li>Évaluation de peau à la 1<sup>re</sup> visite</li>
                <li>235 $ / séance</li>
              </ul>
              <a href={LIEN_PACK_2} target="_blank" rel="noopener noreferrer" className="sp-hover-salmon-to-white" style={{ marginTop: 'auto', textAlign: 'center', padding: '16px 24px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Réserver le pack 2</a>
            </article>

            {/* Consultation gratuite */}
            <article style={{ background: '#F4E9E1', border: '1px solid #E8D8CC', borderRadius: 4, padding: '38px 34px 34px', display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A29086' }}>Sans engagement</span>
              </div>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(24px, 2vw, 28px)', lineHeight: 1.2, margin: 0 }}>Consultation gratuite</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(36px, 3.4vw, 46px)', lineHeight: 1, whiteSpace: 'nowrap' }}>0 $</span>
                <span style={{ fontSize: 15, color: '#8A7268', paddingBottom: 10 }}>20 minutes</span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15, fontWeight: 300, color: '#5C4E47', borderTop: '1px solid #E2D0C4', paddingTop: 20 }}>
                <li>Analyse de votre pilosité</li>
                <li>Test laser sur une petite zone</li>
                <li>Plan de séances personnalisé</li>
                <li>Aucun dépôt requis</li>
              </ul>
              <a href={LIEN_CONSULTATION} target="_blank" rel="noopener noreferrer" className="sp-hover-outline-to-terra" style={{ marginTop: 'auto', textAlign: 'center', padding: '16px 24px', borderRadius: 999, border: '1px solid #C08765', color: '#A85630', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Réserver ma consultation</a>
            </article>

          </div>
          <p style={{ margin: '24px 0 0', fontSize: 13, color: '#A29086', fontWeight: 300 }}>Un dépôt de 100 $ confirme votre réservation de pack et est appliqué sur le montant total.</p>
        </div>
      </section>

      {/* Déroulement */}
      <section id="deroulement" style={{ background: '#FFF', borderTop: '1px solid #EDE3DA', borderBottom: '1px solid #EDE3DA', padding: 'clamp(56px, 7vw, 86px) clamp(24px, 4vw, 40px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'center' }}>
          <div style={{ position: 'relative', minHeight: 380, borderRadius: 4, overflow: 'hidden' }}>
            <img src={PHOTO_DEROULEMENT} alt="Déroulement d'une séance d'épilation laser" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9714B' }}>Comment ça se passe</span>
            <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 40, lineHeight: 1.14, margin: '12px 0 34px' }}>Trois étapes, zéro surprise</h2>
            <div style={{ display: 'grid', gap: 26 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>01</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Consultation &amp; test</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>On évalue votre type de peau et de pilosité, puis on effectue un test sur une petite zone.</p></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>02</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Vos 6 séances planifiées</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>Rendez-vous aux 4 à 6 semaines pour suivre le cycle de croissance du poil. Séances de 30 à 45 min.</p></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>03</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Peau lisse, entretien minimal</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>Jusqu'à 95 % de réduction de la pilosité.</p></div>
              </div>
            </div>
            <a href="#packs" className="sp-hover-terra-to-dark" style={{ display: 'inline-block', marginTop: 34, padding: '16px 30px', borderRadius: 999, background: '#C9714B', color: '#FFF', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Profiter du spécial</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: 'clamp(56px, 7vw, 86px) clamp(24px, 4vw, 40px) 90px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(36px, 5vw, 72px)' }}>
          <div>
            <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9714B' }}>Questions</span>
            <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 40, lineHeight: 1.14, margin: '12px 0 0' }}>Ce qu'on nous demande le plus</h2>
          </div>
          <div style={{ display: 'grid', gap: 0 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{ borderTop: '1px solid #E8DED5', padding: '24px 0' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: 18.5, fontWeight: 500 }}>{item.q}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, fontWeight: 300, color: '#7A6B63', maxWidth: 640 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section style={{ background: '#2B2320', color: '#F7EFE9', padding: 'clamp(56px, 7vw, 82px) clamp(24px, 4vw, 40px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F59D79' }}>Offre limitée</span>
          <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.1, margin: 0, color: '#FFF' }}>Réservez votre pack avant la fin du spécial</h2>
          <p style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.6, fontWeight: 300, color: '#C9B6AA' }}>Ou venez d'abord en discuter : la consultation est gratuite et sans engagement.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', paddingTop: 6 }}>
            <a href={LIEN_PACK_1} target="_blank" rel="noopener noreferrer" className="sp-hover-salmon-to-white" style={{ padding: '17px 30px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Pack 1 — 1 290 $</a>
            <a href={LIEN_PACK_2} target="_blank" rel="noopener noreferrer" className="sp-hover-salmon-to-white" style={{ padding: '17px 30px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Pack 2 — 1 410 $</a>
            <a href={LIEN_CONSULTATION} target="_blank" rel="noopener noreferrer" className="sp-hover-outline-light" style={{ padding: '17px 30px', borderRadius: 999, border: '1px solid #6E5B52', color: '#F7EFE9', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Consultation gratuite</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialEpilationLaserPage;
