const express  = require('express');
const path     = require('path');
const cors     = require('cors');
const contactRouter = require('./contact');           // ✅ un router
const emailJob = require('./emailWorker');
const traductionRouter = require('./traduction');

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
// 👉 Middlewares
app.use(express.json()); // nécessaire pour le POST contact
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// 👉 API routes
app.use('/api/contact', contactRouter);               // ✅ route POST
app.use('/api/traduction', traductionRouter);         // ✅ route GET
emailJob();                                           // ✅ pas de listen

// 👉 Catch-all pour le front
app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'))
);

// 👉 Start server
app.listen(PORT, () =>
  console.log(`✅ Server ready on port ${PORT}`)
);
