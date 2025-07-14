const express = require('express');
const i18n = require('i18n');
const cors = require('cors');

const app = express();

// Autoriser CORS pour le frontend
app.use(cors({ origin: 'http://localhost:5173' }));
// Configurer i18n
i18n.configure({
  locales: ['en', 'fr'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  queryParameter: 'lang',
});

app.use(i18n.init);

app.get('/translations', (req, res) => {
  const lang = req.query.lang || 'en';
  if (!i18n.getLocales().includes(lang)) {
    return res.status(400).json({ error: 'Langue non supportée' });
  }
  const translations = i18n.getCatalog(lang);
  res.json(translations);
});


app.listen(4000, () => console.log('Serveur sur http://localhost:4000'));
