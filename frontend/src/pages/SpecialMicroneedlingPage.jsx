import './specials.css';

// Liens de réservation GoRendezVous (confirmés par la cliente le 2026-09-13)
const LIEN_CURE = 'https://www.gorendezvous.com/bookingwidget/?companyId=138849&stype=PROMOTION%3A%20Microneedling';
const LIEN_CONSULTATION = 'https://www.gorendezvous.com/bookingwidget/?companyId=138849&stype=CONSUITATION%20GRATUITE';

const FAQ = [
  {
    q: 'À quelle fréquence les séances ?',
    a: "Une séance toutes les 4 semaines environ. La cure de 4 séances s'étale donc sur environ 4 mois, le temps que le collagène se reconstruise.",
  },
  {
    q: 'Est-ce douloureux ?',
    a: 'Une crème anesthésiante est appliquée 20 minutes avant le soin. La plupart des clientes décrivent une sensation de vibration, pas de douleur.',
  },
  {
    q: 'Quand voit-on les résultats ?',
    a: "Une amélioration de l'aspect de la peau dès la première séance, puis une amélioration progressive de la texture et des cicatrices sur 8 à 12 semaines.",
  },
  {
    q: 'Le dépôt de 100 $ est-il remboursable ?',
    a: "Il est entièrement appliqué sur le montant de votre cure. Il sert simplement à confirmer votre place dans l'horaire.",
  },
];

// Photos officielles Microneedling fournies par la cliente (2026-09-09), optimisées pour le web.
const PHOTO_HERO = '/images/microneedling/microneedling-hero.jpg';
const PHOTO_DEROULEMENT = '/images/microneedling/microneedling-deroulement.jpg';

