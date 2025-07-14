const express = require('express');
const amqp = require('amqplib');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const RABBITMQ_URL = 'amqp://localhost'; // adapte selon ton config

let channel, connection;

async function connectRabbitMQ() {
  try {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue('email_queue');
    console.log('Connected to RabbitMQ');
  } catch (error) {
    console.error('RabbitMQ connection error', error);
  }
}

connectRabbitMQ();

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  // Publier message dans RabbitMQ
  const msg = { name, email, message };
  channel.sendToQueue('email_queue', Buffer.from(JSON.stringify(msg)));

  res.json({ status: 'Message reçu, email en cours d\'envoi' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
