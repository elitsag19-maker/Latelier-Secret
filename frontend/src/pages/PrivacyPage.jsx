import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 bg-taupe">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm uppercase tracking-wider mb-4"
          >
            L'Atelier Secret
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl mb-4"
            data-testid="privacy-page-title"
          >
            Politique de confidentialité
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80"
          >
            Lemoyne, Québec
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-none shadow-soft"
          >
            {/* Date d'entrée en vigueur */}
            <p className="text-taupe-light text-sm mb-8 pb-6 border-b border-stone/30">
              En vigueur à compter du : <strong className="text-taupe">22 septembre 2023</strong>
            </p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">1. Introduction</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                L'Atelier Secret (ci-après « nous », « notre » ou « l'entreprise »), exploité par Gestion Georgieva inc., s'engage à protéger la vie privée de ses clients et visiteurs conformément à la Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25) et à ses modifications en vigueur au Québec.
              </p>
              <p className="text-taupe-light leading-relaxed">
                La présente politique décrit comment nous collectons, utilisons, conservons et protégeons vos renseignements personnels dans le cadre de nos services d'esthétique, de soins de la peau et d'épilation au laser.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">2. Responsable de la protection des renseignements personnels</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Conformément à la Loi 25, L'Atelier Secret a désigné un responsable de la protection des renseignements personnels :
              </p>
              <div className="bg-stone/10 p-6 rounded-none mb-4">
                <p className="text-taupe mb-2"><strong>Nom / Titre :</strong> Elitsa Georgieva, Responsable de la protection des renseignements personnels</p>
                <p className="text-taupe mb-2"><strong>Adresse :</strong> Lemoyne, Québec</p>
                <p className="text-taupe mb-2"><strong>Courriel :</strong> elitsag.19@gmail.com</p>
                <p className="text-taupe"><strong>Téléphone :</strong> 438-882-2165</p>
              </div>
              <p className="text-taupe-light leading-relaxed">
                Pour toute question, plainte ou demande relative à vos renseignements personnels, vous pouvez communiquer avec cette personne.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">3. Renseignements personnels collectés</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Nous collectons les renseignements suivants dans le cadre de nos activités :
              </p>

              <h3 className="font-serif text-lg text-taupe mb-3">3.1 Renseignements d'identification</h3>
              <ul className="list-disc list-inside text-taupe-light mb-6 space-y-1 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse courriel</li>
                <li>Numéro de téléphone</li>
                <li>Date de naissance (pour certains traitements)</li>
              </ul>

              <h3 className="font-serif text-lg text-taupe mb-3">3.2 Renseignements liés aux services</h3>
              <ul className="list-disc list-inside text-taupe-light mb-6 space-y-1 ml-4">
                <li>Historique de traitements et de soins</li>
                <li>Informations sur la condition de la peau, les allergies ou contre-indications médicales</li>
                <li>Notes de consultation esthétique</li>
              </ul>

              <h3 className="font-serif text-lg text-taupe mb-3">3.3 Renseignements de facturation</h3>
              <ul className="list-disc list-inside text-taupe-light mb-6 space-y-1 ml-4">
                <li>Informations de paiement (traitées via des processeurs sécurisés)</li>
                <li>Historique des achats</li>
              </ul>

              <h3 className="font-serif text-lg text-taupe mb-3">3.4 Données de navigation (site web)</h3>
              <ul className="list-disc list-inside text-taupe-light space-y-1 ml-4">
                <li>Adresse IP</li>
                <li>Données de cookies et de navigation (avec votre consentement)</li>
                <li>Formulaires de contact ou de prise de rendez-vous en ligne</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">4. Finalités de la collecte</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Vos renseignements sont collectés et utilisés aux fins suivantes :
              </p>
              <ul className="list-disc list-inside text-taupe-light space-y-1 ml-4">
                <li>Gestion des rendez-vous et suivi des traitements</li>
                <li>Communication avec vous concernant vos services</li>
                <li>Envoi d'infolettres et de promotions (avec votre consentement)</li>
                <li>Facturation et tenue de dossiers comptables</li>
                <li>Amélioration de nos services</li>
                <li>Respect de nos obligations légales</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">5. Consentement</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                La collecte de vos renseignements personnels repose sur votre consentement libre et éclairé. Vous pouvez retirer votre consentement en tout temps, sous réserve des obligations légales et contractuelles qui nous incombent.
              </p>
              <p className="text-taupe-light leading-relaxed">
                Pour les communications marketing (infolettre, promotions), votre consentement est recueilli de manière explicite lors de votre inscription. Vous pouvez vous désabonner à tout moment via le lien présent dans chaque communication.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">6. Cookies et technologies de suivi</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Notre site web utilise des cookies et technologies similaires. Lors de votre première visite, vous êtes informé(e) de l'utilisation de ces outils et vous pouvez accepter ou refuser leur activation.
              </p>
              <p className="text-taupe-light leading-relaxed mb-4">
                Nous utilisons notamment :
              </p>
              <ul className="list-disc list-inside text-taupe-light mb-4 space-y-1 ml-4">
                <li>Cookies essentiels (fonctionnement du site — aucun consentement requis)</li>
                <li>Cookies analytiques (ex. : Google Analytics — consentement requis)</li>
                <li>Cookies publicitaires (ex. : Meta Pixel — consentement requis)</li>
              </ul>
              <p className="text-taupe-light leading-relaxed">
                Vous pouvez modifier vos préférences de cookies à tout moment via les paramètres de votre navigateur ou notre bannière de consentement.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">7. Communication à des tiers</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Nous ne vendons pas vos renseignements personnels. Nous pouvons les partager uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-taupe-light space-y-1 ml-4">
                <li>Avec des prestataires de services tiers agissant en notre nom (ex. : logiciel de prise de rendez-vous, processeur de paiement, plateforme d'envoi de courriels), dans le cadre d'une entente de confidentialité</li>
                <li>Lorsque requis par la loi ou une autorité compétente</li>
                <li>Avec votre consentement explicite</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">8. Conservation des renseignements</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Vos renseignements sont conservés aussi longtemps que nécessaire aux fins pour lesquelles ils ont été collectés, ou conformément aux exigences légales applicables (ex. : 7 ans pour les documents comptables selon la Loi sur les impôts du Québec).
              </p>
              <p className="text-taupe-light leading-relaxed">
                À l'expiration de la période de conservation, vos renseignements sont détruits ou anonymisés de façon sécuritaire.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">9. Vos droits</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Conformément à la Loi 25, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-taupe-light mb-4 space-y-2 ml-4">
                <li><strong className="text-taupe">Droit d'accès :</strong> obtenir une copie de vos renseignements personnels que nous détenons</li>
                <li><strong className="text-taupe">Droit de rectification :</strong> faire corriger des renseignements inexacts ou incomplets</li>
                <li><strong className="text-taupe">Droit à l'effacement :</strong> demander la suppression de vos renseignements, sous réserve des obligations légales</li>
                <li><strong className="text-taupe">Droit à la portabilité :</strong> recevoir vos renseignements dans un format technologique structuré</li>
                <li><strong className="text-taupe">Droit de retrait du consentement :</strong> à tout moment pour les communications marketing</li>
              </ul>
              <p className="text-taupe-light leading-relaxed">
                Pour exercer l'un de ces droits, contactez notre responsable de la protection des renseignements personnels aux coordonnées indiquées à la section 2. Nous répondrons à votre demande dans un délai de 30 jours.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">10. Mesures de sécurité</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos renseignements personnels contre tout accès non autorisé, divulgation, modification ou destruction, notamment :
              </p>
              <ul className="list-disc list-inside text-taupe-light space-y-1 ml-4">
                <li>Accès restreint aux renseignements selon le principe du besoin de savoir</li>
                <li>Utilisation de systèmes et logiciels sécurisés pour la gestion des données</li>
                <li>Formation du personnel sur la protection de la vie privée</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">11. Incident de confidentialité</h2>
              <p className="text-taupe-light leading-relaxed">
                En cas d'incident de confidentialité (ex. : violation de données) présentant un risque sérieux de préjudice, nous aviserons la Commission d'accès à l'information (CAI) du Québec ainsi que les personnes concernées, conformément à nos obligations légales.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">12. Modifications à la présente politique</h2>
              <p className="text-taupe-light leading-relaxed">
                Nous nous réservons le droit de modifier la présente politique en tout temps. Toute modification sera publiée sur notre site web avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-taupe mb-4">13. Nous joindre</h2>
              <p className="text-taupe-light leading-relaxed mb-4">
                Pour toute question concernant la présente politique ou vos renseignements personnels :
              </p>
              <div className="bg-stone/10 p-6 rounded-none mb-4">
                <p className="text-taupe font-medium mb-2">L'Atelier Secret — Gestion Georgieva inc.</p>
                <p className="text-taupe-light mb-1">Lemoyne, Québec</p>
                <p className="text-taupe-light mb-1">Courriel : <a href="mailto:elitsag.19@gmail.com" className="text-taupe hover:underline">elitsag.19@gmail.com</a></p>
                <p className="text-taupe-light">Téléphone : <a href="tel:+14388822165" className="text-taupe hover:underline">438-882-2165</a></p>
              </div>
              <p className="text-taupe-light leading-relaxed">
                Vous avez également le droit de déposer une plainte auprès de la Commission d'accès à l'information du Québec (CAI) : <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer" className="text-taupe hover:underline">www.cai.gouv.qc.ca</a>
              </p>
            </section>

            {/* Footer */}
            <div className="pt-8 mt-10 border-t border-stone/30 text-center">
              <p className="font-serif text-lg text-taupe">— L'Atelier Secret, Lemoyne —</p>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
