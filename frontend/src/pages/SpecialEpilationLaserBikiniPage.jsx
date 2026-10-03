import './specials.css';

const PHOTO_HERO = '/images/epilation-laser-bikini/epilation-laser-bikini.png';

const LIEN_CONSULTATION =
  'https://www.gorendezvous.com/bookingwidget/?companyId=138849&stype=CONSUITATION%20GRATUITE';

const FAQ = [
  {
    q: 'Combien de séances sont nécessaires ?',
    a: "Le nombre de séances varie selon la pilosité, la zone traitée et votre réponse au laser. Une évaluation permet d'établir un plan adapté à vos besoins.",
  },
  {
    q: 'Est-ce que le bikini intégral fait mal ?',
    a: "La sensation varie d'une personne à l'autre. Notre appareil possède un système de refroidissement qui aide à rendre le traitement plus confortable.",
  },
  {
    q: 'Dois-je me raser avant la séance ?',
    a: "Oui. La zone doit généralement être rasée avant le rendez-vous. Les instructions précises vous seront expliquées lors de votre consultation.",
  },
  {
    q: 'La consultation est-elle vraiment gratuite ?',
    a: "Oui. La consultation est gratuite et sans engagement. Elle permet de répondre à vos questions et de vérifier si le soin est adapté à vos besoins.",
  },
];

