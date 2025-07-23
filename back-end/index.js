const express  = require('express');
const path     = require('path');
const cors     = require('cors');
const contactRouter = require('./contact');  
const emailJob = require('./emailWorker');
const traductionRouter = require('./traduction');

const app  = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "http://localhost:5173", // local dev
    "https://portfolio-ebon-eta-43.vercel.app", // front Vercel
    "https://portfolio-i13e.onrender.com",      // backend Render
  ],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));

app.use('/api/contact', contactRouter);
app.use('/api/traduction', traductionRouter);

emailJob();

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'))
);

app.listen(PORT, () =>
  console.log(`✅ Server ready on port ${PORT}`)
);