const SpecialMicroneedlingPage = () => {
  return (
    <div className="special-page">
      {/* Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', alignItems: 'stretch', minHeight: 560, borderBottom: '1px solid #EDE3DA' }}>
        <div style={{ padding: '84px clamp(24px, 5vw, 64px) 76px clamp(24px, 5vw, 40px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 26, justifyContent: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 15px 7px 11px', borderRadius: 999, background: '#F8E7DC', color: '#A85630', fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59D79', display: 'inline-block' }} />Offre limitée
          </span>
          <h1 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(38px, 5vw, 62px)', lineHeight: 1.04, margin: 0, letterSpacing: '-0.01em' }}>
            Microneedling :<br />4 séances pour<br /><em style={{ color: '#C9714B', fontStyle: 'italic' }}>le prix de 3</em>
          </h1>
          <p style={{ margin: 0, maxWidth: 470, fontSize: 18, lineHeight: 1.6, fontWeight: 300, color: '#6B5C54' }}>
            Le traitement de référence pour relancer le collagène : texture affinée, pores resserrés, cicatrices d'acné et ridules atténuées. Économisez 250 $ sur votre cure complète.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 6 }}>
            <a href="#offres" className="sp-hover-terra-to-dark" style={{ padding: '17px 32px', borderRadius: 999, background: '#C9714B', color: '#FFF', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Voir l'offre</a>
            <a href={LIEN_CONSULTATION} target="_blank" rel="noopener noreferrer" className="sp-hover-outline-to-dark" style={{ padding: '17px 30px', borderRadius: 999, border: '1px solid #D8C9BE', color: '#2B2320', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Consultation gratuite</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 30px', paddingTop: 14, fontSize: 13, color: '#A29086', letterSpacing: '0.04em' }}>
            <span>Top 3 Google Maps</span><span>·</span><span>Protocole médical</span><span>·</span><span>Sans temps d'arrêt</span>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: 520, overflow: 'hidden' }}>
          <img src={PHOTO_HERO} alt="Peau lumineuse après un soin de microneedling chez L'atelier Secret" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Bandeau dépôt */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px 44px', padding: '16px clamp(20px, 4vw, 40px)', background: '#2B2320', color: '#F3E4DA', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', flexWrap: 'wrap' }}>
        <span>Dépôt de 100 $ à la réservation</span><span style={{ color: '#6E5B52' }}>/</span><span>Appliqué sur votre forfait</span><span style={{ color: '#6E5B52' }}>/</span><span>Places limitées</span>
      </div>

      {/* Offre */}
      <section id="offres" style={{ padding: 'clamp(56px, 7vw, 92px) clamp(24px, 4vw, 40px) 96px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 44 }}>
            <div>
              <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9714B' }}>Notre spécial</span>
              <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(30px, 3.4vw, 42px)', lineHeight: 1.12, margin: '12px 0 0' }}>La cure, ou un premier échange</h2>
            </div>
            <p style={{ margin: 0, maxWidth: 380, fontSize: 15.5, lineHeight: 1.65, fontWeight: 300, color: '#7A6B63' }}>Le microneedling donne son plein potentiel en cure : 4 séances espacées de 4 semaines, pour un renouvellement complet de la peau.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22, alignItems: 'stretch' }}>

            {/* Le pack */}
            <article style={{ position: 'relative', background: '#2B2320', borderRadius: 4, padding: '44px 44px 40px', display: 'flex', flexDirection: 'column', gap: 24, color: '#F7EFE9', boxShadow: '0 28px 60px -34px rgba(43,35,32,0.55)' }}>
              <span style={{ position: 'absolute', top: -12, left: 44, padding: '6px 14px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Le pack</span>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B7A196' }}>Cure complète</span>
                <span style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F59D79' }}>−250 $</span>
              </div>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.16, margin: 0, color: '#FFF' }}>4 séances pour le prix de 3</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: 1, whiteSpace: 'nowrap', color: '#FFF' }}>750 $</span>
                <span style={{ fontSize: 19, color: '#9E877C', whiteSpace: 'nowrap', textDecoration: 'line-through', paddingBottom: 10 }}>1 000 $</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px', borderTop: '1px solid #40332E', paddingTop: 22, fontSize: 15, fontWeight: 300, color: '#E4D6CC' }}>
                <span>4 séances · 1 gratuite</span>
                <span>187,50 $ / séance</span>
                <span>Sérum post-soin inclus</span>
                <span>Visage complet</span>
                <span>Plan de séances sur 4 mois</span>
                <span>Suivi photo des résultats</span>
              </div>
              <a href={LIEN_CURE} target="_blank" rel="noopener noreferrer" className="sp-hover-salmon-to-white" style={{ marginTop: 'auto', textAlign: 'center', padding: '17px 24px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Réserver la cure</a>
            </article>

            {/* Consultation gratuite */}
            <article style={{ background: '#F4E9E1', border: '1px solid #E8D8CC', borderRadius: 4, padding: '44px 38px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
              <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A29086' }}>Sans engagement</span>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.16, margin: 0 }}>Consultation gratuite</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: 1, whiteSpace: 'nowrap' }}>0 $</span>
                <span style={{ fontSize: 15, color: '#8A7268', paddingBottom: 12 }}>20 minutes</span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, fontWeight: 300, color: '#5C4E47', borderTop: '1px solid #E2D0C4' }}>
                <li>Diagnostic de peau complet</li>
                <li>On valide si le microneedling vous convient</li>
                <li>Recommandation du nombre de séances</li>
                <li>Aucun dépôt requis</li>
              </ul>
              <a href={LIEN_CONSULTATION} target="_blank" rel="noopener noreferrer" className="sp-hover-outline-to-terra" style={{ marginTop: 'auto', textAlign: 'center', padding: '17px 24px', borderRadius: 999, border: '1px solid #C08765', color: '#A85630', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Réserver ma consultation</a>
            </article>

          </div>
          <p style={{ margin: '24px 0 0', fontSize: 13, color: '#A29086', fontWeight: 300 }}>Un dépôt de 100 $ confirme votre réservation de cure et est appliqué sur le montant total.</p>
        </div>
      </section>

      {/* Déroulement */}
      <section id="deroulement" style={{ background: '#FFF', borderTop: '1px solid #EDE3DA', borderBottom: '1px solid #EDE3DA', padding: 'clamp(56px, 7vw, 86px) clamp(24px, 4vw, 40px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9714B' }}>Comment ça se passe</span>
            <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 40, lineHeight: 1.14, margin: '12px 0 34px' }}>Une séance, de A à Z</h2>
            <div style={{ display: 'grid', gap: 26 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>01</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Préparation &amp; anesthésiant</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>Nettoyage en profondeur et désinfection, puis crème anesthésiante appliquée 20 minutes avant le soin.</p></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>02</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Le microneedling et sérum adapté à vos besoins</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>De micro-canaux stimulent la production de collagène. Profondeur ajustée selon votre zone et votre objectif.</p></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>03</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Apaisement &amp; retour à la vie</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>Masque au collagène et luminothérapie.</p></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: '#C9714B', borderBottom: '1px solid #E8DED5', paddingBottom: 6 }}>04</span>
                <div><h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Protection et récupération de la peau</h3><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 300, color: '#7A6B63' }}>Crème réparatrice et protection solaire. Rougeurs légères de 24 à 48 h, aucun temps d'arrêt.</p></div>
              </div>
            </div>
            <a href="#offres" className="sp-hover-terra-to-dark" style={{ display: 'inline-block', marginTop: 34, padding: '16px 30px', borderRadius: 999, background: '#C9714B', color: '#FFF', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Profiter du spécial</a>
          </div>
          <div style={{ position: 'relative', minHeight: 380, borderRadius: 4, overflow: 'hidden' }}>
            <img src={PHOTO_DEROULEMENT} alt="Séance de microneedling en cabine chez L'atelier Secret" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
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
          <div>
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
          <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.1, margin: 0, color: '#FFF' }}>4 séances pour le prix de 3, jusqu'à la fin du spécial</h2>
          <p style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.6, fontWeight: 300, color: '#C9B6AA' }}>Ou venez d'abord en discuter : la consultation est gratuite et sans engagement.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', paddingTop: 6 }}>
            <a href={LIEN_CURE} target="_blank" rel="noopener noreferrer" className="sp-hover-salmon-to-white" style={{ padding: '17px 30px', borderRadius: 999, background: '#F59D79', color: '#3A241A', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Réserver la cure — 750 $</a>
            <a href={LIEN_CONSULTATION} target="_blank" rel="noopener noreferrer" className="sp-hover-outline-light" style={{ padding: '17px 30px', borderRadius: 999, border: '1px solid #6E5B52', color: '#F7EFE9', fontSize: 13.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Consultation gratuite</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialMicroneedlingPage;