const SpecialEpilationLaserBikiniPage = () => {
  return (
    <div className="special-page">

      {/* HERO */}
      <section
        style={{
          background: '#FBF6F1',
          padding: 'clamp(70px, 9vw, 120px) 24px',
          textAlign: 'center',
          borderBottom: '1px solid #EDE3DA',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          <span
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: 999,
              background: '#F8E7DC',
              color: '#A85630',
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            Épilation laser
          </span>

          <h1
            style={{
              fontFamily: 'Marcellus, serif',
              fontSize: 'clamp(44px, 7vw, 76px)',
              lineHeight: 1.02,
              margin: 0,
              color: '#2B2320',
            }}
          >
            Bikini intégral
            <br />
            <em
              style={{
                color: '#C9714B',
                fontStyle: 'italic',
              }}
            >
              80 $ / séance
            </em>
          </h1>

          <p
            style={{
              maxWidth: 620,
              margin: '28px auto 0',
              fontSize: 18,
              lineHeight: 1.7,
              color: '#6B5C54',
              fontWeight: 300,
            }}
          >
            Dites adieu aux rasages répétitifs et profitez d'une peau plus
            douce grâce à l'épilation laser.
          </p>

          <a
            href="#reservation"
            className="sp-hover-terra-to-dark"
            style={{
              display: 'inline-block',
              marginTop: 34,
              padding: '18px 34px',
              borderRadius: 999,
              background: '#C9714B',
              color: '#FFF',
              fontSize: 14,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Réserver ma consultation gratuite
          </a>

<a
  href="tel:+15143254387"
  style={{
    display: 'block',
    margin: '14px auto 0',
    color: '#2B2320',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  }}
>
  Appeler — 514 325-4387
</a>

        </div>
<div
  style={{
    maxWidth: 900,
    margin: '45px auto 0',
    borderRadius: 4,
    overflow: 'hidden',
  }}
>
  <img
    src={PHOTO_HERO}
    alt="Séance d'épilation laser du bikini chez L'Atelier Secret"
    style={{
      display: 'block',
      width: '100%',
      height: 'auto',
    }}
  />
</div>
      </section>

      {/* BANDEAU */}
      <div
        style={{
          background: '#2B2320',
          color: '#F3E4DA',
          display: 'flex',
          justifyContent: 'center',
          gap: '14px 38px',
          flexWrap: 'wrap',
          padding: '17px 24px',
          fontSize: 12.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span>Consultation gratuite</span>
        <span style={{ color: '#6E5B52' }}>•</span>
        <span>Sans engagement</span>
        <span style={{ color: '#6E5B52' }}>•</span>
        <span>Plan personnalisé</span>
      </div>

      {/* PRIX */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          background: '#FFF',
        }}
      >
        <div
          style={{
            maxWidth: 1050,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 7vw, 90px)',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontSize: 11.5,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9714B',
              }}
            >
              Notre spécial
            </span>

            <h2
              style={{
                fontFamily: 'Marcellus, serif',
                fontSize: 'clamp(34px, 4vw, 48px)',
                lineHeight: 1.12,
                margin: '12px 0 20px',
              }}
            >
              Une peau douce,
              <br />
              sans le rasage quotidien
            </h2>

            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.7,
                color: '#7A6B63',
                fontWeight: 300,
                maxWidth: 520,
              }}
            >
              L'épilation laser cible le follicule pileux afin de réduire
              progressivement et durablement la pilosité. Le traitement est
              personnalisé selon votre peau et votre pilosité.
            </p>

            <div
              style={{
                marginTop: 28,
                display: 'grid',
                gap: 13,
                color: '#5C4E47',
                fontSize: 15.5,
              }}
            >
              <span>✓ Moins de rasage</span>
              <span>✓ Moins de poils incarnés</span>
              <span>✓ Peau plus douce</span>
              <span>✓ Traitement personnalisé</span>
            </div>
          </div>

          <div
            style={{
              background: '#F4E9E1',
              border: '1px solid #E8D8CC',
              padding: 'clamp(36px, 5vw, 54px)',
              textAlign: 'center',
              borderRadius: 4,
            }}
          >
            <span
              style={{
                fontSize: 11.5,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A85630',
              }}
            >
              Bikini intégral
            </span>

            <div
              style={{
                fontFamily: 'Marcellus, serif',
                fontSize: 'clamp(58px, 7vw, 82px)',
                lineHeight: 1,
                margin: '22px 0 8px',
                color: '#2B2320',
              }}
            >
              80 $
            </div>

            <p
              style={{
                margin: 0,
                color: '#8A7268',
                fontSize: 16,
              }}
            >
              par séance
            </p>

            <a
              href="#reservation"
              className="sp-hover-dark-to-terra"
              style={{
                display: 'block',
                marginTop: 30,
                padding: '17px 24px',
                borderRadius: 999,
                background: '#2B2320',
                color: '#FFF',
                fontSize: 13.5,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Je veux en profiter
            </a>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA FONCTIONNE */}
      <section
        style={{
          background: '#FBF6F1',
          borderTop: '1px solid #EDE3DA',
          borderBottom: '1px solid #EDE3DA',
          padding: 'clamp(60px, 8vw, 95px) 24px',
        }}
      >
        <div style={{ maxWidth: 1050, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <span
              style={{
                fontSize: 11.5,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9714B',
              }}
            >
              Comment ça fonctionne
            </span>

            <h2
              style={{
                fontFamily: 'Marcellus, serif',
                fontSize: 'clamp(32px, 4vw, 44px)',
                margin: '12px 0 0',
              }}
            >
              Votre parcours en 3 étapes
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {[
              [
                '01',
                'Consultation gratuite',
                'On répond à vos questions et on évalue si le soin est adapté à vos besoins.',
              ],
              [
                '02',
                'Votre séance',
                'Les paramètres du laser sont adaptés à votre peau et à votre pilosité.',
              ],
              [
                '03',
                'Progression',
                'Au fil des séances, la repousse devient progressivement moins importante.',
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  background: '#FFF',
                  padding: 32,
                  border: '1px solid #EDE3DA',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Marcellus, serif',
                    color: '#C9714B',
                    fontSize: 24,
                  }}
                >
                  {number}
                </span>

                <h3
                  style={{
                    fontSize: 19,
                    margin: '18px 0 10px',
                    fontWeight: 500,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: '#7A6B63',
                    fontWeight: 300,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section
        id="reservation"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          background: '#FFF',
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: 11.5,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9714B',
            }}
          >
            Première étape
          </span>

          <h2
            style={{
              fontFamily: 'Marcellus, serif',
              fontSize: 'clamp(34px, 4vw, 48px)',
              margin: '12px 0 18px',
            }}
          >
            Consultation gratuite
          </h2>

          <p
            style={{
              maxWidth: 620,
              margin: '0 auto 36px',
              fontSize: 17,
              lineHeight: 1.7,
              color: '#7A6B63',
              fontWeight: 300,
            }}
          >
            Une consultation sans engagement pour répondre à vos questions et
            évaluer si le soin est adapté à vos besoins.
          </p>

          <div
            style={{
              width: '100%',
              minHeight: 600,
              overflow: 'hidden',
            }}
          >
            <iframe
              title="Réservation consultation gratuite"
              src={LIEN_CONSULTATION}
              style={{
                border: 'none',
                width: '100%',
                height: 600,
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: '#FBF6F1',
          borderTop: '1px solid #EDE3DA',
          padding: 'clamp(60px, 8vw, 90px) 24px',
        }}
      >
        <div style={{ maxWidth: 850, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span
              style={{
                fontSize: 11.5,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9714B',
              }}
            >
              Questions fréquentes
            </span>

            <h2
              style={{
                fontFamily: 'Marcellus, serif',
                fontSize: 'clamp(32px, 4vw, 44px)',
                margin: '12px 0 0',
              }}
            >
              Avant votre première séance
            </h2>
          </div>

          {FAQ.map((item) => (
            <div
              key={item.q}
              style={{
                borderTop: '1px solid #E8DED5',
                padding: '24px 0',
              }}
            >
              <h3
                style={{
                  margin: '0 0 8px',
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {item.q}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  color: '#7A6B63',
                  fontWeight: 300,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: '#2B2320',
          color: '#FFF',
          padding: 'clamp(60px, 8vw, 90px) 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span
            style={{
              fontSize: 11.5,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#F59D79',
            }}
          >
            Bikini intégral — 80 $
          </span>

          <h2
            style={{
              fontFamily: 'Marcellus, serif',
              fontSize: 'clamp(34px, 4vw, 48px)',
              lineHeight: 1.12,
              margin: '16px 0',
              color: '#FFF',
            }}
          >
            Prête à laisser le rasoir de côté ?
          </h2>

          <p
            style={{
              color: '#C9B6AA',
              fontSize: 17,
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: 540,
            }}
          >
            Commencez par une consultation gratuite et sans engagement.
          </p>

          <a
            href="#reservation"
            className="sp-hover-salmon-to-white"
            style={{
              display: 'inline-block',
              marginTop: 30,
              padding: '18px 34px',
              borderRadius: 999,
              background: '#F59D79',
              color: '#3A241A',
              fontSize: 13.5,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Réserver ma consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default SpecialEpilationLaserBikiniPage;