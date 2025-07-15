const express = require('express');
const i18n = require('i18n');
const cors = require('cors');

const router = express.Router();

// CORS pour les appels API (facultatif ici, gère-le globalement si besoin)
router.use(cors({ origin: 'http://localhost:5173' }));

// Configurer i18n
i18n.configure({
  locales: ['en', 'fr'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  queryParameter: 'lang',
});

router.use(i18n.init);

// Routes
router.get('/', (req, res) => {
  res.json({ message: 'Traduction OK' });
});

router.get('/:lang', (req, res) => {
  const lang = req.params.lang || 'en';
  if (!i18n.getLocales().includes(lang)) {
    return res.status(400).json({ error: 'Langue non supportée' });
  }
  const translations = i18n.getCatalog(lang);
  res.json(translations);
});

module.exports = router;
